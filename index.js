    alert("This is my portfolio websites"); 
 // Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// Sticky navbar on scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// Project data
const projects = [
    {
        title: "Clone",
        description: "This is a login page clone.",
        technologies: ["HTML", "CSS",],
        image: "Clone.png",
        liveLink: "#",
        codeLink: "https://github.com/ShaikhTashif/chapter-3.git"
    },
    {
        title: "AIML",
        description: "This is my AIML project's I'm completed Python in ML journey to Explore multiple work.",
        technologies: ["Python", ],
        image: "project's.png",
        liveLink:"#",
        codeLink: "https://github.com/ShaikhTashif/AIML-.git"
    },
    {
        title: "Tic_Tac_Teo Game",
        description: "This is a Game in X O X to XXX and OOO Vin the Game and not support in oxo other worng condition.",
        technologies: ["HTML", "CSS", "JavaScript"],
        image: "Tic_Tac_Toe.jpg",
        liveLink:"",
        codeLink: "https://github.com/ShaikhTashif/chapter-2.git"
    }
];

// Render projects
const projectsGrid = document.querySelector('.projects-grid');

projects.forEach(project => {
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    
    projectCard.innerHTML = `
        <div class="project-img">
            <img src="${project.image}" alt="${project.title}">
        </div>
        <div class="project-info">
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-links">
                <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i> Live Demo</a>
                <a href="${project.codeLink}" target="_blank"><i class="fab fa-github"></i> View Code</a>
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
});

        const button = document.getElementById('myButton');
        
        // Click event handler
        button.addEventListener('click', function() {
            // Toggle a 'clicked' class
            this.classList.toggle('Clicked');
            
            // Change button text
            if (this.classList.contains('clicked')) {
                this.textContent = 'clicked me';
            } else {
                this.textContent = 'CV';
            }
            
            // Alternatively, perform some action
            console.log('Button was clicked!');
        });
        
        // You can also add other event listeners
        button.addEventListener('mouseover', function() {
            console.log('Mouse over button');
        });







