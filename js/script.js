// Toggle Menu Functionality
document.getElementById("menubtn").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("scale-y-0");
  mobileMenu.classList.toggle("scale-y-100");
});

const showMoreBtn = document.getElementById('show-more-btn');
const extraCards = document.getElementById('extra-cards');

showMoreBtn.addEventListener('click', () => {
  // Tampilkan atau sembunyikan extra cards
  extraCards.classList.toggle('hidden');
  
  // Tambahkan animasi scale-y
  if (extraCards.classList.contains('hidden')) {
    extraCards.classList.remove('scale-y-100');
    extraCards.classList.add('scale-y-0');
    showMoreBtn.textContent = 'Lihat Lebih Lanjut';
  } else {
    extraCards.classList.remove('scale-y-0');
    extraCards.classList.add('scale-y-100');
    showMoreBtn.textContent = 'Tampilkan Lebih Sedikit';
  }
});

function toggleAnswer(button) {
      const answerDiv = button.closest('.question').querySelector('.answer');
      
      if (answerDiv.style.height) {
        // If already open, hide it
        answerDiv.style.height = null;
      } else {
        // Get the full height of the content and set it
        const fullHeight = answerDiv.scrollHeight + "px";
        answerDiv.style.height = fullHeight;
      }
    }

    // function scrollLeft() {
    //         document.getElementById('carousel').scrollBy({
    //             left: -200,
    //             behavior: 'smooth'
    //         });
    //     }

    //     function scrollRight() {
    //         document.getElementById('carousel').scrollBy({
    //             left: 200,
    //             behavior: 'smooth'
    //         });
    //     }

   

