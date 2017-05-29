export default function rollSimple(dices = 1, faces = 6, modifier = '+0') {

	return eval([...new Array(dices)]
		.map(() => Math.floor(Math.random() * faces) + 1)
		.reduce((a, b) => a + b, 0) + modifier);

}