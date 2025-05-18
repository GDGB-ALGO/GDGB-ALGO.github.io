document.addEventListener('DOMContentLoaded', function() {
    // Get all section headings from the main content
    const headings = document.querySelectorAll('main h2[id], main h3[id], main h4[id]');
    // Get all sidebar links, specifically targeting Docsy's TOC links
    const sidebarLinks = document.querySelectorAll('.td-sidebar-nav__section-title a, .td-sidebar-link__page');
    
    function updatePositions() {
        return Array.from(headings).map(heading => ({
            id: heading.id,
            top: heading.getBoundingClientRect().top + window.pageYOffset - 100
        }));
    }

    let sectionPositions = updatePositions();
    
    // Update positions when window is resized
    window.addEventListener('resize', () => {
        sectionPositions = updatePositions();
    });

    // Handle scroll events
    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;

        // Find the current section
        let currentSectionId = '';
        
        // Iterate through positions in reverse to find the last section we've scrolled past
        for (let i = sectionPositions.length - 1; i >= 0; i--) {
            if (scrollPosition >= sectionPositions[i].top) {
                currentSectionId = sectionPositions[i].id;
                break;
            }
        }

        // Update active state in sidebar
        sidebarLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href && href.includes('#')) {
                const linkId = href.split('#')[1];
                if (linkId === currentSectionId) {
                    link.classList.add('active');
                    // Also highlight parent sections if any
                    let parent = link.closest('.td-sidebar-nav__section');
                    while (parent) {
                        const parentLink = parent.querySelector('a');
                        if (parentLink) parentLink.classList.add('active');
                        parent = parent.parentElement.closest('.td-sidebar-nav__section');
                    }
                } else {
                    link.classList.remove('active');
                }
            }
        });
    });
}); 