// Menu Data
const menuData = {
    coffee: [
        {
            name: '에스프레소',
            description: '진한 맛과 풍부한 크레마가 특징인 클래식 에스프레소',
            price: '4,000원'
        },
        {
            name: '아메리카노',
            description: '부드럽고 깔끔한 맛의 아메리카노',
            price: '4,500원'
        },
        {
            name: '카페라떼',
            description: '부드러운 우유와 에스프레소의 조화',
            price: '5,000원'
        },
        {
            name: '카푸치노',
            description: '우유 거품이 올라간 클래식 카푸치노',
            price: '5,000원'
        },
        {
            name: '카라멜 마키아토',
            description: '달콤한 카라멜과 에스프레소의 만남',
            price: '5,500원'
        },
        {
            name: '바닐라 라떼',
            description: '은은한 바닐라 향이 더해진 라떼',
            price: '5,500원'
        }
    ],
    tea: [
        {
            name: '얼그레이',
            description: '베르가못 향이 은은한 클래식 얼그레이',
            price: '4,500원'
        },
        {
            name: '잉글리시 브렉퍼스트',
            description: '진한 맛의 전통 영국식 홍차',
            price: '4,500원'
        },
        {
            name: '자스민 그린티',
            description: '향긋한 자스민 꽃향이 어우러진 녹차',
            price: '4,500원'
        },
        {
            name: '캐모마일',
            description: '편안한 향의 허브차',
            price: '4,500원'
        },
        {
            name: '페퍼민트',
            description: '상쾌한 민트 향의 허브차',
            price: '4,500원'
        },
        {
            name: '히비스커스',
            description: '새콤달콤한 맛의 허브차',
            price: '4,500원'
        }
    ],
    dessert: [
        {
            name: '치즈케이크',
            description: '부드럽고 진한 크림치즈 케이크',
            price: '6,500원'
        },
        {
            name: '티라미수',
            description: '이탈리아 전통 디저트',
            price: '7,000원'
        },
        {
            name: '초콜릿 브라우니',
            description: '진한 초콜릿 맛의 브라우니',
            price: '5,500원'
        },
        {
            name: '마들렌',
            description: '프랑스 전통 마들렌',
            price: '4,000원'
        },
        {
            name: '크루아상',
            description: '바삭한 프랑스식 크루아상',
            price: '4,500원'
        },
        {
            name: '마카롱 세트',
            description: '다양한 맛의 마카롱 6개 세트',
            price: '12,000원'
        }
    ]
};

// DOM Elements
const menuTabs = document.querySelectorAll('.tab-btn');
const menuGrid = document.getElementById('menuGrid');
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadMenu('coffee');
    setupSmoothScroll();
    setupNavbar();
    setupMenuToggle();
    setupScrollAnimations();
});

// Load Menu Items
function loadMenu(category) {
    const items = menuData[category];
    menuGrid.innerHTML = '';
    
    items.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item fade-in';
        menuItem.innerHTML = `
            <h3 class="menu-item-name">${item.name}</h3>
            <p class="menu-item-desc">${item.description}</p>
            <p class="menu-item-price">${item.price}</p>
        `;
        menuGrid.appendChild(menuItem);
    });
}

// Menu Tab Switching
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        // Add active class to clicked tab
        tab.classList.add('active');
        // Load corresponding menu
        const category = tab.getAttribute('data-category');
        loadMenu(category);
    });
});

// Smooth Scroll
function setupSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 70;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
}

// Navbar Scroll Effect
function setupNavbar() {
    let lastScroll = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
        
        lastScroll = currentScroll;
    });
}

// Mobile Menu Toggle
function setupMenuToggle() {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = menuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(8px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            navMenu.classList.remove('active');
            const spans = menuToggle.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Scroll Animations
function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Initial hero animation
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '1';
        hero.style.transform = 'translateY(0)';
    }
}

// Active Nav Link on Scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});


