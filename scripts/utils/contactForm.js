// récupéerer les éléments a rendre non cliquable
const headerFocus = document.querySelector('header')
const mainFocus = document.querySelector('.main-photographer')
const btnClose = document.querySelector('.btn-close-modal')

function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    modal.setAttribute("aria-hidden", 'false')
    mainFocus.setAttribute("aria-hidden", 'true')
    headerFocus.setAttribute("aria-hidden", 'true')
    btnClose.focus()
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", 'true')
    mainFocus.setAttribute("aria-hidden", 'false')
    headerFocus.setAttribute("aria-hidden", 'false')
}

//gérer le sbumit
const form = document.getElementById("contact_form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    let toSend = {
        prénom: document.getElementById("form_name").value,
        nom: document.getElementById("form_lastName").value,
        email: document.getElementById("form_email").value,
        message: document.getElementById("form_message").value
    }
    console.log(toSend)
})
