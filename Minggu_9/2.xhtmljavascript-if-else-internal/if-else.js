function showIfElsePopup() {
    var iage = parseInt(prompt("Masukkan umur Anda:", "0"), 10);
    if (isNaN(iage)) {
        alert("Umur tidak valid. Mohon masukkan angka.");
        return;
    }
    var sMF = (prompt("Masukkan jenis kelamin Anda (M/F):", "M") || "").toUpperCase();

    if (iage >= 18) {
        if (sMF === "M") {
            alert("Anda adalah pria dewasa.");
        } else {
            alert("Anda adalah wanita dewasa.");
        }
    } else {
        if (sMF === "M") {
            alert("Anda adalah pria di bawah umur.");
        } else {
            alert("Anda adalah wanita di bawah umur.");
        }
    }
}


