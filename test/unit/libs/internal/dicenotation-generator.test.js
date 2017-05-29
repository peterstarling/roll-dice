import test from 'ava';
import dicenotationGenerator from 'libs/internal/dicenotation-generator';

const macro = (t, input, expectation) => {
	t.is(dicenotationGenerator(...input), expectation);
}

macro.title = (title, input, expect) => `"it should parse ${JSON.stringify(input)} to ${expect}`;

test(macro, [3, 7, "-2"], "3d7-2");
test(macro, [1, 2, "+4"], "1d2+4");
