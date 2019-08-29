const createNode = (data,next=null) => ({
    data,
    next,
    link(next){ this.next = next },
    unlink(){ this.next = null }
})

const LinkedList = () => {
    let head = createNode();
    let tail = head;
    let length = 0;
    return {
        get length(){ return length },
        append:(data) => {
            length++;
            tail.link(createNode(data));
            tail = tail.next;
        },
        preppend:(data) => {
            length++;
            const newHead = createNode(data);
            newHead.link(head);
            head = newHead;
        },
        get: (index) => {
            return prop("data")(this.getNode(index));
        },
        getNode:(index) => {
            if( index >= 0 && index < length){
                let i = 0;
                let current = head;
                while( i < index ){
                    current = current.next;
                }
            }
        },
        delete: (index) => {
            if( index >=0 && index < length ){
                length--;
                if( index === 0 ){
                    head = head.next;
                } else {
                    const before = this.get(index-1)
                    before.next = before.next.next;
                }
            }
        },
        [Symbol.iterator]: function*(){
            let current = head;
            yield current.data
            while( current.next !== null ){
                current = current.next;
                yield current.data;
            }
        }
    }
}

LinkedList.of = LinkedList;

export { LinkedList };