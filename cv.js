    window.addEventListener("load", () => {
        document.querySelector(".main").classList.remove("hidden");
        document.querySelector(".home-section").classList.add("active");
        document.querySelector(".page-loader").classList.add("fade-out");
        setTimeout(() => {
            document.querySelector(".page-loader").style.display = "none";
        }, 600);
    });

/* ------ Toggle Navbar ------- */ 
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});

function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}

function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

/* --------------------- Active ----------------------*/ 
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if (e.target.classList.contains("nav-item")) {
            toggleNavbar();
        } else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0, 0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        }, 500);  
    } 
});

/* --------------------- About Tabs --------------------- */
const tabsContainer = document.querySelector(".about-tabs");
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("tab-item") && !e.target.classList.contains("active")) {
           tabsContainer.querySelector(".active").classList.remove("active");
            e.target.classList.add("active");
            const target = e.target.getAttribute("data-target");
            aboutSection.querySelector(".tab-content.active").classList.remove("active");
            aboutSection.querySelector(target).classList.add("active");
    }
});    

/* --------------------- Portfolio --------------------- */

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("view-project-btn")) {
        togglePortfolioPopup();
        document.querySelector(".portfolio-popup").scrollTo(0, 0);
        portfolioItemDetails(e.target.parentElement);
    }
});
function togglePortfolioPopup() {
    document.querySelector(".portfolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling")
    document.querySelector(".main").classList.toggle("fade-out")
}        
document.querySelector(".pp-close").addEventListener("click", togglePortfolioPopup);

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("pp-inner")) {
        togglePortfolioPopup();
    }
})
function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp-thumbnail img").src = 
    portfolioItem.querySelector(".portfolio-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".portfolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".portfolio-item-details").innerHTML;
}

// --------------------- Filter --------------------- */
document.addEventListener("DOMContentLoaded", () => {
    const texts = ["UI & UX Designer", "Front End Development", "Back End Development"];
    const typingText = document.getElementById("typing-text");
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[textIndex];
        if (!isDeleting && charIndex <= currentText.length) {
            // Menambahkan karakter satu per satu
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex++;
            setTimeout(type, 150); // Kecepatan mengetik
        } else if (isDeleting && charIndex >= 0) {
            // Menghapus karakter satu per satu
            typingText.textContent = currentText.substring(0, charIndex);
            charIndex--;
            setTimeout(type, 100); // Kecepatan menghapus
        } else {
            // Beralih antara mengetik dan menghapus
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, 1000); // Jeda sebelum menghapus
            } else {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length; // Pindah ke teks berikutnya
                setTimeout(type, 500); // Jeda sebelum mengetik teks berikutnya
            }
        }
    }

    type();
});