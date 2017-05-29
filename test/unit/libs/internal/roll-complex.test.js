import test from 'ava';
import sinon from 'sinon';
import rollComplex from 'libs/internal/roll-complex';

test.beforeEach(t => {
	t.context.rollSimple = sinon.stub();
	t.context.dicenotationParser = sinon.stub();
	t.context.rollComplex = rollComplex.bind(null, t.context.rollSimple, t.context.dicenotationParser);
});

test('it should call roll-simple with no parameters and return its result', t => {

	t.context.rollSimple.returns('test result');
	
	const result = t.context.rollComplex();

	t.is(result, 'test result');
	t.true(t.context.rollSimple.called);

	sinon.assert.calledWithExactly(t.context.rollSimple);
});

test('it should call roll-simple with one default parameter "faces" and return its result', t => {

	t.context.rollSimple.returns('test result2');
	
	const result = t.context.rollComplex(8);

	t.true(t.context.rollSimple.called);
	t.is(result, 'test result2');

	sinon.assert.calledWithExactly(t.context.rollSimple, 1, 8);
});

test('it should call roll-simple with two given parameters: dices and faces', t => {

	t.context.rollSimple.returns('test result3');
	
	const result = t.context.rollComplex(5, 4);

	t.true(t.context.rollSimple.called);
	t.is(result, 'test result3');

	sinon.assert.calledWithExactly(t.context.rollSimple, 5, 4);
});

test('it should call roll-simple with all given parameters', t => {

	t.context.rollSimple.returns('test result4');
	
	const result = t.context.rollComplex(3, 12, "-3");

	t.true(t.context.rollSimple.called);
	t.is(result, 'test result4');

	sinon.assert.calledWithExactly(t.context.rollSimple, 3, 12, "-3");
});

test('it should call roll-simple with parsed dice notation parameter', t => {

	t.context.rollSimple.returns('test result5');
	t.context.dicenotationParser.withArgs("test dicenotation").returns([4, 6, "+3"]);
	
	const result = t.context.rollComplex("test dicenotation");

	t.true(t.context.rollSimple.called);
	t.is(result, 'test result5');

	sinon.assert.calledWithExactly(t.context.rollSimple, 4, 6, "+3");
});

test('it should call roll-simple with parsed dice notation parameter and ignore other parameters', t => {

	t.context.rollSimple.returns('test result6');
	t.context.dicenotationParser.withArgs("test dicenotation2").returns([5, 2, "-1"]);
	
	const result = t.context.rollComplex("test dicenotation2", 3, 5);

	t.true(t.context.rollSimple.called);
	t.is(result, 'test result6');

	sinon.assert.calledWithExactly(t.context.rollSimple, 5, 2, "-1");
});