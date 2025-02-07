document.addEventListener('DOMContentLoaded', function() {
    // Testimonials initialization
    const testimonials = [
        {
            text: "Outstanding service! They helped me navigate complex corporate law with ease.",
            author: "John Smith, CEO"
        },
        {
            text: "Professional and compassionate during my divorce proceedings. Highly recommended!",
            author: "Sarah Johnson"
        },
        {
            text: "Successfully handled our business merger. True experts in their field.",
            author: "Michael Chen"
        }
    ];

    const testimonialContainer = document.getElementById('testimonial-container');
    
    testimonials.forEach((testimonial, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <div class="testimonial-card">
                <p class="lead">"${testimonial.text}"</p>
                <p class="author">- ${testimonial.author}</p>
            </div>
        `;
        testimonialContainer.appendChild(carouselItem);
    });
   

    // Set active nav link
    function setActiveLink() {
        const currentPage = location.pathname.split('/').pop();
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    


    // Initialize Carousel
    // In your scripts.js carousel initialization
    const testimonialCarousel = new bootstrap.Carousel(document.getElementById('testimonialCarousel'), {
    interval: 5000,
    wrap: true,
    touch: true,
    keyboard: true
    });

    // Blog Posts
    const blogContainer = document.getElementById('blog-posts');
    blogPosts.forEach(post => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4';
        col.innerHTML = `
            <div class="card">
                <img src="${post.image}" class="card-img-top" alt="${post.title}">
                <div class="card-body">
                    <h5>${post.title}</h5>
                    <p>${post.excerpt}</p>
                </div>
            </div>
        `;
        blogContainer.appendChild(col);
    });
    // Live Chat System
let chatOpen = false;
const chatContainer = document.getElementById('chatContainer');
const chatBody = document.getElementById('chatBody');
const userInput = document.getElementById('userInput');

// Make functions global for HTML onclick
window.toggleChat = () => {
    chatOpen = !chatOpen;
    chatContainer.style.display = chatOpen ? 'block' : 'none';
    if (chatOpen) userInput.focus();
};

window.sendMessage = () => {
    const message = userInput.value.trim();
    if (message) {
        // Add user message
        chatBody.innerHTML += `
            <div class="user-message mb-2">
                <strong>You:</strong> ${message}
            </div>
        `;
        
        // Simulate bot response
        setTimeout(() => {
            chatBody.innerHTML += `
                <div class="bot-message mb-2 text-muted">
                    <strong>Support:</strong> Thank you for your message. Our team will respond shortly.
                </div>
            `;
            chatBody.scrollTop = chatBody.scrollHeight;
        }, 1000);

        // Clear input
        userInput.value = '';
    }
};

// Handle Enter key in chat
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// Initial bot message
chatBody.innerHTML = `
    <div class="bot-message mb-2 text-muted">
        <strong>Support:</strong> Hello! How can we help you today?
    </div>
`;
});