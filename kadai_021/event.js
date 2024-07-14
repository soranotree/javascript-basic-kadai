const btn = document.getElementById('btn');
const text = document.getElementById('text');
let i = 0;

btn.addEventListener('click', () => {
setTimeout(() => {
  text.textContent = 'ボタンをクリックしました';
}, 2000);
})
