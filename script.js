


document.addEventListener("DOMContentLoaded", () => {
    // Set animation delay for each link card
    const linkCards = document.querySelectorAll(".link-card");
    linkCards.forEach((card, index) => {
        card.style.setProperty("--index", index + 0.5);
    });
});


// Function to toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";

    // Close menu when clicking outside
    document.addEventListener("click", function closeMenuOnClickOutside(event) {
        if (!event.target.closest(".menu-container")) {
            menu.style.display = "none";
            document.removeEventListener("click", closeMenuOnClickOutside); // Remove event listener after menu is closed
        }
    });
}

// Function to hide the current page's link
document.addEventListener("DOMContentLoaded", () => {
    const currentPath = window.location.pathname;
    const menuItems = document.querySelectorAll(".menu-item");

    menuItems.forEach((item) => {
        if (currentPath.includes(item.getAttribute("data-page"))) {
            item.style.display = "none";
        }
    });
});


// Show the image preview modal
function showPreview(img) {
    const modal = document.getElementById("imagePreviewModal");
    const modalImg = document.getElementById("previewImage");

    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.classList.add("modal-open"); // Add blur to link cards
}

// Close the image preview modal
function closePreview() {
    const modal = document.getElementById("imagePreviewModal");

    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove blur from link cards
}
