"use strict";

const QUESTIONS = [
  {
    id: 1,
    content: `
<p>Which bridge connects San Francisco to Oakland?</p>
<ul>
<input type="radio" name="option" value="option1"> Golden Gate Bridge<br>
<input type="radio" name="option" value="option2"> Bay Bridge<br>
<input type="radio" name="option" value="option3"> Dumbarton Bridge <br>
<input type="radio" name="option" value="option4"> Richmond Bridge
</ul>
`,
    answer: "option1"
  },
  {
    id: 2,
    content: `
<p>What is the name of the fog in San Francisco?</p>
<ul>
<input type="radio" name="option" value="option1"> Albert<br>
<input type="radio" name="option" value="option2"> Richard<br>
<input type="radio" name="option" value="option3"> Karl <br>
<input type="radio" name="option" value="option4"> John
</ul>
`,
    answer: "option3"
  },
  {
    id: 3,
    content: `
<p>What is the airport code for San Francisco?</p>
<ul>
<input type="radio" name="option" value="option1"> SFO<br>
<input type="radio" name="option" value="option2"> SFX<br>
<input type="radio" name="option" value="option3"> SNF <br>
<input type="radio" name="option" value="option4"> SAN
</ul>
`,
    answer: "option1"
  },
  {
    id: 4,
    content: `
<p>Golden Gate Park is located south of what neighborhood?</p>
<ul>
<input type="radio" name="option" value="option1"> Sunset<br>
<input type="radio" name="option" value="option2"> Haight Ashbury<br>
<input type="radio" name="option" value="option3"> SOMA <br>
<input type="radio" name="option" value="option4"> Richmond
</ul>
`,
    answer: "option4"
  },
  {
    id: 5,
    content: `
<p>What is the tallest building in San Francisco?</p>
<ul>
<input type="radio" name="option" value="option1"> Salesforce Tower<br>
<input type="radio" name="option" value="option2"> Transamerica Building<br>
<input type="radio" name="option" value="option3"> Bank of America Tower <br>
<input type="radio" name="option" value="option4"> Apple Spaceship
</ul>
`,
    answer: "option1"
  },
  {
    id: 6,
    content: `
<p>The Marina neighborhood is home to this San Francisco landmark:</p>
<ul>
<input type="radio" name="option" value="option1"> San Francisco Zoo<br>
<input type="radio" name="option" value="option2"> Sutro Tower<br>
<input type="radio" name="option" value="option3"> De Young Museum <br>
<input type="radio" name="option" value="option4"> Palace of Fine Arts
</ul>
`,
    answer: "option4"
  },
  {
    id: 7,
    content: `
<p>The 49ers used to play at this location before moving to Santa Clara:</p>
<ul>
<input type="radio" name="option" value="option1"> AT&T Park<br>
<input type="radio" name="option" value="option2"> Candlestick Park<br>
<input type="radio" name="option" value="option3"> Oracle Arena <br>
<input type="radio" name="option" value="option4"> Stern Grove
</ul>
`,
    answer: "option2"
  },
  {
    id: 8,
    content: `
<p>What is the 4th item missing from this series: "Embarcadero, Powell, Civic Center"</p>
<ul>
<input type="radio" name="option" value="option1"> Balboa Park<br>
<input type="radio" name="option" value="option2"> Fremont<br>
<input type="radio" name="option" value="option3"> Montgomery <br>
<input type="radio" name="option" value="option4"> Church
</ul>
`,
    answer: "option3"
  },
  {
    id: 9,
    content: `
<p>Which of these startups did not originate in San Francisco?</p>
<ul>
<input type="radio" name="option" value="option1"> Airbnb<br>
<input type="radio" name="option" value="option2"> Uber<br>
<input type="radio" name="option" value="option3"> Twitter <br>
<input type="radio" name="option" value="option4"> Facebook
</ul>
`,
    answer: "option4"
  },
  {
    id: 10,
    content: `
<p>Golden Gate Park hosts what yearly music festival?</p>
<ul>
<input type="radio" name="option" value="option1"> Aftershock<br>
<input type="radio" name="option" value="option2"> EDC San Francisco<br>
<input type="radio" name="option" value="option3"> Outside Lands <br>
<input type="radio" name="option" value="option4"> Treasure Island Music Festival
</ul>
`,
    answer: "option2"
  },
  {
    id: 11,
    content: `
<p>Extra credit: One of these streets is officially a section of U.S. Route 101:</p>
<ul>
<input type="radio" name="option" value="option1"> Sunset Blvd<br>
<input type="radio" name="option" value="option2"> Van Ness Ave<br>
<input type="radio" name="option" value="option3"> 19th St <br>
<input type="radio" name="option" value="option4"> 19th Ave
</ul>
`,
    answer: "option2"
  }
];

var QUESTIONNUM = 1;
var SCORE = 0;
var postQuestionText = "";
const customResultsText = [
  'Hella high score! Your rank: "Veteran Muni driver"',
  'Nice score! Your rank: "Hipster tech commuter"',
  'New to the city, huh? Your rank: "San Jose resident"',
  'Not even close... Your rank: "Segway riding tourist"'
];

// ===============================================================
// functions below
//DONE
function renderNewQuestion(questionNum) {
  console.log("rendering new question");
  $(".quiz-form").html(QUESTIONS[questionNum].content);
  console.log(QUESTIONNUM);
}

//---------------------------------------------------------

function checkAnswer(questionNum, userAnswer) {
  console.log("checking your answer");
  if (QUESTIONS[questionNum].answer === userAnswer) {
    SCORE++;
    triggerRightAnswer();
    console.log("correct!");
  }
  console.log("wrong!");
}

//---------------------------------------------------------

function triggerRightAnswer() {
  postQuestionText = "That's right!"
};

//---------------------------------------------------------

function triggerWrongAnswer(answer) {
  postQuestionText = "Sorry... the correct answer is " + answer + "!"
};

//---------------------------------------------------------

function handleAnswerSubmit() {
  $(".quiz-area").on("click", ".submit-button", function(e) {
    //do something
    console.log("answer submitted");
    let userAnswer = e.
    
    
    if (QUESTIONNUM === 11) {
      renderFinalResults();
      return;
    }
    renderNewQuestion(QUESTIONNUM);
    QUESTIONNUM++;
    
  });
}

//---------------------------------------------------------
//DONE
function renderFinalResults() {
  console.log("final results displayed");
  let resultMessage = "";
  if (SCORE > 8) {
    resultMessage = customResultsText[0];
  } else if (SCORE > 5) {
    resultMessage = customResultsText[1];
  } else if (SCORE > 2) {
    resultMessage = customResultsText[2];
  } else {
    resultMessage = customResultsText[3];
  }
  $(".quiz-form").html(`
You scored ${SCORE} out of 10!
${resultMessage}
`);
}

//---------------------------------------------------------

function main() {
  handleAnswerSubmit();
}

$(main);
