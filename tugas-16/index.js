class country {
  constructor(country, capitalCity) {
    this.country = country;
    this.capitalCity = capitalCity;
  }
}
let usa = new country("usa", "washington D.C");

let indonesia = new country("indonesia", "jakarta");
console.log(usa, indonesia);

class siswa {
  constructor(nama, kelas, jurusan, nisn, aktif) {
    this.name = nama;
    this.grade = kelas;
    this.major = jurusan;
    this.id = nisn;
    this.active = aktif;
  }
  test(mapel) {
    const mapels = ["matematika", "bahasa inggris", "bahasa indonesia"];
    return (mapel = mapel >= 0 && mapel <= mapels.length ? `${this.name} dengan nisn ${this.id} lagi ujian ${mapels[mapel]}` : "error");
  }
  come() {
    return `${this.name} datang ke sekolah`;
  }
}

let faiz = new siswa("M Faiz farelza", "XI-PPLG 2", "PPLG", 123178, true);
let ridho = new siswa("ridho alfath", "XI-PPLG 2", "PPLG", 1196127, true);
console.log(faiz.test(1));
console.log(ridho.come());
