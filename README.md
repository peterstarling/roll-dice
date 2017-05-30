# roll-dice
Role Playing Game Dice Rolling

## Usage

1. Pull
2. Import `roll` or `createRoller` from `libs/` like so:

```import {roll, createRoll} from 'libs/';```

3. Enjoy.

## Test

Run `npm test`.

## Info

This plugin works with babel-cli only (it's not production ready). This is due to problems with babel-plugin-resolver when running a build. To make it production ready the plugin needs to be removed and modules have to be referenced with relative paths. For this exercise however I decided to use a namespace-like convention for module loading.
