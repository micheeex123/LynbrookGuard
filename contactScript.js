document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name && email) {
        let emailList = JSON.parse(localStorage.getItem('emailList')) || [];
        emailList.push({ name: name, email: email });
        localStorage.setItem('emailList', JSON.stringify(emailList));

        alert('Thank you for submitting your email!');
        document.getElementById('contactForm').reset();
    }
});

document.getElementById('downloadBtn').addEventListener('click', function() {
    let emailList = JSON.parse(localStorage.getItem('emailList')) || [];
    let emailText = emailList.map(entry => `${entry.name}, ${entry.email}`).join('\n');
    
    let blob = new Blob([emailText], { type: 'text/plain' });
    let link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'emails.txt';
    link.click();
});
