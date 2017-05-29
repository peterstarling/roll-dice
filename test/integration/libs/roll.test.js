import test from 'ava';
import sinon from 'sinon';
import roll from 'libs/roll';

test.before(() => {
	sinon.stub(Math, 'random').returns(0.9);
});

test.after(() => {
	Math.random.restore();
})

test("it should roll 14", t => {
	t.is(roll(2, 6, "+2"), 14);
})

test("it should roll 22", t => {
	t.is(roll("3d8-2"), 22);
});

test("it should roll 24", t => {
	t.is(roll(3, 8), 24);
});

test("it should roll 5", t => {
	t.is(roll(5), 5);
});
