// Mobile menu toggle
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle")
  const mobileMenu = document.getElementById("mobile-menu")

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden")
  })

  // Close mobile menu when clicking on a link
  const mobileLinks = mobileMenu.querySelectorAll("a")
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden")
    })
  })

  // Add scroll animation for navigation links
  const navLinks = document.querySelectorAll("header a")
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()
      const targetId = this.getAttribute("href")
      const targetSection = document.querySelector(targetId)

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 80,
          behavior: "smooth",
        })
      }
    })
  })

  // Add scroll reveal animation
  const revealElements = document.querySelectorAll(".skill-card, .project-card")

  function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8

    revealElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top

      if (elementTop < triggerBottom) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      } else {
        element.style.opacity = "0"
        element.style.transform = "translateY(20px)"
      }
    })
  }

  // Set initial state
  revealElements.forEach((element) => {
    element.style.opacity = "0"
    element.style.transform = "translateY(20px)"
    element.style.transition = "opacity 0.5s ease, transform 0.5s ease"
  })

  // Check on load and scroll
  window.addEventListener("load", checkReveal)
  window.addEventListener("scroll", checkReveal)

  // Form validation
  const contactForm = document.querySelector("#contact form")
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const nameInput = document.getElementById("name")
      const emailInput = document.getElementById("email")
      const messageInput = document.getElementById("message")

      let isValid = true

      if (!nameInput.value.trim()) {
        isValid = false
        nameInput.classList.add("border-red-500")
      } else {
        nameInput.classList.remove("border-red-500")
      }

      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false
        emailInput.classList.add("border-red-500")
      } else {
        emailInput.classList.remove("border-red-500")
      }

      if (!messageInput.value.trim()) {
        isValid = false
        messageInput.classList.add("border-red-500")
      } else {
        messageInput.classList.remove("border-red-500")
      }

      if (isValid) {
        // Here you would typically send the form data to a server
        alert("Message sent successfully!")
        contactForm.reset()
      }
    })
  }

  function isValidEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
})
