// loadHeaderFooter.js
function loadFile(filePath, elementId) {
    fetch(filePath)
      .then(response => {
        return response.text();
      })
      .then(data => {
        document.getElementById(elementId).innerHTML = data;
      });
  }
  
  // Load header and footer into the corresponding divs
  document.addEventListener("DOMContentLoaded", function() {
    loadFile("header.html", "header-placeholder");
    loadFile("footer.html", "footer-placeholder");
  });
  