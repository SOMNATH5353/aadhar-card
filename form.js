document.getElementById('registration-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        dob: document.getElementById('dob').value,
        gender: document.getElementById('gender').value,
        address: document.getElementById('address').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
    };

    fetch('http://localhost:7000/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
        .then(response => response.json())
        .then(data => {
            alert('Registration Successful!');
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Registration Failed. Please try again.');
        });
});
