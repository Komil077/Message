let MessageSendButton = document.querySelector(".message-send")
let MessageForm = document.querySelector(".message-form")
let textAreaMessage = document.querySelector(".message-text")
let messageList = document.querySelector(".message-list")


MessageSendButton.onclick = function (event) {
    event.preventDefault();

    let newLiElement = document.createElement("li")
    newLiElement.classList.add("message-item")
    newLiElement.classList.add("sent")

    let textElement = document.createElement("p")
    textElement.classList.add("message-paragrif")

    textElement.textContent = textAreaMessage.value

    newLiElement.appendChild(textElement)
    messageList.appendChild(newLiElement)
    textAreaMessage.value = ""

};