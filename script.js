function saveToFile() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username.trim() === "" || password.trim() === "") {
        alert("Имэйл/Утас болон Нууц үгээ оруулна уу!");
        return;
    }

    let data = `Хэрэглэгч: ${username}\nНууц үг: ${password}\n\n`;

    let blob = new Blob([data], { type: "text/plain" });
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "nevtreh_medeelli.txt";
    a.click();
}
