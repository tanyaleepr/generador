function generateWord() {
  const words = ['Hello', 'World', 'Goodbye', 'Friend'];
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomWord = words[randomIndex];
  document.querySelector('#word').innerHTML = randomWord;
}