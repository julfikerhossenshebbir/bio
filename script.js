
document.addEventListener("copy", (event) => {
    // Get the selected text by the user
    const selectedData = window.getSelection().toString();  // নির্বাচন করা টেক্সট

    // Replace the copied text with a laughing emoji
    event.clipboardData.setData("text/plain", "🤣");  // কপির জন্য ক্লিপবোর্ডে ইমোজি বসানো

    // Prevent the default copy action (the text that was originally selected)
    event.preventDefault();  // ডিফল্ট কপি কার্যকলাপ প্রতিরোধ করা
});


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
