import test from 'ava';
import dicenotationParser from 'libs/internal/dicenotation-parser';

test('it should throw exception if parameter is an object, not a string', t => {
	const error = t.throws(dicenotationParser.bind(null, {}), TypeError);

	t.is(error.message, "Parameter is not a string");
})

test('it should throw exception if parameter is an integer, not a string', t => {
	const error = t.throws(dicenotationParser.bind(null, 1231), TypeError);

	t.is(error.message, "Parameter is not a string");
})

const macro = (t, input, expectation) => {
	t.deepEqual(dicenotationParser(input), expectation);
}

macro.title = (title, input, expect) => `"it should parse ${input} to ${JSON.stringify(expect)}`;

test(macro, "3d7-2", [3, 7, "-2"]);
test(macro, "1d6+1", [1, 6, "+1"]);
test(macro, "4d", [4, 6, "+0"]);
test(macro, "d10", [1, 10, "+0"]);
test(macro, "", [1, 6, "+0"])
