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

	this.put = function(key, value){};
	this.remove  = function(key){};
	this.get = function(key){};
}
