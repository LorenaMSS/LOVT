//console.log('JS externo funcionou!');
//console.log(window);

//alert('Seja bem vinde!'); // mensagem para usuário

//let adulto = confirm('Você tem mais de 18 anos?'); // retorna booleano

let nomeUsuario = prompt('Qual seu nome?'); // retorna texto inserido pelo usuario

let elementHeader = document.querySelector('.olaUsuario'); // seleciona o elemento html
console.log(elementHeader);

//elementHeader.innerText = `Olá, ${nomeUsuario}`; // atribui conteudo ao elemento selecionado
elementHeader.innerHTML += `<strong>Olá, ${nomeUsuario}</strong>`;

let logo = document.getElementById('logo');
console.log(logo);

logo.style.color = 'orange';

const toggleMode = () => {
  document.body.classList.toggle('dark-mode');
};

setTimeout(() => {
  document.querySelector('.modal').style.display = 'flex';
}, 5000);

const btnClose = () => {
  document.querySelector('.modal').style.display = 'none';
};

document
  .querySelector('#btn-submit-contact')
  .addEventListener('click', (evento) => {
    evento.preventDefault(); // cancelando o envio temporariamente

    let nomeValue = document.querySelector('#input_nome').value;
    let emailValue = document.querySelector('#input_email').value;
    let telefoneValue = document.querySelector('#input_telefone').value;

    console.log(nomeValue);
    console.log(emailValue);
    console.log(telefoneValue);
    console.log(nomeValue.length);

    let patt1 = /@+/g;
    let result = emailValue.match(patt1);
    console.log(result);

    if (nomeValue && emailValue && telefoneValue) {
      // testa se os campos estão preenchidos
      if (nomeValue.length >= 2) {
        // testa se o nome tem pelo menos duas letras
        if (telefoneValue.length >= 8) {
          // testa se telefone tem ao menos 8 digitos
          if (result) {
            // testa se o email tem @
            form_contact.submit();
          }
        }
      }
    }

    //validação dos campos
    //exibição de mensagem de erros
    //envio do formulário
  });
