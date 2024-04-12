const nao = document.getElementById('nao');
const calcDiv = document.getElementById('calc-div');
const inputResult = document.getElementById('input-result');
const sendButton = document.getElementById('send');

nao.addEventListener('click', (e) => {
  calcDiv.classList.remove('hidden')
  calcDiv.classList.add('show')
});

sendButton.addEventListener('click', (e) => {
  const result = parseInt(inputResult.value);

  if(result === 1){
    console.log('redirect');
    window.location.href = 'rejeitado.html';
  } else {
    console.log('error');
  }
})