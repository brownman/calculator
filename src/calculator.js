'use strict'

console.log('start');

var calculator = {
	multiply: function(a,b) {
	var res=a*b;
	return res;
	},
	divide: function(a,b){
	var res=a/b;
	return res;
	}
}
module.exports=calculator;

//var res=calculator.multiply(4,5);
//console.log(res);
