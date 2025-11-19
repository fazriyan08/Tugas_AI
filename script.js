// script.js

// -- JS: Sticky Navbar --
window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.style.position = 'fixed';
    navbar.style.top = '0';
    navbar.style.width = '100%';
    navbar.style.zIndex = '1000';
  } else {
    navbar.style.position = 'relative';
  }
});

// -- JS: Order Button Function --
document.getElementById('orderBtn').addEventListener('click', function () {
  alert('Terima kasih! Silakan hubungi kami untuk pemesanan.');
  // Atau bisa diarahkan ke bagian kontak jika tersedia
  // window.location.href = "#kontak";
});

// -- JS: Menu Toggle Function --
const toggleButtons = document.querySelectorAll('.toggleDetail');
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    const detail = button.nextElementSibling;
    detail.classList.toggle('hidden');
  });
});