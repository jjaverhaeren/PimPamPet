let player1Score = 0,
  player2Score = 0,
  player3Score = 0;

const getRandomLetter = () => {
  const letterContainer = document.querySelector("#letter-btn");
  const lettersArray = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  let index = Math.floor(Math.random() * 26);
  let chosenLetter = lettersArray[index];
  letterContainer.innerHTML = chosenLetter;
};

const pickRandomLetter = () => {
  const timeOut = Math.round(Math.random() * (5000 - 2000) + 2000);
  // console.log(timeOut);
  const turn = document.querySelector("#turn");
  turn.classList.add("rotate");
  const randomLetters = setInterval(() => {
    getRandomLetter();
  }, 100);
  setTimeout(() => {
    clearInterval(randomLetters);
    turn.classList.remove("rotate");
  }, timeOut);
};

const onClickHandlerLetter = () => {
  pickRandomLetter();
};

const letterBtn = document.querySelector("#letter-btn");
letterBtn.addEventListener("click", onClickHandlerLetter);

const getScore = (event) => {
  switch (event.target.id) {
    case "player1-yellow":
      player1Score += 5;
      break;
    case "player1-blue":
      player1Score += 10;
      break;
    case "player1-red":
      player1Score += 15;
      break;
    case "player2-yellow":
      player2Score += 5;
      break;
    case "player2-blue":
      player2Score += 10;
      break;
    case "player2-red":
      player2Score += 15;
      break;
    case "player3-yellow":
      player3Score += 5;
      break;
    case "player3-blue":
      player3Score += 10;
      break;
    case "player3-red":
      player3Score += 15;
      break;
  }
  return [player1Score, player2Score, player3Score];
};

const colorBtns = document.querySelectorAll(".color-btn");
colorBtns.forEach((button) => {
  button.addEventListener("click", (event) => {
    // console.log(event.target.id);
    const [player1Score, player2Score, player3Score] = getScore(event);
    document.querySelector("#player1-score").innerHTML = player1Score;
    document.querySelector("#player2-score").innerHTML = player2Score;
    document.querySelector("#player3-score").innerHTML = player3Score;
  });
});

// const question = document.querySelector('#question-container');
document.querySelector("#question-container").style.backgroundImage =
  "url('img/kaarten/Jumbo_card.jpeg')";

document.querySelector("#question-text").innerHTML =
  "druk op de kaart om een vraag te kiezen.";

const questions = [
  {
    text: "Een onderdeel van een auto.",
    imgUrl: "img/kaarten/Auto.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Wat koop je bij de bakker.",
    imgUrl: "img/kaarten/Bakker.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een popgroep of popartiest.",
    imgUrl: "img/kaarten/Band.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een berg of berggroep.",
    imgUrl: "img/kaarten/Berg.jpeg",
    asked: false,
    color: "red",
  },

  {
    text: "Een bloem.",
    imgUrl: "img/kaarten/Bloem.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Titel van een boek.",
    imgUrl: "img/kaarten/Boek.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Wat zie je op de boerderij.",
    imgUrl: "img/kaarten/Boerderij.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een boom.",
    imgUrl: "img/kaarten/Boom.jpeg",
    asked: false,
    color: "yellow",
  },

  {
    text: "Een componist.",
    imgUrl: "img/kaarten/Componist.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een drank.",
    imgUrl: "img/kaarten/Drank.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een onderdeel van een fiets.",
    imgUrl: "img/kaarten/Fiets.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "De titel van een film.",
    imgUrl: "img/kaarten/Film.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een filmster.",
    imgUrl: "img/kaarten/Filmster.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een vrucht of fruit.",
    imgUrl: "img/kaarten/Fruit.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een stuk gereedschap.",
    imgUrl: "img/kaarten/Gereedschap.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Wat koop je bij de groenteboer.",
    imgUrl: "img/kaarten/Groenteboer.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een hond.",
    imgUrl: "img/kaarten/Hond.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Wat zie je in de huishouding.",
    imgUrl: "img/kaarten/Huishouden.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een jongensnaam.",
    imgUrl: "img/kaarten/Jongensnaam.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Wat koop je bij de kaasboer.",
    imgUrl: "img/kaarten/Kaasboer.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een kledingstuk.",
    imgUrl: "img/kaarten/Kledingstuk.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een komiek.",
    imgUrl: "img/kaarten/Komiek.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een film.",
    imgUrl: "img/kaarten/Film.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een land of werelddeel.",
    imgUrl: "img/kaarten/Land.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een lichaamsdeel.",
    imgUrl: "img/kaarten/Lichaam.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een meisjesnaam.",
    imgUrl: "img/kaarten/Meisjesnaam.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Wat zie je in huis (een meubelstuk).",
    imgUrl: "img/kaarten/Meubelstuk.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een (oude) munteenheid.",
    imgUrl: "img/kaarten/Munt.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een muziekinstrument.",
    imgUrl: "img/kaarten/Muziekinstrument.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een paddestoel.",
    imgUrl: "img/kaarten/Paddestoel.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een reptiel.",
    imgUrl: "img/kaarten/Reptiel.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een schaaldier.",
    imgUrl: "img/kaarten/Schaaldier.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een schilder.",
    imgUrl: "img/kaarten/Schilder.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Wat koop je bij de slager.",
    imgUrl: "img/kaarten/Slager.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Naam van een stuk speelgoed of een spel.",
    imgUrl: "img/kaarten/Speelgoed.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Titel van een tijdschrift.",
    imgUrl: "img/kaarten/Tijdschrift.jpeg",
    asked: false,
    color: "red",
  },
  {
    text: "Een vaartuig.",
    imgUrl: "img/kaarten/Vaartuig.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een vis.",
    imgUrl: "img/kaarten/Vis.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een voertuig.",
    imgUrl: "img/kaarten/Voertuig.jpeg",
    asked: false,
    color: "blue",
  },
  {
    text: "Een vogel.",
    imgUrl: "img/kaarten/Vogel.jpeg",
    asked: false,
    color: "yellow",
  },
  {
    text: "Een wild dier.",
    imgUrl: "img/kaarten/Wild_dier.jpeg",
    asked: false,
    color: "yellow",
  },
];

const getQuestion = (array) => {
  let text, imgUrl, color;
  const available = array.filter((question) => {
    return question.asked === false;
  });
  if (available.length === 0) {
    text = "Einde.";
    imgUrl = "img/kaarten/Jumbo_card.jpeg";
    color = "transparent";
    return [text, imgUrl, color];
  } else {
    console.log(available);
    const randomIndex = Math.floor(Math.random() * available.length);
    const chosenQuestion = available[randomIndex];
    const text = chosenQuestion.text;
    const imgUrl = chosenQuestion.imgUrl;
    const color = chosenQuestion.color;
    chosenQuestion.asked = true;
    console.log(text);
    return [text, imgUrl, color];
  }
};

const setQuestionCard = (array) => {
  const [text, imgUrl, color] = getQuestion(array);
  console.log(color);
  document.querySelector("#question-text").innerHTML = text;
  document.querySelector(
    "#question-container"
  ).style.backgroundImage = `url(${imgUrl})`;
  const cardColor = document.querySelector("#card-color");
  cardColor.style.background = color;
};

const onClickQuestion = () => {
  setQuestionCard(questions);
};
const questionContainer = document.querySelector("#question-container");
questionContainer.addEventListener("click", onClickQuestion);

const showRules = () => {
  const rules = document.querySelector("#rules-container");
  const closeRules = document.querySelector("#close-rules");
  rules.classList.remove("rules-hidden");
  rules.classList.add("rules-shown");
  closeRules.classList.remove("rules-hidden");
  closeRules.classList.add("rules-shown");
};

const hideRules = () => {
  const rules = document.querySelector("#rules-container");
  const closeRules = document.querySelector("#close-rules");
  rules.classList.remove("rules-shown");
  rules.classList.add("rules-hidden");
  closeRules.classList.remove("rules-shown");
  closeRules.classList.add("rules-hidden");
};

const showBtn = document.querySelector("#show_rules");
showBtn.addEventListener("click", showRules);

const closeRules = document.querySelector("#close-rules");
closeRules.addEventListener("click", hideRules);

const blink = () => {
  const letterBtn = document.querySelector("#letter-btn");
  const blinking = setInterval(() => {
    letterBtn.style.background === "white"
      ? (letterBtn.style.background = "yellow")
      : (letterBtn.style.background = "white");
  }, 500);
};

// blink();
