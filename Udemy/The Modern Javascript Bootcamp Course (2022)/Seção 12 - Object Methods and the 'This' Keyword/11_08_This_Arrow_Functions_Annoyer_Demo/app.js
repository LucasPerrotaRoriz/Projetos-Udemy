const annoyer = {
  phrases: ["literally", "cray cray", "I can't even", "Totes!",
  "YOLO", "Can't Stop, Won't Stop"],
  pickPhrase() {
    const {
      phrases // destructuring
    } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx]
  },
  start() { // Não vai funcionar
    console.log(this.pickPhrase()) // Setado para o objeto
    setInterval(function () {
      // Dentro da função está setado para window
      // A função é executada por setInterval não por mim
      // Por causa do jeito que é chamado está setada para window
      console.log(this);
      console.log(this.pickPhrase())
    }, 3000)
  },
  start2() { // Não é o ideal
    const that = this;
    setInterval(function () {
      console.log(that); // Vai mostrar todas as frases
      console.log(this.pickPhrase())
    }, 3000)
  },
  start3() {
    this.timerId = setInterval(() => {
      // Já que arrow functions não tem um this vai depender
      // do this de start()
      console.log(this.pickPhrase())
    }, 3000)
  },
  stop() {
    clearInterval(this.timerId);
    console.log("ITS OVER");
  }
}



