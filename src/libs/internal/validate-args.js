export default function validateArgs(...args) {
	if (args.length === 0 ) {
		throw new TypeError("At least one parameter is required");
	}

	if (args.length >= 1) {

		if (typeof args[0] === 'string') {
			return args;
		}

		if (!Number.isInteger(args[0]) && typeof args[0] !== 'string') {
			throw new TypeError("First parameter has to be an integer or a string");
		}
	}
	
	if (args.length >= 2 && !Number.isInteger(args[1])) {
		throw new TypeError("Second parameter has to be an integer");

	}

	if (args.length >= 3) {
		if (typeof args[2] !== 'string') {
			throw new TypeError("Third parameter has to be a string");
		}

		if (args[2].match(/^(\+|\-){1}\d+$/) === null) {
			throw new TypeError("Third parameter has to be a valid mathematical expression");
		}
	}

	return args;
}