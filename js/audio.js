const Audio = {
  flip: new Audio("audio/page-flip.mp3"),

  playFlip() {
    this.flip.currentTime = 0;
    this.flip.play();
  }
};
