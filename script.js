// ==========================
// 要素取得
// ==========================

const header = document.getElementById("header");
const pageTop = document.getElementById("pageTop");

const fadeUps = document.querySelectorAll(".fade-up");
const slideLefts = document.querySelectorAll(".slide-left");
const slideRights = document.querySelectorAll(".slide-right");
const pops = document.querySelectorAll(".pop");
const zoom3d = document.querySelectorAll(".zoom3d");
const fadeRights = document.querySelectorAll(".fade-right");

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");



// ==========================
// スクロールアニメーション
// ==========================

function reveal() {

    const trigger = window.innerHeight * 0.85;

    fadeUps.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

    slideLefts.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

    slideRights.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

    pops.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

    zoom3d.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

    fadeRights.forEach(item => {

        if (item.getBoundingClientRect().top < trigger) {

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();



// ==========================
// ヘッダー背景変更
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("active");

    } else {

        header.classList.remove("active");

    }

});



// ==========================
// TOPへ戻るボタン
// ==========================

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        pageTop.classList.add("show");

    } else {

        pageTop.classList.remove("show");

    }

});

pageTop.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});



// ==========================
// スムーズスクロール
// ==========================

navLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



// ==========================
// メニュー現在地表示
// ==========================

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;
        const height = section.clientHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("current");

        }

    });

});



// ==========================
// TOP画像 パララックス
// ==========================

const heroImage = document.querySelector(".hero-image");

window.addEventListener("scroll", () => {

    let y = window.scrollY;

    heroImage.style.transform =
        `translateY(${y * 0.25}px) scale(1.1)`;

});



// ==========================
// FAMILYカード 遅延表示
// ==========================

const cards = document.querySelectorAll(".family-card");

cards.forEach((card, index) => {

    card.style.transitionDelay = `${index * 0.3}s`;

});



// ==========================
// 画像ホバーで少し傾く
// ==========================

const images = document.querySelectorAll("img");

images.forEach(img => {

    img.addEventListener("mousemove", e => {

        const rect = img.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = (x / rect.width - 0.5) * 12;
        const rotateX = (0.5 - y / rect.height) * 12;

        img.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             scale(1.05)`;

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "";

    });

});



// ==========================
// 読み込み時アニメーション
// ==========================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});



// ==========================
// Scroll Downクリック
// ==========================

const scrollDown = document.querySelector(".scroll-down");

if (scrollDown) {

    scrollDown.addEventListener("click", () => {

        document.querySelector("#about").scrollIntoView({

            behavior: "smooth"

        });

    });

}