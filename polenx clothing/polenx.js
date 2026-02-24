const sider = document.querySelector(".sider");
const menu = document.querySelector(".brand-content");
const links = document.querySelectorAll(".brand-content a");

sider.style.cursor = "pointer";

sider.addEventListener("click", toggleMenu);

function toggleMenu(e) {
    e.stopPropagation(); // important
    menu.classList.toggle("active");
    document.body.style.overflow = menu.classList.contains("active")
        ? "hidden"
        : "auto";
}

function closeMenu() {
    menu.classList.remove("active");
    document.body.style.overflow = "auto";
}

links.forEach(link => {
    link.addEventListener("click", closeMenu);
});

// Outside click pe menu band ho
document.addEventListener("click", function (e) {
    if (!menu.contains(e.target) && !sider.contains(e.target)) {
        closeMenu();
    }
});
function addToCart(name, price, image) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // product already exist hai ya nahi
    let existingProduct = cart.find(item => item.name === name);

    if (existingProduct) {
        existingProduct.qty += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            qty: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart 🛒");
}
