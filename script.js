document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll on CTA button click
    const ctaButton = document.getElementById("ctaButton");
    ctaButton.addEventListener("click", function() {
      const featuresSection = document.getElementById("features");
      window.scrollTo({
        top: featuresSection.offsetTop,
        behavior: "smooth"
      });
    });
  
    // Handle contact form submission
    const contactForm = document.getElementById("contactForm");
    contactForm.addEventListener("submit", function(e) {
      e.preventDefault(); // Prevent default form submission
      
      // Retrieve form data (for demonstration only)
      const name = this.name.value;
      const email = this.email.value;
      const message = this.message.value;
  
      // Alert the user (replace this logic with actual backend submission if needed)
      alert("Thank you, " + name + "! Your message has been received.");
  
      // Reset the form after submission
      this.reset();
    });
  });
  