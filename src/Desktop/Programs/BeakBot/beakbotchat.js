//clears the placeholder text ion the chatbox
//this function is set to run when the users brings focus to the chatbox, by clicking on it
function placeHolder() {
  document.getElementById("chatbox").placeholder = "";
}

const beakbotChat = (
  <div id="chatborder">
    <p id="chatlog7" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog6" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog5" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog4" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog3" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog2" class="chatlog">
      &nbsp;
    </p>
    <p id="chatlog1" class="chatlog">
      &nbsp;
    </p>
    <input
      type="text"
      name="chat"
      id="chatbox"
      placeholder="Hi there! Type here to talk to me."
      onFocus={placeHolder} // Update event handler here
    ></input>
  </div>
);

export default beakbotChat;
