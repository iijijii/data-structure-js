function MinCoinChange(coins){
	var coins = coins;

	this.makeChange = function(amount){
		var change = [];
		var total = 0;
		for (var i = coins.length; i >= 0; i--){
			var coin = coins[i];
			while(total + coin <= amount){
				change.push(coin);
				total += coin;
			}
		}
		return change;
	};
}
