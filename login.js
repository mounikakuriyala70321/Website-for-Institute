document.querySelector('.form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get input values
    const username = document.querySelector('.input-field[type="text"]').value;
    const password = document.querySelector('.input-field[type="password"]').value;

    // Perform basic validation
    if (username === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // Check hardcoded credentials (just for demonstration)
    if (username === 'testuser' && password === 'password123') {
        alert('Login successful');
        // Redirect to another page
        window.location.href = 'login.html';
    } else {
        alert('Incorrect username or password');
    }
});