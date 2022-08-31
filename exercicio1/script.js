let coxinha = prompt('Você deseja comer mais uma coxinha? \n digite S se sim \n digite N se não').toUpperCase()
let conta = 0
const valor = 2.50

while(coxinha === "S"){
    conta = conta + valor
    coxinha = prompt('Você deseja comer mais uma coxinha? \n digite S se sim \n digite N se não').toUpperCase()
 } 
  console.log(`O total a pagar é ${conta}`)

//   let question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
// let count = 0

// while (question !== 'N' || question === 'S') {
//     question === 'S' ? count += 2.5 : console.log('Dígito inválido.')
//     question = prompt('Deseja comer mais coxinhas?\n Sim = S\n Não = N').toUpperCase()
// }

// console.log(`O valor total foi de R$${count}`)