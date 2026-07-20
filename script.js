// ==========================================
//  ТВОРЧЕСТВО КАПИБАРЫ – полный script.js
// ==========================================

// ---------- ДАННЫЕ ТОВАРОВ ----------
const products = [
    {
        id: 1, name: 'Нежный пион', price: 2500, category: 'bouquet', emoji: '🌸',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Букет из атласных лент ручной работы. Цвета можно выбрать.',
        images: ['🌸', '🌺', '🌷', '💮'],
        tags: ['букет', 'ленты', 'пион', 'подарок'],
        isNew: false, isHit: true, discount: 0, popularity: 150,
        reviews: [
            { avatar: '👩', author: 'Анна', date: '12.05.2026', rating: 5, text: 'Очень красивый букет! Цвета как на фото.', photo: '🌸' },
            { avatar: '👨', author: 'Дмитрий', date: '10.05.2026', rating: 4, text: 'Хорошая работа, упаковка немного помялась.', photo: '' }
        ]
    },
    {
        id: 2, name: 'Розовый сад', price: 3200, category: 'bouquet', emoji: '🌷',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Композиция из роз, сделанных из атласных лент.',
        images: ['🌷', '🌸', '🌹', '🌿'],
        tags: ['розы', 'букет', 'ленты'],
        isNew: true, isHit: false, discount: 10, popularity: 200,
        reviews: [
            { avatar: '👩‍🦰', author: 'Елена', date: '01.06.2026', rating: 5, text: 'Шикарный букет, подарила маме – она плакала от счастья!', photo: '🌹' }
        ]
    },
    {
        id: 3, name: 'Лавандовое поле', price: 2800, category: 'bouquet', emoji: '💐',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 4,
        desc: 'Нежные лавандовые оттенки.',
        images: ['💐', '🌾', '🌸', '💜'],
        tags: ['лаванда', 'букет', 'подарок'],
        isNew: false, isHit: false, discount: 0, popularity: 90,
        reviews: []
    },
    {
        id: 4, name: 'Солнечный букет', price: 3500, category: 'bouquet', emoji: '🌻',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Яркий букет цветов из лент.',
        images: ['🌻', '🌼', '🌞', '🌻'],
        tags: ['цветы', 'букет', 'лето'],
        isNew: false, isHit: true, discount: 0, popularity: 180,
        reviews: []
    },
    {
        id: 5, name: 'Серьги-незабудки', price: 1800, category: 'jewelry', emoji: '💎',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Изящные серьги из полимерной глины.',
        images: ['💎', '🕊️', '✨', '💖'],
        tags: ['серьги', 'цветы', 'украшения'],
        isNew: true, isHit: false, discount: 5, popularity: 250,
        reviews: [
            { avatar: '👩', author: 'Мария', date: '18.04.2026', rating: 5, text: 'Очень лёгкие и красивые, ношу не снимая!', photo: '💎' }
        ]
    },
    {
        id: 6, name: 'Колье «Капибара»', price: 2400, category: 'jewelry', emoji: '📿',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Авторское колье с подвеской капибары.',
        images: ['📿', '🦫', '💛', '🌟'],
        tags: ['колье', 'капибара', 'стиль'],
        isNew: false, isHit: true, discount: 0, popularity: 210,
        reviews: []
    },
    {
        id: 7, name: 'Браслет с подвесками', price: 1500, category: 'jewelry', emoji: '✨',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 4,
        desc: 'Браслет с шармами на выбор.',
        images: ['✨', '🔮', '💫', '⭐'],
        tags: ['браслет', 'шармы', 'подарок'],
        isNew: false, isHit: false, discount: 15, popularity: 130,
        reviews: []
    },
    {
        id: 8, name: 'Брошь «Цветок»', price: 1200, category: 'jewelry', emoji: '🌼',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Брошь из мулине.',
        images: ['🌼', '🧷', '🌸', '🌺'],
        tags: ['брошь', 'цветок', 'ручная работа'],
        isNew: false, isHit: false, discount: 0, popularity: 110,
        reviews: []
    },
    {
        id: 9, name: 'Капибара из шерсти', price: 3800, category: 'wool', emoji: '🦫',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Валяная игрушка-капибара, 5 см.',
        images: ['🦫', '🧸', '🐹', '🤎'],
        tags: ['игрушка', 'валяние', 'капибара'],
        isNew: false, isHit: true, discount: 0, popularity: 300,
        reviews: [
            { avatar: '🧒', author: 'Ольга', date: '20.12.2025', rating: 5, text: 'Самая милая игрушка! Ребёнок спит с ней.', photo: '🧸' },
            { avatar: '👨‍👩‍👧', author: 'Иван', date: '15.01.2026', rating: 5, text: 'Отличное качество, очень мягкая.', photo: '' }
        ]
    },
    {
        id: 10, name: 'Картина «Лошадь»', price: 4500, category: 'wool', emoji: '🌅',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Картина из шерсти "шерстяная живопись", размер А4.',
        images: ['🌅', '🎨', '🖼️', '🌇'],
        tags: ['картина', 'шерсть', 'интерьер'],
        isNew: true, isHit: false, discount: 0, popularity: 170,
        reviews: []
    },
    {
        id: 11, name: 'Зайчик валяный', price: 2900, category: 'wool', emoji: '🐱',
        photos: [
            'images/rabbit.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Милый зайчик из шерсти.',
        images: ['🐱', '😺', '🧶', '🐾'],
        tags: ['заяц', 'валяние', 'подарок'],
        isNew: false, isHit: false, discount: 20, popularity: 140,
        reviews: []
    },
    {
        id: 12, name: 'Картина "Солнечный котёнок"', price: 5000, category: 'wool', emoji: '🌲',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 4,
        desc: 'Картина из шерсти.',
        images: ['🌲', '🌳', '🍂', '🦌'],
        tags: ['картина', 'кот', 'декор'],
        isNew: false, isHit: false, discount: 0, popularity: 80,
        reviews: []
    },
    {
        id: 13, name: 'Радужная фенечка', price: 600, category: 'bracelet', emoji: '🌈',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Фенечка из мулине.',
        images: ['🌈', '🌦️', '🧵', '💖'],
        tags: ['фенечка', 'мулине', 'дружба'],
        isNew: true, isHit: false, discount: 0, popularity: 260,
        reviews: []
    },
    {
        id: 14, name: 'Фенечка «Волны»', price: 700, category: 'bracelet', emoji: '🌊',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 4,
        desc: 'Морская тематика.',
        images: ['🌊', '🏄', '🐚', '💙'],
        tags: ['фенечка', 'море', 'браслет'],
        isNew: false, isHit: false, discount: 0, popularity: 120,
        reviews: []
    },
    {
        id: 15, name: 'Фенечка с именем', price: 800, category: 'bracelet', emoji: '🧵',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Именная фенечка.',
        images: ['🧵', '🔤', '💌', '✨'],
        tags: ['именная', 'фенечка', 'подарок'],
        isNew: false, isHit: true, discount: 0, popularity: 190,
        reviews: []
    },
    {
        id: 16, name: 'Парные брелки «Стич и Ангел»', price: 3000, category: 'embroidery', emoji: '🐦',
        photos: [
            'images/stich.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Вышивка крестом.',
        images: ['🐦', '🕊️', '🪡', '🧵'],
        tags: ['вышивка', 'брелоки'],
        isNew: true, isHit: false, discount: 0, popularity: 160,
        reviews: []
    },
    {
        id: 17, name: 'Вышивка «Цветы»', price: 3500, category: 'embroidery', emoji: '🌺',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 4,
        desc: 'Набор для вышивания.',
        images: ['🌺', '🌼', '🧶', '🖼️'],
        tags: ['вышивка', 'цветы', 'набор'],
        isNew: false, isHit: false, discount: 0, popularity: 100,
        reviews: []
    },
    {
        id: 18, name: 'Мини-вышивка «Капибара»', price: 1500, category: 'embroidery', emoji: '🧶',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Маленькая вышивка.',
        images: ['🧶', '🦫', '🖼️', '💝'],
        tags: ['вышивка', 'капибара', 'мини'],
        isNew: false, isHit: true, discount: 10, popularity: 220,
        reviews: []
    },
    {
        id: 19, name: 'Бантики "Цветы"', price: 1500, category: 'jewelry', emoji: '🧶',
        photos: [
            'images/fiol.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Бантики для волос "цветы"',
        images: ['🧶', '🦫', '🖼️', '💝'],
        tags: ['цветы', 'украшения', 'банты'],
        isNew: false, isHit: true, discount: 10, popularity: 220,
        reviews: []
    },
    {
        id: 20, name: 'Брелок «Коровка»', price: 1500, category: 'embroidery', emoji: '🧶',
        photos: [
            'images/products/peony-1.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Маленькая вышивка.',
        images: ['🧶', '🦫', '🖼️', '💝'],
        tags: ['вышивка', 'коровка', 'брелоки'],
        isNew: false, isHit: true, discount: 10, popularity: 220,
        reviews: []
    },
    {
        id: 21, name: 'Медведь валяный', price: 2900, category: 'wool', emoji: '🐱',
        photos: [
            'images/bear.jpg',
            'images/products/peony-2.jpg',
            'images/products/peony-3.jpg'
        ],
        rating: 5,
        desc: 'Милый мишка из шерсти.',
        images: ['🐱', '😺', '🧶', '🐾'],
        tags: ['медведь', 'валяние', 'подарок'],
        isNew: false, isHit: false, discount: 20, popularity: 140,
        reviews: []
    }
];

const categoryLabels = {
    bouquet: 'Букеты из лент',
    jewelry: 'Украшения',
    wool: 'Игрушки и картины из шерсти',
    bracelet: 'Фенечки из мулине',
    embroidery: 'Вышивка'
};

// ---------- ХРАНИЛИЩЕ ПОЛЬЗОВАТЕЛЬСКИХ ОТЗЫВОВ ----------
function loadUserReviews() {
    return JSON.parse(localStorage.getItem('userReviews')) || {};
}

function saveUserReviews(reviews) {
    localStorage.setItem('userReviews', JSON.stringify(reviews));
}

function getAllReviews(productId) {
    const product = products.find(p => p.id === productId);
    const presetReviews = product?.reviews || [];
    const userReviews = loadUserReviews();
    const extraReviews = userReviews[productId] || [];
    return [...presetReviews, ...extraReviews];
}

function getAverageRating(productId) {
    const allReviews = getAllReviews(productId);
    if (allReviews.length === 0) {
        const product = products.find(p => p.id === productId);
        return product?.rating || 0;
    }
    const sum = allReviews.reduce((s, r) => s + r.rating, 0);
    return Math.round((sum / allReviews.length) * 10) / 10;
}

// ---------- ДАННЫЕ СТАТЕЙ ----------
const articles = [
    {
        id: 'article1',
        title: 'Как создать букет из атласных лент',
        fullText: `
            <h3>Как создать букет из атласных лент</h3>
            <p><strong>Мастер-класс</strong></p>
            <p>В этом мастер-классе я покажу, как сделать нежный букет пионов из лент. Вам понадобятся:</p>
            <ul>
                <li>Атласные ленты шириной 5 см (розовые, белые, зелёные)</li>
                <li>Ножницы и зажигалка (для опаливания краёв)</li>
                <li>Проволока для стеблей</li>
                <li>Тейп-лента зелёного цвета</li>
                <li>Клей-пистолет (по желанию)</li>
            </ul>
            <p><strong>Этапы работы:</strong></p>
            <ol>
                <li>Нарежьте ленту на квадраты 5×5 см.</li>
                <li>Сложите каждый квадрат по диагонали, затем ещё раз, чтобы получился лепесток.</li>
                <li>Опалите края зажигалкой, чтобы они не осыпались.</li>
                <li>Соберите 5–7 лепестков на проволоку, формируя цветок.</li>
                <li>Обмотайте стебель тейп-лентой.</li>
                <li>Добавьте листья из зелёной ленты.</li>
            </ol>
            <p>Готовый букет можно украсить бусинами или лентами. Он станет отличным подарком на любой праздник!</p>
        `
    },
    {
        id: 'article2',
        title: 'Валяние игрушек для начинающих',
        fullText: `
            <h3>Валяние игрушек для начинающих</h3>
            <p><strong>Мастер-класс</strong></p>
            <p>Расскажу о сухом и мокром валянии, какие инструменты нужны и как создать свою первую игрушку-капибару.</p>
            <p><strong>Инструменты:</strong></p>
            <ul>
                <li>Шерсть для валяния (кардочес или сливер)</li>
                <li>Иглы для валяния (разного номера)</li>
                <li>Губка или щётка-подложка</li>
                <li>Проволочный каркас (по желанию)</li>
                <li>Глазки-бусины</li>
            </ul>
            <p><strong>Основные приёмы:</strong></p>
            <ul>
                <li>Сваливание шерсти иглой — многократное прокалывание до уплотнения.</li>
                <li>Формирование деталей (голова, туловище, лапки).</li>
                <li>Соединение деталей приваливанием.</li>
                <li>Финальная отделка — подстригание и придание формы.</li>
            </ul>
            <p>Следуя этим шагам, вы сможете свалять симпатичную капибару даже без опыта!</p>
        `
    }
];

// ---------- КОРЗИНА ----------
class Cart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
    }
    save() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }
    add(product, qty = 1) {
        const exist = this.items.find(i => i.id === product.id);
        if (exist) exist.qty += qty;
        else this.items.push({ ...product, qty });
        this.save();
    }
    remove(id) {
        this.items = this.items.filter(i => i.id !== id);
        this.save();
    }
    changeQty(id, delta) {
        const item = this.items.find(i => i.id === id);
        if (!item) return;
        item.qty += delta;
        if (item.qty <= 0) this.remove(id);
        else this.save();
    }
    get total() {
        return this.items.reduce((sum, i) => sum + i.price * i.qty, 0);
    }
    get count() {
        return this.items.reduce((sum, i) => sum + i.qty, 0);
    }
    clear() {
        this.items = [];
        this.save();
    }
}
const cart = new Cart();

// ---------- АВТОРИЗАЦИЯ ----------
class Auth {
    static getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
    }
    static saveUsers(users) {
        localStorage.setItem('users', JSON.stringify(users));
    }
    static get currentUser() {
        return JSON.parse(localStorage.getItem('currentUser'));
    }

    static register({ name, email, password, phone }) {
        const users = Auth.getUsers();
        if (users.find(u => u.email === email)) return false;
        const newUser = { id: Date.now(), name, email, password, phone: phone || '', favorites: [], addresses: [], loyaltyPoints: 0 };
        users.push(newUser);
        Auth.saveUsers(users);
        return true;
    }

    static login(email, password) {
        const users = Auth.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            localStorage.setItem('currentUser', JSON.stringify(user));
            return user;
        }
        return null;
    }

    static logout() {
        localStorage.removeItem('currentUser');
    }

    static updateProfile(data) {
        const user = Auth.currentUser;
        if (!user) return;
        const users = Auth.getUsers();
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index] = { ...users[index], ...data };
            Auth.saveUsers(users);
            localStorage.setItem('currentUser', JSON.stringify(users[index]));
        }
    }

    static addToFavorites(product) {
        const user = Auth.currentUser;
        if (!user) return false;
        const users = Auth.getUsers();
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            if (!users[index].favorites) users[index].favorites = [];
            if (!users[index].favorites.find(f => f.id === product.id)) {
                users[index].favorites.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji });
                Auth.saveUsers(users);
                localStorage.setItem('currentUser', JSON.stringify(users[index]));
                return true;
            }
        }
        return false;
    }

    static removeFromFavorites(productId) {
        const user = Auth.currentUser;
        if (!user) return;
        const users = Auth.getUsers();
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index].favorites = (users[index].favorites || []).filter(f => f.id !== productId);
            Auth.saveUsers(users);
            localStorage.setItem('currentUser', JSON.stringify(users[index]));
        }
    }

    static getFavorites() {
        return Auth.currentUser?.favorites || [];
    }
}

// ---------- ПРОГРАММА ЛОЯЛЬНОСТИ ----------
class Loyalty {
    static getPoints() {
        const user = Auth.currentUser;
        if (!user) return 0;
        return user.loyaltyPoints || 0;
    }

    static addPoints(amount) {
        const user = Auth.currentUser;
        if (!user) return;
        const users = Auth.getUsers();
        const index = users.findIndex(u => u.id === user.id);
        if (index !== -1) {
            users[index].loyaltyPoints = (users[index].loyaltyPoints || 0) + amount;
            Auth.saveUsers(users);
            localStorage.setItem('currentUser', JSON.stringify(users[index]));
        }
    }
}

// ---------- УВЕДОМЛЕНИЯ ----------
function showToast(msg) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
}

// ---------- ОБНОВЛЕНИЕ ИНДИКАТОРА КОРЗИНЫ ----------
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        badge.textContent = cart.count;
        if (cart.count > 0) {
            badge.classList.add('bump');
            setTimeout(() => badge.classList.remove('bump'), 400);
        }
    }
}

// ---------- ХЕДЕР ----------
function updateHeaderUser() {
    const area = document.getElementById('userArea');
    if (!area) return;
    const user = Auth.currentUser;
    if (user) {
        area.innerHTML = `
            <a href="account.html" class="btn-outline" style="margin-right:8px;">👤 ${user.name}</a>
            <button class="btn-outline" id="logoutHeaderBtn">Выйти</button>
        `;
        document.getElementById('logoutHeaderBtn')?.addEventListener('click', () => {
            Auth.logout();
            window.location.reload();
        });
    } else {
        area.innerHTML = `<a href="login.html" class="btn-outline">Войти</a>`;
    }
}

// ---------- ИЗБРАННОЕ ----------
function toggleFavorite(product, button) {
    if (!Auth.currentUser) {
        showToast('Войдите, чтобы добавить в избранное');
        return;
    }
    const favs = Auth.getFavorites();
    const exists = favs.find(f => f.id === product.id);
    if (exists) {
        Auth.removeFromFavorites(product.id);
        if (button) { button.classList.remove('active');
            button.textContent = '🤍'; }
        showToast('Удалено из избранного');
    } else {
        Auth.addToFavorites(product);
        if (button) { button.classList.add('active');
            button.textContent = '❤️'; }
        showToast('Добавлено в избранное');
    }
}

// ---------- КАТАЛОГ ----------
let currentCategory = 'all';
let currentSort = 'popularity';
let currentSearch = '';
let currentTag = 'all';

function getAllTags() {
    const tags = new Set();
    products.forEach(p => p.tags.forEach(t => tags.add(t)));
    return Array.from(tags);
}

function renderTags(activeTag) {
    const container = document.getElementById('tagsBar');
    if (!container) return;
    const allTags = getAllTags();
    container.innerHTML = `
        <span class="tag ${activeTag === 'all' ? 'active' : ''}" data-tag="all">Все</span>
        ${allTags.map(t => `<span class="tag ${activeTag === t ? 'active' : ''}" data-tag="${t}">#${t}</span>`).join('')}
    `;
    container.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', () => {
            const selected = tag.dataset.tag;
            currentTag = selected;
            renderTags(selected);
            applyFiltersAndRender();
        });
    });
}

function applyFiltersAndRender() {
    let filtered = products.filter(p => {
        if (currentCategory !== 'all' && p.category !== currentCategory) return false;
        if (currentTag !== 'all' && !p.tags.includes(currentTag)) return false;
        if (currentSearch) {
            const q = currentSearch.toLowerCase();
            return p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q) || p.tags.some(t => t.includes(q));
        }
        return true;
    });
    switch (currentSort) {
        case 'price-asc':
            filtered.sort((a, b) => a.price - b.price);
            break;
        case 'price-desc':
            filtered.sort((a, b) => b.price - a.price);
            break;
        case 'rating':
            filtered.sort((a, b) => b.rating - a.rating);
            break;
        case 'new':
            filtered.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
            break;
        case 'popularity':
        default:
            filtered.sort((a, b) => b.popularity - a.popularity);
            break;
    }
    renderCatalogGrid(filtered);
}

function renderCatalogGrid(filteredProducts) {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    try {
        const user = Auth.currentUser;
        const favIds = user ? Auth.getFavorites().map(f => f.id) : [];

        grid.innerHTML = filteredProducts.map(p => {
            const disc = p.discount > 0 ? `<span class="badge badge-discount">-${p.discount}%</span>` : '';
            const isNew = p.isNew ? '<span class="badge badge-new">Новинка</span>' : '';
            const isHit = p.isHit ? '<span class="badge badge-hit">Хит</span>' : '';
            const isFav = favIds.includes(p.id);
            const avgRating = getAverageRating(p.id);

            // Безопасное получение фото или эмодзи
            let imageHTML = '';
            if (p.photos && p.photos.length > 0) {
                imageHTML = `<img src="${p.photos[0]}" alt="${p.name}" class="product-photo" loading="lazy">`;
            } else {
                imageHTML = `<span class="preview-emoji static">${p.emoji}</span>`;
            }

            return `<article class="product-card" data-id="${p.id}">
                <div class="product-img">
                    ${disc}${isNew}${isHit}
                    ${imageHTML}
                </div>
                <button class="fav-btn ${isFav ? 'active' : ''}" data-id="${p.id}">${isFav ? '❤️' : '🤍'}</button>
                <div class="product-body">
                    <div class="product-category">${categoryLabels[p.category]}</div>
                    <h3 class="product-name">${p.name}</h3>
                    <div class="product-rating">${'★'.repeat(Math.round(avgRating))}${'☆'.repeat(5 - Math.round(avgRating))} <span style="font-size:0.8rem;">(${avgRating})</span></div>
                    <div class="product-tags">${p.tags.map(t => `<span class="product-tag">#${t}</span>`).join('')}</div>
                    <div class="product-price">${p.discount > 0
                        ? `<span style="text-decoration:line-through;color:#999;font-size:0.9rem;">${p.price} ₽</span> ${Math.round(p.price * (1 - p.discount / 100))} ₽`
                        : `${p.price} ₽`}</div>
                </div>
            </article>`;
        }).join('');

        // Обработчики кликов
        grid.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (!e.target.closest('.fav-btn')) {
                    const id = +card.dataset.id;
                    const prod = products.find(p => p.id === id);
                    if (prod) openProductModal(prod);
                }
            });
        });

        grid.querySelectorAll('.fav-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const id = +btn.dataset.id;
                const product = products.find(p => p.id === id);
                toggleFavorite(product, btn);
            });
        });
    } catch (error) {
        console.error('Ошибка в renderCatalogGrid:', error);
        grid.innerHTML = '<p style="text-align:center;color:red;">Произошла ошибка при загрузке товаров. Попробуйте обновить страницу.</p>';
    }
}

function initCatalog() {
    const grid = document.getElementById('productsGrid');
    if (!grid) return;

    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    searchBtn?.addEventListener('click', () => {
        currentSearch = searchInput.value.trim();
        applyFiltersAndRender();
    });
    searchInput?.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            currentSearch = searchInput.value.trim();
            applyFiltersAndRender();
        }
    });

    const sortSelect = document.getElementById('sortSelect');
    sortSelect?.addEventListener('change', (e) => {
        currentSort = e.target.value;
        applyFiltersAndRender();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            currentTag = 'all';
            renderTags('all');
            applyFiltersAndRender();
        });
    });

    renderTags('all');
    applyFiltersAndRender();
}

// ---------- МИНИ-КАРУСЕЛЬ НА ГЛАВНОЙ ----------
function initFeaturedCarousel() {
    const track = document.getElementById('featuredTrack');
    const prevBtn = document.getElementById('featuredPrev');
    const nextBtn = document.getElementById('featuredNext');
    if (!track || !prevBtn || !nextBtn) return;

    const featured = products.filter(p => p.isNew || p.isHit).slice(0, 8);
    if (featured.length === 0) {
        track.innerHTML = '<p style="text-align:center;padding:20px;">Скоро появятся новинки!</p>';
        return;
    }

    track.innerHTML = featured.map(p => {
        const imageHTML = (p.photos && p.photos.length > 0)
            ? `<img src="${p.photos[0]}" alt="${p.name}" class="product-photo">`
            : p.emoji;
        return `<div class="product-card" data-id="${p.id}">
            <div class="product-img">${imageHTML}</div>
            <div class="product-body">
                <div class="product-name">${p.name}</div>
                <div class="product-price">${p.price} ₽</div>
            </div>
        </div>`;
    }).join('');

    track.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('click', () => {
            const id = +card.dataset.id;
            const prod = products.find(p => p.id === id);
            if (prod) openProductModal(prod);
        });
    });

    // Навигация карусели
    const cards = track.querySelectorAll('.product-card');
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth + 12;
    let position = 0;
    const maxPosition = Math.max(0, (cards.length - getVisibleCards()) * cardWidth);

    function getVisibleCards() {
        const w = track.parentElement.offsetWidth;
        if (w <= 600) return 2;
        if (w <= 900) return 3;
        return 4;
    }

    function updatePosition() {
        track.style.transform = `translateX(-${position}px)`;
    }

    nextBtn.addEventListener('click', () => {
        const step = getVisibleCards() * cardWidth;
        position = Math.min(position + step, maxPosition);
        updatePosition();
    });

    prevBtn.addEventListener('click', () => {
        const step = getVisibleCards() * cardWidth;
        position = Math.max(position - step, 0);
        updatePosition();
    });

    window.addEventListener('resize', () => {
        position = 0;
        updatePosition();
    });
}

// ---------- МОДАЛЬНОЕ ОКНО ТОВАРА ----------
function openProductModal(product) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';

    // Подготовка слайдов: если есть photos — используем их, иначе эмодзи
    const slides = product.photos && product.photos.length
        ? product.photos.map(photo => `<img src="${photo}" alt="${product.name}" class="modal-carousel-image">`)
        : (product.images || [product.emoji]).map(img => `<div class="modal-carousel-slide">${img}</div>`);

    let currentSlide = 0;
    const user = Auth.currentUser;
    const isFav = user ? Auth.getFavorites().some(f => f.id === product.id) : false;
    const related = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);
    const allReviews = getAllReviews(product.id);
    const votes = JSON.parse(localStorage.getItem('productVotes') || '{}');
    const currentVotes = votes[product.id] || 0;
    const hasVoted = localStorage.getItem(`voted_${product.id}`) === 'true';

    // Функция рендеринга списка отзывов
    function renderReviewsHTML(reviews) {
        return reviews.length ? reviews.map(r => `
            <div class="review-item">
                <div class="review-avatar">${r.avatar || '👤'}</div>
                <div class="review-content">
                    <div class="review-header"><span class="review-author">${r.author}</span><span class="review-date">${r.date || ''}</span></div>
                    <div class="review-rating">${'★'.repeat(r.rating)}${'☆'.repeat(5 - r.rating)}</div>
                    <div class="review-text">${r.text}</div>
                    ${r.photo ? `<div class="review-photo">${r.photo}</div>` : ''}
                </div>
            </div>
        `).join('') : '<p>Пока нет отзывов. Будьте первым!</p>';
    }

    // Функция обновления блока отзывов в модалке
    function refreshReviews() {
        const updated = getAllReviews(product.id);
        const reviewsList = overlay.querySelector('#reviewsList');
        const reviewsCount = overlay.querySelector('.reviews-block h4');
        if (reviewsList) reviewsList.innerHTML = renderReviewsHTML(updated);
        if (reviewsCount) reviewsCount.textContent = `Отзывы (${updated.length})`;
        const ratingEl = overlay.querySelector('.modal-rating-display');
        if (ratingEl) ratingEl.innerHTML = `⭐ ${'★'.repeat(Math.round(getAverageRating(product.id)))} (${getAverageRating(product.id)})`;
    }

    overlay.innerHTML = `
    <div class="modal">
        <button class="modal-close">✕</button>
        <div class="modal-carousel">
            <div class="modal-carousel-track">${slides.join('')}</div>
            <button class="modal-carousel-btn prev">‹</button>
            <button class="modal-carousel-btn next">›</button>
        </div>
        <div class="modal-carousel-dots">
            ${slides.map((_, i) => `<button class="modal-carousel-dot${i === 0 ? ' active' : ''}"></button>`).join('')}
        </div>
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <p class="modal-rating-display">⭐ ${'★'.repeat(Math.round(getAverageRating(product.id)))} (${getAverageRating(product.id)})</p>
        <p style="font-weight:700;font-size:1.3rem;">
            ${product.discount > 0 ? `<span style="text-decoration:line-through;color:#999;">${product.price} ₽</span> ${Math.round(product.price * (1 - product.discount / 100))} ₽` : `${product.price} ₽`}
        </p>
        ${user ? `<button class="fav-btn ${isFav ? 'active' : ''}" id="modalFavBtn" style="position:static;margin:0 auto 16px;">${isFav ? '❤️' : '🤍'}</button>` : ''}
        <button class="btn share-btn" id="shareBtn" style="background:transparent; border:1px solid var(--brown-light); color: var(--brown); margin:8px 0; width:100%;">📤 Поделиться</button>
        <div style="display:flex;gap:10px;align-items:center;margin:16px 0;">
            <button class="cart-item-qty" id="modalMinus">−</button>
            <span id="modalQty">1</span>
            <button class="cart-item-qty" id="modalPlus">+</button>
        </div>
        <button class="btn" id="modalAddToCart">Добавить в корзину</button>

        <!-- Отзывы -->
        <div class="reviews-block" id="reviewsContainer">
            <h4>Отзывы (${allReviews.length})</h4>
            <div id="reviewsList">${renderReviewsHTML(allReviews)}</div>
            ${user ? `
            <div class="add-review-form" id="addReviewForm">
                <h4>Оставить отзыв</h4>
                <div class="form-group"><label>Ваше имя</label><input type="text" id="reviewName" value="${user.name}" readonly></div>
                <div class="form-group"><label>Оценка</label>
                    <div class="star-rating" id="starRating">
                        ${[5,4,3,2,1].map(i => `<input type="radio" id="star${i}" name="rating" value="${i}"><label for="star${i}" title="${i} звезда(ы)">★</label>`).join('')}
                    </div>
                </div>
                <div class="form-group"><label>Ваш отзыв</label><textarea id="reviewText" rows="3" placeholder="Поделитесь впечатлениями..."></textarea></div>
                <div class="form-group"><label>Фото (эмодзи)</label><input type="text" id="reviewPhoto" placeholder="🌸, 🎁 и т.п." maxlength="2"></div>
                <button type="button" class="btn-submit" id="submitReview">Отправить отзыв</button>
            </div>` : '<p style="margin-top:16px;">Войдите, чтобы оставить отзыв.</p>'}
        </div>

        <!-- Голосование -->
        <div class="vote-section">
            <button class="vote-btn ${hasVoted ? 'voted' : ''}" id="voteBtn">${hasVoted ? '❤️ Ваш голос учтён' : '🤍 Нравится'}</button>
            <span class="vote-count" id="voteCount">${currentVotes} голосов</span>
        </div>

        ${related.length ? `
        <div class="related-products">
            <div class="related-title">Связанные товары</div>
            <div class="related-grid">
                ${related.map(r => `
                    <div class="related-item" data-id="${r.id}">
                        <div class="emoji">${r.emoji}</div>
                        <div class="name">${r.name}</div>
                        <div class="price">${r.price} ₽</div>
                    </div>
                `).join('')}
            </div>
        </div>` : ''}
    </div>`;
    document.body.appendChild(overlay);

    // Карусель в модалке
    const track = overlay.querySelector('.modal-carousel-track');
    const dots = overlay.querySelectorAll('.modal-carousel-dot');
    function updateSlide(i) {
        track.style.transform = `translateX(-${i * 100}%)`;
        dots.forEach((d, j) => d.classList.toggle('active', j === i));
        currentSlide = i;
    }
    overlay.querySelector('.prev').addEventListener('click', () => updateSlide((currentSlide - 1 + slides.length) % slides.length));
    overlay.querySelector('.next').addEventListener('click', () => updateSlide((currentSlide + 1) % slides.length));
    dots.forEach((dot, i) => dot.addEventListener('click', () => updateSlide(i)));

    // Количество
    let qty = 1;
    overlay.querySelector('#modalMinus').addEventListener('click', () => { if (qty > 1) qty--;
        overlay.querySelector('#modalQty').textContent = qty; });
    overlay.querySelector('#modalPlus').addEventListener('click', () => { qty++;
        overlay.querySelector('#modalQty').textContent = qty; });

    // Закрытие
    overlay.querySelector('.modal-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

    // Избранное
    const favBtn = overlay.querySelector('#modalFavBtn');
    if (favBtn) favBtn.addEventListener('click', (e) => { e.stopPropagation();
        toggleFavorite(product, favBtn); });

    // Добавление в корзину с анимацией
    overlay.querySelector('#modalAddToCart').addEventListener('click', () => {
        const finalPrice = product.discount > 0 ? Math.round(product.price * (1 - product.discount / 100)) : product.price;
        cart.add({ ...product, price: finalPrice }, qty);
        updateCartBadge();
        showToast(`${product.name} × ${qty} в корзине!`);
        overlay.remove();
    });

    // Поделиться
    overlay.querySelector('#shareBtn').addEventListener('click', () => {
        const shareUrl = window.location.origin + window.location.pathname.replace('index.html', 'catalog.html') + '?id=' + product.id;
        const shareText = `Посмотри: "${product.name}" в Творчестве Капибары!`;
        if (navigator.share) {
            navigator.share({ title: product.name, text: shareText, url: shareUrl }).catch(() => {});
        } else {
            navigator.clipboard.writeText(shareUrl).then(() => showToast('Ссылка скопирована!')).catch(() => showToast('Не удалось скопировать ссылку'));
        }
    });

    // Голосование
    const voteBtn = overlay.querySelector('#voteBtn');
    if (voteBtn) {
        voteBtn.addEventListener('click', () => {
            const productId = product.id;
            const votes = JSON.parse(localStorage.getItem('productVotes') || '{}');
            votes[productId] = (votes[productId] || 0) + 1;
            localStorage.setItem('productVotes', JSON.stringify(votes));
            localStorage.setItem(`voted_${productId}`, 'true');
            voteBtn.classList.add('voted');
            voteBtn.innerHTML = '❤️ Ваш голос учтён';
            overlay.querySelector('#voteCount').textContent = `${votes[productId]} голосов`;
            showToast('Спасибо за ваш голос!');
        });
    }

    // Отправка отзыва
    const submitBtn = overlay.querySelector('#submitReview');
    if (submitBtn) {
        submitBtn.addEventListener('click', () => {
            const name = overlay.querySelector('#reviewName').value.trim();
            const ratingInput = overlay.querySelector('input[name="rating"]:checked');
            const text = overlay.querySelector('#reviewText').value.trim();
            const photo = overlay.querySelector('#reviewPhoto').value.trim() || '';

            if (!ratingInput) { showToast('Поставьте оценку!'); return; }
            if (!text) { showToast('Напишите текст отзыва'); return; }

            const rating = parseInt(ratingInput.value);
            const newReview = {
                avatar: user.name.charAt(0).toUpperCase(),
                author: name,
                date: new Date().toLocaleDateString('ru-RU'),
                rating: rating,
                text: text,
                photo: photo
            };

            const allUserReviews = loadUserReviews();
            if (!allUserReviews[product.id]) allUserReviews[product.id] = [];
            allUserReviews[product.id].push(newReview);
            saveUserReviews(allUserReviews);

            overlay.querySelector('input[name="rating"]:checked').checked = false;
            overlay.querySelector('#reviewText').value = '';
            overlay.querySelector('#reviewPhoto').value = '';

            refreshReviews();
            showToast('Спасибо за ваш отзыв!');
        });
    }

    // Связанные товары
    overlay.querySelectorAll('.related-item').forEach(item => {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = +item.dataset.id;
            const prod = products.find(p => p.id === id);
            if (prod) {
                overlay.remove();
                openProductModal(prod);
            }
        });
    });
} // конец openProductModal

// ---------- МОДАЛЬНОЕ ОКНО АВТОРИЗАЦИИ ----------
function openAuthModal(onSuccess) {
    if (Auth.currentUser) {
        showToast('Вы уже авторизованы!');
        if (onSuccess) onSuccess();
        return;
    }

    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
        <div class="modal" style="max-width:400px;">
            <button class="modal-close" aria-label="Закрыть">✕</button>
            <h3 style="text-align:center;">Войдите или зарегистрируйтесь</h3>
            <p style="text-align:center;margin-bottom:16px;">Чтобы читать полные статьи, войдите в аккаунт.</p>
            <div class="auth-tabs">
                <button class="auth-tab active" data-tab="login">Вход</button>
                <button class="auth-tab" data-tab="register">Регистрация</button>
            </div>
            <form id="modalLoginForm" class="auth-form">
                <div class="form-group"><label>Email</label><input type="email" id="modalLoginEmail" required></div>
                <div class="form-group"><label>Пароль</label><input type="password" id="modalLoginPassword" required></div>
                <button type="submit" class="btn-submit">Войти</button>
            </form>
            <form id="modalRegisterForm" class="auth-form hidden">
                <div class="form-group"><label>Имя</label><input type="text" id="modalRegName" required></div>
                <div class="form-group"><label>Email</label><input type="email" id="modalRegEmail" required></div>
                <div class="form-group"><label>Пароль</label><input type="password" id="modalRegPassword" required minlength="6"></div>
                <button type="submit" class="btn-submit">Зарегистрироваться</button>
            </form>
            <p id="modalAuthMessage" style="text-align:center;margin-top:12px;color:red;"></p>
        </div>
    `;
    document.body.appendChild(overlay);

    const tabs = overlay.querySelectorAll('.auth-tab');
    const loginForm = overlay.querySelector('#modalLoginForm');
    const registerForm = overlay.querySelector('#modalRegisterForm');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.tab;
            loginForm.classList.toggle('hidden', target !== 'login');
            registerForm.classList.toggle('hidden', target !== 'register');
        });
    });

    const closeBtn = overlay.querySelector('.modal-close');
    closeBtn.addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = overlay.querySelector('#modalLoginEmail').value.trim();
        const password = overlay.querySelector('#modalLoginPassword').value;
        const user = Auth.login(email, password);
        if (user) {
            showToast('Добро пожаловать, ' + user.name + '!');
            overlay.remove();
            updateHeaderUser();
            if (onSuccess) onSuccess();
        } else {
            overlay.querySelector('#modalAuthMessage').textContent = 'Неверный email или пароль.';
        }
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = overlay.querySelector('#modalRegName').value.trim();
        const email = overlay.querySelector('#modalRegEmail').value.trim();
        const password = overlay.querySelector('#modalRegPassword').value;
        if (Auth.register({ name, email, password })) {
            showToast('Регистрация успешна! Теперь войдите.');
            overlay.querySelector('.auth-tab[data-tab="login"]').click();
            overlay.querySelector('#modalAuthMessage').textContent = '';
        } else {
            overlay.querySelector('#modalAuthMessage').textContent = 'Пользователь с таким email уже существует.';
        }
    });
}

// ---------- МОДАЛЬНОЕ ОКНО ПОЛНОГО ТЕКСТА СТАТЬИ ----------
function openFullArticleModal(article) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay open';
    overlay.innerHTML = `
        <div class="modal full-article-modal" style="max-width:700px;">
            <button class="modal-close" aria-label="Закрыть">✕</button>
            <div class="full-article-content">
                ${article.fullText}
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    overlay.querySelector('.modal-close').addEventListener('click', () => overlay.remove());
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

// ---------- ОБРАБОТЧИК КНОПОК "ЧИТАТЬ ДАЛЕЕ" ----------
function initReadMoreButtons() {
    const buttons = document.querySelectorAll('.read-more-btn');
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const articleId = btn.dataset.article;
            const article = articles.find(a => a.id === articleId);
            if (!article) return;

            if (Auth.currentUser) {
                openFullArticleModal(article);
            } else {
                openAuthModal(() => {
                    openFullArticleModal(article);
                });
            }
        });
    });
}

// ---------- КАРУСЕЛЬ ОТЗЫВОВ (главная) ----------
function initCarousel() {
    const track = document.querySelector('.carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    if (!track || dots.length === 0) return;
    let current = 0;
    const slides = track.children.length;
    function goTo(index) {
        track.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach((d, i) => d.classList.toggle('active', i === index));
        current = index;
    }
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));
    setInterval(() => goTo((current + 1) % slides), 5000);
}

// ---------- СТРАНИЦА КОРЗИНЫ ----------
let appliedPromo = null;
let currentDiscount = 0;

function initCartPage() {
    const container = document.getElementById('cartItemsContainer');
    const totalEl = document.getElementById('cartTotal');
    const form = document.getElementById('orderForm');
    if (!container) return;

    function recalcTotal() {
        let final = cart.total - currentDiscount;
        if (final < 0) final = 0;
        totalEl.textContent = `${final} ₽ (скидка ${currentDiscount} ₽)`;
        return final;
    }

    function renderCart() {
        if (cart.items.length === 0) {
            container.innerHTML = '<p>Ваша корзина пуста.</p>';
            totalEl.textContent = '0 ₽';
            currentDiscount = 0;
            appliedPromo = null;
            const promoMsg = document.getElementById('promoMessage');
            if (promoMsg) promoMsg.textContent = '';
            return;
        }
        container.innerHTML = cart.items.map(item => `
            <div class="cart-item">
                <span style="font-size:2rem;">${item.emoji}</span>
                <div class="cart-item-info">
                    <div class="product-name">${item.name}</div>
                    <div>${item.price} ₽ × ${item.qty} = ${item.price * item.qty} ₽</div>
                </div>
                <div class="cart-item-qty">
                    <button data-action="minus" data-id="${item.id}">−</button>
                    <span>${item.qty}</span>
                    <button data-action="plus" data-id="${item.id}">+</button>
                </div>
                <button class="cart-item-remove" data-action="remove" data-id="${item.id}">✕</button>
            </div>
        `).join('');
        recalcTotal();

        container.querySelectorAll('button[data-action]').forEach(btn => {
            btn.addEventListener('click', () => {
                const action = btn.dataset.action;
                const id = +btn.dataset.id;
                if (action === 'plus') cart.changeQty(id, 1);
                else if (action === 'minus') cart.changeQty(id, -1);
                else if (action === 'remove') cart.remove(id);
                updateCartBadge();
                renderCart();
            });
        });
    }

    renderCart();

    // Промокод
    const applyBtn = document.getElementById('applyPromoBtn');
    const promoInput = document.getElementById('promoCode');
    const promoMessage = document.getElementById('promoMessage');
    if (applyBtn) {
        applyBtn.addEventListener('click', () => {
            const code = promoInput.value.trim().toUpperCase();
            const promoCodes = {
                'CAPY10': { discount: 10, type: 'percent' },
                'CAPY500': { discount: 500, type: 'fixed' },
                'LOVE': { discount: 15, type: 'percent' }
            };
            const promo = promoCodes[code];
            if (promo) {
                appliedPromo = promo;
                if (promo.type === 'percent') {
                    currentDiscount = Math.round(cart.total * promo.discount / 100);
                } else {
                    currentDiscount = promo.discount;
                }
                promoMessage.textContent = `Промокод применён! Скидка: ${currentDiscount} ₽`;
                promoMessage.style.color = 'var(--green)';
                recalcTotal();
            } else {
                appliedPromo = null;
                currentDiscount = 0;
                promoMessage.textContent = 'Неверный промокод';
                promoMessage.style.color = 'red';
                recalcTotal();
            }
        });
    }

    // Оформление заказа
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.items.length === 0) { showToast('Корзина пуста!'); return; }
            const name = form.querySelector('#name').value.trim();
            const phone = form.querySelector('#phone').value.trim();
            const address = form.querySelector('#address').value.trim();
            if (!name || !phone || !address) { showToast('Заполните обязательные поля'); return; }

            const finalTotal = recalcTotal();
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            orders.push({
                id: Date.now(),
                date: new Date().toLocaleDateString('ru-RU'),
                items: cart.items,
                total: finalTotal,
                discount: currentDiscount,
                status: 'В обработке',
                track: 'RU' + Math.random().toString(36).substr(2, 9).toUpperCase()
            });
            localStorage.setItem('orders', JSON.stringify(orders));

            const earned = Math.round(finalTotal * 0.05);
            Loyalty.addPoints(earned);

            showToast(`Заказ оформлен, ${name}! +${earned} баллов лояльности`);
            cart.clear();
            currentDiscount = 0;
            appliedPromo = null;
            if (promoMessage) promoMessage.textContent = '';
            updateCartBadge();
            renderCart();
            form.reset();
            setTimeout(() => window.location.href = 'index.html', 3000);
        });
    }
}

// ---------- СТРАНИЦА ВХОДА / РЕГИСТРАЦИИ ----------
function initLoginPage() {
    const tabs = document.querySelectorAll('.auth-tab');
    if (tabs.length === 0) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.tab;
            document.getElementById('loginForm').classList.toggle('hidden', target !== 'login');
            document.getElementById('registerForm').classList.toggle('hidden', target !== 'register');
        });
    });
    document.getElementById('loginForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value.trim();
        const password = document.getElementById('loginPassword').value;
        const user = Auth.login(email, password);
        if (user) {
            showToast('Добро пожаловать, ' + user.name + '!');
            setTimeout(() => window.location.href = 'account.html', 1000);
        } else {
            document.getElementById('authMessage').textContent = 'Неверный email или пароль.';
        }
    });
    document.getElementById('registerForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('regName').value.trim();
        const email = document.getElementById('regEmail').value.trim();
        const password = document.getElementById('regPassword').value;
        const phone = document.getElementById('regPhone').value.trim();
        if (Auth.register({ name, email, password, phone })) {
            showToast('Регистрация успешна! Теперь войдите.');
            document.querySelector('.auth-tab[data-tab="login"]')?.click();
        } else {
            document.getElementById('authMessage').textContent = 'Пользователь с таким email уже существует.';
        }
    });
}

// ---------- ЛИЧНЫЙ КАБИНЕТ ----------
function initAccountPage() {
    const sidebar = document.querySelector('.account-sidebar');
    if (!sidebar) return;
    if (!Auth.currentUser) {
        window.location.href = 'login.html';
        return;
    }
    document.getElementById('userGreeting').innerHTML = `<span>👤</span> ${Auth.currentUser.name}`;
    const navBtns = document.querySelectorAll('.account-nav-btn');
    const content = document.getElementById('accountContent');

    const sections = {
        profile: renderProfile,
        orders: renderOrders,
        favorites: renderFavorites,
        tracking: renderTracking,
        addresses: renderAddresses,
        cooperation: renderCooperation
    };

    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            navBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const section = btn.dataset.section;
            if (sections[section]) sections[section]();
        });
    });

    document.getElementById('logoutBtn').addEventListener('click', () => {
        Auth.logout();
        window.location.href = 'index.html';
    });

    function renderProfile() {
        const user = Auth.currentUser;
        const points = Loyalty.getPoints();
        content.innerHTML = `
            <h2>Мой профиль</h2>
            <div class="form-group"><label>Имя</label><input type="text" id="profileName" value="${user.name}"></div>
            <div class="form-group"><label>Email</label><input type="email" value="${user.email}" disabled></div>
            <div class="form-group"><label>Телефон</label><input type="tel" id="profilePhone" value="${user.phone || ''}"></div>
            <button class="btn-submit" id="saveProfile">Сохранить</button>

            <div style="margin-top:24px; padding:16px; background:#fdf7f0; border-radius:10px;">
                <h3>Программа лояльности</h3>
                <p>Ваши баллы: <strong id="loyaltyPoints">${points}</strong> баллов</p>
                <p style="font-size:0.85rem; color:#666;">1 балл = 1 ₽ скидки при следующем заказе. Баллы можно списать при оформлении заказа (в разработке).</p>
            </div>
        `;
        document.getElementById('saveProfile').addEventListener('click', () => {
            const name = document.getElementById('profileName').value.trim();
            const phone = document.getElementById('profilePhone').value.trim();
            Auth.updateProfile({ name, phone });
            showToast('Профиль обновлён');
            document.getElementById('userGreeting').innerHTML = `<span>👤</span> ${name}`;
            const pointsEl = document.getElementById('loyaltyPoints');
            if (pointsEl) pointsEl.textContent = Loyalty.getPoints();
        });
    }

    function renderOrders() {
        const orders = JSON.parse(localStorage.getItem('orders')) || [];
        if (orders.length === 0) {
            content.innerHTML = '<h2>История заказов</h2><p>У вас пока нет заказов.</p>';
            return;
        }
        content.innerHTML = `<h2>История заказов</h2>
            <table class="orders-table">
                <tr><th>№</th><th>Дата</th><th>Товары</th><th>Сумма</th><th>Статус</th><th>Трек</th></tr>
                ${orders.map((o, i) => `
                    <tr>
                        <td>${i + 1}</td><td>${o.date}</td>
                        <td>${o.items.map(it => it.name).join(', ')}</td>
                        <td>${o.total} ₽</td><td>${o.status}</td><td>${o.track || '-'}</td>
                    </tr>
                `).join('')}
            </table>`;
    }

    function renderFavorites() {
        const favs = Auth.getFavorites();
        if (favs.length === 0) {
            content.innerHTML = '<h2>Избранное</h2><p>Вы ещё ничего не добавили.</p>';
            return;
        }
        content.innerHTML = `<h2>Избранное</h2><div class="products-grid" style="margin-top:20px;">
            ${favs.map(p => `
                <div class="product-card" data-id="${p.id}">
                    <div class="product-img">${p.emoji}</div>
                    <div class="product-body">
                        <div class="product-name">${p.name}</div>
                        <div class="product-price">${p.price} ₽</div>
                    </div>
                </div>
            `).join('')}
        </div>`;
        content.querySelectorAll('.product-card').forEach(card => {
            card.addEventListener('click', () => {
                const id = +card.dataset.id;
                const prod = products.find(p => p.id === id);
                if (prod) openProductModal(prod);
            });
        });
    }

    function renderTracking() {
        content.innerHTML = `
            <h2>Отслеживание посылки</h2>
            <div class="form-group"><label>Введите трек-номер</label><input type="text" id="trackInput" placeholder="RU123456789"></div>
            <button class="btn-submit" id="trackBtn">Отследить</button>
            <div id="trackResult" style="margin-top:16px;"></div>
        `;
        document.getElementById('trackBtn').addEventListener('click', () => {
            const track = document.getElementById('trackInput').value.trim();
            const orders = JSON.parse(localStorage.getItem('orders')) || [];
            const order = orders.find(o => o.track === track);
            const res = document.getElementById('trackResult');
            if (order) {
                res.innerHTML = `<p><strong>Статус:</strong> ${order.status}</p><p><strong>Дата заказа:</strong> ${order.date}</p>`;
            } else if (track) {
                res.innerHTML = '<p>Трек-номер не найден. Проверьте данные.</p>';
            }
        });
    }

    function renderAddresses() {
        const addresses = JSON.parse(localStorage.getItem('addresses')) || [];
        content.innerHTML = `
            <h2>Мои адреса</h2>
            <div id="addressList">${addresses.map((a, i) => `
                <div class="address-item">
                    <span>${a.label || 'Адрес ' + (i + 1)}: ${a.street}, ${a.city}, ${a.zip}</span>
                    <button class="text-btn" data-delete="${i}">Удалить</button>
                </div>
            `).join('')}</div>
            <form id="addAddressForm" style="margin-top:20px;">
                <div class="form-group"><label>Название (например, Дом)</label><input type="text" id="addrLabel"></div>
                <div class="form-group"><label>Улица, дом</label><input type="text" id="addrStreet" required></div>
                <div class="form-group"><label>Город</label><input type="text" id="addrCity" required></div>
                <div class="form-group"><label>Индекс</label><input type="text" id="addrZip"></div>
                <button type="submit" class="btn-submit">Добавить адрес</button>
            </form>
        `;
        document.getElementById('addAddressForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const label = document.getElementById('addrLabel').value.trim();
            const street = document.getElementById('addrStreet').value.trim();
            const city = document.getElementById('addrCity').value.trim();
            const zip = document.getElementById('addrZip').value.trim();
            addresses.push({ label, street, city, zip });
            localStorage.setItem('addresses', JSON.stringify(addresses));
            renderAddresses();
        });
        document.querySelectorAll('[data-delete]').forEach(btn => {
            btn.addEventListener('click', () => {
                const idx = +btn.dataset.delete;
                addresses.splice(idx, 1);
                localStorage.setItem('addresses', JSON.stringify(addresses));
                renderAddresses();
            });
        });
    }

    function renderCooperation() {
        content.innerHTML = `
            <h2>Партнёрская программа</h2>
            <p>Оставьте заявку, и мы обсудим условия сотрудничества.</p>
            <form id="coopForm">
                <div class="form-group"><label>Имя</label><input type="text" id="coopName" required></div>
                <div class="form-group"><label>Email</label><input type="email" id="coopEmail" required></div>
                <div class="form-group"><label>Компания</label><input type="text"></div>
                <button type="submit" class="btn-submit">Отправить</button>
            </form>
        `;
        document.getElementById('coopForm').addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Заявка отправлена!');
        });
    }

    renderProfile(); // загружаем профиль по умолчанию
}

// ---------- СОТРУДНИЧЕСТВО (отдельная страница) ----------
function initCooperationForm() {
    const form = document.getElementById('coopForm');
    if (!form) return;
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.querySelector('#coopName')?.value.trim();
        const email = form.querySelector('#coopEmail')?.value.trim();
        if (!name || !email) { showToast('Введите имя и email'); return; }
        showToast('Заявка отправлена! Мы ответим в течение 24 часов.');
        form.reset();
    });
}

// ---------- СТРАНИЦА КОНТЕНТА ----------
function initContentTabs() {
    const tabs = document.querySelectorAll('.content-tab');
    const panels = document.querySelectorAll('.content-panel');
    if (tabs.length === 0) return;
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            const target = tab.dataset.target;
            panels.forEach(p => p.classList.remove('active'));
            document.getElementById(target)?.classList.add('active');
        });
    });

    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => {
            const item = q.parentElement;
            item.classList.toggle('open');
        });
    });

    initReadMoreButtons();
}

// ---------- КАПИБАРА-ПОМОЩНИК ----------
class CapybaraAssistant {
    constructor() {
        // Словарь синонимов
        this.synonyms = {
            greeting: ['привет', 'здравствуй', 'добрый день', 'хай', 'здорово', 'доброе утро'],
            order: ['заказать', 'заказ', 'оформить', 'купить', 'покупк', 'оформление'],
            delivery: ['доставк', 'отправк', 'почта', 'сдэк', 'привез', 'получить', 'когда придет', 'срок доставк'],
            payment: ['оплат', 'как платить', 'способ оплаты', 'карта', 'наложенный', 'деньги', 'предоплат'],
            discount: ['скидк', 'промокод', 'акци', 'дешевл', 'распродаж', 'купон'],
            giftWrap: ['упаковк', 'подарочн', 'бокс', 'ленточк', 'открытк', 'крафт'],
            individual: ['индивидуаль', 'уникальн', 'свой дизайн', 'персональн', 'на заказ', 'под заказ'],
            return: ['возврат', 'обмен', 'брак', 'не подошл', 'вернуть', 'отказаться'],
            materials: ['материал', 'состав', 'из чего', 'ухаживать', 'стират', 'чистит'],
            timing: ['срок', 'сколько времени', 'долго', 'изготовлени', 'готово', 'дней'],
            account: ['регистрац', 'войти', 'личный кабинет', 'аккаунт', 'профиль', 'логин'],
            loyalty: ['балл', 'лояльност', 'бонус', 'кэшбэк'],
            partnership: ['сотруднич', 'партнёр', 'оптов', 'магазин', 'дилер'],
            contacts: ['контакт', 'телефон', 'соцсет', 'instagr', 'telegram', 'email', 'почта'],
            size: ['размер', 'подойдёт', 'большой', 'маленьк', 'длина', 'обхват'],
            giftIdea: ['что подарить', 'подарок для', 'идея подарк', 'посоветуй'],
            complaint: ['проблем', 'ошибк', 'не работает', 'жалоб'],
            catalog: ['каталог', 'товары', 'ассортимент', 'что есть']
        };

        // Память на неотвеченные вопросы
        this.unknownQuestions = JSON.parse(localStorage.getItem('unknownQuestions') || '[]');
        // Выученные ответы (пользовательские)
        this.learnedAnswers = JSON.parse(localStorage.getItem('learnedAnswers') || '{}');

        this.createWidget();
        this.messages = [
            'Привет! Я Капибара-помощник 🧡',
            'Чем могу помочь? Выберите вопрос или напишите свой.'
        ];
        this.isOpen = false;
        this.initEvents();
    }

    createWidget() {
        const widget = document.createElement('div');
        widget.className = 'capybara-widget';
        widget.innerHTML = `
            <div class="capybara-chat" id="capyChat">
                <div class="chat-header">
                    <svg viewBox="0 0 100 100"><ellipse cx="50" cy="56" rx="20" ry="16" fill="#8B6B4A"/><ellipse cx="50" cy="40" rx="13" ry="10" fill="#B8915C"/><circle cx="42" cy="37" r="3" fill="#2C1A08"/><circle cx="58" cy="37" r="3" fill="#2C1A08"/><ellipse cx="50" cy="48" rx="6" ry="4" fill="#3D2510"/></svg>
                    <span>Капибара-помощник</span>
                    <button class="chat-close" id="chatClose">✕</button>
                </div>
                <div class="chat-messages" id="chatMessages"></div>
                <div class="chat-suggestions" id="chatSuggestions">
                    <span class="chat-suggestion">🛍️ Как заказать?</span>
                    <span class="chat-suggestion">🚚 Доставка</span>
                    <span class="chat-suggestion">💎 Скидки</span>
                    <span class="chat-suggestion">🎁 Подарочная упаковка</span>
                </div>
                <div class="chat-input-area">
                    <input type="text" id="chatInput" placeholder="Напишите вопрос...">
                    <button id="chatSend">➤</button>
                </div>
            </div>
            <div class="capybara-button" id="capyButton">
                <svg viewBox="0 0 100 100">
                    <ellipse cx="50" cy="56" rx="30" ry="25" fill="#A0784C"/>
                    <ellipse cx="50" cy="38" rx="19" ry="15" fill="#C49A6C"/>
                    <ellipse cx="34" cy="36" rx="7" ry="4.5" fill="#6B4F30"/>
                    <ellipse cx="66" cy="36" rx="7" ry="4.5" fill="#6B4F30"/>
                    <circle cx="34" cy="38" r="3.5" fill="#2C1A08" class="capybara-eye"/>
                    <circle cx="66" cy="38" r="3.5" fill="#2C1A08" class="capybara-eye"/>
                    <circle cx="35.5" cy="36.5" r="1.3" fill="white"/>
                    <circle cx="67.5" cy="36.5" r="1.3" fill="white"/>
                    <ellipse cx="50" cy="50" rx="8" ry="5.5" fill="#6B4F30"/>
                    <ellipse cx="50" cy="48" rx="5" ry="3.5" fill="#3D2510"/>
                    <path d="M46 54 Q50 58 54 54" stroke="#3D2510" stroke-width="1.5" fill="none" class="capybara-mouth"/>
                </svg>
                <span class="capybara-notification" id="capyNotification" style="display:none;">1</span>
            </div>
        `;
        document.body.appendChild(widget);
    }

    initEvents() {
        const button = document.getElementById('capyButton');
        const chat = document.getElementById('capyChat');
        const closeBtn = document.getElementById('chatClose');
        const input = document.getElementById('chatInput');
        const sendBtn = document.getElementById('chatSend');
        const suggestions = document.querySelectorAll('.chat-suggestion');

        button.addEventListener('click', () => this.toggleChat());
        closeBtn.addEventListener('click', () => this.closeChat());
        sendBtn.addEventListener('click', () => this.sendMessage());
        input.addEventListener('keypress', (e) => { if (e.key === 'Enter') this.sendMessage(); });
        suggestions.forEach(s => {
            s.addEventListener('click', () => {
                this.addUserMessage(s.textContent);
                this.respondTo(s.textContent);
            });
        });
        this.renderMessages();
    }

    toggleChat() {
        const chat = document.getElementById('capyChat');
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            chat.classList.add('open');
            this.hideNotification();
        } else {
            chat.classList.remove('open');
        }
    }

    closeChat() {
        document.getElementById('capyChat').classList.remove('open');
        this.isOpen = false;
    }

    addMessage(text, sender, html = false) {
        const messagesDiv = document.getElementById('chatMessages');
        const msg = document.createElement('div');
        msg.className = `message ${sender}`;
        if (html) {
            msg.innerHTML = text;
        } else {
            msg.textContent = text;
        }
        messagesDiv.appendChild(msg);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    addUserMessage(text) {
        this.addMessage(text, 'user');
    }

    addBotMessage(text, html = false) {
        if (html) {
            this.addMessage(text, 'bot', true);
        } else {
            this.addMessage(text, 'bot', false);
        }
        this.messages.push(text);
        if (this.messages.length > 10) this.messages.shift();
    }

    // Обучение новому ответу
    learnAnswer(question, answer) {
        this.learnedAnswers[question.toLowerCase().trim()] = answer;
        localStorage.setItem('learnedAnswers', JSON.stringify(this.learnedAnswers));
    }

    respondTo(question) {
        const q = question.toLowerCase().trim();

        // 1. Проверяем выученные ответы (точное совпадение)
        if (this.learnedAnswers[q]) {
            this.addBotMessage(this.learnedAnswers[q]);
            return;
        }

        let answer = '';

        // 2. Проверяем по словарю синонимов
        if (this.synonyms.greeting.some(word => q.includes(word))) {
            const greetings = [
                'Привет-привет! Я Капибара 🧡 Чем могу помочь?',
                'Здравствуйте! Рада вас видеть. Задавайте вопрос!',
                'Привет! Я тут, чтобы помочь с выбором подарков ручной работы.'
            ];
            answer = greetings[Math.floor(Math.random() * greetings.length)];
        } else if (this.synonyms.order.some(word => q.includes(word))) {
            answer = 'Всё просто: добавьте понравившиеся товары в корзину, перейдите в неё, заполните имя, телефон и адрес, и нажмите «Оформить заказ».';
        } else if (this.synonyms.delivery.some(word => q.includes(word))) {
            answer = 'Отправляем Почтой России или СДЭК. Обычно заказ идёт 3–10 рабочих дней. Каждое изделие тщательно упаковываем.';
        } else if (this.synonyms.payment.some(word => q.includes(word))) {
            answer = 'Пока мы работаем по предоплате: перевод на карту или по реквизитам. В будущем добавим онлайн-оплату.';
        } else if (this.synonyms.discount.some(word => q.includes(word))) {
            answer = 'Да, у нас бывают скидки! Действуют промокоды CAPY10 (-10%) и CAPY500 (-500₽). Также дарим скидку 10% за подписку.';
        } else if (this.synonyms.giftWrap.some(word => q.includes(word))) {
            answer = 'Каждый заказ упаковываем в крафтовую бумагу с ленточкой и открыткой. Бесплатно!';
        } else if (this.synonyms.individual.some(word => q.includes(word))) {
            answer = 'Конечно! Мы создадим изделие по вашим пожеланиям. Напишите на почту capybara.art@mail.ru с описанием идеи.';
        } else if (this.synonyms.return.some(word => q.includes(word))) {
            answer = 'Если изделие не подошло или есть дефект, напишите нам в течение 7 дней. Заменим или вернём деньги.';
        } else if (this.synonyms.materials.some(word => q.includes(word))) {
            answer = 'Используем только качественные материалы: японский бисер, чешский жемчуг, натуральную шерсть. Украшения не мочить, игрушки чистить мягкой щёткой.';
        } else if (this.synonyms.timing.some(word => q.includes(word))) {
            answer = 'Обычно на изготовление уходит 3–7 дней. Срочные заказы обсуждаем индивидуально.';
        } else if (this.synonyms.account.some(word => q.includes(word))) {
            answer = 'Зарегистрируйтесь через кнопку «Войти» в шапке сайта. В личном кабинете можно отслеживать заказы и копить баллы.';
        } else if (this.synonyms.loyalty.some(word => q.includes(word))) {
            answer = 'За каждый заказ начисляются баллы (5% от суммы). 1 балл = 1 рубль скидки. Баланс виден в профиле.';
        } else if (this.synonyms.partnership.some(word => q.includes(word))) {
            answer = 'Мы открыты к сотрудничеству с магазинами, ярмарками и блогерами. Оставьте заявку на странице «Сотрудничество».';
        } else if (this.synonyms.contacts.some(word => q.includes(word))) {
            answer = 'Email: capybara.art@mail.ru. Соцсети — в футере сайта (ВК, Telegram, Instagram).';
        } else if (this.synonyms.size.some(word => q.includes(word))) {
            answer = 'Размеры указаны в описании товара. Если сомневаетесь, напишите — поможем подобрать или изменим размер.';
        } else if (this.synonyms.giftIdea.some(word => q.includes(word))) {
            answer = 'Для мамы/подруги — букеты из лент или серьги. Для детей — валяные игрушки. Универсальный вариант — именная фенечка.';
        } else if (this.synonyms.complaint.some(word => q.includes(word))) {
            answer = 'Ой, простите за неудобства! Напишите на capybara.art@mail.ru, и мы всё решим.';
        } else if (this.synonyms.catalog.some(word => q.includes(word))) {
            answer = 'Наш каталог доступен по ссылке в меню «Каталог». Там вы найдёте все актуальные работы!';
        }

        // 3. Если ответ не найден
        if (!answer) {
            // Сохраняем неотвеченный вопрос
            this.unknownQuestions.push({ question: q, date: new Date().toISOString() });
            localStorage.setItem('unknownQuestions', JSON.stringify(this.unknownQuestions.slice(-50))); // храним последние 50

            // Предлагаем научить
            const fallbackMsg = 'Я пока не знаю ответа на этот вопрос 😔 Хотите научить меня?';
            this.addBotMessage(fallbackMsg);

            // Создаём кнопку "Научить"
            const teachContainer = document.createElement('div');
            teachContainer.className = 'message bot';
            teachContainer.innerHTML = `
                <div style="display:flex; gap:6px; margin-top:8px;">
                    <input type="text" id="teachInput" placeholder="Правильный ответ" style="flex:1; padding:4px 8px; border-radius:10px; border:1px solid #ccc;">
                    <button id="teachSendBtn" style="background:var(--brown); color:#fff; border:none; border-radius:10px; padding:4px 10px; cursor:pointer;">✓</button>
                </div>
            `;
            document.getElementById('chatMessages').appendChild(teachContainer);

            const teachInput = document.getElementById('teachInput');
            const teachSendBtn = document.getElementById('teachSendBtn');

            teachSendBtn.addEventListener('click', () => {
                const newAnswer = teachInput.value.trim();
                if (newAnswer) {
                    this.learnAnswer(q, newAnswer);
                    this.addBotMessage('Спасибо! Теперь я знаю ответ на этот вопрос.');
                    teachContainer.remove();
                }
            });
        } else {
            setTimeout(() => this.addBotMessage(answer), 500);
        }
    }

    sendMessage() {
        const input = document.getElementById('chatInput');
        const text = input.value.trim();
        if (!text) return;
        this.addUserMessage(text);
        input.value = '';
        this.respondTo(text);
    }

    renderMessages() {
        const messagesDiv = document.getElementById('chatMessages');
        messagesDiv.innerHTML = this.messages.map(m => `<div class="message bot">${m}</div>`).join('');
        if (this.messages.length === 0) {
            this.addBotMessage('Привет! Я Капибара-помощник 🧡');
            this.addBotMessage('Чем могу помочь? Выберите вопрос или напишите свой.');
        }
    }

    showNotification(count = 1) {
        const notif = document.getElementById('capyNotification');
        notif.style.display = 'flex';
        notif.textContent = count;
    }

    hideNotification() {
        document.getElementById('capyNotification').style.display = 'none';
    }

    say(message) {
        if (!this.isOpen) this.showNotification();
        this.addBotMessage(message);
    }
}

// ---------- КНОПКА НАВЕРХ ----------
function initScrollTop() {
    const btn = document.getElementById('scrollTopBtn');
    if (!btn) return;
    window.addEventListener('scroll', () => {
        btn.classList.toggle('visible', window.scrollY > 400);
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ---------- ЗАПУСК ----------
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
    updateHeaderUser();
    initScrollTop();

    if (document.getElementById('productsGrid')) initCatalog();
    if (document.querySelector('.carousel-track')) initCarousel();
    if (document.getElementById('cartItemsContainer')) initCartPage();
    if (document.getElementById('coopForm') && !document.querySelector('.account-sidebar')) initCooperationForm();
    if (document.querySelector('.auth-tab')) initLoginPage();
    if (document.querySelector('.account-sidebar')) initAccountPage();
    if (document.querySelector('.content-tab')) initContentTabs();
    if (document.getElementById('featuredTrack')) initFeaturedCarousel();

    window.assistant = new CapybaraAssistant();

    const originalAdd = cart.add.bind(cart);
    cart.add = function(product, qty) {
        originalAdd(product, qty);
        if (window.assistant) window.assistant.say(`Отличный выбор! ${product.name} уже в корзине.`);
    };
});
