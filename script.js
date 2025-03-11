document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const pinModal = document.getElementById("pin-modal");
    const pinInput = document.getElementById("pin-input");
    const pinSubmit = document.getElementById("pin-submit");
    const menu = document.getElementById("menu");

    const correctPin = "1234"; // Nastavení pinu
    // Po kliknutí na tlačítko menu zobrazit modal
    menuButton.addEventListener("click", function () {
        pinModal.style.display = "flex";
    });

    // Ověření PINu
    pinSubmit.addEventListener("click", function () {
        if (pinInput.value === correctPin) {
            pinModal.style.display = "none"; // Zavřít modal
            menu.classList.toggle("hidden"); // Přepnout viditelnost menu
        } else {
            alert("Špatný PIN!");
            pinInput.value = "";
        }
    });

    // Zavření modalu při kliknutí mimo něj
    window.addEventListener("click", function (event) {
        if (event.target === pinModal) {
            pinModal.style.display = "none";
        }
    });

    // Zavření menu při kliknutí mimo
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuButton) {
            menu.classList.add("hidden");
        }
    });
});