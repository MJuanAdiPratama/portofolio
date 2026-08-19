let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Fungsi untuk menyorot navbar yang aktif
window.onscroll = () => {
  let top = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
      if (activeLink) {
        activeLink.classList.add("active");
      }
    }
  });
};

// Toggle menu ketika diklik
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// =========================
// PROJECT DATA
// =========================

const projects = {
  "cake-shop": {
    title: "Cake Shop",
    category: "UI UX",
    type: "Kelompok",
    role: "UI/UX Designer",
    image: "img/project1.png",

    description:
      "Project tugas kuliah Rekayasa Perangkat Lunak yang bertujuan untuk merancang desain UI/UX sebuah platform toko kue online. Project ini bertujuan untuk menciptakan pengalaman pengguna yang menarik, nyaman, dan mempermudah pelanggan dalam mencari serta memesan kue secara online.",

    technologies: ["Figma"],

    link: "https://www.figma.com/design/0THMBQHuPY3K61F21QCagv/Cake-App?node-id=0-1&t=J4CPTgK7yFzxd8wN-1",
  },

  "store-jersey": {
    title: "Store Jersey",
    category: "UI UX",
    type: "Mandiri",
    role: "UI/UX Designer",
    image: "img/project2.png",

    description:
      "Project tugas UAS mata kuliah Desain UI/UX yang bertujuan untuk merancang sebuah platform e-commerce penjualan jersey olahraga. Platform ini dirancang untuk memberikan pengalaman pengguna yang optimal melalui navigasi yang mudah dan tampilan visual yang menarik.",

    technologies: ["Figma"],

    link: "https://www.figma.com/design/3gZLmHAjSjktPkaf5DdKog/Store-Jersey-App?node-id=0-1&t=hdBPt7tG7lkoWWCd-1",
  },

  "store-sepatu": {
    title: "Store Sepatu",
    category: "Web",
    type: "Mandiri",
    role: "Fullstack",
    image: "img/project3.png",

    description:
      "Project UAS mata kuliah Pemrograman Berbasis Web untuk membuat website ecommerce sepatu dengan fitur pencarian produk, manajemen kategori, dashboard admin dan pemesanan melalui WhatsApp.",

    technologies: ["Css", "PHP", "MySql"],

    link: "https://github.com/MJuanAdiPratama/store-sepatu",
  },

  "web-company": {
    title: "Website Company (Rans)",
    category: "Web",
    type: "Mandiri",
    role: "Frontend",
    image: "img/project4.png",

    description:
      "Project mata kuliah Perancangan Web untuk membuat website company dengan mengambil inspirasi dari RANS Entertainment. Website dirancang menggunakan Bootstrap sebagai media informasi perusahaan.",

    technologies: ["Css", "Javascript"],

    link: "https://github.com/MJuanAdiPratama/web_company.git",
  },

  "wiyata-insani": {
    title: "Yayasan Wiyata Insani",
    category: "Web",
    type: "Pengabdian Kepada Masyarakat",
    role: "Frontend",
    image: "img/project5.png",

    description:
      "Project Pengabdian Kepada Masyarakat (PKM) membuat website yayasan yang dirancang dengan CodeIgniter untuk media informasi dan pendaftaran siswa baru yang mencakup tingkat TK, SD, SMP, dan SMK.",

    technologies: ["Css", "PHP", "MySql"],

    link: "https://github.com/VanZainur/WebMitraPermata.git",
  },

  "franada-parfume": {
    title: "Franada Parfume",
    category: "Web",
    type: "Tugas Kelompok",
    role: "UI/UX Designer",
    image: "img/project6.png",

    description:
      "Project UAS Technopreneur & Manajemen Proyek membuat website UMKM yang dirancang dengan Laravel untuk media promosi Franada Parfume, menampilkan katalog produk dan informasi brand untuk memperluas jangkauan pemasaran secara digital.",

    technologies: ["PHP", "Css", "Javascript"],

    link: "https://github.com/Mifta24/Mistify.git",
  },

  "bakso-djatigiri": {
    title: "Bakso Djatigiri App",
    category: "Mobile",
    type: "Tugas Kelompok",
    role: "Frontend & UI UX",
    image: "img/project7.png",

    description:
      "Project Aplikasi Mobile UAS membuat aplikasi UMKM di Bakso Djatigiri untuk sistem kasir dan manajemen stok, dilengkapi fitur pencatatan transaksi penjualan dan pemantauan stok barang secara real-time.",

    technologies: ["Flutter", "Dart", "Firebase"],

    link: "https://github.com/ariebhewhe/globalSabtuGenap2425.git",
  },
};

// =========================
// OPEN PROJECT
// =========================

function openProject(projectId) {

  // Ambil data project berdasarkan ID
  const project = projects[projectId];

  // Jika project tidak ditemukan
  if (!project) {
    return;
  }

  // =========================
  // AMBIL ELEMENT MODAL
  // =========================

  const modal = document.getElementById("projectModal");

  const modalImage =
    document.getElementById("modalImage");

  const modalCategory =
    document.getElementById("modalCategory");

  const modalTitle =
    document.getElementById("modalTitle");

  const modalType =
    document.getElementById("modalType");

  const modalRole =
    document.getElementById("modalRole");

  const modalDescription =
    document.getElementById("modalDescription");

  const modalTechnologies =
    document.getElementById("modalTechnologies");

  const modalProjectLink =
    document.getElementById("modalProjectLink");


  // =========================
  // ISI DATA PROJECT
  // =========================

  // Gambar
  modalImage.src = project.image;
  modalImage.alt = project.title;


  // =========================
  // CATEGORY / BADGE
  // =========================

  modalCategory.textContent = project.category;

  // Hapus class badge sebelumnya
  modalCategory.classList.remove(
    "badge-uiux",
    "badge-mobile",
    "badge-web"
  );

  // Tambahkan class berdasarkan kategori
  if (project.category === "UI UX") {

    modalCategory.classList.add("badge-uiux");

  } else if (project.category === "Mobile") {

    modalCategory.classList.add("badge-mobile");

  } else if (project.category === "Web") {

    modalCategory.classList.add("badge-web");

  }


  // =========================
  // JUDUL
  // =========================

  modalTitle.textContent = project.title;


  // =========================
  // JENIS PROJECT
  // =========================

  modalType.textContent = project.type;


  // =========================
  // PERAN
  // =========================

  modalRole.textContent = project.role;


  // =========================
  // DESKRIPSI
  // =========================

  modalDescription.textContent = project.description;


  // =========================
  // TECHNOLOGIES
  // =========================

  modalTechnologies.innerHTML = "";

  project.technologies.forEach(function (technology) {

    const span = document.createElement("span");

    span.textContent = technology;

    modalTechnologies.appendChild(span);

  });


  // =========================
  // LINK PROJECT
  // =========================

  modalProjectLink.href = project.link;


  // =========================
  // TAMPILKAN MODAL
  // =========================

  modal.classList.add("active");

  // Disable scroll halaman belakang
  document.body.style.overflow = "hidden";
}


// =========================
// CLOSE PROJECT
// =========================

function closeProject() {

  const modal =
    document.getElementById("projectModal");

  // Tutup modal
  modal.classList.remove("active");

  // Aktifkan kembali scroll halaman
  document.body.style.overflow = "";
}


// =========================
// CLOSE WHEN CLICK OUTSIDE
// =========================

document
  .getElementById("projectModal")
  .addEventListener("click", function (event) {

    // Jika yang diklik adalah area background modal
    if (event.target === this) {

      closeProject();

    }

  });


// =========================
// CLOSE WITH ESC KEY
// =========================

document.addEventListener("keydown", function (event) {

  // Jika tombol yang ditekan adalah Escape
  if (event.key === "Escape") {

    closeProject();

  }
});

// =========================
// CONTACT FORM
// =========================

// URL Google Apps Script
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz2zRNIhRFYSWTkZCWg1MrdXRkwq9OwCKKpAtUBCHELRT9HntKb-hhmk5ZmfUsGH6co8Q/exec";

// =========================
// ELEMENT
// =========================

const contactForm =
  document.getElementById("contact-form");

const submitButton =
  document.getElementById("submit-btn");

const contactPopup =
  document.getElementById("contact-popup");

const popupTitle =
  document.getElementById("popup-title");

const popupMessage =
  document.getElementById("popup-message");

const popupClose =
  document.getElementById("popup-close");

const popupOk =
  document.getElementById("popup-ok");


// =========================
// OPEN POPUP
// =========================

function openContactPopup(type) {

  // Hapus class error sebelumnya
  contactPopup.classList.remove("error");


  // =========================
  // SUCCESS
  // =========================

  if (type === "success") {

    popupTitle.textContent =
      "Pesan Terkirim!";

    popupMessage.textContent =
      "Terima kasih sudah menghubungi saya. Pesan kamu berhasil dikirim.";

  }


  // =========================
  // ERROR
  // =========================

  else {

    contactPopup.classList.add("error");

    popupTitle.textContent =
      "Pesan Gagal!";

    popupMessage.textContent =
      "Maaf, pesan kamu belum berhasil dikirim. Silakan coba lagi.";

  }


  // Tampilkan popup
  contactPopup.classList.add("active");

  // Matikan scroll halaman
  document.body.style.overflow = "hidden";
}


// =========================
// CLOSE POPUP
// =========================

function closeContactPopup() {

  contactPopup.classList.remove("active");

  contactPopup.classList.remove("error");

  // Aktifkan kembali scroll
  document.body.style.overflow = "";
}


// =========================
// SUBMIT FORM
// =========================

contactForm.addEventListener(
  "submit",
  async function (event) {

    // Mencegah halaman refresh
    event.preventDefault();


    // =========================
    // VALIDASI URL
    // =========================

    if (
      !GOOGLE_SCRIPT_URL ||
      GOOGLE_SCRIPT_URL ===
        "MASUKKAN_URL_GOOGLE_APPS_SCRIPT_KAMU_DI_SINI"
    ) {

      console.error(
        "Google Apps Script URL belum diisi."
      );

      openContactPopup("error");

      return;
    }


    // =========================
    // LOADING
    // =========================

    submitButton.classList.add("loading");

    submitButton.disabled = true;


    try {

      // =========================
      // AMBIL DATA FORM
      // =========================

      const formData =
        new FormData(contactForm);


      // =========================
      // KIRIM DATA
      // =========================

      await fetch(
        GOOGLE_SCRIPT_URL,
        {
          method: "POST",

          body: formData,

          mode: "no-cors"
        }
      );


      // =========================
      // SUCCESS
      // =========================

      openContactPopup("success");


      // Kosongkan form
      contactForm.reset();


    } catch (error) {

      // =========================
      // ERROR
      // =========================

      console.error(
        "Error mengirim pesan:",
        error
      );

      openContactPopup("error");

    }


    // =========================
    // SELESAI LOADING
    // =========================

    submitButton.classList.remove("loading");

    submitButton.disabled = false;

  }
);


// =========================
// CLOSE POPUP BUTTON X
// =========================

popupClose.addEventListener(
  "click",
  function () {
    closeContactPopup();
  }
);


// =========================
// CLOSE POPUP BUTTON OKE
// =========================

popupOk.addEventListener(
  "click",
  function () {
    closeContactPopup();
  }
);


// =========================
// CLOSE CLICK OUTSIDE
// =========================

contactPopup.addEventListener(
  "click",
  function (event) {

    if (event.target === contactPopup) {
      closeContactPopup();
    }

  }
);


// =========================
// CLOSE WITH ESC
// =========================

document.addEventListener(
  "keydown",
  function (event) {

    if (
      event.key === "Escape" &&
      contactPopup.classList.contains("active")
    ) {
      closeContactPopup();
    }

  }
);