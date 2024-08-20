process.stdout.write("Welcome to Holberton School, what is your name?\n");
process.stdin.on('data', (data) => {
	const stdin = data.toString().trim();
	console.log(`Your name is: ${stdin}`);
	console.log("This important software is now closing");
	process.exit();
});
