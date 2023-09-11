
function calcular(){
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value
  var texto = document.getElementById('resultado');
  var resultado = (peso / (altura * altura));
  var resultado_final = resultado.toFixed(1);

  if(resultado_final <= 18.5){
    texto.innerHTML = "Abaixo do peso normal : " + resultado_final;
  }else if(resultado_final >= 18.5 && resultado_final <= 24.9){
    texto.innerHTML = "Peso ideal : " + resultado_final;
  }else if(resultado_final >= 25 && resultado_final <= 29.9){
    texto.innerHTML = "Excesso de peso : " + resultado_final;
  }else{
    texto.innerHTML = "Obesidade procure um médico";
  }



}
