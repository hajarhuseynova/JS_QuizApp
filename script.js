const start = document.querySelector(".btn-start");
const quizBox = document.querySelector(".quiz-box");

function Soru(soruMetni, cavabSecenekleri, dogruCavab) {
  (this.soruMetni = soruMetni),
    (this.cavabSecenekleri = cavabSecenekleri),
    (this.dogruCavab = dogruCavab);
}
Soru.prototype.cavabiYoxla = function (cavab) {
  return cavab === this.dogruCavab;
};

let sorular = [
  new Soru("1-Js istifade edilib?", { a: "he", b: "yox" }, "a"),
  new Soru("2-Js istifade edilib?", { a: "he", b: "yox" }, "a"),
  new Soru("3-Js istifade edilib?", { a: "he", b: "yox" }, "a"),
  new Soru("4-Js istifade edilib?", { a: "he", b: "yox" }, "a"),
];

function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
}
Quiz.prototype.sualiGetir = function () {
  return this.sorular[this.soruIndex];
};

let quiz = new Quiz(sorular);

start.addEventListener("click", function () {
  if (quiz.sorular.length != quiz.soruIndex) {
    quizBox.classList.add("active");
    console.log(quiz.sualiGetir());
    quiz.soruIndex++;
  } else {
    console.log("end");
  }
});
