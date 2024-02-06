alert("Selamat Datang di Ticket App \n Yang bisa masuk hanya umur 13 tahun keatas ");

const umur = prompt("Masukan umur anda");

if(umur >= 13) {
    const studio = prompt("Masukkan studio yang ingin anda pesan \n A : Studio A \n B : Studio B \n C : Studio C");
   
    if (studio == "A" || studio == "B" || studio == "C") {
        const film = prompt("pilih film \n 1 : Pengabdi setan \n 2 : Agak Lain \n 3 : Milea");

        let namaFilm;
        if (film == "1") {
            namaFilm = "Pengabdi setan";
        } else if (film == "2") {
            namaFilm = "Agak Lain";
        } else if (film ==  "3") {
            namaFilm = "Milea";
        }

        if (film == "1" || film == "2" || film == "3") {
            const nama = prompt("Masukan nama anda");

            alert(`BERIKUT TIKET ANDA!! \n Nama : ${nama} \n Umur : ${umur} \n Studio : ${studio} \n Film : ${namaFilm}`);
    } else {
        alert("Maaf film yang anda pilih tidak tersedia");
    }
} else {
    alert("Anda harus memilih studio");
}
} else {
    alert("Maaf tidak bisa masuk, umur anda dibawah 13 tahun");
}

