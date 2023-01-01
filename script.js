let dark = document.querySelector('#dark')
let light = document.querySelector('#light')
let tela = document.querySelector('body')

light.addEventListener('click',modolight)
dark.addEventListener('click',modoDark)

function modoDark() {
    tela.classList.add('dark')
    tela.classList.remove('light')
    console.log(dark)
}

function modolight() {
    tela.classList.add('light')
    tela.classList.remove('dark')
    console.log(light)
}

modoDark();
modolight()
