const images = [
    "IMG/aurora-borealis-4038299_640.jpg",
    "IMG/beach-666122_640.jpg",
    "IMG/lake-3686566_640.jpg"
];

const image = document.getElementById("img");
const btnNext = document.getElementById("btnNext");
const btnPrev = document.getElementById("btnPrev");

let currentIndex = 0;
image.src = images[currentIndex];

// bouton Next
btnNext.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    image.src = images[currentIndex];
});

// bouton Previous
btnPrev.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    image.src = images[currentIndex];
});



// const images = [
//     'https://www.google.com/search?sca_esv=65195bb55683de65&rlz=1C1CHBD_frFR1029FR1030&sxsrf=AE3TifOmXlDniQK-NZY9l5NG_ERsl_POEA:1751956979082&q=images&udm=2&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQ_pbg5bWizQs3A_kIenjtcpTTqBUdyVgzq0c3_k8z34GUa4Q_jiUQNh5K5XfwsFj1JlsgDwnS6F9uJOn6Vp7K2HZtT5LULhH94JKrGo2j1UkJ_2N5qinJWzS-26CJdpT-aJY9xBc1tMfHZ-nHWKProRdA6bPR3umSWBHs4qx9u4tAGm08&sa=X&ved=2ahUKEwjMqJmr1KyOAxWvQaQEHYDuOtoQtKgLKAF6BAgREAE&biw=1280&bih=551&dpr=1.5#vhid=-mNI5DBCB_iEPM&vssid=mosaic', 
//     'https://www.google.com/search?sca_esv=65195bb55683de65&rlz=1C1CHBD_frFR1029FR1030&sxsrf=AE3TifOmXlDniQK-NZY9l5NG_ERsl_POEA:1751956979082&q=images&udm=2&fbs=AIIjpHx4nJjfGojPVHhEACUHPiMQ_pbg5bWizQs3A_kIenjtcpTTqBUdyVgzq0c3_k8z34GUa4Q_jiUQNh5K5XfwsFj1JlsgDwnS6F9uJOn6Vp7K2HZtT5LULhH94JKrGo2j1UkJ_2N5qinJWzS-26CJdpT-aJY9xBc1tMfHZ-nHWKProRdA6bPR3umSWBHs4qx9u4tAGm08&sa=X&ved=2ahUKEwjMqJmr1KyOAxWvQaQEHYDuOtoQtKgLKAF6BAgREAE&biw=1280&bih=551&dpr=1.5#vhid=CrOySSr_QbfSsM&vssid=mosaic'
// ];
// const btnPrev = document.querySelector('.btnPrev');

// const images = [
//     "IMG/aurora-borealis-4038299_640.jpg",
//     "IMG/beach-666122_640.jpg",
//     "IMG/lake-3686566_640.jpg"
// ];

// const image = document.getElementById("img");
// image.src = images[0];

// console.log(images);
// let currentIndex = 0;
// let button = document.getElementById('btn');
// button.addEventListener("click", ()=> {
//     currentIndex = (currentIndex + 1) % images.length;
// });
// image.src = images[currentIndex];

// console.log(slides);
// function afficher(i){
//     slides.forEach((slide, index) => { 
//         if (index === i){
//             slide.classList.remove('hidden');
//         }else{
//             slide.classList.add('hidden');
//         }
//     })
// };
// afficher();

// document.querySelector('#add').addEventListener('click', function(){
//     document.body.innerHTML = `<div class="img"></div>`;
// });


// function showSlide(i){
// slides.forEach((slide, index) => {
//     if (index === i){
//        slide.classList.remove('hidden');
//     //    return slide;
//     }else{
//         slide.classList.add('hidden');
//     }
//     });
// };
// showSlide(i);
