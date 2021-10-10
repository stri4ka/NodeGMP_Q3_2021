const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

const reverse = (str) => str.split('').reverse().join('');

rl.on('line', line => {
    process.stdout.write(reverse(line));
})

