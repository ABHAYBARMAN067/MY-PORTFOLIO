// Set current year
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Theme toggle
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;
    
    // Check saved theme
// Check saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  document.body.setAttribute('data-theme', 'dark');
  themeBtn.textContent = '☀️ THEME';
  themeBtn.style.color = 'white';
} else {
  themeBtn.textContent = '🌙 THEME';
  themeBtn.style.color = 'black';
}

themeBtn.addEventListener('click', function() {
  if (body.getAttribute('data-theme') === 'dark') {
    body.removeAttribute('data-theme');
    themeBtn.textContent = '🌙 THEME';
    themeBtn.style.color = 'black';
    localStorage.setItem('theme', 'light');
  } else {
    body.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️ THEME';
    themeBtn.style.color = 'white';
    localStorage.setItem('theme', 'dark');
  }
});

    // Navigation
    const navLinks = document.querySelectorAll('nav a');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Remove active class from all links
        navLinks.forEach(l => l.classList.remove('active'));
        
        // Add active class to clicked link
        this.classList.add('active');
        
        // Smooth scroll to section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
          targetSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
    
    // Character counter for message
    const messageTextarea = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    
    messageTextarea.addEventListener('input', function() {
      charCount.textContent = this.value.length;
    });
    
    // Form submission
    const contactForm = document.getElementById('contactForm');
    const formResult = document.getElementById('formResult');
    
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Simple validation
      const name = this.name.value.trim();
      const email = this.email.value.trim();
      const subject = this.subject.value.trim();
      const message = this.message.value.trim();
      
      if (!name || !email || !subject || !message) {
        formResult.textContent = 'Please fill all required fields.';
        formResult.style.color = 'red';
        return;
      }
      
      // Show success message (demo)
      formResult.textContent = 'Thank you! Your message has been sent. (Demo)';
      formResult.style.color = 'green';
      
      // Reset form
      this.reset();
      charCount.textContent = '0';
    });
    
    // Update active nav on scroll
    window.addEventListener('scroll', function() {
      const sections = document.querySelectorAll('section[id]');
      const scrollPos = window.scrollY + 100;
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
          navLinks.forEach(link => link.classList.remove('active'));
          const activeLink = document.querySelector(`nav a[href="#${sectionId}"]`);
          if (activeLink) {
            activeLink.classList.add('active');
          }
        }
      });
    });