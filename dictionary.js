function Dictionary(){
	var items = {};

	this.set = function(key, value){
		items[key] = value;
	};

	this.remove = function(key){
		if (items.has(key))
		{
			delete items[key];
			return true;
		}
		return false;
	};

	this.has = function(key){
		return key in items;
	};

	this.get = function(key){
		return this.has(key) ? items[key] : undefined;
	};

	this.clear = function(){};
	this.size = function(){};
	this.keys = function(){};
	this.values = function(){};
}
