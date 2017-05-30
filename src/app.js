import {roll, createRoller} from 'libs/';

const roller = createRoller(2, 6, "-4");

console.log(roller(), roller.toDiceNotation());