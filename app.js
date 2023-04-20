function calcular(){
var number = document.getElementById('inptnumber')
number = Number(number.value)
var sumario = document.getElementById('sumário')
var resultado = document.getElementById('resultado')
resultado.innerHTML = ''
sumario.innerHTML = ''
number.toFixed(5)
if(number != 0){
  sumario.append(`Tabuada do ${number}`)
  for(i = 1; i < 11; i++){
    resultado.innerHTML += (`${number} * ${i} = ${number*i} <br>`);
  }
}
else{
  alert("A tabuada deve ser diferente de 0")
}

}

jaSaiu = false;
// conferir se o usuário já tentou sair da página
window.document.onmouseleave= function(){
  if(jaSaiu == false){
  
  alert ("Conheça meus outros projetos clicando em @DarlliGomes!")
  jaSaiu = true;

};
}
