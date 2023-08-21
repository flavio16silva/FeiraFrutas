function atualizarPreco() {
  let selectedFruta = document.getElementById('ifrutas1').value
  let spanElement = document.querySelector(`.fruta-preco[data-fruta="${selectedFruta}"]`)

  if (spanElement) {
    let precoValue = parseFloat(spanElement.getAttribute('data-preco'))
    document.getElementById('ires1').value = `R$ ${precoValue.toFixed(2)}`
    
  } else {
    document.getElementById('ires1').value = "R$"    
    
  }
}

function calcular() {
  let selectedFruta = document.getElementById('ifrutas1').value
  let spanElement = document.querySelector(`.fruta-preco[data-fruta="${selectedFruta}"]`)

  if (spanElement) {

  let precoInput = parseFloat(spanElement.getAttribute('data-preco'))
  let quantidadeInput = parseFloat(document.getElementById('iqtd4').value)
       
  //console.log(precoInput)
  //console.log(quantidadeInput)
   
  /* Verificando se são números válidos  */ 
  if (!isNaN(precoInput) && !isNaN(quantidadeInput)) {
    let total = precoInput * quantidadeInput
    document.getElementById('ires3').value = `R$ ${total.toFixed(2)}` //Duas casas decimais
    
    alert(`SMS enviada ao Celular: Valor a pagar é: R$ ${total.toFixed(2)}`)
    tab.innerHTML = ``

   } else {
    document.getElementById('ires3').value = ""
    alert('Por favor, preencher com as informações!')
   }
   

 } else {
  document.getElementById('ires3').value = ""
  alert('Por favor, preencher com as informações!')
 }

}


 
 

 
  

 



