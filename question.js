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
