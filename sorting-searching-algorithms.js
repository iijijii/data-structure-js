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

	this.insertionSort = function(){
		var length = array.length;
		var j;
		var temp;

		for (var i = 1; i < length; i++){
			j = i;
			temp = array[i];
			while (j > 0 && array[j - 1] > temp){
				array[j] = array[j - 1];
				j--;
			}
			array[j] = temp;
		}
	};

	this.mergeSort = function(){
		array = mergeSortRec(array);
	};

	var mergeSortRec = function(array){
		var length = array.length;
		if (length === 1){
			return array;
		}
		var mid = Math.floor(length / 2);
		var left = array.slice(0, mid);
		var right = array.slice(mid, length);

		return merge(mergeSortRec(left), mergeSortRec(right));
	};

	var merge = function(left, right){
		var result = [];
		var il = 0;
		var ir = 0;

		while (il < left.length && ir < right.length){
			if (left[il] < right[ir]){
				result.push(left[il++]);
			} else{
				result.push(right[ir++]);
			}
		}

		while (il < left.length){
			result.push(left[il++]);
		}

		while (ir < right.length){
			result.push(right[ir++]);
		}

		return result;
	};

	this.quickSort = function(){
		quick(array, 0, aray.length - 1);
	};

	var quick = function(array, left, right){

		if (array.length > 1){
			var index = partition(array, left, right);

			if (left < index - 1){
				quick(array, left, index - 1);
			}

			if (index < right){
				quick(array, index, right);
			}
		}
	};

	var partition = function(array, left, right){
		var pivot = array[Math.floor((right + left) / 2)];
		var i = left;
		var j = right;

		while (i <= j){
			while (array[i] < pivot){
				i++;
			}
			while (array[j] > pivot){
				j--;
			}
			if (i <= j){
				swap(array, i, j);
				i++;
				j--;
			}
		}
		return i;
	}

	this.heapSort = function(){
		var heapSize = array.length;
		buildHeap(array);

		while(heapSize > 1){
			heapSize--;
			swap(array, 0, heapSize);
			heapify(array, heapSize, 0);
		}
	};

	var buildHeap = function(array){
		var heapSize = array.length;
		for (var i = Math.floor(array.length / 2); i >= 0; i--){
			heapify(array, heapSize, i);
		}
	};

	var heapify = function(array, heapSize, i){
		var left = i * 2 + 1;
		var right = i * 2 + 2;
		var largest = i;

		if (left < heapSize && array[left] > array[largest]){
			largest = left;
		}

		if (right < heapSize && array[right] > array[largest]){
			largest = left;
		}

		if (largest !== i){
			swap(array, i, largest);
			heapify(array, heapSize, largest);
		}
	};
}
