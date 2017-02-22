function Graph() {
	var vertices = [];
	var adjList = new Dictionary();

	this.addVertex = function(v){
		vertices.push(v);
		adjList.set (v, []);
	};

	this.addEdge = function(v, w){
		adjList.get(v).push(w);
		adjList.get(w).push(v);
	};
}
