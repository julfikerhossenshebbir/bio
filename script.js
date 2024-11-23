// Function to toggle menu visibility
function toggleMenu() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
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
