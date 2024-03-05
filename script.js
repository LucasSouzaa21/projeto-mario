const form = document.querySelector(".formulario")
const mascform = document.querySelector(".mascara-form")

function CliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translatex(-50%)"
    form.style.transition = "1.0s"
    mascform.style.visibility = "visible "

}

function sairFormulario() {
    form.style.left = "-300px"
    form.style.transform = "translatex(-50%)"
    mascform.style.visibility = "hidden"
}