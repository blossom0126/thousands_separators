'use strict';

function thousands_separators(num) {
	var parts;
	num = Number(num);
	num = num.toString();
	parts = num.split(".");
	parts[0] = parts[0].toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1' + ',');
	return parts.join(".");
	
}

module.exports = thousands_separators;
