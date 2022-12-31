const btn = document.querySelector (".btn")
const input = document.querySelector(".input")
const msg = document.querySelector(".msg")
btn.addEventListener("click", (e) => {
    e.preventDefault()

    const inputV = input.value
    
    if(inputV === "") {
        msg.innerHTML = "Email not found or invalid"
    } else {
        msg.innerHTML = ""
        msg.classList.add("ok")
        msg.innerHTML = "An email has been sent to your inbox."
        
    }
})