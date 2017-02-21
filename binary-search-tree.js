function BinarySearchTree(){

	var Node = function(key){
		this.key = key;
		this.left = null;
		this.right = null;
	};

	var root = null;

	this.insert = function(key){

		var newNode = new Node(key);

		if (root == null){
			root = newNode;
		} else {
			insertNode(root, newNode);
		}
	};

	var insertNode = function(node, newNode){
		if (newNode.key < node.key){
			if (node.left === null){
				node.left = newNode;
			} else {
				insertNode(node.left, newNode);
			}
		}	else {
			if (node.right === null){
				node.right = newNode;
			} else {
				insertNode(node.right, newNode);
			}
		}
	};

	this.search = function(key){};

	this.inOrderTraverse = function(callback){
		inOrderTraverseNode(root, callback);
	};

	var inOrderTraverseNode = function(node, callback){
		if (node !== null){
			inOrderTraverseNode(node.left, callback);
			callback(node.key);
			inOrderTraverseNode(node.right, callback);
		}
	};

	this.preOrderTraverse= function(){};
	this.postOrderTraverse= function(){};
	this.min = function(){};
	this.max = function(){};
	this.key = function(key){};

}
