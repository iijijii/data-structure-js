function ArrayList(){
	var array = [];

	this.insert = function(item){
		array.push(item);
	};

	this.toString = function(){
		return array.join();
	};

	var swap = function(array, index1, index2){
		[array[index1], array[index2]] = [array[index2], array[index1]];
	};

	this.bubbleSort = function(){
		var length = array.length;
		for (var i = 0; i < length; i++){
			for (var j = 0; i<length - 1; j++){
				if (array[j] > array[j + 1]){
					swap(array, j, j + 1);
				}
			}
		}
	};

	this.selectionSort = function(){
		var length = array.length;
		var indexMin;

		for (var i = 0; i < length - 1; i++){
			indexMin = i;
			for (var j = i; j < length; j++){
				if (array[indexMin] > array[j]){
					indexMin = j;
				}
			}
			if (i !== indexMin){
				swap(i, indexMin);
			}
		}
	};
}
