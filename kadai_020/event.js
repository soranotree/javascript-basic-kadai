const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  const newText = document.createElement('text');
  newText.textContent = 'ボタンをクリックしました';
  text.textContent = newText.textContent;
})