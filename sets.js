function Set(){
	var items = {};

	this.has = function(value){
		return items.hasOwnProperty(value);
	};
}
