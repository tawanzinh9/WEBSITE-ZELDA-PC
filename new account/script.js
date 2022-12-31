const btn = document.querySelector("#btn")
const msg = document.querySelector(".msg")
const inputs = document.querySelectorAll(".requiere")


btn.addEventListener("click", (e) => {
    e.preventDefault()
    
    if(inputs[0].value.length < 4 || inputs[1].value.length < 4 || inputs[2].value.length < 4 || inputs[3].value.length < 4) {
        msg.textContent = "Something went wrong, please check"
    } else {
        msg.classList.add("msg-ok")
        msg.textContent = "Sucess, welcome to this world!! 😊"
        setTimeout(() => {
            location.href = "./main/index.html"
        }, 3000)
       
    }
})


