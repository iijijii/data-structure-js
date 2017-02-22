function Graph() {
	var vertices = [];
	var adjList = new Dictionary();

	this.addVertex = function(v){
		vertices.push(v);
		adjList.set (v, []);
	};
}
