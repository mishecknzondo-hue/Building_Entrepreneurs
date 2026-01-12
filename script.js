// Auto-update current year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact interaction
function showMessage() {
  alert(
    "Thank you for your interest in Building Entrepreneurs.\n\n" +
    "For mentorship, business ideas, partnerships, and business plan support, please contact us:\n\n" +
    "Phone: +265 881 38 42 26\n" +
    "Email: buildingentrepreneursmw@gmail.com\n\n" +
    "We look forward to working with you."
  );
}

// CEO image modal controls
function openCeoModal() {
  document.getElementById("ceoModal").style.display = "flex";
}

function closeCeoModal() {
  document.getElementById("ceoModal").style.display = "none";
}
