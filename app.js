//Função pro Formulário (page contato)

const form = document.getElementById('my-form')

form.addEventListener('submit', handleSubmit)

function handleSubmit(e) {
 e.preventDefault()

 const form = e.target
 const data = new FormData(form)

 fetch(form.action, data).then(handleSuccess).error(handleError)
}

function handleSuccess(response) {
 console.log(response)
}

function handleError(response) {
 console.error(response)
}