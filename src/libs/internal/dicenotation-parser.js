export default function dicenotationParser(input) {

	if (typeof input !== 'string') {
		throw new TypeError('Parameter is not a string');
	}

	const regex = /^([\d+])?d(\d+)?([\+|\-]{1}\d+)?$/;

	const matches = input.match(regex);

	if (matches === null) {
		return [1, 6, '+0'];
	}

	return [matches[1] ? parseInt(matches[1]) : 1, matches[2] ? parseInt(matches[2]) : 6, matches[3] ? matches[3] : '+0'];
}