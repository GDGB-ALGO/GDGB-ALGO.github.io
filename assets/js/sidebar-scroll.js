document.addEventListener('DOMContentLoaded', function() {
    // Get all section headings
    const headings = document.querySelectorAll('h2[id], h3[id]');
    // Get all sidebar links
    const sidebarLinks = document.querySelectorAll('.td-sidebar-nav a');
    
    // Create an IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Remove active class from all links
                sidebarLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                // Find and activate corresponding sidebar link
                const id = entry.target.id;
                const correspondingLink = document.querySelector(`.td-sidebar-nav a[href*="${id}"]`);
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    }, {
        rootMargin: '-20% 0px -80% 0px' // Adjust these values to change when the active state triggers
    });

    // Observe all section headings
    headings.forEach(heading => observer.observe(heading));
}); 