class Timer {
  constructor(durationInput, startButton, pauseButton) {
    this.durationInput = durationInput;
    this.startButton = startButton;
    this.pauseButton = pauseButton;

    this.startButton.addEventListener("click", this.start);
    this.pauseButton.addEventListener("click", this.pause);
  }
  start = () => {
    console.log("Starting the timer!");
    this.tick();
    this.interval = setInterval(this.tick, 1000);
  };
  tick = () => {
    if (this.timeRemaining <= 0) {
      this.pause();
    } else {
      console.log("Tick!");
      this.timeRemaining = this.timeRemaining - 1;
    }
  };
  get timeRemaining() {
    return parseFloat(this.durationInput.value);
  }
  set timeRemaining(time) {
    this.durationInput.value = time;
  }
  pause = () => {
    console.log("Pausing the timer!");
    clearInterval(this.interval);
  };
}

const durationInput = document.querySelector("#duration");
const startButton = document.querySelector("#start");
const pauseButton = document.querySelector("#pause");

const timer = new Timer(durationInput, startButton, pauseButton);
