class book {
  constructor(judul, penulis, tahunTerbit) {
    this.judul = judul;
    this.penulis = penulis;
    this.tahunTerbit = tahunTerbit;
  }
  tampilkanInfo() {
    console.log(`Judul: ${this.judul}`);
    console.log(`Penulis: ${this.penulis}`);
    console.log(`Tahun Terbit: ${this.tahunTerbit}`);
  }
}
const buku1 = new book("Harry Potter and the sorcerer's Stone", "J.K. Rowling", 1997);
const buku2 = new book("To kill a Mockingbird", `Harper Lee`, 1960);

buku1.tampilkanInfo();
buku2.tampilkanInfo();
