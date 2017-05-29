import test from 'ava';
import sinon from 'sinon';
import createRoller from 'libs/create-roller';

test.before(() => {
	sinon.stub(Math, 'random').returns(0.9);
});

test.after(() => {
	Math.random.restore();
})

test(t => {
	const roller = createRoller(2, 6, "+2");

	t.is(roller(), 14);
	t.is(roller.toDiceNotation(), "2d6+2");
})

test(t => {
	const roller = createRoller(4, 4, "-3");

	t.is(roller(), 13);
	t.is(roller.toDiceNotation(), "4d4-3");
})

test(t => {
	const roller = createRoller(3, 5);

	t.is(roller(), 15);
	t.is(roller.toDiceNotation(), "3d5");
})

test(t => {
	const roller = createRoller(4);

	t.is(roller(), 4);
	t.is(roller.toDiceNotation(), "d4");
})