

document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click menu
});


document.onkeydown = function (e) {
    // F12 key
    if (e.keyCode == 123) {
      e.preventDefault();
    }
    // Ctrl+Shift+I (DevTools open)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
      e.preventDefault();
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && e.keyCode == 85) {
      e.preventDefault();
    }
    // Ctrl+Shift+J (DevTools)
    if (e.ctrlKey && e.shiftKey && e.keyCode == 74) {
      e.preventDefault();
    }
    // Other keys (optional, just in case)
    if (e.keyCode == 18) { // Disable the Alt key
      e.preventDefault();
    }
  };

  // Disable the F12 and other dev tool keys on page load
  window.onload = function () {
    document.onkeydown = function (e) {
      if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && (e.keyCode == 73 || e.keyCode == 74))) {
        e.preventDefault();
      }
    };
  };