//links
//http://eloquentjavascript.net/09_regexp.html
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

var messages = []; //array that holds the record of each string in chat
var lastUserMessage = ""; //keeps track of the most recent input string from the user
var botMessage = ""; //var keeps track of what the chatbot is going to say
var botName = "Beak-bot"; //name of the chatbot
var talking = true; //when false the speach function doesn't work

//
//
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//edit this function to change what the chatbot says
function chatbotResponse() {
  talking = true;
  const nani = [
    "Nani the fuck did you just fucking iimasu about watashi, you chiisai bitch desuka?",
    "Watashi will have anata know that watashi graduated top of my class in Nihongo 3, and watashi have been involved in iroirona Nihongo tutoring sessions, and watashi have over sanbyaku perfect test scores.",
    "Watashi am trained in kanji, and watashi is the top letter writer in all of southern California.",
    "Anata are nothing to watashi but just another weeaboo.",
    "Watashi will korosu anata the fuck out with vocabulary the likes of which has neber meen mimasud before on this continent, mark watashino fucking words.",
    "Anata thinks that anata can get away with hanashimasing that kuso to watashi over the intaaneto?",
    "Omou again, fucker.",
    "As we hanashimasu, watashi am contacting watashino secret netto of otakus accross the USA, and anatano IP is being traced right now so you better junbishimasu for the ame, ujimushi.",
    "The ame that korosus the pathetic chiisai thing anata calls anatano life.",
    "You are fucking shinimashitad, akachan."
  ];
  botMessage = nani[Math.floor(Math.random() * nani.length)];

  if (lastUserMessage === "hi" || lastUserMessage === "hello") {
    const hi = ["hi", "howdy", "hello"];
    botMessage = hi[Math.floor(Math.random() * hi.length)];
  }

  if (lastUserMessage === "my name") {
    botMessage = "What a great name!";
  }

  if (lastUserMessage === "deez nutz" || lastUserMessage === "these nuts") {
    const nutz = ["deez nuts", "these nuts", "balls"];
    botMessage = nutz[Math.floor(Math.random() * nutz.length)];
  }

  if (lastUserMessage === "your name") {
    botMessage = "My name is " + botName;
  }
}
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//****************************************************************
//
//
//
//this runs each time enter is pressed.
//It controls the overall input and output
function newEntry() {
  //if the message from the user isn't empty then run
  if (document.getElementById("chatbox").value !== "") {
    //pulls the value from the chatbox and sets it to lastUserMessage
    lastUserMessage = document.getElementById("chatbox").value;
    //sets the chat box to be clear
    document.getElementById("chatbox").value = "";
    //adds the value of the chatbox to the array messages
    messages.push(`<b>You:</b> ${lastUserMessage}`); // use template literal
    //Speech(lastUserMessage);  //says what the user typed out loud
    //sets the variable botMessage in response to lastUserMessage
    chatbotResponse();
    //add the chatbot's name and message to the array messages
    messages.push(`<b>${botName}:</b> ${botMessage}`); // use template literal
    // says the message using the text to speech function written below
    Speech(botMessage);
    //outputs the last few array elements of messages to html
    for (var i = 1; i < 8; i++) {
      if (messages[messages.length - i])
        document.getElementById(`chatlog${i}`).innerHTML =
          messages[messages.length - i]; // use template literal and backticks
    }
  }
}

//text to Speech
//https://developers.google.com/web/updates/2014/01/Web-apps-that-talk-Introduction-to-the-Speech-Synthesis-API
//https://codepen.io/matt-west/pen/DpmMgE?editors=1010
//https://wicg.github.io/speech-api/#examples-synthesis
function Speech(say) {
  if ("speechSynthesis" in window && talking) {
    var utterance = new SpeechSynthesisUtterance(say);
    //msg.voice = voices[10]; // Note: some voices don't support altering params
    //msg.voiceURI = 'native';
    //utterance.volume = 1; // 0 to 1
    //utterance.rate = 0.1; // 0.1 to 10
    //utterance.pitch = 1; //0 to 2
    //utterance.text = 'Hello World';
    //utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  }
}

//runs the keypress() function when a key is pressed
document.onkeypress = keyPress;
//if the key pressed is 'enter' runs the function newEntry()
function keyPress(e) {
  var x = e || window.event;
  var key = x.keyCode || x.which;
  if (key === 13 || key === 3) {
    //runs this function when enter is pressed
    newEntry();
  }
  if (key === 38) {
    console.log("hi");
    //document.getElementById("chatbox").value = lastUserMessage;
  }
}
