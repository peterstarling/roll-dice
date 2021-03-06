import R from 'ramda';
import rollSimple from './internal/roll-simple';
import rollComplex from './internal/roll-complex';
import validateArgs from './internal/validate-args';
import dicenotationParser from './internal/dicenotation-parser';

export default R.pipe(
	validateArgs,
	R.apply(R.curryN(3, rollComplex)(rollSimple, dicenotationParser))
);