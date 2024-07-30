function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}


function submitForm() {
    // Add your logic to handle form submission, such as sending an email or storing the data.

    // For demonstration purposes, let's just alert the user.
    alert("Form submitted! We'll get in touch with you soon.");
}

function toggleAnswer(faqNumber) {
    var answer = document.getElementById("answer" + faqNumber);
    var plusSign = document.createElement("div");
    plusSign.className = "plus-sign";
    plusSign.innerHTML = "+";
    
    if (answer.style.display === "block") {
        answer.style.display = "none";
        plusSign.onclick = function() {
            toggleAnswer(faqNumber);
        };
    } else {
        answer.style.display = "block";
        plusSign.innerHTML = "-";
        plusSign.onclick = function() {
            toggleAnswer(faqNumber);
        };
    }
    
    document.querySelector(".faq-item:nth-child(" + faqNumber + ")").appendChild(plusSign);
}
