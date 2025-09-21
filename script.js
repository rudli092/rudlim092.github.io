// (FUNCTION PILIHAN KOMPUTER) pilihan komputer
function getPilihanComputer() {
  const comp = Math.random();
  if (comp < 0.34) return "gajah";
  if (comp >= 0.34 && comp < 0.67) return "orang";
  return "semut";
}

// (MENENTUKAN RULES) rules/aturan
function getHasil(comp, player) {
  if (player == comp) return "SERI!";
  if (player == "gajah") return comp == "orang" ? "MENANG!" : "KALAH!";
  if (player == "orang") return comp == "gajah" ? "KALAH!" : "MENANG!";
  if (player == "semut") return comp == "orang" ? "KALAH" : "MENANG!";
}

// (ANIMASI PUTAR) membuat komputer berfikir
function putar() {
  const imgComputer = document.querySelector(".img-komputer");
  const gambar = ["gajah", "semut", "orang"];
  const waktuMulai = new Date().getTime();
  let i = 0;
  setInterval(function () {
    if (new Date().getTime() - waktuMulai > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "img/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

// (CARA DI BAWAH YANG EFEKTIF)
const pilihan = document.querySelectorAll("li img");
pilihan.forEach(function (pil) {
  pil.addEventListener("click", function () {
    const pilihanComputer = getPilihanComputer();
    const pilihanPlayer = pil.className;
    const hasil = getHasil(pilihanComputer, pilihanPlayer);
    // (MEMANGGIL) memanggil fungsi putar
    putar();

    // (MENUNGGU 1 DETIK) menunggu putaran baru pilihan komputer masuk
    setTimeout(function () {
      const imgComputer = document.querySelector(".img-komputer");
      imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
      const info = document.querySelector(".info");
      info.innerHTML = hasil;
    }, 1000);
  });
});

// (CARA DI BAWAH KURANG EFEKTIF)
// (MEMANGGIL ELEMENT) pada html & bisa di clik (img.gajah)
// const pGajah = document.querySelector(".gajah");
// pGajah.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pGajah.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   // mengambil nilia class imgKomputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   //   mengambil nilai class info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// // (MEMANGGIL ELEMENT) pada html & bisa di clik (img.orang)
// const pOrang = document.querySelector(".orang");
// pOrang.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pOrang.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   // mengambil nilia class imgKomputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   //   mengambil nilai class info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
// // (MEMANGGIL ELEMENT) pada html & bisa di clik (img.semut)
// const pSemut = document.querySelector(".semut");
// pSemut.addEventListener("click", function () {
//   const pilihanComputer = getPilihanComputer();
//   const pilihanPlayer = pSemut.className;
//   const hasil = getHasil(pilihanComputer, pilihanPlayer);
//   // mengambil nilia class imgKomputer
//   const imgComputer = document.querySelector(".img-komputer");
//   imgComputer.setAttribute("src", "img/" + pilihanComputer + ".png");
//   //   mengambil nilai class info
//   const info = document.querySelector(".info");
//   info.innerHTML = hasil;
// });
