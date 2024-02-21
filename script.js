alert("Tiket Bioskop");

const nama = prompt("Masukkan nama anda : ");
const umur = prompt("Masukkan umur anda : ");

if (umur >= 13) {
  alert(`${nama}, Tidak Boleh Masuk Studio Karena Belum Cukup Umur`);
} else {
  const studio = prompt("Pilih studio A, B, atau C (Huruf Besar) : ")
  
  if (studio == "A") {
    alert(`Tiket ${nama} , Studio A, Umur ${umur} Tahun`);
  } else if (studio == "B") {
    alert(`Tiket ${nama} , Studio B, Umur ${umur} Tahun`);
  } else if (studio == "C") {
    alert(`Tiket ${nama} , Studio C, Umur ${umur} Tahun`);
  }
}
