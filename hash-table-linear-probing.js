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
			table[position] = new ValuePair(key, value);
		} else {
			var index = ++position;
			while (table[index] != undefined){
				index++;
			}
			table[index] = new ValuePair(key, value);
		}
	};

	this.remove  = function(key){
		var position = loseloseHashCode(key);
		table[position] = undefined;
	};

	this.get = function(key){
		var position = loseloseHashCode(key);

		if (table[position] == undefined){
			return undefined;
		}

		if (table[position].key === key){
			return table[position].value;
		} else {
			var index = ++position;
			while(table[index] === undefined
				|| table[index].key !== key){
				index++;
			}
			if (table[index].key === key){
				return table[index].value;
			}
		}
	};
}