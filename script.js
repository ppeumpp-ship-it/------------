// Menu Data
const menuData = {
    coffee: [
        {
            name: '에스프레소 (Espresso)',
            description: '정교한 온도와 압력으로 추출한 깊고 선명한 한 잔의 진미. 풍부한 크레마와 농밀한 바디감으로 원두 본연의 향미를 온전히 느낄 수 있는 카페 카카오의 클래식 시그니처.',
            price: '4,000원'
        },
        {
            name: '카페 라떼 (Caffé Latte)',
            description: '부드러운 스팀 밀크가 에스프레소와 조화를 이루며 우아한 질감과 은은한 단맛을 선사합니다. 고급 우유의 자연스러운 고소함과 깊은 에스프레소가 어우러진 부드러운 데일리 커피.',
            price: '5,000원'
        },
        {
            name: '카푸치노 (Cappuccino)',
            description: '고운 우유 거품 위에 담긴 진한 에스프레소의 풍미가 입안 가득 퍼지는 정통 이탈리안 스타일. 첫 모금의 따뜻함과 마지막까지 이어지는 풍부한 향의 여운이 특별한 경험을 선사합니다.',
            price: '5,000원'
        },
        {
            name: '콜드 브루 (Cold Brew)',
            description: '차가운 물로 시간의 정성을 더해 천천히 추출한 커피. 잡미 없이 깔끔하며 은근하게 퍼지는 단맛과 부드러운 목넘김이 돋보이는 카페 카카오의 베스트셀러입니다.',
            price: '5,500원'
        },
        {
            name: '바닐라 빈 라떼 (Vanilla Bean Latte)',
            description: '마다가스카르산 바닐라 빈 시럽을 사용해 깊고 순수한 향을 담아낸 프리미엄 라떼. 실크처럼 부드러운 질감과 고급스러운 단맛이 조화를 이루며 한 모금마다 따스하고 은은한 여운을 남깁니다.',
            price: '6,000원'
        },
        {
            name: '플랫 화이트 (Flat White)',
            description: '에스프레소와 벨벳 같은 마이크로폼이 정교하게 어우러진 오스트레일리아식 프리미엄 커피. 라떼보다 진하고 카푸치노보다 부드러운 완벽한 밸런스로 깊은 풍미를 우아하게 전합니다.',
            price: '5,500원'
        },
        {
            name: '모카 시그니처 (Mocha Signature)',
            description: '스페셜티 초콜릿과 에스프레소가 만들어내는 풍부하고 고급스러운 조합. 진한 카카오의 깊은 풍미와 커피의 산미가 조화를 이루며 디저트 같은 달콤함을 선사합니다.',
            price: '6,000원'
        },
        {
            name: '말차 크림 라떼 (Matcha Cream Latte)',
            description: '선별된 고급 말차의 풍부한 향과 부드러운 크림층을 더해 완성한 프리미엄 음료. 말차 특유의 쌉쌀한 감칠맛과 고소함이 한 잔에 담겨, 커피를 즐기지 않는 분께도 사랑받는 특별한 선택입니다.',
            price: '6,500원'
        },
        {
            name: '허니 브라운 라떼 (Honey Brown Latte)',
            description: '자연에서 온 천연 벌꿀을 사용해 은은한 달콤함과 고급스러운 향을 더한 시즌 스페셜. 따뜻함과 깊이가 어우러져 편안하지만 품격 있는 한 잔을 완성했습니다.',
            price: '6,500원'
        },
        {
            name: '오트 크림 콜드 브루 (Oat Cream Cold Brew)',
            description: '깔끔한 콜드 브루 위에 고급 오트 크림을 부드럽게 얹어 풍미의 층위를 더했습니다. 진한 커피의 깊이, 오트의 고소함, 크림의 부드러움이 균형을 이루는 프리미엄 비건 라인 메뉴입니다.',
            price: '6,500원'
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


