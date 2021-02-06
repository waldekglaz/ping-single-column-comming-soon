const email = document.querySelector(".input__email");
const form = document.querySelector("#form");
const errorEl = document.querySelector(".error");
const btn= document.querySelector(".btn")

// show input error

const showError = (input, message) => {
    errorEl.innerText = message
}

const isValidEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    
    if(email.value === "" || !isValidEmail(email.value)){
        showError(email, "Please provide a valid email address");
        email.style.borderColor = "red"
    }
    else{
        email.style.borderColor = "green";
        showError(email, "");
    }
    
})