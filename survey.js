

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const allAnswers = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer1) => {
  console.log(`Thanks a good name ${answer1}`);

  rl.question("What's an activity you like doing? ", (answer2) => {
    console.log(`${answer2} is always fun`);

    rl.question("What do you listen to while doing that? ", (answer3) => {
      console.log(`Good tunes make everything better, ${answer3} is a good choice`);

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer4) => {
        console.log(`Saying ${answer4} is making me hungry`);

        rl.question("What's your favourite thing to eat for that meal? ", (answer5) => {
          console.log(`I haven't had ${answer5} in a while! Good choice`);

          rl.question("Which sport is your absolute favourite? ", (answer6) => {
            console.log(`${answer6} is beyond my capabailities to play`);

            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {
              console.log(`Good answer!! One sec and we will put all of this together for you`);

              console.log(`Here you go ${answer1}. I put all your answers together into a new profile \n\n\n\nHi! My name is ${answer1}. \n\nI really enjoy playing or watching ${answer6} every chance I get, but my personal favourite activity is ${answer2}. Nothing makes the day go smoother than ${answer2} and listening to ${answer3}!! \n\nMy favoite time to eat is ${answer4}, and if you want to make me really happy cook me ${answer5}!!! \n\nWhat really makes me stand out, it's my ability to ${answer7}!!`);
        
             
              
 
  rl.close();
            });
  });
  });
});
});
});


});


