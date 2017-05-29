import test from 'ava';
import {roll, createRoller} from 'libs/';

test("it should export functions properly", t => {
	t.is(typeof roll, "function");
	t.is(typeof createRoller, "function");
})