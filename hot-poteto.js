function hotPotato(nameList, num)
{
	var queue = new Queue();

	nameList.forEach(function(item){
		queue.enqueue(item);
	});

	var eliminated = '';
	while (queue.size() > 1)
	{
		for (var i=0; i < num; i++){
			queue.enqueue(queue.dequeue());
		}
		eliminated = queue.dequeue();
	}	

	return queue.dequeue();
}

var names = ['Sato', 'Suzuki', 'Tanaka', 'Takahashi', 'Kobayashi'];
var winner = hotPotato(names, 7);
console.log('The winner is:' + winner);

function Queue(){

	var items = [];

	this.enqueue = function(element){
		items.push(element);
	};

	this.dequeue = function(){
		return items.shift();
	};

	this.front = function(){
		return items[0];
	};

	this.isEmpty = function(){
		return items.length == 0;
	};

	this.size = function(){
		return items.length;
	};
}
