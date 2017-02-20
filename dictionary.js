function Dictionary(){
	var items = {};

	this.set = function(key, value){
		items[key] = value;
	};

	this.remove = function(key){};

	this.has = function(key){
		return key in items;
	};

	this.get = function(key){};
	this.clear = function(){};
	this.size = function(){};
	this.keys = function(){};
	this.values = function(){};
}
