/*
Consegna:
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata.
Milestone 0:
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l'immagine grande in modo da poter stilare lo slider.
Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce verso sinistra o destra, l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso sinistra.
BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.
*/

const images = [
    {
    name: "carlini in sicilia",
    description: "i carlini hanno visto una cuccia in sicilia.. sonnellino di 40 ore",
    photo: "assets/img/1.jpeg"
},
    {
    name: "carlini a Roma",
    description: "i carlini hanno visto una cuccia a Roma.. sonnellino di 12 ore",
    photo: "assets/img/2.jpeg"
},
    {
    name: "carlini a Parigi",
    description: "i carlini hanno visto una cuccia a Parigi.. sonnellino di 20 ore",
    photo: "assets/img/3.jpeg"
},
    {
    name: "carlini a New York",
    description: "i carlini hanno visto una cuccia a New York.. è stato difficile fare il sonnellino, troppa confusione",
    photo: "assets/img/4.jpeg"
},
    {
    name: "carlini ad Agra",
    description: "i carlini hanno visto una cuccia ad Agra.. hanno trovato un amico, che già dormiva",
    photo: "assets/img/5.jpeg"
},
    {
    name: "carlini a Londra",
    description: "i carlini ed il loro nuovo amico hanno visto una cuccia a Londra.. sta diventando difficile fare i sonnellini in 5 in una cuccia",
    photo: "assets/img/6.jpeg" 
}
];

console.log( images );

const carousel = document.getElementById('carousel');
        const thumbnails = document.getElementById('thumbnails');

        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.classList.add(index === 0 ? 'active' : 'inactive');

            const img = document.createElement('img');
            img.src = image.photo;

            const caption = document.createElement('div');
            caption.classList.add('image-caption');
            caption.innerHTML = `<h4>${image.name}</h4><p>${image.description}</p>`;

            item.appendChild(img);
            item.appendChild(caption);
            carousel.appendChild(item);

            const thumbnail = document.createElement('img');
            thumbnail.src = image.photo;
            thumbnail.classList.add('thumbnail');
            thumbnail.addEventListener('click', () => {
                setActiveImage(index);
            });
            thumbnails.appendChild(thumbnail);
        });

        const arrowLeft = document.createElement('div');
        arrowLeft.classList.add('arrow', 'arrow-left');
        arrowLeft.innerHTML = '<';
        arrowLeft.addEventListener('click', () => {
            setActiveImage((activeIndex - 1 + images.length) % images.length);
        });
        carousel.appendChild(arrowLeft);

        const arrowRight = document.createElement('div');
        arrowRight.classList.add('arrow', 'arrow-right');
        arrowRight.innerHTML = '>';
        arrowRight.addEventListener('click', () => {
            setActiveImage((activeIndex + 1) % images.length);
        });
        carousel.appendChild(arrowRight);

        let activeIndex = 0;
        function setActiveImage(index) {
            const items = document.querySelectorAll('.carousel-item');
            items[activeIndex].classList.remove('active');
            items[activeIndex].classList.add('inactive');

            activeIndex = index;

            items[activeIndex].classList.remove('inactive');
            items[activeIndex].classList.add('active');
        }

        setInterval(() => {
            setActiveImage((activeIndex + 1) % images.length);
        }, 3000);