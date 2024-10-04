/**
 * Program named 1-stdin.js that will be executed through command line
 */
console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);

  // Handle non-interactive (piped) input
  if (!process.stdin.isTTY) {
    console.log('This important software is now closing');
  }

  process.exit();
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Keep the process open in interactive mode
if (process.stdin.isTTY) {
  process.stdin.resume();
}

module.exports = process.stdin;
