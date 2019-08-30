import { prop , flatten , isArray, createArray } from '@juan-utils/functions'

const createNode = (data) => ({
    data,
    next: null,
    link(next){ this.next = next },
    unlink(){ this.next = null }
})

const LinkedList = (..._data) => {
    const data = flatten(_data);
    const nodes = data.map(createNode)
    nodes.length && nodes.reduce( (prev,next) => {
        prev.link(next);
        return next;
    })
    let head = nodes[0] || null;
    let tail = nodes[nodes.length - 1] || head;
    let length = nodes.length;
    const calculateLength = (head) => {
        let i = 0;
        let current = head;
        while(current){
            current = current.next;
            i++;
        }
        length = i;
    }
    return {
        head(){ return this.get(0) },
        tail(){
            return this.filter( (x,index) => index !== 0 );
        },
        length(){ return length },
        map(f){
            const newList = LinkedList();
            let current = length > 0 ? head : undefined;
            let i = 0;
            while(current) {
                newList.append(f(current.data,i,this))
                current = current.next;
                i++
            }
            return newList
        },
        filter(f) {
            const newList = LinkedList();
            let current = length > 0 ? head : undefined;
            let i = 0;
            while(current) {
                if( f(current.data,i,this) ){
                    newList.append(current.data)
                }
                current = current.next;
                i++;
            }
            return newList
        },
        reduce(f,init) {
            if( length <= 1){
                return (head && head.data) || init
            }
            let acc = init || head.data;
            let current = head.next;
            let i = 1;
            while(current){
                acc = f(acc,current.data,i,this);
                current = current.next;
            }
            return acc;
        },
        append:(data) => {
            const newNode = createNode(data);
            if( length === 0 ){
                head = newNode;
                tail = head;
            }else{
                tail.link(newNode);
                tail = tail.next;
            }
            calculateLength(head);
        },
        preppend:(data) => {
            const newHead = createNode(data);
            if( length === 0 ){
                head = newHead
                tail = head
            }else{
                newHead.link(head);
                head = newHead;
            }
            calculateLength(head);
        },
        get(index) {
            return prop("data")(this.getNode(index));
        },
        getNode:(index) => {
            if( index >= 0 && index < length){
                let i = 0;
                let current = head;
                while( i < index && current.next ){
                    current = current.next;
                }
                return current
            }
        },
        delete: (index) => {
            if( index >=0 && index < length ){
                if( index === 0 ){
                    head = head.next;
                } else {
                    const before = this.get(index-1)
                    before.next = before.next.next;
                }
                calculateLength(head)
            }
        },
        toArray(){ return [...this] },
        [Symbol.iterator]: function*(){
            let current = head;
            if( length !== 0 ){
                yield current.data
            }
            while( current && current.next !== null ){
                current = current.next;
                yield current.data;
            }
        },
        morph(of){
            return of([...this]);
        },
        transmorph(of,f){
            return of([...this.map(f)])
        }
    }
}

LinkedList.of = LinkedList;

export { LinkedList };