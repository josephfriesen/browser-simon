export function Game() {
  this.colors = [1,2,3,4];
  this.colorLabels = ["red", "green", "blue", "yellow"];
  this.gameSeq = [];
  this.playerSeq = [];
}

Game.prototype.getNewColor = function() {
  let rand = Math.floor(Math.random()*4);
  return this.colorLabels[rand];
};

Game.prototype.addToSeq = function() {
  let newColor = this.getNewColor();
  this.gameSeq.push(newColor);
};

Game.prototype.checkSequences = function() {
  let out = true;
  let len = this.gameSeq.length;
  for (var i = 0; i < len; i++) {
    if (this.gameSeq[i] !== this.playSeq[i]) {
    out = false;
    }
  }
  return out;
};
