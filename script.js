function generateWord() {
  const words = ['Hello', 'World', 'Quisiera ser agua para mojar tu jardín....', 'Friend'];
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  document.querySelector('#word').innerHTML = randomWord;
}