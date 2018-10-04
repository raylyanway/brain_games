import readlineSync from 'readline-sync';

export default () => {
  const name = readlineSync.question('What is your name?');
  console.log(`Hello, ${name}!`);

  if (readlineSync.keyInYN('Are you human?')) {
    console.log('Good choice ))');
  } else {
    console.log('Hey, I\'m too ))');
  }

  const jokes = ['doctor', 'woman', 'wife'];
  const index = readlineSync.keyInSelect(jokes, 'Which joke do you wanna see?');
  console.log(`Ok, listen joke about ${jokes[index]}`);
  switch (jokes[index]) {
    case 'doctor':
      console.log(`
        Doctor: "I'm sorry but you suffer from a terminal illness and have only 10 to live."
        Patient: "What do you mean, 10? 10 what? Months? Weeks?!"
        Doctor: "Nine."
      `);
      break;
    case 'woman':
      console.log(`
          What is the difference between a snowman and a snowwoman?
                                  -
                              Snowballs.
        `);
      break;
    case 'wife':
      console.log(`
          My wife suffers from a drinking problem.
                             -
          Oh is she an alcoholic?
                             -
          No, I am, but she's the one who suffers.
        `);
      break;
    default: break;
  }
};
