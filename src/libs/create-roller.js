import R from 'ramda';
import rollSimple from './internal/roll-simple';
import rollComplex from './internal/roll-complex';
import validateArgs from './internal/validate-args';
import dicenotationParser from './internal/dicenotation-parser';
import dicenotationGenerator from './internal/dicenotation-generator';

const createRoller = args => function roller() {
	roller.toDiceNotation = dicenotationGenerator.bind(null, ...args);
	return R.curryN(3, rollComplex)(rollSimple, dicenotationParser)(...args)
};

export default R.pipe(
	validateArgs,
	createRoller
);