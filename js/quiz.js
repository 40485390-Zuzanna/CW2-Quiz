// 1. I want a list of questions with possible answers

// 2. I want to get info about user input on each question

// 3. I want to store that info and display the next question

const maxPoints = 15;

const questions = [{
      key: "favourite_thing",
      question: "What is your absolute favourite thing to do??",
      answers: ["Exploring new places", "Working on personal projects", "Partying and dancing", "Hiking and camping"]
   },
   {
      key: "activity_level",
      question: "What is your activity level?",
      answers: ["Low", "Moderate", "High", "Very high"]
   },
   {
      key: "day_off",
      question: "Your ideal day off?",
      answers: ["Staying at home", "Going to a pub", "Going outdoors", "Run half marathon"]
   },
   {
      key: "free_time",
      question: "How much free time do you have during the day to spend with your dog",
      answers: ["Less than 1h", "1-2h", "2-3h", "I can spend all the free time I have with my dog"]
   },
   {
      key: "snuggling",
      question: "How important is snuggling for you?",
      answers: ["Not at all", "I like it sometimes", "Very important", "I can snuggle my dog 24/7"]
   },
]

// const userAnswers = [];
const userAnswers = [
  {
    "key": "favourite_thing",
    "answer": "3"
  },
  {
    "key": "day_off",
    "answer": "2"
  },
  {
    "key": "free_time",
    "answer": "1"
  },
  {
    "key": "snuggling",
    "answer": "1"
  }
]

const breedsMap = [
   {
      group: "easy",
      breeds: ["Basset", "Beagle"]
   },
    {
      group: "medium",
      breeds: ["medium dog", "Beagle"]
   },
    {
      group: "intermediate",
      breeds: ["intermediate hound", "Beagle"]
   },
    {
      group: "hard",
      breeds: ["hard hound", "Beagle"]
   }
]


const calculateTheAnswer = () => {

   let total = 0;
   userAnswers.map((obj)=> total = total + Number(obj.answer));

   total = 14;
   const results = document.querySelector("#results");
   if (total < 4) {
      results.innerHTML = "Don't get a dog you noob"
      return;
   }

   if (total < 7) {
      results.innerHTML = breedsMap[0].breeds[0];
      return;
   }

   if (total < 10) {
      results.innerHTML = breedsMap[1].breeds[0];
      return;
   }

   if (total < 13) {
      results.innerHTML = breedsMap[2].breeds[0];
      return;
   }
   
   results.innerHTML = breedsMap[3].breeds[0];
   
}


const form = document.querySelector("#answers-form");
form.addEventListener("submit", function (e) {
   e.preventDefault();
   var data = new FormData(form);
   for (const [key, answer] of data) {
      userAnswers.push({
         key,
         answer
      })
   }
   if(userAnswers.length === questions.length ) {
      document.querySelector("#quiz-section").classList.add("hidden");
      document.querySelector("#done").classList.remove("hidden");
      console.log(userAnswers);
      // later, we will call our function from here
      calculateTheAnswer();

   } else {
      populateQuestion(userAnswers.length);
   }
});


const populateQuestion = (index) => {
   const question = document.querySelector("#question");
   const answersForm = document.querySelector("#answers-form");
   const currentQuestionObject = questions[index];
   // set up the question
   question.innerHTML = currentQuestionObject.question;

   // set up the  answers
   currentQuestionObject.answers.map((answer, index) => {
      answersForm[index].labels[0].innerHTML = answer;
      // set up the answer names 
      answersForm[index].name = currentQuestionObject.key;
   });
}


document.addEventListener("DOMContentLoaded", function () {
   populateQuestion(0)
   calculateTheAnswer();
});