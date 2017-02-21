function HashTable(){
	var table = [];

	var loseloseHashCode = function (key)
	{
		var hash = 0;
		for (var i=0; i< key.length; i++){
			hash += key.charCodeAt(i);
		}
		return hash % 37;
	};

	this.put = function(key, value){
		var position = loseloseHashCode(key);

		if (table[position] == undefined){
			table[position] = new LinkedList();
		}
		table[position].append(new ValuePair(key, value));
	};

	this.remove  = function(key){
		var position = loseloseHashCode(key);

		if (table[position] !== undefined)
		{
			var current = table[position].getHead();

			while(current.next){
				if(current.element.key === key){
					table[position].remove(current.element);
					if (table[position].isEmpty()){
						table[position] = undefined;
					}
				}
				current = current.next;
			}

			if(current.element.key === key){
				table[position].remove(current.element);
				if (table[position].isEmpty()){
					table[position] = undefined;
				}
				return true;
			}
		}

		return false;
	};

	this.get = function(key){
		var position = loseloseHashCode(key);

		if (table[position] == undefined)
			return undefined;

		var current = table[position].getHead();

		while(current.next){
			if (current.element.key === key){
				return curent.element.value;
			}
			current = current.next;
		}

		if (current.element.key === key){
			return curent.element.value;
	};
}

function ValuePair = function(key, value){
	this.key = key;
	this.value = value;

	this.toString = function(){
		return '[' + this.key + ' - ' + this.value + ']';
	}
};
