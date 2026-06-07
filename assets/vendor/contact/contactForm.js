document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let service = document.getElementById("service").value;
    let message = document.getElementById("message").value;

    let whatsappNumber = "923333983684";

    let text =
`*New Portfolio Inquiry*

👤 Name: ${name}
📧 Email: ${email}
🛠 Service: ${service}

💬 Message:
${message}`;

    let url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    this.reset();
});