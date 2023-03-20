const form = document.querySelector(".login-form")

form.addEventListener("submit", onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault()
    
    const formElements = event.currentTarget.elements

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email.value === "" || password.value === "") {
        alert("This form must be completed");
    } else {
        alert("This form has been submitted");
    } 

    const formData = {
        email,
        password
    }
    console.log(formData)
    
    // const formData = new FormData(event.currentTarget)

    // formData.forEach(value, name) => {
    //     console.log(`onFormSubmit -> name`, name)
    //     console.log(`onFormSubmit -> value`, value)
    }
