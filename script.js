console.log("Dando um hello ao best");

function MandaMensagem() {
    console.log("Oi tudo bem?");
    console.log("Vou te mandar uma solicitação!");
    console.log("Solicitação recebida!");
}

MandaMensagem();
 
    setTimeout((MandaMensagem) => {3000}, timeout);
    
    console.log("Foi bom conversar com você, tchau!");