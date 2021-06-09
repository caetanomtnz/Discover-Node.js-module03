const getFlag = require('./flags')

console.log(`Hello{getFlag('--name')}.${getFlagValue('--greeting')}`)