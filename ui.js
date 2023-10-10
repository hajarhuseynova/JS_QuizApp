function UI() {
  (this.startBtn = document.querySelector(".btn-start")),
    (this.quizBox = document.querySelector(".quiz-box")),
    (this.scoreBox = document.querySelector(".score-box")),
    (this.questionText = document.querySelector(".question-text")),
    (this.scoreText = document.querySelector(".score-text")),
    (this.optionList = document.querySelector(".option-list")),
    (this.nextBtn = document.querySelector(".next_btn")),
    (this.quitBtn = document.querySelector(".btn-quit")),
    (this.replayBtn = document.querySelector(".btn-replay")),
    (this.timeSecond = document.querySelector(".time_second")),
    (this.timeText = document.querySelector(".time_text")),
    (this.timeLine = document.querySelector(".time_line")),
    (this.questionIndex = document.querySelector(".question_index")),
    (this.correctIcon = `<div class="icon"><i class="fas fa-check"></i></div>`),
    (this.incorrectIcon = `<div class="icon"><i class="fas fa-times"></i></div>`);
}
UI.prototype.soruGetir = function (soru) {
  let question = `
    <span>${soru.soruMetni}</span>
    `;
  let option = "";
  for (const cevap in soru.cavabSecenekleri) {
    option += `
    <div class="option">
    <span><b>${cevap}</b>: ${soru.cavabSecenekleri[cevap]}</span>
  </div> 
    `;
  }
  this.questionText.innerHTML = question;
  this.optionList.innerHTML = option;

  const options = this.optionList.querySelectorAll(".option");
  for (const opt of options) {
    opt.setAttribute("onClick", "optionSelected(this)");
  }
};
UI.prototype.sualSayiniGoster = function (sualSirasi, umumiSay) {
  let tag = `<span class="badge bg-warning"> ${sualSirasi}/${umumiSay}</span>`;
  this.questionIndex.innerHTML = tag;
};

UI.prototype.showScore = function (trueQuestion, totalQuestion) {
  let tag = `<div class="score-text">Total question:${totalQuestion},true answers are: ${trueQuestion}</div>`;
  this.scoreText.innerHTML = tag;
};
