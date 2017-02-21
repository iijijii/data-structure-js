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
		table[position] = undefined;
	};

	this.get = function(key){
		var position = loseloseHashCode(key);
		return table[position];
	};
}

function ValuePair = function(key, value){
	this.key = key;
	this.value = value;

	this.toString = function(){
		return '[' + this.key + ' - ' + this.value + ']';
	}
};
