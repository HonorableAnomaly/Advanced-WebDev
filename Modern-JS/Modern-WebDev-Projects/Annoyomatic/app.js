const annoyer = {
  phrases: ["YOLO!", "The glass is half full!", "Like, totally!", "Totes!", "That's cray cray!", "I can't even!"],
  choosePhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  start() {
    this.timerID = setInterval(() => {
      console.log(this.pickPhrase());
    }, 2000);
  },
  stop() {
    clearInterval(this.timerID);
    console.log("Thank the Lord! It's over!!");
  },
};
