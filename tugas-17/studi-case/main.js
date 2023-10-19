class manusia {
  constructor(nama, umur, jenisKelamin, status) {
    this.nama = nama;
    this.umur = umur;
    this.jenisKelamin = jenisKelamin;
    this.status = status;
  }
  dataDiri() {
    return `Halo!, Perkenalkan nama saya ${this.nama}. Saya merupakan seorang ${this.jenisKelamin} berusia ${this.umur} tahun. Saat ini saya adalah seorang ${this.status}`;
  }
}
let manusia1 = new manusia("Muhamat Faissal", 17, "Laki-laki", "Siswa");
console.log(manusia1.dataDiri());
