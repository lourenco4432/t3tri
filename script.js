function calcularImc(){
    const altura = document.getElementById("altura").value;
    const peso = document.getElementById("peso").value;
  
    if (altura && peso) {
      const alturaEmMetros = altura / 100;
      const imc = peso / (alturaEmMetros * alturaEmMetros);
  
      const resultado = document.createElement("p");
      resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
  
      document.body.appendChild(resultado);
    } else {
      alert("Por favor, preencha tudo!");
    }
  }