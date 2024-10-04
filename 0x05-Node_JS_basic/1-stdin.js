/**
 * Program named 1-stdin.js that will be executed through command line
 */
console.log("Welcome to Holberton School, what is your name?");

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  console.log(`Your name is: ${name}`);
  process.exit();

  // Check if the input is from a pipe (not interactive)
  if (!process.stdin.isTTY) {
    console.log("This important software is now closing");
    process.exit();
  }
});

// If in interactive mode, keep the process open to wait for input
if (process.stdin.isTTY) {
  process.stdin.resume();
}
