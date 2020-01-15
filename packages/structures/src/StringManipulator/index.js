const StringManipulator = (str) => {
    const data = str.split("");
    return {
        get __class__(){
            return "StringManipulator"
        },
        forEach(f){
            data.forEach(f);
        },
        map(f){
            return StringManipulator(data.map(f).join(""));
        },
        filter(f){
            return StringManipulator(data.filter(f).join(""));
        },
        reduce(f,init){
            return data.reduce(f,init);
        },
        getValue(index){
            return data[index];
        },
        get(){
            return data.join("");
        },
        open(f){
            return data.map(f).join("");
        },
        toString(){ 
            return this.get() 
        },
        equals(str){
            return this.get() === str.get()
        },
        contains(str){
            return this.get() === str;
        }
    }
}

StringManipulator.of = (...data) => StringManipulator(data.join(""));
StringManipulator.from = (data) => StringManipulator.of(...data);
StringManipulator.equals = (s1,s2) => s1.equals(s2);

export { StringManipulator }