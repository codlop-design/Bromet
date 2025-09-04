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



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    grid: {
        rows: 2,
        fill: "row",
    },
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // breakpoints: {
    //     0: {
    //         slidesPerView: 1,
    //         spaceBetween: 10,
    //     },

    //     450: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     640: {
    //         slidesPerView: 2,
    //         spaceBetween: 20,
    //     },
    //     768: {
    //         slidesPerView: 3,
    //         spaceBetween: 20,
    //     },
    //     1200: {
    //         slidesPerView: 4,
    //         spaceBetween: 30,
    //     },
    // },

});

var swiper = new Swiper(".slidr_imgs", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper = new Swiper(".slidr_products", {
    slidesPerView: 2,
    spaceBetween: 10,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

});

// كاردات الفيديو بتاع المنتجات

var swiper = new Swiper(".videoes_products", {
    slidesPerView: 3,
    spaceBetween: 20,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

function getYoutubeEmbed(link) {
    let videoId = "";
    if (link.includes("youtube.com/watch?v=")) {
        videoId = link.split("v=")[1].split("&")[0];
    } else if (link.includes("youtu.be/")) {
        videoId = link.split("youtu.be/")[1].split("?")[0];
    }
    return "https://www.youtube.com/embed/" + videoId;
}

document.querySelectorAll(".video-card").forEach(card => {
    const playBtn = card.querySelector(".play-btn");
    const videoPopup = card.querySelector(".video-popup");
    const closeBtn = card.querySelector(".close-btn");
    const youtubeVideo = card.querySelector(".youtubeVideo");
    const htmlVideo = card.querySelector(".htmlVideo");
    const videoSource = card.querySelector(".videoSource");
    const thumbnail = card.querySelector(".thumbnail");

    const videoLink = card.dataset.src;

    playBtn.addEventListener('click', () => {
        thumbnail.style.display = 'none';
        playBtn.style.display = 'none';
        videoPopup.style.display = 'block';

        if (videoLink.includes("youtube.com") || videoLink.includes("youtu.be")) {
            youtubeVideo.style.display = 'block';
            htmlVideo.style.display = 'none';
            youtubeVideo.src = getYoutubeEmbed(videoLink) + "?autoplay=1";
        } else {
            htmlVideo.style.display = 'block';
            youtubeVideo.style.display = 'none';
            videoSource.src = videoLink;
            htmlVideo.load();
            htmlVideo.play();
        }
    });

    closeBtn.addEventListener('click', () => {
        videoPopup.style.display = 'none';
        thumbnail.style.display = 'block';
        playBtn.style.display = 'flex';

        youtubeVideo.src = "";
        htmlVideo.pause();
        htmlVideo.currentTime = 0;
        htmlVideo.style.display = 'none';
    });
});

const inputFile = document.getElementById("upload_img");
const previewImg = document.getElementById("preview_img");
const uploadText = document.getElementById("upload_text");
const removeBtn = document.getElementById("remove_btn");
const photoeDiv = document.getElementById("photoe_div");
inputFile.addEventListener("change", function () {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            previewImg.src = e.target.result;
            uploadText.style.display = "none";
            photoeDiv.classList.add("active");
        };

        reader.readAsDataURL(file);
    }
});

removeBtn.addEventListener("click", function () {
    previewImg.src = "assets/img/pictures.png";
    uploadText.style.display = "block";
    inputFile.value = "";
    photoeDiv.classList.remove("active");
});

document.addEventListener("click", function (e) {
    if (e.target.closest(".delet_btn")) {
        const mainContent = e.target.closest(".main_content");
        if (mainContent) {
            mainContent.remove();
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.querySelector(".sidebar_of_elment");
    const btn = document.querySelector(".itms_div.advertisment_bar");
    const closeBtn = document.querySelector(".icon_div");
    btn.addEventListener("click", () => {
        sidebar.classList.add("active");
        document.querySelectorAll(".sidebar_elemnts.active").forEach(el => {
            el.classList.remove("active");
        });
        document.querySelectorAll(".after_closing.active").forEach(el => {
            el.classList.remove("active");
        });
    });
    closeBtn.addEventListener("click", () => {
        sidebar.classList.remove("active");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".dive_elments");

    new Sortable(container, {
        animation: 150, // يخلي الحركة smooth
        handle: ".bi-justify", // يعني السحب يتم من خلال الايقونة دي بس
        ghostClass: "dragging" // كلاس بيتضاف للعنصر اللي بتسحبه
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const advertismentBtn = document.querySelector(".div_content.advertisment_content");
    const advertismentSidebar = document.querySelector(".sidebar_of_elment.advertisment_section");

    if (advertismentBtn && advertismentSidebar) {
        advertismentBtn.addEventListener("click", () => {
            advertismentSidebar.classList.add("active");
        });
    }
});