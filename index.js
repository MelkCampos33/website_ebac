let menuButton = document.querySelector('#menu-btn')
let navbar = document.querySelector('header .flex .navbar')

menuButton.onclick = () => { // animção e funcionalidade botão do menu mobile
    menuButton.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}



function calcularArea(altura, base) {
    var area = (base * altura);
    return area;
}

function areaTriangulo(b, a) {
    var area = (b * a) / 2
    return area;
}