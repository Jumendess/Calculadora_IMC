
function calcular(){
  var peso = document.getElementById('peso').value;
  var altura = document.getElementById('altura').value
  var texto = document.getElementById('resultado');
  var resultado = (peso / (altura * altura));
  var resultado_final = resultado.toFixed(1);

  if(resultado_final <= 18.5){
    texto.innerHTML = "Abaixo do peso normal : " + "IMC: " + resultado_final;
  }else if(resultado_final >= 18.5 && resultado_final <= 24.9){
    texto.innerHTML = "Peso normal : " + "IMC: " + resultado_final;
  }else if(resultado_final >= 25 && resultado_final <= 29.9){
    texto.innerHTML = "Excesso de peso : " + "IMC: " + resultado_final;
  }else if(resultado_final >= 30 && resultado_final <= 34.9){
    texto.innerHTML = "Obesidade classe 1 : " + "IMC: " +  resultado_final;
  }else if(resultado_final >= 35 && resultado_final <= 39.9){
    texto.innerHTML = "Obesidade classe 2 : " + "IMC: " + resultado_final;
  }else{
    texto.innerHTML = "Obesidade classe 3: " + "IMC: " + resultado_final;
  }
  document.getElementById('oms').innerHTML = "Classificação segundo a OMS a partir do IMC";
}
