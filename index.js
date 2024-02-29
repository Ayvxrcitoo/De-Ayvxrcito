const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabía que dirías que sí jaja. Es broma, en realidad, pienso que eres una persona encantadora e interesante. Quería hacerte este pequeño gesto para alegrarte el día. Te aprecio mucho, Aiza. Haría cualquier cosa para verte feliz y contemplar esa hermosa sonrisa.')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})