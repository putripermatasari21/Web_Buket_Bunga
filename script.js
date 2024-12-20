window.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
  })

  const menuBtn = document.querySelector('.menu-btn')
  const navigation = document.querySelector('.navigation')
  const navigationItems = document.querySelectorAll('.navigation a')

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active')
    navigation.classList.toggle('active')
  })

  navigationItems.forEach(navItem => {
    navItem.addEventListener('click', () => {
      menuBtn.classList.remove('active')
      navigation.classList.remove('active')
    })
  })

  const scrollBtn = document.querySelector('.scrollToTop-btn')
  window.addEventListener('scroll', () => {
    scrollBtn.classList.toggle('active', window.scrollY > 500)
  })
  scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  })


  window.addEventListener('scroll', () => {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i< reveals.length; i++) {
      let windowHeight = window.innerHeight;
      let revealTop = reveals[i].getBoundingClientRect().top;
      let revealPoint = 50;

      if(revealTop < windowHeight - revealPoint) {
        reveals[i].classList.add('active')
      }
    }
  })
})

document.addEventListener("DOMContentLoaded", function () {
  const productSelect = document.getElementById("product-select");
  const quantityInput = document.getElementById("quantity");
  const totalOutput = document.getElementById("total");

  // Fungsi untuk menghitung total harga
  function calculateTotal() {
    const selectedOption = productSelect.value.split(",");
    const price = parseFloat(selectedOption[0]); // Harga dasar
    const discountRate = parseFloat(selectedOption[1]); // Diskon dalam bentuk desimal
    const quantity = parseInt(quantityInput.value);

    if (quantity < 1) {
      totalOutput.textContent = "0";
      return;
    }

    const discountedPrice = price * (1 - discountRate); // Harga setelah diskon
    const totalPrice = discountedPrice * quantity; // Total harga berdasarkan kuantitas

    totalOutput.textContent = totalPrice.toLocaleString(); // Tampilkan dengan format lokal
  }

  // Event listener untuk mendeteksi perubahan pada produk atau jumlah
  productSelect.addEventListener("change", calculateTotal);
  quantityInput.addEventListener("input", calculateTotal);

  // Jalankan fungsi perhitungan awal
  calculateTotal();
});