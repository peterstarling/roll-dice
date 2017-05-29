import R from 'rambda';
import rollSimple from './internal/rollSimple';
import rollComplex from './internal/rollComplex';
import validateArgs from './internal/validateArgs';
import dicenotationParser from './internal/dicenotationParser';

export default R.pipe(
	validateArgs,
	R.curryN(3, rollComplex)(rollSimple, dicenotationParser)
);