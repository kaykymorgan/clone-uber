document.addEventListener("DOMContentLoaded", function() {
    const hamburguerBtn = document.getElementById("hamburguer-btn");
    const closeBtn = document.getElementById("close");
    const menuMobile = document.getElementById("menu-mobile");

    hamburguerBtn.addEventListener("click", function() {
        menuMobile.classList.add("open");
    });

    closeBtn.addEventListener("click", function() {
        menuMobile.classList.remove("open");
    });
});

