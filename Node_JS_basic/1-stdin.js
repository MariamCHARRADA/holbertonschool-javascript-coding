console.log("Welcome to Holberton School, what is your name?");
process.stdin.on("data", (name) => {
  if (name) {
    console.log(`Your name is: ${name}This important software is now closing`);
    process.exit();
  } else {
    console.log("This important software is now closing");
  }
});
