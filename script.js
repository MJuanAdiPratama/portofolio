// ======================================================
// NAVIGATION / MENU
// ======================================================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// ======================================================
// ACTIVE NAVBAR SAAT SCROLL
// ======================================================

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

// ======================================================
// TOGGLE MENU
// ======================================================

if (menuIcon && navbar) {
  menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
  };
}

// ======================================================
// PROJECT DATA
// ======================================================

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

    technologies: ["Css", "PHP", "Javascript"],

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

    technologies: ["Css", "PHP", "Javascript", "MySql"],

    link: "https://github.com/VanZainur/WebMitraPermata.git",
  },

  "franada-parfume": {
    title: "Franada Parfume",
    category: "Web",
    type: "Tugas Kelompok",
    role: "UI/UX Designer",
    image: "img/project6.png",

    description:
      "Project UAS Technopreneur & Manajemen Proyek membuat website UMKM yang dirancang dengan Laravel untuk media promosi Franada Parfume dan menampilkan informasi brand untuk memperluas jangkauan pemasaran digital.",

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

// ======================================================
// OPEN PROJECT
// ======================================================

function openProject(projectId) {
  const project = projects[projectId];

  if (!project) {
    console.error("Project tidak ditemukan:", projectId);
    return;
  }

  // ====================================================
  // AMBIL ELEMENT MODAL
  // ====================================================

  const modal = document.getElementById("projectModal");

  const modalImage = document.getElementById("modalImage");

  const modalCategory = document.getElementById("modalCategory");

  const modalTitle = document.getElementById("modalTitle");

  const modalType = document.getElementById("modalType");

  const modalRole = document.getElementById("modalRole");

  const modalDescription = document.getElementById("modalDescription");

  const modalTechnologies = document.getElementById("modalTechnologies");

  const modalProjectLink = document.getElementById("modalProjectLink");

  // ====================================================
  // CEK ELEMENT
  // ====================================================

  if (
    !modal ||
    !modalImage ||
    !modalCategory ||
    !modalTitle ||
    !modalType ||
    !modalRole ||
    !modalDescription ||
    !modalTechnologies ||
    !modalProjectLink
  ) {
    console.error("Element project modal tidak lengkap.");
    return;
  }

  // ====================================================
  // ISI DATA
  // ====================================================

  // IMAGE
  modalImage.src = project.image;
  modalImage.alt = project.title;

  // CATEGORY
  modalCategory.textContent = project.category;

  modalCategory.classList.remove("badge-uiux", "badge-mobile", "badge-web");

  if (project.category === "UI UX") {
    modalCategory.classList.add("badge-uiux");
  } else if (project.category === "Mobile") {
    modalCategory.classList.add("badge-mobile");
  } else if (project.category === "Web") {
    modalCategory.classList.add("badge-web");
  }

  // TITLE
  modalTitle.textContent = project.title;

  // TYPE
  modalType.textContent = project.type;

  // ROLE
  modalRole.textContent = project.role;

  // DESCRIPTION
  modalDescription.textContent = project.description;

  // ====================================================
  // TECHNOLOGIES
  // ====================================================

  modalTechnologies.innerHTML = "";

  project.technologies.forEach(function (technology) {
    const span = document.createElement("span");

    span.textContent = technology;

    modalTechnologies.appendChild(span);
  });

  // ====================================================
  // PROJECT LINK
  // ====================================================

  modalProjectLink.href = project.link;

  modalProjectLink.target = "_blank";

  modalProjectLink.rel = "noopener noreferrer";

  // ====================================================
  // TAMPILKAN MODAL
  // ====================================================

  modal.classList.add("active");

  document.body.style.overflow = "hidden";
}

// ======================================================
// CLOSE PROJECT
// ======================================================

function closeProject() {
  const modal = document.getElementById("projectModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("active");

  document.body.style.overflow = "";
}

// ======================================================
// PROJECT MODAL EVENT
// ======================================================

document.addEventListener("DOMContentLoaded", function () {
  const projectModal = document.getElementById("projectModal");

  const projectModalClose = document.getElementById("projectModalClose");

  // CLOSE BUTTON
  if (projectModalClose) {
    projectModalClose.addEventListener("click", closeProject);
  }

  // CLICK OUTSIDE
  if (projectModal) {
    projectModal.addEventListener("click", function (event) {
      if (event.target === this) {
        closeProject();
      }
    });
  }
});

// ======================================================
// CLOSE PROJECT DENGAN ESC
// ======================================================

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const projectModal = document.getElementById("projectModal");

    if (projectModal && projectModal.classList.contains("active")) {
      closeProject();
    }
  }
});

// ======================================================
// RANDOM PROJECT
// KHUSUS INDEX.HTML
// ======================================================

function randomizeProjects() {
  const container = document.querySelector(".project-container");

  if (!container) {
    return;
  }

  // ====================================================
  // CEK HALAMAN
  // ====================================================

  const isProjectPage = window.location.pathname
    .toLowerCase()
    .includes("project.html");

  // ====================================================
  // TOMBOL VIEW ALL PROJECTS
  // ====================================================

  const viewAllButton = document.querySelector(".project-more");

  // ====================================================
  // AMBIL SEMUA CARD
  // ====================================================

  const projectCards = Array.from(container.querySelectorAll(".project-box"));

  // ====================================================
  // JIKA JUMLAH PROJECT <= 6
  // TIDAK PERLU VIEW ALL
  // ====================================================

  if (projectCards.length <= 6) {
    if (viewAllButton) {
      viewAllButton.style.display = "none";
    }
  } else {
    // Kalau project lebih dari 6,
    // tombol View All ditampilkan
    // hanya di index.html

    if (viewAllButton && !isProjectPage) {
      viewAllButton.style.display = "flex";
    }
  }

  // ====================================================
  // JIKA SEDANG DI PROJECT.HTML
  // TAMPILKAN SEMUA
  // ====================================================

  if (isProjectPage) {
    projectCards.forEach(function (project) {
      project.style.display = "";
    });

    return;
  }

  // ====================================================
  // ACAK PROJECT
  // ====================================================

  for (let i = projectCards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [projectCards[i], projectCards[randomIndex]] = [
      projectCards[randomIndex],
      projectCards[i],
    ];
  }

  // ====================================================
  // TAMPILKAN MAKSIMAL 6 PROJECT
  // ====================================================

  projectCards.forEach(function (project, index) {
    // Masukkan kembali card
    // berdasarkan urutan random

    container.appendChild(project);

    if (index < 6) {
      project.style.display = "";
    } else {
      project.style.display = "none";
    }
  });
}

// ======================================================
// CERTIFICATE DATA
// ======================================================

const certificates = {
  certificate1: {
    title: "Dasar Pemrograman Web",
    issuer: "Dicoding Indonesia",
    image: "img/sertificate1.png",
    file: "asset/Sertifikat Dicoding (Dasar Pemrograman Web).pdf",
  },

  certificate2: {
    title: "Front-End Web Pemula",
    issuer: "Dicoding Indonesia",
    image: "img/sertificate2.png",
    file: "asset/Sertifikat Dicoding (Front End Web Pemula).pdf",
  },

  certificate3: {
    title: "Dasar Pemrograman JavaScript",
    issuer: "Dicoding Indonesia",
    image: "img/sertificate3.png",
    file: "asset/Sertifikat Dicoding (Dasar Pemrograman Javascript).pdf",
  },

  certificate4: {
    title: "Dasar AI",
    issuer: "Dicoding Indonesia",
    image: "img/sertificate4.png",
    file: "asset/Sertifikat Dicoding (Dasar AI).pdf",
  },

  certificate5: {
    title: "Mikrotik VPN",
    issuer: "Webinar",
    image: "img/sertificate5.png",
    file: "asset/Sertifikat Webinar (Mikrotik VPN).pdf",
  },

  certificate6: {
    title: "Ancaman Cyber Global",
    issuer: "Universitas Gadjah Mada",
    image: "img/sertificate6.png",
    file: "asset/Sertifikat UGM (Ancaman Cyber Global).pdf",
  },

  certificate7: {
    title: "Microsoft Office Specialist",
    issuer: "Microsoft",
    image: "img/sertificate7.png",
    file: "asset/Sertifikat MOS.pdf",
  },

  certificate8: {
    title: "Test of English for International Communication",
    issuer: "TOEIC",
    image: "img/sertificate8.png",
    file: "asset/Sertifikat TOEIC.pdf",
  },

  certificate9: {
    title: "LKBB Bimantara Se-Banten",
    issuer: "LKBB Bimantara",
    image: "img/sertificate9.jpg",
    file: "asset/Sertifikat LKBB.pdf",
  },

  certificate10: {
    title: "The Difference Between UI and UX: Understanding the Core Concepts",
    issuer: "Webinar / Seminar",
    image: "img/sertificate10.png",
    file: "asset/Sertifikat NgabuburIT.pdf",
  },
};

// ======================================================
// OPEN CERTIFICATE
// ======================================================
function openCertificate(certificateId) {
  const certificate = certificates[certificateId];
  if (!certificate) {
    console.error("Certificate tidak ditemukan:", certificateId);
    return;
  }

  // ====================================================
  // AMBIL ELEMENT MODAL
  // ====================================================
  const modal = document.getElementById("certificateModal");
  const modalImage = document.getElementById("certificateModalImage");
  const modalLabel = document.getElementById("certificateModalLabel");
  const modalTitle = document.getElementById("certificateModalTitle");
  const modalIssuer = document.getElementById("certificateModalIssuer");
  const modalLink = document.getElementById("certificateModalLink");

  // ====================================================
  // CEK ELEMENT
  // ====================================================
  if (
    !modal ||
    !modalImage ||
    !modalLabel ||
    !modalTitle ||
    !modalIssuer ||
    !modalLink
  ) {
    console.error("Element certificate modal tidak lengkap.");
    return;
  }

  // ====================================================
  // ISI DATA
  // ====================================================
  modalImage.src = certificate.image;
  modalImage.alt = certificate.title;
  modalLabel.textContent = "Sertificate";
  modalTitle.textContent = certificate.title;
  modalIssuer.textContent = certificate.issuer;
  modalLink.href = certificate.file;

  // ====================================================
  // TAMPILKAN MODAL
  // ====================================================
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ======================================================
// CLOSE CERTIFICATE
// ======================================================
function closeCertificate() {
  const modal = document.getElementById("certificateModal");
  if (!modal) {
    return;
  }
  modal.classList.remove("active");
  document.body.style.overflow = "";
}

// ======================================================
// RANDOM CERTIFICATE
// KHUSUS INDEX.HTML
// ======================================================
function randomizeCertificates() {
  const container = document.querySelector(".sertificate-container");
  if (!container) {
    return;
  }

  // ====================================================
  // CEK HALAMAN
  // ====================================================
  const isCertificatePage = window.location.pathname
    .toLowerCase()
    .includes("sertificate.html");

  // ====================================================
  // TOMBOL VIEW ALL
  // ====================================================
  const viewAllButton = document.querySelector(".sertificate-more");

  // ====================================================
  // AMBIL SEMUA CARD
  // ====================================================
  const certificateCards = Array.from(
    container.querySelectorAll(".sertificate-box"),
  );

  // ====================================================
  // JIKA JUMLAH <= 6
  // SEMBUNYIKAN VIEW ALL
  // ====================================================
  if (certificateCards.length <= 6) {
    if (viewAllButton) {
      viewAllButton.style.display = "none";
    }
  } else {
    // Kalau jumlah certificate
    // lebih dari 6
    if (viewAllButton && !isCertificatePage) {
      viewAllButton.style.display = "flex";
    }
  }

  // ====================================================
  // JIKA DI SERTIFICATE.HTML
  // TAMPILKAN SEMUA
  // ====================================================
  if (isCertificatePage) {
    certificateCards.forEach(function (certificate) {
      certificate.style.display = "";
    });
    return;
  }

  // ====================================================
  // ACAK CERTIFICATE
  // ====================================================
  for (let i = certificateCards.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [certificateCards[i], certificateCards[randomIndex]] = [
      certificateCards[randomIndex],
      certificateCards[i],
    ];
  }

  // ====================================================
  // TAMPILKAN MAKSIMAL 6
  // ====================================================
  certificateCards.forEach(function (certificate, index) {
    // Masukkan kembali card
    // berdasarkan urutan random
    container.appendChild(certificate);
    if (index < 6) {
      certificate.style.display = "";
    } else {
      certificate.style.display = "none";
    }
  });
}

// ======================================================
// CERTIFICATE MODAL EVENT
// ======================================================
document.addEventListener("DOMContentLoaded", function () {
  // RANDOM PROJECT
  randomizeProjects();
  // RANDOM CERTIFICATE
  randomizeCertificates();

  // ==================================================
  // CERTIFICATE CLOSE BUTTON
  // ==================================================
  const certificateModalClose = document.getElementById(
    "certificateModalClose",
  );
  if (certificateModalClose) {
    certificateModalClose.addEventListener("click", closeCertificate);
  }

  // ==================================================
  // CERTIFICATE OK BUTTON
  // ==================================================
  const certificateModalOk = document.getElementById("certificateModalOk");
  if (certificateModalOk) {
    certificateModalOk.addEventListener("click", closeCertificate);
  }

  // ==================================================
  // CERTIFICATE CLICK OUTSIDE
  // ==================================================
  const certificateModal = document.getElementById("certificateModal");
  if (certificateModal) {
    certificateModal.addEventListener("click", function (event) {
      if (event.target === this) {
        closeCertificate();
      }
    });
  }
});

// ======================================================
// CLOSE CERTIFICATE DENGAN ESC
// ======================================================
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    const certificateModal = document.getElementById("certificateModal");
    if (certificateModal && certificateModal.classList.contains("active")) {
      closeCertificate();
    }
  }
});

// ======================================================
// CONTACT FORM
// ======================================================
// Google Apps Script URL
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbz2zRNIhRFYSWTkZCWg1MrdXRkwq9OwCKKpAtUBCHELRT9HntKb-hhmk5ZmfUsGH6co8Q/exec";

// ======================================================
// CONTACT ELEMENT
// ======================================================
const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-btn");
const contactPopup = document.getElementById("contact-popup");
const popupTitle = document.getElementById("popup-title");
const popupMessage = document.getElementById("popup-message");
const popupClose = document.getElementById("popup-close");
const popupOk = document.getElementById("popup-ok");

// ======================================================
// OPEN CONTACT POPUP
// ======================================================
function openContactPopup(type) {
  if (!contactPopup) {
    return;
  }
  // Hapus error sebelumnya
  contactPopup.classList.remove("error");

  // ====================================================
  // SUCCESS
  // ====================================================
  if (type === "success") {
    if (popupTitle) {
      popupTitle.textContent = "Pesan Terkirim!";
    }
    if (popupMessage) {
      popupMessage.textContent =
        "Terima kasih sudah menghubungi saya. Pesan kamu berhasil dikirim.";
    }
  }

  // ====================================================
  // ERROR
  // ====================================================
  else {
    contactPopup.classList.add("error");
    if (popupTitle) {
      popupTitle.textContent = "Pesan Gagal!";
    }
    if (popupMessage) {
      popupMessage.textContent =
        "Maaf, pesan kamu belum berhasil dikirim. Silakan coba lagi.";
    }
  }

  // ====================================================
  // TAMPILKAN POPUP
  // ====================================================
  contactPopup.classList.add("active");
  document.body.style.overflow = "hidden";
}

// ======================================================
// CLOSE CONTACT POPUP
// ======================================================
function closeContactPopup() {
  if (!contactPopup) {
    return;
  }
  contactPopup.classList.remove("active");
  contactPopup.classList.remove("error");
  document.body.style.overflow = "";
}

// ======================================================
// SUBMIT CONTACT FORM
// ======================================================
if (contactForm) {
  contactForm.addEventListener("submit", async function (event) {
    // Mencegah refresh
    event.preventDefault();

    // ==================================================
    // VALIDASI
    // ==================================================
    if (!GOOGLE_SCRIPT_URL || GOOGLE_SCRIPT_URL === "") {
      console.error("Google Apps Script URL belum diisi.");
      openContactPopup("error");
      return;
    }

    // ==================================================
    // LOADING
    // ==================================================
    if (submitButton) {
      submitButton.classList.add("loading");
      submitButton.disabled = true;
    }
    try {
      // ==============================================
      // AMBIL DATA FORM
      // ==============================================
      const formData = new FormData(contactForm);

      // ==============================================
      // KIRIM DATA
      // ==============================================
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors",
      });

      // ==============================================
      // SUCCESS
      // ==============================================
      openContactPopup("success");
      // Kosongkan form
      contactForm.reset();
    } catch (error) {
      console.error("Error mengirim pesan:", error);
      openContactPopup("error");
    }

    // ==================================================
    // SELESAI LOADING
    // ==================================================
    if (submitButton) {
      submitButton.classList.remove("loading");

      submitButton.disabled = false;
    }
  });
}

// ======================================================
// CONTACT POPUP - BUTTON X
// ======================================================
if (popupClose) {
  popupClose.addEventListener("click", function () {
    closeContactPopup();
  });
}

// ======================================================
// CONTACT POPUP - BUTTON OK
// ======================================================
if (popupOk) {
  popupOk.addEventListener("click", function () {
    closeContactPopup();
  });
}

// ======================================================
// CONTACT POPUP - CLICK OUTSIDE
// ======================================================
if (contactPopup) {
  contactPopup.addEventListener("click", function (event) {
    if (event.target === contactPopup) {
      closeContactPopup();
    }
  });
}

// ======================================================
// CONTACT POPUP - ESC
// ======================================================
document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    contactPopup &&
    contactPopup.classList.contains("active")
  ) {
    closeContactPopup();
  }
});
