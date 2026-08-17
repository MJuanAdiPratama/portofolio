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
    type: "Tugas Kelompok",
    role: "UI/UX Designer",
    image: "img/project1.png",

    description:
      "Project tugas kuliah yang dilakukan secara berkelompok untuk merancang desain UI/UX sebuah platform toko kue online. Project ini bertujuan untuk menciptakan pengalaman pengguna yang menarik, nyaman, dan mempermudah pelanggan dalam mencari serta memesan kue secara online.",

    technologies: ["Figma"],

    link: "https://www.figma.com/design/0THMBQHuPY3K61F21QCagv/Cake-App?node-id=0-1&t=J4CPTgK7yFzxd8wN-1",
  },

  "news-app": {
    title: "News App",
    category: "Mobile",
    type: "Tugas Kelompok",
    role: "UI/UX Designer",
    image: "img/project2.png",

    description:
      "Project tugas kuliah yang dilakukan secara berkelompok untuk mengembangkan aplikasi berita menggunakan Flutter dan API. Aplikasi ini dibuat untuk membantu pengguna membaca dan mendapatkan informasi berita terbaru dengan lebih mudah.",

    technologies: ["Flutter", "Dart", "API"],

    link: "https://drive.google.com/file/d/1ffZJbuTrjfFK8ZHB_cELgGxM-m4A8-l9/view?usp=sharing",
  },

  "store-jersey": {
    title: "Store Jersey",
    category: "UI UX",
    type: "Tugas Mandiri",
    role: "UI/UX Designer",
    image: "img/project3.png",

    description:
      "Project tugas UAS mata kuliah Desain UI/UX yang bertujuan untuk merancang sebuah platform e-commerce penjualan jersey olahraga. Platform ini dirancang untuk memberikan pengalaman pengguna yang optimal melalui navigasi yang mudah dan tampilan visual yang menarik.",

    technologies: ["Figma"],

    link: "https://www.figma.com/design/3gZLmHAjSjktPkaf5DdKog/Store-Jersey-App?node-id=0-1&t=hdBPt7tG7lkoWWCd-1",
  },

  "web-rans": {
    title: "Website Rans",
    category: "Web",
    type: "Tugas Mandiri",
    role: "Frontend",
    image: "img/project4.png",

    description:
      "Project tugas kuliah mata kuliah Pemrograman Berbasis Web untuk membuat website company dengan mengambil inspirasi dari RANS Entertainment. Website dirancang sebagai media informasi perusahaan dengan tampilan modern, menarik, dan responsif.",

    technologies: ["Figma"],

    link: "https://www.figma.com/design/3gZLmHAjSjktPkaf5DdKog/Store-Jersey-App?node-id=0-1&t=hdBPt7tG7lkoWWCd-1",
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
