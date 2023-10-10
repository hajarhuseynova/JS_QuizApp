let quiz = new Quiz(sorular);
const ui = new UI();

ui.startBtn.addEventListener("click", function () {
  ui.quizBox.classList.add("active");
  startTimer(10);
  startTimeLine();
  ui.soruGetir(quiz.sualiGetir());
  ui.sualSayiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
  ui.nextBtn.classList.remove("show");
});
ui.nextBtn.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex + 1) {
    quiz.soruIndex++;
    clearInterval(counterLine);
    clearInterval(counter);
    startTimer(10);
    startTimeLine();

    ui.soruGetir(quiz.sualiGetir());
    ui.sualSayiniGoster(quiz.soruIndex + 1, quiz.sorular.length);
    ui.nextBtn.classList.remove("show");
  } else {
    clearInterval(counter);
    clearInterval(counterLine);

    ui.quizBox.classList.remove("active");
    ui.scoreBox.classList.add("active");
    ui.showScore(quiz.dogruCevapSayisi, quiz.sorular.length);
  }
});
ui.replayBtn.addEventListener("click", function () {
  quiz.dogruCevapSayisi = 0;
  quiz.soruIndex = 0;
  ui.startBtn.click();
  ui.scoreBox.classList.remove("active");
});

ui.quitBtn.addEventListener("click", function () {
  window.location.reload();
});

function optionSelected(option) {
  clearInterval(counter);
  clearInterval(counterLine);

  const cevap = option.querySelector("span b").textContent;
  const soru = quiz.sualiGetir();
  if (soru.cavabiYoxla(cevap)) {
    quiz.dogruCevapSayisi++;
    option.classList.add("correct");
    option.insertAdjacentHTML("beforeend", ui.correctIcon);
  } else {
    option.classList.add("incorrect");
    option.insertAdjacentHTML("beforeend", ui.incorrectIcon);
  }
  for (let i = 0; i < ui.optionList.children.length; i++) {
    ui.optionList.children[i].classList.add("disabled");
  }
  ui.nextBtn.classList.add("show");
}
let counter;
function startTimer(time) {
  counter = setInterval(timer, 1000);
  function timer() {
    ui.timeSecond.textContent = time;
    time--;
    if (time < 0) {
      clearInterval(counter);
      ui.timeText.textContent = "Time end!";
      let result = quiz.sualiGetir().dogruCavab;
      for (const option of ui.optionList.children) {
        if (option.querySelector("span b").textContent == result) {
          option.classList.add("correct");
          option.insertAdjacentHTML("beforeend", ui.correctIcon);
        }
        option.classList.add("disabled");
      }
      ui.nextBtn.classList.add("show");
    }
  }
}
let counterLine;
function startTimeLine(time) {
  let lineWidth = 0;
  counterLine = setInterval(time, 100);
  function time() {
    lineWidth += 5;
    ui.timeLine.style.width = lineWidth + "px";
    if (lineWidth > 549) {
      clearInterval(counterLine);
    }
  }
}
