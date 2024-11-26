process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim();
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

// Handle program exit
process.on('exit', () => {
  console.log('This important software is now closing');
});
