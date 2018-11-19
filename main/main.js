// Write your cade below:
'use strict'
function caclRemaindar(a, b) {
	return a % b;
};

function caclSum(arr) {
	var sum = 0;
	arr.forEach(function (num) {
		sum += num;
	});
	return sum;
};

function caclSumInConditon(arr, condition) {
	var sum = 0;
	arr.forEach(function(num) {
		if (num < condition) {
			sum += num;
		}
	});
	return sum;
};

module.exports = {
    caclRemaindar,
    caclSum,
    caclSumInConditon
}