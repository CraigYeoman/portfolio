const SendMail = (e) => {
    e.preventDefault();
    const parent = document.getElementById("email-notification")
    const notification = document.createElement("h3")
    notification.classList.add("mil-up", "mil-mb-30")
    let params = {
        from_name : document.getElementById("user_name").value,
        user_email : document.getElementById("user_email").value,
        message : document.getElementById("message").value,
    }
    emailjs.send("service_bajsnu7", "template_lddnyjk", params).then(function(response) {
        const content = document.createTextNode("Message Sent");
        notification.appendChild(content)
        parent.appendChild(notification)
     }, function(error) {
        const content = document.createTextNode("Message Error");
        notification.appendChild(content)
        parent.appendChild(notification)
    })
}