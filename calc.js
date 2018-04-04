function calc(){
	var sum = function(a,b){
		return a+b;
	};
	var multiply = function(a,b){
		return a*b;
	};
	return {
		sum:sum,
		multiply:multiply
	};
};
module.exports = calc();