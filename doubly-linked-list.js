function DoublyLinkedList(){
	var Node = function(element){
		this.element = element;
		this.next = null;
		this.prev = null;
	}

	var length = 0;
	var head = null;
	var tail = null;

	var insert = function(position, element){
		var node = new Node(element),
			current = head,
			previous,
			index = 0;

		if (position > length || position < 0){
			return false;
		}

		if (position === 0){

			if (head){
				node.next = current;
				current.prev = node;
				head = node;
			}else{
				head = node;
				tail = node;
			}

		}else if (position === length){
			current = tail;
			current.next = node;
			node.prev = current;
			tail = node;
		}
		else{

			while(index++ < position){
				previous = current;
				current = current.next;
			}
			node.next = current;
			current.prev = node;
			previous.next = node;
			node.prec = previous;
		}

		length++;

		return true;
	};

	var removeAt= function(position){};
}
