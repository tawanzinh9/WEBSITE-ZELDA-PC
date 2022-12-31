const inputs = document.querySelectorAll(".requiered")
const login = document.querySelector("#button")
const msg = document.querySelector(".msg")
const forget = document.querySelector("#forget")
const link = document.querySelector("#a")

function setError(err) {
    inputs[err].style.border = "2px solid #e363636 ";
}


login.addEventListener("click", (e) => {
    e.preventDefault()

    if(inputs[0].value.length < 4 || inputs[1].value.length < 4) {
      msg.classList.remove("msg-ok")
      msg.textContent = "Something seems wrong, please try again."
      msg.classList.add("msg")
    } else {
        msg.classList.remove("msg")
        msg.classList.add("msg-ok")
        msg.textContent = "Success, please, await..."

        setTimeout ( () => {
            location.href = "./main/index.html"
        }, 3500)
    }


} )