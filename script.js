// Ensure elements exist before adding listeners
const hamburger = document.querySelector(".hamburger");
const sidebar = document.getElementById("sidebar");
const cartSidebar = document.getElementById("cart-sidebar");
const overlay = document.getElementById("overlay");
const cartCount = document.getElementById("cart-count");
const totalPriceEl = document.getElementById("total-price");
const cartItemsContainer = document.getElementById("cart-items-container");

let cart = [];

// 1. Open/Close Cart Sidebar
function toggleCart() {
    // If mobile menu is open, close it first
    if (sidebar && sidebar.classList.contains("active")) {
        sidebar.classList.remove("active");
        if (hamburger) hamburger.classList.remove("active");
    }

    if (cartSidebar) {
        cartSidebar.classList.toggle("active");
        if (overlay) overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    }
}

// 2. Mobile Sidebar Toggle
if (hamburger) {
    hamburger.addEventListener("click", () => {
        // If cart is open, close it first
        if (cartSidebar && cartSidebar.classList.contains("active")) {
            cartSidebar.classList.remove("active");
        }

        hamburger.classList.toggle("active");
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
        document.body.classList.toggle("no-scroll");
    });
}

// 3. Overlay click closes everything
if (overlay) {
    overlay.addEventListener("click", () => {
        if (hamburger) hamburger.classList.remove("active");
        if (sidebar) sidebar.classList.remove("active");
        if (cartSidebar) cartSidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.classList.remove("no-scroll");
    });
}

// 4. Cart Logic


// 3. HOME DROPDOWN TOGGLE (CARET CLICK)
// Specifically handles showing/hiding Home 2 and rotating the arrow
// if (homeCaret) {
//   homeCaret.addEventListener("click", (e) => {
//     e.preventDefault();
//     e.stopPropagation(); // Prevents click from bubbling up

//     homeDropdown.classList.toggle("open");
//     homeCaret.classList.toggle("rotate");
//   });
// }
// 4. CLOSE SIDEBAR (OVERLAY CLICK)

// overlay.addEventListener("click", () => {
//   hamburger.classList.remove("active");
//   sidebar.classList.remove("active");
//   overlay.classList.remove("active");
//   document.body.classList.remove("no-scroll");
// });

// Drop Down
// 5)) DROP DOWN TOGGLE LOGIC (DROPDOWN ICON CLICK)
// const dropdown = document.querySelector(".dropdown");
// const dropToggle = document.querySelector(".drop-toggle");

// dropToggle.addEventListener("click", function (e) {
//   e.preventDefault();
//   e.stopPropagation();
//   dropdown.classList.toggle("active");
// });

// // Close dropdown when clicking outside
// window.addEventListener("click", function () {
//   dropdown.classList.remove("active");
// });

// End

// data target count

// const initTrendingCounters = () => {
//   const trendingSection = document.querySelector(".trending-section");
//   const counters = document.querySelectorAll(".view-count");

//   if (!trendingSection || counters.length === 0) return;

//   const formatNumber = (num) => {
//     return Math.floor(num)
//       .toString()
//       .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//   };

//   const startCounting = () => {
//     counters.forEach((counter) => {
//       const target = +counter.getAttribute("data-target");
//       let countObj = { value: 0 };

//       gsap.to(countObj, {
//         value: target,
//         duration: 10,
//         ease: "power1.out",
//         onUpdate: () => {
//           counter.innerText = formatNumber(countObj.value);
//         },
//         onComplete: () => {
//           counter.innerText = formatNumber(target);
//         },
//       });
//     });
//   };

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           startCounting();
//           observer.unobserve(entry.target);
//         }
//       });
//     },
//     { threshold: 0.2 },
//   );

//   observer.observe(trendingSection);
// };

// document.addEventListener("DOMContentLoaded", initTrendingCounters);
