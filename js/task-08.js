
const form = document.querySelector(".login-form")

form.addEventListener("submit", onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault()
    
    const formElements = event.currentTarget.elements

    const email = formElements.email;
    const password = formElements.password;
    const formData = new FormData(event.currentTarget)
   
    

    if (email.value === "" || password.value === "") {
        alert("This form must be completed");
    } else {
        formData.forEach((name, value) => {
        console.log(`onFormSubmit -> name`, name)
        console.log(`onFormSubmit -> value`, value)
    })
        console.log(`The form has email ${email.value} and password ${password.value}`)

    }
}


    
    
