// Elementy
const pinModal = document.getElementById("pin-modal");
const pinInput = document.getElementById("pin-input");
const pinSubmit = document.getElementById("pin-submit");
const menu = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");

// Skrytí menu při načítání stránky
menu.classList.add("hidden");

let correctPin;

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
    pinModal.style.display = "block"; 
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
        menu.classList.remove("hidden"); 
    } else {
        alert("Špatný PIN!");
        pinInput.value = ""; 
    }
});