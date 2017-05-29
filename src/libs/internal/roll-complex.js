export default function rollComplex(rollSimple, dicenotationParser, ...args) {
	if (args.length === 0) {
		return rollSimple();
	}

	if (typeof args[0] === 'string') {
		return rollSimple(...dicenotationParser(args[0]))
	}

	if (args.length === 1) {

		if (Number.isInteger(args[0])) {
			return rollSimple(1, args[0]);
		}


	}

	if (args.length >= 2) {
		return rollSimple(...args);
	}
}