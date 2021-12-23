let contador = 0

let prato;
let bebida;
let doce;

let precoPrato;
let precoBebida;
let precoSobremesa;
/* ====================PRATOS======================================= */
function selecionarPrato(seletor, nome, preco){
    prato = nome
    precoPrato = preco
    const selecionado = document.querySelector('.pratos .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {

        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}

/* ====================BEBIDAS======================================= */
function selecionarBebida(seletor, nome, preco){
    bebida = nome
    precoBebida = preco
    const selecionado = document.querySelector('.bebidas .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {
        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}
/* ====================SOBREMESA======================================= */
function selecionarSobreMesa(seletor, nome, preco){
    doce = nome
    precoSobremesa = preco
    const selecionado = document.querySelector('.doces .selecionado')

    if(selecionado !== null){
        selecionado.classList.remove('selecionado')
    }else {
        contador += 1
    }

    const opcao = document.querySelector(seletor)
    opcao.classList.add('selecionado')

    habilitarBotaoSePedidoCompoleto()
}

function habilitarBotaoSePedidoCompoleto(){
   
   if(contador === 3){
    const botao = document.querySelector('.fazer-pedido')
    botao.classList.add('ativo')
    botao.innerHTML = 'Fechar pedido'
    const precoTotal =  precoPrato + precoBebida + precoSobremesa
    const mensagem = "Olá eu gostaria de fazer o pedido:\n- Prato: " + prato + "\n Bebida: " + bebida + "\n Sobremesa: " + doce +"\n Total: " + precoTotal.toFixed(2) + " "
    const mensagemFormatada = encodeURIComponent(mensagem) 
    const url = 'https://wa.me/5521996119461?text=' + mensagemFormatada;
    botao.setAttribute('href', url)
   }
}