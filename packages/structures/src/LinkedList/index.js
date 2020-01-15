import { prop, equals, False, True } from '@juan-utils/functions'

const Node = (data) => {
    let next = undefined;
    let prev = undefined;
    return {
        data,
        next: (_next) => {
            if( _next ){
                next = _next.isEmpty() ? undefined : _next;
            } else {
                return next;
            }
        },
        prev: (_prev) => {
            if(_prev){
                prev = _prev;
            } else {
                return prev;
            }
        },
        unlink: () => { 
            next = undefined 
            prev = undefined
        },
        isEmpty: False
    }
}

Node.empty = {
    ...Node(),
    isEmpty: True,
};

const LinkedList = () => {
    let head = undefined;
    let tail = undefined;

    const getNode = (index) => {
        let i = 0;
        let cur = head;
        while( cur && i !== index ){
            cur = cur.next()
            i++;
        }
        return cur || Node.empty;
    }
    
    const o = {
        get __class__(){
            return "LinkedList"
        },
        extend(node){
            if( !head ){
                head = node;
                tail = node;
            } else {
                tail.next(node);
                node.prev(tail);
                tail = node;
            }
        },
        head: () => head.data,
        tail: () => {
            const res = LinkedList();
            res.extend(head.next())
            return res
        },
        append(data) {
            const node = Node(data);
            this.extend(node)
            return node;
        },
        preppend: (data) => {
            const n = Node(data);
            if( !head ){
                head = n;
                tail = n;
            } else {
                n.next(head)
                head = n;
            }
            return n;
        },
        length: () => {
            let i = 0;
            let cur = head;
            while( cur ){
                i++;
                cur = cur.next()
            }
            return i;
        },
        isEmpty(){ return this.length() == 0 },
        getValue: (index) => prop("data",getNode(index)),

        // Functor
        map: (f) => {
            const res = LinkedList();
            let cur = head;
            while( cur ){
                res.append(f(cur.data));
                cur = cur.next();
            }
            return res
        },

        // Filterable
        filter: (f) => {
            const res = LinkedList();
            let cur = head;
            while( cur ){
                if( f(cur.data) ){
                    res.append(cur.data);
                }
                cur = cur.next();
            }
            return res
        },

        // Foldable
        reduce: (f,init) => {
            let acc = init;
            let cur = head;
            while( cur ){
                acc = f(acc,cur.data);
                cur = cur.next()
            }
            return acc
        },

        // Extra
        remove: (index) => {
            if( index == 0 && head ){
                head = head.next();
            } else {
                const n = getNode(index)
                const prev = n.prev();
                const next = n.next();
                if( prev ){
                    prev.next(next || Node.empty);
                }
                if( next ){
                    next.prev(prev);
                }
                n.unlink();
            }
        },
        get(){ return this.toArray() },
        toArray(){ return [...this] },
        [Symbol.iterator]: function*(){
            let cur = head;
            while( cur ){
                yield cur.data;
                cur = cur.next()
            } 
        },

        //Setoid
        equals(l1){
            return LinkedList.equals(this,l1)
        }
    }
    return o
}

LinkedList.empty = LinkedList();
LinkedList.of = (...data) => {
    const list = LinkedList();
    data.forEach(list.append.bind(list));
    return list;
}
LinkedList.from = (data) => LinkedList.of(...data)
LinkedList.equals = (l1,l2) => equals(l1.toArray(),l2.toArray())

export { LinkedList };