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