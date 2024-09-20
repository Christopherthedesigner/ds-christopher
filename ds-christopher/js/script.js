let hoverTimeout; // To store the timeout ID for hover
let currentIndex = 1; // Start with the first slide
const totalSlides = 4; // Total number of slides

// Select elements
const thumbnails = document.querySelectorAll('.card-wrapper div');
const contentTitle = document.querySelector('.content-title');

// Function to handle thumbnail clicks
function currentSlide(index) {
    currentIndex = index;
    updateWrapper();
}

// Function to handle navigation (prev/next) with hover and click
function changeSlide(direction) {
    currentIndex += direction;
    if (currentIndex > totalSlides) {
        currentIndex = 1; // Loop back to the first slide
    } else if (currentIndex < 1) {
        currentIndex = totalSlides; // Loop back to the last slide
    }
    updateWrapper();
}

// Function to update the main wrapper content
function updateWrapper() {
    const content = {
        1: {
            backgroundImage: "url('assets/img/slider-two.png')",
            title: "CHAT GPT & <br>DS IRIS SYSTEM",
            description: "DS Automobiles integriert als erste Marke in Europa den intelligenten Onboard <br> Assistenten ChatGPT..."
        },
        2: {
            backgroundImage: "url('assets/img/slider-three.jpg')",
            title: "EIN IN NAPPALEDER <br>GEHÜLLTER INNENRAUM",
            description: "Eleganz bis ins kleinste Detail: Der Innenraum der DS Modelle zeichnet sich durch <br> raffinierte Oberflächen und hochwertige Materialien..."
        },
        3: {
            backgroundImage: "url('assets/img/slider-four.png')",
            title: "POLSTERUNG IM<br> BRACELET-FINISH",
            description: "Unsere Sattler haben den Innenraum der DS Modelle mit Nappaleder, <br> einem ansprchsvollen Vollnarbenleder veredelt..."
        },
        4: {
            backgroundImage: "url('assets/img/slider-five.png')",
            title: "PERLSTICH <br> ZIERNÄHTE",
            description: "Dieses Detail, das sich auf den Nähten unserer Leder wiederfindet und einer Folge von Perlen ähnelt, entspringt der Fantasie unserer Polsterer..."
        }
    };

    const slideData = content[currentIndex];

    // Update the main wrapper with the selected content
    document.querySelector('.main-wrapper').style.backgroundImage = slideData.backgroundImage;
    document.querySelector('.sliding-title').innerHTML = slideData.title;
    document.querySelector('.description').innerHTML = slideData.description;

    // Handle the active class on thumbnails
    document.querySelectorAll('.card').forEach(card => card.classList.remove('active'));
    document.querySelector(`#card-${currentIndex}`).classList.add('active');

    // Show or hide content-title based on slide index
    if (currentIndex === 1) {
        contentTitle.style.display = 'block'; // Show content-title for slide 1
    } else {
        contentTitle.style.display = 'none';  // Hide content-title for all other slides
    }
}

// Add hover event listeners to navigation buttons
document.querySelector('.prev').addEventListener('mouseenter', () => {
    hoverTimeout = setTimeout(() => changeSlide(-1), 1000); // Change slide after 1 second
});

document.querySelector('.prev').addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout); // Clear timeout if hover is removed
});

document.querySelector('.next').addEventListener('mouseenter', () => {
    hoverTimeout = setTimeout(() => changeSlide(1), 1000); // Change slide after 1 second
});

document.querySelector('.next').addEventListener('mouseleave', () => {
    clearTimeout(hoverTimeout); // Clear timeout if hover is removed
});

// Handle thumbnail clicks
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        // Update the current index based on clicked thumbnail
        const index = parseInt(thumbnail.id.replace('card-', ''));
        currentSlide(index);
    });
});


const prevBtn = document.getElementsByClassName('prev')[0];
const nextBtn = document.getElementsByClassName('next')[0];

// Add event listeners to the buttons
prev.addEventListener('click', () => {
  console.log('Prev button clicked');
  // Add your previous slide logic here
});

next.addEventListener('click', () => {
  console.log('Next button clicked');
  // Add your next slide logic here
});


function setFullHeight() {
    const element = document.querySelector('.full-height');
    if (element) {
      element.style.height = `${window.innerHeight}vh`;
    }
  }
  
  // Set height on load
  window.addEventListener('load', setFullHeight);
  // Update height on resize
  window.addEventListener('resize', setFullHeight);
  