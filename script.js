// აქ არის სურათის ატვირთვის ჯავასკრიფტი
// img upload
const dropZone = document.getElementById("dropZone");
const fileInput = document.getElementById("fileInput");
const previewWrapper = document.getElementById("previewWrapper");
const uploadIcon = document.getElementById("uploadIcon");
const ddText = document.getElementById("ddText");

// Click to open file picker
dropZone.addEventListener("click", () => fileInput.click());

// File selected
fileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  handleFile(file);
});

// Drag & Drop
dropZone.addEventListener("dragover", (e) => {
  e.preventDefault();
});
dropZone.addEventListener("drop", (e) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  handleFile(file);
});

function handleFile(file) {
  if (!file || !file.type.startsWith("image/"))
    return alert("გთხოვთ აირჩიოთ სურათი.");

  const reader = new FileReader();
  reader.onload = (e) => {
    showPreview(e.target.result);
  };
  reader.readAsDataURL(file);
}

function showPreview(dataUrl) {
  // წინა preview მთლიანად წაშლა
  previewWrapper.innerHTML = "";

  // ახალი სურათი
  const img = document.createElement("img");
  img.src = dataUrl;
  img.className = "preview_image";

  // previewWrapper-ში დამატება
  previewWrapper.appendChild(img);

  // დამალვა ძირითადი icon და ტექსტი
  uploadIcon.style.display = "none";
  ddText.style.display = "none";
}

function showPreview(dataUrl) {
  // წინა preview მთლიანად წაშლა
  previewWrapper.innerHTML = "";

  // ახალი სურათი
  const img = document.createElement("img");
  img.src = dataUrl;
  img.className = "preview_image";

  // Remove ღილაკი
  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.className = "removeBtn";
  removeBtn.addEventListener("click", () => clearPreview());

  // Change ღილაკი
  const changeBtn = document.createElement("button");
  changeBtn.textContent = "Change";
  changeBtn.className = "changeBtn";
  changeBtn.addEventListener("click", () => fileInput.click());

  // previewWrapper-ში დამატება
  previewWrapper.appendChild(img);
  previewWrapper.appendChild(removeBtn);
  previewWrapper.appendChild(changeBtn);

  // სურათის ატვირთვის შემდეგ ღილაკები გამოჩნდება
  removeBtn.style.visibility = "visible";
  changeBtn.style.visibility = "visible";

  // დამალვა ძირითადი icon და ტექსტი
  uploadIcon.style.display = "none";
  ddText.style.display = "none";
}

// სურათის წაშლა
function clearPreview() {
  previewWrapper.innerHTML = "";
  fileInput.value = "";
  uploadIcon.style.display = "block";
  ddText.style.display = "block";
}

const SubmitBtn = document.querySelector("#submit");
const H1 = document.querySelector("#H1");
const nameInput = document.querySelector("#name");
const HeaderParagrap = document.querySelector("#HeaderParagrap");
const formSection = document.querySelector(".form_section");
const uploadyourphoto = document.querySelector(".upload_your_photo");
const H2 = document.querySelector(".h2");
const linebottommobiletablet = document.querySelector(
  ".line_bottom_mobile_tablet"
);

SubmitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  formSection.style.display = "none";
  dropZone.style.display = "none";
  uploadyourphoto.style.display = "none";
  H2.style.display = "none";
  linebottommobiletablet.style.marginTop = "400px";

  const fullName = nameInput.value.trim();

  // H1-ის შეცვლა
  if (fullName) {
    H1.innerHTML = `Congrats, <span class="gradient-text">${fullName}</span>!Your ticket is ready.`;
  } else {
    H1.textContent = "Fill The Blank!";
  }

  const emailInput = document.querySelector("#email");
  const email = emailInput.value.trim();
  if (email) {
    HeaderParagrap.innerHTML = `We've emailed your ticket to <span style="color: orangered;">${email}</span> and will send updates in the run up to the event.`;
  } else {
    HeaderParagrap.textContent = "No email provided";
  }

  const TicketDiv = document.querySelector(".ticket");
  TicketDiv.style.display = "block";

  // დღევანდელი რიცხვის გამოჩენა
  const DATE = document.querySelector(".new_date");

  const today = new Date(); // შექმენი ახალი Date ობიექტი (მიმდინარე დრო)
  const day = String(today.getDate()).padStart(2, "0"); // დღე
  const month = String(today.getMonth() + 1).padStart(2, "0"); // თვე (0–დან იწყება)
  const year = today.getFullYear(); // წელი

  DATE.textContent = `${day}.${month}.${year}`; // ფორმატი: DD.MM.YYYY

  const IMGdiv = document.querySelector(".IMG_div");
  const ticketIMGfullname = document.querySelector(".ticket_IMG_fullname");
  const ticketIMGgithub = document.querySelector(".ticket_IMG_github");

  const uploadedImg = previewWrapper.querySelector("img");

  if (uploadedImg) {
    IMGdiv.appendChild(uploadedImg); // გადავიტანთ IMG_div-ში
    uploadedImg.hidden = false; // სურათის ჩვენება
  }

  if (fullName) {
    ticketIMGfullname.textContent = fullName; // ჩასვა ticket-ის fullname ელემენტში
  } else {
    ticketIMGfullname.textContent = "Full name not provided";
  }

  const githubInput = document.querySelector("#github");

  const githubUsername = githubInput.value.trim();

  if (githubUsername) {
    ticketIMGgithub.textContent = githubUsername; // ჩასვა ticket-ში
  } else {
    ticketIMGgithub.textContent = "GitHub username not provided";
  }
});
