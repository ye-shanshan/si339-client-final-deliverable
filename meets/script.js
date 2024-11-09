// Below is for toggling dark mode
function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Below is for toggling high contrast mode
function contrast() {
    var element = document.body;
    element.classList.toggle("high-contrast");
}

// Below is for loading the default image
document.addEventListener("DOMContentLoaded", () => {
    const defaultImage = "../images/default_image.jpg";
    const images = document.querySelectorAll("img");
  
    images.forEach(img => {
      // Add an error event listener to each image
        img.addEventListener("error", () => {
            img.src = defaultImage;
        });
    });
});


// Below is all about the show more button
document.addEventListener("DOMContentLoaded", () => {
    const showMoreButton = document.getElementById("show-more-btn");
    const gridContainer = document.querySelector("#athlete-results");
  
    // Function to calculate the height of a single row
    function getSingleRowHeight() {
      const gridItems = gridContainer.querySelectorAll(".athlete");
      if (gridItems.length === 0) return 0; // No items available
  
      // Determine the height of one row by finding the top offset change
      const firstRowTop = gridItems[0].getBoundingClientRect().top;
      let itemsPerRow = 0;
      for (let i = 0; i < gridItems.length; i++) {
        if (gridItems[i].getBoundingClientRect().top === firstRowTop) {
          itemsPerRow++;
        } else {
          break;
        }
      }
  
      // Sum heights of items in the first row
      let rowHeight = 0;
      for (let i = 0; i < itemsPerRow; i++) {
        rowHeight = Math.max(rowHeight, gridItems[i].getBoundingClientRect().height);
      }
      return rowHeight;
    }
  
    // Set initial max-height
    const singleRowHeight = getSingleRowHeight();
    let rowsVisible = 1;
    gridContainer.style.maxHeight = `${singleRowHeight * rowsVisible}px`;
  
    // Event listener to show more rows
    showMoreButton.addEventListener("click", () => {
      rowsVisible++;
      gridContainer.style.maxHeight = `${singleRowHeight * rowsVisible}px`;
  
      // Hide the button when all rows are fully visible
      if (gridContainer.scrollHeight <= gridContainer.clientHeight) {
        showMoreButton.style.display = "none";
      }
    });
});
  