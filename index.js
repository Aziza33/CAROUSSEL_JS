// sélectionne toutes les slides du slider
const slides = document.querySelectorAll('.slider-slide');

// sélectionne le bouton "précédent"
const prevBtn = document.querySelector('.slider-prev');

// sélectionne le bouton "suivant"
const nextBtn = document.querySelector('.slider-next');

// sélectionne tous les boutons "Générique" dans chaque slide
const buttons = document.querySelectorAll('.btn');

// index actuel de la slide affichée
let index = 0;

/**
 * Fonction pour afficher la slide d'index i
 * et cacher toutes les autres
 */
function showSlide(i) {
  slides.forEach((slide, index) => {
    if (index === i) {
      // si c'est la slide demandée → on la rend visible
      slide.classList.remove('hidden');
    } else {
      // sinon → on la cache
      slide.classList.add('hidden');
    }
  });
}

// écouteur sur le bouton "suivant"
nextBtn.addEventListener('click', () => {
  index++; // on avance d'une slide
  if (index >= slides.length) {
    index = 0; // si on dépasse la dernière, on revient à la première
  }
  showSlide(index); // on met à jour l'affichage
});

// écouteur sur le bouton "précédent"
prevBtn.addEventListener('click', () => {
  index--; // on recule d'une slide
  if (index < 0) {
    index = slides.length - 1; // si on dépasse la première, on revient à la dernière
  }
  showSlide(index); // on met à jour l'affichage
});

/**
 * écouteurs sur les boutons "Générique"
 * pour jouer ou arrêter la musique associée à la slide
 */
buttons.forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault(); // empêche le lien de naviguer

    // on récupère la slide parente du bouton cliqué
    const slide = button.closest('.slider-slide');

    // on sélectionne l'élément audio à l'intérieur de cette slide
    const audio = slide.querySelector('.audio');

    if (audio.paused) {
      // si la musique est en pause → on la joue
      audio.play();
    } else {
      // sinon → on l'arrête et revient au début
      audio.pause();
      audio.currentTime = 0;
    }
  });
});

// afficher la première slide au chargement
showSlide(index);
