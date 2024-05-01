document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.querySelector(".searchInput");
    const products = document.querySelectorAll(".product");
    const sections = document.querySelectorAll(".section-name");

    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase();

        sections.forEach(section => {
            section.style.display = searchTerm ? "none" : "block";
        });

        products.forEach(product => {
            const productName = product.querySelector("h2").innerText.toLowerCase();
            if (productName.includes(searchTerm)) {
                product.style.display = "block";
            } else {
                product.style.display = "none";
            }
        });
    });
});