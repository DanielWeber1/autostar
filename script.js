// Elementy
const pinModal = document.getElementById("pin-modal");
const pinInput = document.getElementById("pin-input");
const pinSubmit = document.getElementById("pin-submit");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

// Skrytí menu při načítání stránky
menu.classList.add("hidden");

let correctPin;

let price = 0;
let transmission_price = 0;
let color_price = 0;

// Načtení hesla ze souboru
fetch('secrets.json')
    .then(response => response.json())
    .then(data => {
        correctPin = data.correctPin;
    })
    .catch(error => {
        console.error("Chyba při načítání konfiguračního souboru:", error);
    });

// Otevření modálního okna při kliknutí na tlačítko menu
menuButton.addEventListener("click", function () {
    pinModal.style.display = "flex"; 
});

// Zavření modálního okna při kliknutí mimo něj
window.addEventListener("click", function (event) {
    if (event.target === pinModal) {
        pinModal.style.display = "none";
    }
});

// Ověření PINu
pinSubmit.addEventListener("click", function () {
    if (pinInput.value === correctPin) {
        pinModal.style.display = "none"; 
        menu.style.display = "flex"; 
    } else {
        alert("Špatný PIN!");
        pinInput.value = ""; 
    }
});

window.addEventListener("click", function (event) {
    if (event.target === menu) {
        menu.style.display = "none";
    }
});

//posouvání obrázků ve slideshow pomocí šipek
let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");

    function changeSlide(direction) {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + direction + slides.length) % slides.length;
      slides[currentSlide].classList.add("active");
    }



/////////////////////////////////////////////
//TUHLE ČÁST KÓDU BUDE MÍT KAŽDÉ AUTO JINAK//
/////////////////////////////////////////////


//změna ceny po výběru převodovky
document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[name="transmission-option"]');
    const priceDisplay = document.getElementById("total-price");
    
    
    radios.forEach(radio => {
        radio.addEventListener("change", function () {
            transmission_price = 0;
            price = 500000;
            transmission_price += parseInt(this.value, 10); // Přičteme hodnotu z radiobuttonu
            price = price + color_price + transmission_price;
            priceDisplay.textContent = price.toLocaleString("cs-CZ") + " Kč"; // Přepíšeme cenu
        });
    });
});


const redButton = document.getElementById("red");
const silverButton = document.getElementById("silver");
const blackButton = document.getElementById("black");
const priceDisplay = document.getElementById("total-price");


function updatePrice(event) 
{
    price = 500000;
    color_price = 0;
    color_price += parseInt(event.target.value, 10);
    price = price + color_price + transmission_price;
    priceDisplay.textContent = price.toLocaleString("cs-CZ") + " Kč";
}

// Přidáme event listener na všechna tlačítka
redButton.addEventListener("click", updatePrice);
silverButton.addEventListener("click", updatePrice);
blackButton.addEventListener("click", updatePrice);



