document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Формын анхдагч үйлдлийг зогсооно

    const username = document.getElementById('username').value; // Нэвтрэх нэр
    const password = document.getElementById('password').value; // Нууц үг

    // Сервер руу илгээх
    fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Амжилттай хадгаллаа:', data);
        // Хэрэглэгчдэд амжилттай хадгалсан тухай мэдэгдэл үзүүлэх боломжтой
    })
    .catch((error) => {
        console.error('Алдаа:', error);
    });
});
