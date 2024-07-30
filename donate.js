function selectFrequency(event) {
    // Reset previous selection
    document.getElementById('monthly').classList.remove('selected');
    document.getElementById('onetime').classList.remove('selected');

    // Set the selected class for the clicked element
    event.target.classList.add('selected');
}

function selectAmount(element) {
    // Reset previous selection
    let moneyElements = document.querySelectorAll('.money');
    moneyElements.forEach(el => el.classList.remove('selected'));

    // Set the selected class for the clicked element
    element.classList.add('selected');
}
function handleDonation() {
    // Add your donation handling logic here
    alert("Donation successful!");
}
function handleDonation() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const frequency = document.querySelector('.time span.selected').innerText;
    const amount = document.querySelector('.value span.selected').innerText;
    const addTransactionFee = document.querySelector('.confirm input').checked;

    // Make a POST request to your backend
    fetch('http://localhost:3000/donate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name,
            email,
            frequency,
            amount,
            addTransactionFee,
        }),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}