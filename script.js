// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you for contacting us! We'll get back to you soon.");
  this.reset();
});

// Add to Cart
let cartCount = 0;
const cartDisplay = document.getElementById("cart-count");

document.querySelectorAll(".add-cart").forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;
    alert("Cake added to cart!");
  });
});
