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
		console.log(position + ' - ' + key);
		table[position] = value;
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
