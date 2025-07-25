const name = document.getElementById("name");
const password = document.getElementById("password");
const button = document.getElementById("button");
const popup = document.getElementById("pop-up");
const gagal = document.getElementById("gagal");
const textSalah = document.getElementById("text-salah");
const closeBtn = document.getElementById("x");

const data = [
  { name: "Nusaima Amniah", password: "12345678" },
  { name: "Nusai Bebek", password: "Nusai Pendek" }
];

const loadingText = document.getElementById("loading");
let dots = 0;
setInterval(() => {
  dots = (dots + 1) % 4;
  loadingText.innerText = "LOADING" + ".".repeat(dots);
}, 500);

function showPopup(message) {
  textSalah.innerText = message;
  gagal.classList.add("active");
}

closeBtn.addEventListener("click", () => {
  gagal.classList.remove("active");
});

button.addEventListener("click", () => {
  const nameInput = name.value.trim();
  const passwordInput = password.value.trim();

  // Validasi form kosong
  if (!nameInput && !passwordInput) {
    showPopup("Nama dan Password wajib diisi");
    return;
  } else if (!nameInput) {
    showPopup("Nama wajib diisi");
    return;
  } else if (!passwordInput) {
    showPopup("Password wajib diisi");
    return;
  }

  // Validasi akun spesial
  if (nameInput === "Nusaima Amniah" && passwordInput === "12345678") {
    showPopup("SALAH, COBA TANYA PACAR LU");
    return;
  }

  if (nameInput === "Nusai Bebek" && passwordInput === "Nusai Pendek") {
    popup.classList.add("active");
    setTimeout(() => {
      popup.classList.remove("active");
      window.location.href = "../login/login.html";
    }, 3000);
    return;
  }

  const namaValid = data.some(d => d.name === nameInput);
  const passValid = data.some(d => d.password === passwordInput);

  if (!namaValid && !passValid) {
    showPopup("NAMA DAN PASSWORD SALAH");
  } else if (!namaValid) {
    showPopup("NAMA SALAH");
  } else if (!passValid) {
    showPopup("PASSWORD SALAH");
  }
});
