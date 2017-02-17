function LinkedList(){

	var Node = function(element){
		this.element = element;
		this.next = null;
	}

	var length = 0;
	var head = null;

	this.append = function(element){
		var node = new Node(element),
			current;

		if (head == null){
			head = node;
		}
		else{
			current = head;
			while(current.next){
				current = current.next;
			}
			current.next = node;
		}

		length++;
	};

	this.insert = function(position, element){
		var node = new Node(element),
			current = head,
			previous
			index = 0;

		if (position > length - 1 || position < 0){
			return false;
		}

		if (position === 0){
			node.next = current;
			head = node;
		}
		else{
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			node.next = current;
			previous.next = node;
		}

		length++;

		return true;
	};

	this.removeAt = function(position){
		var current = head,
			previous,
			index = 0;

		if (position > length - 1){
			return null;
		}

		if (position === 0){
			head = current.next;
		}
		else {
			while(index++ < position){
				previous = current;
				current = current.next;
			}
			previous.next = current.next;
		}

		length--;

		return current.element;
	};

	this.remove = function(element){};
	this.indexOf = function(element){};

	this.isEmpty = function(){
		return length == 0;
	};

	this.size = function(){
		return length;
	};

	this.toString = function(){
		var current = head,
			string = '';

		while(current){
			string += current.element + (current.next ? "," : "");
			current = current.next;
		}

		return string;
	};
	
	this.print = function(){
		console.log(this.toString());
	};
}
