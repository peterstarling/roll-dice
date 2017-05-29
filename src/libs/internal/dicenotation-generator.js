export default function dicenotationGenerator(dices, faces, modifier) {
	return `${dices}d${faces}${modifier}`;
}