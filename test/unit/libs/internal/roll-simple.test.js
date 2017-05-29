import test from 'ava';
import rollSimple from 'libs/internal/roll-simple';

function macro(t, [dices, faces, modifier], [rangeFrom, rangeTo]) {

	for(let i = 1; i <= 100; i++) {
		t.true(rollSimple(dices, faces, modifier) >= rangeFrom);
		t.true(rollSimple(dices, faces, modifier) <= rangeTo);
	}
}

macro.title = (title, dices, faces, modifier, rangeFrom, rangeTo) => 
	`For ${dices} dices, ${faces} faces and modifier ${modifier} it should 
	be between ${rangeFrom} and ${rangeTo}`;

test(macro, [3, 8], [3, 24]);
test(macro, [2, 7, "-2"], [0, 12]);
