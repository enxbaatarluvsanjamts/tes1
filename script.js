function sendToMessenger() {
    const message = "Tulip Tulip"; // Facebook Messenger руу илгээх текст

    // Messenger руу илгээх URL
    const messengerUrl = `https://m.me/your-messenger-id?text=${encodeURIComponent(message)}`;

    // Шинэ таб нээнэ
    window.open(messengerUrl, '_blank');
}
