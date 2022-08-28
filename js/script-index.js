function newsletter(){
    let x,
    r = confirm("Seja bem-vindo ao Game Mania! \nDeseja se inscrever na nossa Newsletter e aproveitar as melhores promoções?")
    if(r == true){
        x = prompt("Digite seu e-mail e fique por dentro das novidades!")
        return true
    }
}

function saldaoAgosto(){
    window.location.href = "promocao.html"
}

function valorFrete(){
    let x
    let cep = prompt("Digite seu cep para consultar o valor e tempo de entrega:")

    if(cep.length == 8){
        x = alert("Envio padrão: 5 - 8 dias úteis\nEntrega relâmpago: 2 dias úteis")
        return true
    }else{
        x = alert("CEP inválido")
        return false
    }
}

function slide1(){
    document.getElementById('foto-banner').src="img/pexels-photo.jpeg";
    setTimeout("slide2()",2000)
}
function slide2(){
    document.getElementById('foto-banner').src="img/player-man-2.jpg";
    setTimeout("slide3()",2000)
}
function slide3(){
    document.getElementById('foto-banner').src="img/player-boy.jpeg";
    setTimeout("slide1()",2000)
}

var btn = document.querySelector("#voltar-ao-topo");
    btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});