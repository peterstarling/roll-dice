import test from 'ava';
import validateArgs from 'libs/internal/validate-args';

test('it should not throw exception if no parameters are given', t => {

	t.deepEqual(validateArgs(), []);
})

test('it should not throw exception if one parameter is given and its a string', t => {
	const args = ["some string"];

	t.deepEqual(validateArgs(...args), args);
})

test('it should throw exception if one parameter is given and it\'s not a string or integer', t => {
	const error = t.throws(validateArgs.bind(null, {}), TypeError);

	t.is(error.message, "First parameter has to be an integer or a string");
})

test('it should not throw exception if two parameters are given and both are integers', t => {
	const args = [1, 4];

	t.deepEqual(validateArgs(...args), args);
})

test('it should not throw exception if two parameters are given and first one is a string', t => {
	const args = ["some string", {}];

	t.deepEqual(validateArgs(...args), args);
})

test('it should throw exception if two parameters are given and first is not a string or integer', t => {
	const error = t.throws(validateArgs.bind(null, {}, 3), TypeError);

	t.is(error.message, "First parameter has to be an integer or a string");
})

test('it should throw exception if two parameters are given and second one is not an integer', t => {
	const error = t.throws(validateArgs.bind(null, 5, {}), TypeError);

	t.is(error.message, "Second parameter has to be an integer");
})

test('it should throw exception if three parameters are given and third one is not a string', t => {
	const error = t.throws(validateArgs.bind(null, 2, 4, {}), TypeError);

	t.is(error.message, "Third parameter has to be a string");
})

test('it should throw exception if three parameters are given and third one is not a valid expression', t => {
	const error = t.throws(validateArgs.bind(null, 2, 4, "something invalid"), TypeError);

	t.is(error.message, "Third parameter has to be a valid mathematical expression");
})

test('it should not throw exception if all three parameters are given and are valid', t => {
	const args = [5, 12, "+3"];

	t.deepEqual(validateArgs(...args), args);
})
