function fn_ValForm() {
    var sMsg = "";

    var nameEl = document.getElementById("name");
    var emailEl = document.getElementById("email");
    var messageEl = document.getElementById("message");

    var name = nameEl ? nameEl.value.trim() : "";
    var email = emailEl ? emailEl.value.trim() : "";
    var message = messageEl ? messageEl.value.trim() : "";

    if (!name) {
        sMsg += "\n* Anda belum mengisikan nama";
    }

    if (!email) {
        sMsg += "\n* Anda belum mengisikan email";
    } else {
        // Regex berdasarkan hint (case-insensitive)
        var emailRegex = /^[a-z0-9][a-z0-9_.\-]{0,}[a-z0-9]@[a-z0-9][a-z0-9.\-]{0,}[a-z0-9]\.[a-z0-9]{2,4}$/i;
        if (!emailRegex.test(email)) {
            sMsg += "\n* Format email tidak valid";
        }
    }

    if (!message) {
        sMsg += "\n* Anda belum mengisikan pesan";
    }

    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    }

    return true;
}
