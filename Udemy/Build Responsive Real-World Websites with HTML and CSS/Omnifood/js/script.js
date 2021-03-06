////////////////////////////////////////////////////////
// Set current year
const yearEl = document.querySelector('.year');
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

////////////////////////////////////////////////////////
// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function() {
    headerEl.classList.toggle("nav-open");
});

////////////////////////////////////////////////////////
// Smooth Scrolling animation
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault(); // Prevents default behavior
        const href = link.getAttribute("href");

        // Scroll back to top
        if(href === "#")
            window.scrollTo ({
            top:0,
            behavior: "smooth",
        });

        // Scroll to other links
        if(href !== "#" && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: "smooth"});
        }

        // Close mobile navigation
        if(link.classList.contains('nav-item-link')) {
            headerEl.classList.toggle("nav-open");
        }
    });
});

////////////////////////////////////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
    function (entries) {
        const ent = entries[0];
        console.log(ent);
        if(ent.isIntersecting === false) {
            document.body.classList.add("sticky");
        }

        if(ent.isIntersecting === true) {
            document.body.classList.remove("sticky");
        }

    },
    {
        // in the viewport
        root: null,
        // It will observe this hero section inside of the viewport
        // Basically as it moves through the viewport
        threshold: 0,
        // We will have an event as soon as 0% of the hero section
        // is inside the viewport
        rootMargin: '-80px', // So the sticky effects applies before the
        // featured section, and 80px was chosen because is the height of
        // the navigation bar
    }
);
obs.observe(sectionHeroEl);
// **
// The entire header has been taken out of flow because it is now absolutely
// positioned. In order to fix that you need to compensate for the lost
// height and add some margin to the of this header
// Add exactly the same margin as is the original height of the header


////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
    var flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    var isSupported = flex.scrollHeight === 1;
    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();