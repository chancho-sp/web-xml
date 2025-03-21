/**
* semanas.js - JavaScript functionality for weekly content pages
* Provides code highlighting, interactive elements, and UI enhancements
*/

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    initCodeHighlighting();
    initDetailsElements();
    setupScrollToTop();
    setupNavigationHighlight();
});

/**
* Code syntax highlighting
* Applies syntax highlighting to all code blocks
*/
function initCodeHighlighting() {
    // Check if a syntax highlighting library is already loaded
    if (window.Prism) {
        Prism.highlightAll();
    } else if (window.hljs) {
        document.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    } else {
        // Fallback basic highlighting if no library is present
        document.querySelectorAll('pre code').forEach((block) => {
            applyBasicHighlighting(block);
        });
    }
}

/**
* Basic syntax highlighting fallback
* Simple XML syntax highlighting without external dependencies
*/
function applyBasicHighlighting(codeBlock) {
    if (!codeBlock.classList.contains('xml') && !codeBlock.classList.contains('language-xml')) {
        return; // Only apply to XML blocks
    }
    
    let html = codeBlock.innerHTML;
    
    // Highlight tags
    html = html.replace(/(&lt;[\/]?[a-zA-Z0-9:]+(?:\s+[a-zA-Z0-9:]+="[^"]*")*\s*[\/]?&gt;)/g, '<span class="tag">$1</span>');
    
    // Highlight attributes
    html = html.replace(/(\s+[a-zA-Z0-9:]+)=("[^"]*")/g, '<span class="attr-name">$1</span>=<span class="attr-value">$2</span>');
    
    // Highlight comments
    html = html.replace(/(&lt;!--[\s\S]*?--&gt;)/g, '<span class="comment">$1</span>');
    
    // Highlight DTD elements
    html = html.replace(/(&lt;!DOCTYPE[\s\S]*?&gt;)/g, '<span class="doctype">$1</span>');
    
    codeBlock.innerHTML = html;
}

/**
* Details/summary element functionality
* Enhances the built-in details/summary elements
*/
function initDetailsElements() {
    const detailsElements = document.querySelectorAll('details');
    
    // Add toggle event listeners
    detailsElements.forEach((details) => {
        const summary = details.querySelector('summary');
        
        if (summary) {
            // Add expand/collapse indicators
            summary.classList.add('has-indicator');
            
            // Toggle animation
            details.addEventListener('toggle', function() {
                const content = this.querySelector(':not(summary)');
                if (content) {
                    if (this.open) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        summary.classList.add('is-open');
                    } else {
                        content.style.maxHeight = '0';
                        summary.classList.remove('is-open');
                    }
                }
            });
        }
    });
    
    // Initialize "open all" and "close all" buttons if they exist
    const openAllBtn = document.getElementById('open-all-details');
    const closeAllBtn = document.getElementById('close-all-details');
    
    if (openAllBtn) {
        openAllBtn.addEventListener('click', function() {
            detailsElements.forEach(details => details.setAttribute('open', ''));
        });
    }
    
    if (closeAllBtn) {
        closeAllBtn.addEventListener('click', function() {
            detailsElements.forEach(details => details.removeAttribute('open'));
        });
    }
}

/**
* Setup scroll to top functionality
*/
function setupScrollToTop() {
    // Create the button if it doesn't exist
    let scrollButton = document.getElementById('scroll-to-top');
    
    if (!scrollButton) {
        scrollButton = document.createElement('button');
        scrollButton.id = 'scroll-to-top';
        scrollButton.innerHTML = '↑';
        scrollButton.title = 'Volver arriba';
        scrollButton.classList.add('scroll-to-top');
        document.body.appendChild(scrollButton);
    }
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollButton.classList.add('visible');
        } else {
            scrollButton.classList.remove('visible');
        }
    });
    
    // Scroll to top when clicked
    scrollButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
* Highlight current section in navigation
*/
function setupNavigationHighlight() {
    const navLinks = document.querySelectorAll('nav a');
    
    // Highlight active navigation item
    navLinks.forEach(link => {
        if (link.href === window.location.href || 
            window.location.href.indexOf(link.href) === 0) {
            link.classList.add('active');
        }
    });
    
    // Setup section navigation if table of contents exists
    const tocLinks = document.querySelectorAll('.table-of-contents a');
    
    if (tocLinks.length > 0) {
        // Get all section headings
        const headings = document.querySelectorAll('h2, h3');
        const headingPositions = [];
        
        // Get positions of all headings
        headings.forEach(heading => {
            headingPositions.push({
                id: heading.id,
                position: heading.getBoundingClientRect().top + window.pageYOffset
            });
        });
        
        // Update active section on scroll
        window.addEventListener('scroll', function() {
            const scrollPosition = window.scrollY + 100;
            
            // Find current section
            let currentSection = headingPositions[0]?.id;
            
            for (const section of headingPositions) {
                if (section.position <= scrollPosition) {
                    currentSection = section.id;
                } else {
                    break;
                }
            }
            
            // Update active link
            tocLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + currentSection) {
                    link.classList.add('active');
                }
            });
        });
    }
}

/**
* Add smooth scrolling to anchor links
*/
document.addEventListener('click', function(event) {
    if (event.target.tagName === 'A' && event.target.getAttribute('href').startsWith('#')) {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Offset for fixed header
                behavior: 'smooth'
            });
            
            // Update URL without reloading page
            history.pushState(null, null, '#' + targetId);
        }
    }
});

