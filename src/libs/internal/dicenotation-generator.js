export default function dicenotationGenerator(dices, faces = null, modifier = null) {
	return `${faces ? dices : ''}d${faces ? faces : dices}${modifier ? modifier : ''}`;
}