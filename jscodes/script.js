// ================================
// MOBILE MENU TOGGLE
// ================================

function toggleMenu() {
    const navLinks =
    document.getElementById("navLinks");
    navLinks.classList.toggle("active");
}

// ================================
// CLOSE MENU AFTER CLICKING LINK
// ================================

document
.querySelectorAll(".nav-links a")
.forEach(link => {
    link.addEventListener("click", () => {
        document
        .getElementById("navLinks")
        .classList
        .remove("active");
    });

});

// ================================
// TYPING ANIMATION
// ================================

const roles = [
    "Backend Developer",
    "Java & Spring Boot Developer",
    "Microservices Developer",
    "REST API Developer",
    "Spring Security | JWT | OAuth2"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typingElement =
document.getElementById("typing");

function typeEffect() {

    const currentRole =
    roles[roleIndex];

    if (!isDeleting) {

        typingElement.textContent =
        currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            isDeleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingElement.textContent =
        currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();

// ================================
// SCROLL REVEAL ANIMATION
// ================================

const revealElements =
document.querySelectorAll(".reveal");

const revealObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target
            .classList
            .add("active");

        }

    });

},

{
    threshold: 0.15
}

);

revealElements.forEach(element => {

    revealObserver.observe(element);

});

// ================================
// ACTIVE NAVIGATION HIGHLIGHT
// ================================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
        section.offsetTop - 120;

        const sectionHeight =
        section.clientHeight;

        if (
            pageYOffset >= sectionTop &&
            pageYOffset <
            sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");
        }
    });

    navItems.forEach(link => {

        link.classList.remove("active-link");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active-link");
        }
    });

});

// ================================
// SMOOTH SCROLLING
// ================================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
        "click",
        function(e) {

            e.preventDefault();

            const target =
            document.querySelector(
                this.getAttribute("href")
            );

            if (target) {

                window.scrollTo({

                    top:
                    target.offsetTop - 80,

                    behavior: "smooth"

                });
            }

        }
    );

});

// ================================
// HERO IMAGE PARALLAX EFFECT
// ================================

window.addEventListener(
    "mousemove",
    (event) => {

        const image =
        document.querySelector(
            ".hero-image img"
        );

        if (!image) return;

        const x =
        (window.innerWidth / 2 -
        event.pageX) / 40;

        const y =
        (window.innerHeight / 2 -
        event.pageY) / 40;

        image.style.transform =
        `rotateY(${x}deg)
         rotateX(${-y}deg)`;
    }
);

// ================================
// RESET IMAGE POSITION
// ================================

window.addEventListener(
    "mouseleave",
    () => {

        const image =
        document.querySelector(
            ".hero-image img"
        );

        if (image) {

            image.style.transform =
            "rotateY(0deg) rotateX(0deg)";
        }
    }
);

// ================================
// STATS COUNTER ANIMATION
// ================================

const statNumbers =
document.querySelectorAll(".stat-card h2");

const counterObserver =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const element =
            entry.target;

            const text =
            element.innerText;

            const targetValue =
            parseInt(text);

            if (isNaN(targetValue))
                return;

            let count = 0;

            const increment =
            Math.ceil(
                targetValue / 50
            );

            const updateCounter =
            () => {

                count += increment;

                if (
                    count >= targetValue
                ) {

                    element.innerText =
                    targetValue + "+";

                } else {

                    element.innerText =
                    count + "+";

                    requestAnimationFrame(
                        updateCounter
                    );
                }
            };

            updateCounter();

            counterObserver.unobserve(
                element
            );
        }

    });

},
{
    threshold: 0.5
}

);

statNumbers.forEach(stat => {

    if (
        stat.innerText.includes("+")
    ) {

        counterObserver.observe(stat);
    }

});

// ================================
// CURRENT YEAR IN FOOTER
// ================================

const footer =
document.querySelector("footer p");

if (footer) {

    footer.innerHTML =
    `© ${new Date().getFullYear()}
     Gowtham |
     Java & Spring Boot Developer`;
}

// ================================
// CONSOLE MESSAGE
// ================================

console.log(
    "%cPortfolio Loaded Successfully 🚀",
    "color:#f2b134;font-size:16px;font-weight:bold;"
);