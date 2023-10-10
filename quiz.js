function Quiz(sorular) {
  this.sorular = sorular;
  this.soruIndex = 0;
  this.dogruCevapSayisi = 0;
}
Quiz.prototype.sualiGetir = function () {
  return this.sorular[this.soruIndex];
};
