


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


function showPreview(img) {
    const modal = document.getElementById("imagePreviewModal");
    const modalImg = document.getElementById("previewImage");

    modal.style.display = "flex"; // Use flexbox for centering
    modalImg.src = img.src;

    // Add animation classes
    modal.classList.add("fade-in");
    modalImg.classList.add("zoom-in");

    document.body.classList.add("modal-open"); // Add blur to link cards

    // Close the modal on outside click
    modal.addEventListener("click", (event) => {
        if (event.target === modal) {
            closePreview();
        }
    });
}

function closePreview() {
    const modal = document.getElementById("imagePreviewModal");

    // Remove animation classes before hiding the modal
    modal.classList.remove("fade-in");
    document.getElementById("previewImage").classList.remove("zoom-in");

    modal.style.display = "none";
    document.body.classList.remove("modal-open"); // Remove blur from link cards
}



  document.addEventListener('contextmenu', function(e) {
      e.preventDefault();
  });


  document.addEventListener('keydown', function(e) {
      if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.key === 's' || e.key === 'S')) {
          e.preventDefault();
          alert("View source is disabled!");
      }
  });
