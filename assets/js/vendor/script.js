document.addEventListener("DOMContentLoaded", function () {
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })
});


const menu = document.querySelector(".itms_menue");
const btnVertical = document.querySelector(".btn_vertical");

// عناصر
const sidebar = document.querySelector(".sidebar_elemnts");
const btnAdd = document.querySelector(".btn_add");
const btnClose = document.querySelector(".btn_close");
const overlay = document.querySelector(".after_closing");

// زرار vertical → يخفي الاتنين
btnVertical.addEventListener("click", () => {
    menu.classList.toggle("hidden"); // إخفاء/إظهار itms_menue
    sidebar.classList.remove("active"); // دايمًا اخفي sidebar
    overlay.classList.remove("active"); // اخفي الـ overlay كمان
});

// إظهار (زرار إضافة عنصر)
btnAdd.addEventListener("click", () => {
    sidebar.classList.add("active");
    overlay.classList.add("active");
});

// إخفاء (زرار X)
btnClose.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});

// إخفاء (الضغط على الـ overlay)
overlay.addEventListener("click", () => {
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
});