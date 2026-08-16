/* =====================================================
   MOBILE MENU
===================================================== */

const menuToggle =
    document.getElementById("menuToggle");

const navLinks =
    document.getElementById("navLinks");


menuToggle.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});



/* Close menu after clicking a link */

document
    .querySelectorAll(".nav-links a")
    .forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

        });

    });



/* =====================================================
   SCROLL REVEAL
===================================================== */

const reveals =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


reveals.forEach(element => {

    revealObserver.observe(element);

});



/* =====================================================
   NAVBAR GLASS EFFECT
===================================================== */

const navbar =
    document.querySelector(".glass-nav");


window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.style.background =
            "rgba(255,255,255,0.65)";

        navbar.style.boxShadow =
            "0 18px 50px rgba(90,70,110,0.12)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,0.43)";

        navbar.style.boxShadow =
            "0 20px 60px rgba(103,83,135,0.10)";

    }

});



/* =====================================================
   LIQUID BACKGROUND MOUSE MOVEMENT
===================================================== */

const orbs =
    document.querySelectorAll(".orb");


window.addEventListener("mousemove", event => {

    const x =
        (event.clientX / window.innerWidth - 0.5)
        * 20;

    const y =
        (event.clientY / window.innerHeight - 0.5)
        * 20;


    orbs.forEach((orb, index) => {

        const movement =
            (index + 1) * 0.15;

        orb.style.marginLeft =
            `${x * movement}px`;

        orb.style.marginTop =
            `${y * movement}px`;

    });

});