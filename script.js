/* =========================================================
   GREENBASKET — Application Script
   ========================================================= */
(function () {
    'use strict';

    /* ---------------------------------------------------------
       1. DATA
       --------------------------------------------------------- */
    const U = 'https://images.unsplash.com/photo-';
    const Q = '?auto=format&fit=crop&w=800&q=70';

    const CATEGORIES = [
        { id: 'all', label: 'All Vegetables' },
        { id: 'leafy', label: 'Leafy Greens' },
        { id: 'root', label: 'Root Vegetables' },
        { id: 'cruciferous', label: 'Cruciferous' },
        { id: 'fruiting', label: 'Fruiting' },
        { id: 'herbs', label: 'Herbs & Spices' }
    ];

    const PRODUCTS = [
        {
            id: 'tomato', name: 'Tomato', cat: 'fruiting', price: 42, unit: 'kg', rating: 4.9, popular: true,
            desc: 'Vine-ripened red tomatoes with a deep, sweet flavour.',
            img: U + '1546094096-0df4bcaaa337' + Q, emoji: '🍅', tag: 'Farm Fresh'
        },
        {
            id: 'potato', name: 'Potato', cat: 'root', price: 32, unit: 'kg', rating: 4.6, popular: true,
            desc: 'Firm, earthy potatoes — perfect for roasting or mashing.',
            img: U + '1518977676601-b53f82aba655' + Q, emoji: '🥔', tag: 'Everyday'
        },
        {
            id: 'onion', name: 'Onion', cat: 'root', price: 38, unit: 'kg', rating: 4.5, popular: false,
            desc: 'Crisp, pungent red onions that caramelise beautifully.',
            img: U + '1508747703725-719777637510' + Q, emoji: '🧅', tag: 'Everyday'
        },
        {
            id: 'carrot', name: 'Carrot', cat: 'root', price: 55, unit: 'kg', rating: 4.8, popular: true,
            desc: 'Sweet, snappy carrots with rich orange colour.',
            img: U + '1447175008436-054170c2e979' + Q, emoji: '🥕', tag: 'Sweet & Crisp'
        },
        {
            id: 'broccoli', name: 'Broccoli', cat: 'cruciferous', price: 120, unit: 'kg', rating: 4.7, popular: false,
            desc: 'Tight, deep-green florets with a clean, mild bite.',
            img: U + '1459411621453-7b03977f4bfc' + Q, emoji: '🥦', tag: 'Superfood'
        },
        {
            id: 'cauliflower', name: 'Cauliflower', cat: 'cruciferous', price: 48, unit: 'kg', rating: 4.4, popular: false,
            desc: 'Dense white heads, neatly trimmed and ready to cook.',
            img: U + '1568584711075-3d021a7c3ca3' + Q, emoji: '🥬', tag: 'Daily Pick'
        },
        {
            id: 'spinach', name: 'Spinach', cat: 'leafy', price: 30, unit: 'bunch', rating: 4.8, popular: true,
            desc: 'Tender baby spinach leaves, cut this morning.',
            img: U + '1576045057995-568f588f82fb' + Q, emoji: '🌿', tag: 'Cut Today'
        },
        {
            id: 'cucumber', name: 'Cucumber', cat: 'fruiting', price: 35, unit: 'kg', rating: 4.5, popular: false,
            desc: 'Cool, seedless cucumbers with a clean crunch.',
            img: U + '1604977042946-1eecc30f269e' + Q, emoji: '🥒', tag: 'Hydrating'
        },
        {
            id: 'capsicum', name: 'Capsicum', cat: 'fruiting', price: 85, unit: 'kg', rating: 4.7, popular: true,
            desc: 'Thick-walled bell peppers in mixed red, yellow and green.',
            img: U + '1563565375-f3fdfdbefa83' + Q, emoji: '🫑', tag: 'Colour Mix'
        },
        {
            id: 'brinjal', name: 'Brinjal', cat: 'fruiting', price: 48, unit: 'kg', rating: 4.3, popular: false,
            desc: 'Glossy purple aubergines with creamy, mild flesh.',
            img: U + '1615484477778-ca3b77940c25' + Q, emoji: '🍆', tag: 'Garden Grown'
        },
        {
            id: 'beetroot', name: 'Beetroot', cat: 'root', price: 60, unit: 'kg', rating: 4.6, popular: false,
            desc: 'Deep ruby beets, earthy and naturally sweet.',
            img: U + '1593105544559-ecb03bf76f82' + Q, emoji: '🍠', tag: 'Iron Rich'
        },
        {
            id: 'peas', name: 'Green Peas', cat: 'fruiting', price: 92, unit: 'kg', rating: 4.7, popular: true,
            desc: 'Plump, sweet peas shelled from fresh pods.',
            img: U + '1592394533824-9440e5d68530' + Q, emoji: '🫛', tag: 'Shelled Fresh'
        },
        {
            id: 'coriander', name: 'Coriander', cat: 'herbs', price: 20, unit: 'bunch', rating: 4.8, popular: true,
            desc: 'Fragrant coriander with bright, fresh stems.',
            img: U + '1590779033100-9f60a05a013d' + Q, emoji: '🌱', tag: 'Aromatic'
        },
        {
            id: 'chilli', name: 'Green Chilli', cat: 'herbs', price: 60, unit: 'kg', rating: 4.4, popular: false,
            desc: 'Slender green chillies with a sharp, clean heat.',
            img: U + '1583259210415-99cb8ff1aec7' + Q, emoji: '🌶️', tag: 'Spicy'
        }
    ];

    const CATEGORY_TILES = [
        { id: 'leafy', label: 'Leafy Greens', sub: '12 varieties', img: U + '1576045057995-568f588f82fb' + Q, emoji: '🥬' },
        { id: 'root', label: 'Root Vegetables', sub: '9 varieties', img: U + '1447175008436-054170c2e979' + Q, emoji: '🥕' },
        { id: 'cruciferous', label: 'Cruciferous', sub: '6 varieties', img: U + '1459411621453-7b03977f4bfc' + Q, emoji: '🥦' },
        { id: 'fruiting', label: 'Fruiting', sub: '14 varieties', img: U + '1546094096-0df4bcaaa337' + Q, emoji: '🍅' },
        { id: 'herbs', label: 'Herbs & Spices', sub: '8 varieties', img: U + '1590779033100-9f60a05a013d' + Q, emoji: '🌿' }
    ];

    const DELIVERY_FEE = 40;
    const FREE_OVER = 499;

    /* ---------------------------------------------------------
       2. STATE
       --------------------------------------------------------- */
    const state = {
        page: 'home',
        search: '',
        category: 'all',
        sort: 'popular',
        cart: safeParse('gb_cart', []),
        wishlist: safeParse('gb_wish', [])
    };

    function safeParse(key, fallback) {
        try {
            const raw = localStorage.getItem(key);
            if (!raw) return fallback;
            const val = JSON.parse(raw);
            return Array.isArray(val) ? val : fallback;
        } catch (e) { return fallback; }
    }
    function safeSave(key, val) {
        try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) { /* quota / private mode */ }
    }

    /* ---------------------------------------------------------
       3. HELPERS
       --------------------------------------------------------- */
    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.prototype.slice.call((root || document).querySelectorAll(sel));

    const money = n => '₹' + Number(n).toLocaleString('en-IN');
    const getProduct = id => PRODUCTS.find(p => p.id === id);
    const cartQty = id => {
        const item = state.cart.find(i => i.id === id);
        return item ? item.qty : 0;
    };
    const cartCount = () => state.cart.reduce((s, i) => s + i.qty, 0);

    window.imgFail = function (img) {
        const box = img.closest('.ph');
        if (box) box.classList.add('failed');
        img.style.display = 'none';
    };

    /* ---------------------------------------------------------
       4. TOASTS
       --------------------------------------------------------- */
    const toastWrap = $('#toastWrap');
    function toast(msg, type) {
        const el = document.createElement('div');
        el.className = 'toast' + (type === 'err' ? ' err' : '');
        el.innerHTML = '<span class="t-ico">' + (type === 'err' ? '!' : '✓') + '</span><span></span>';
        el.lastChild.textContent = msg;
        toastWrap.appendChild(el);
        requestAnimationFrame(() => el.classList.add('in'));
        setTimeout(() => {
            el.classList.remove('in');
            setTimeout(() => el.remove(), 420);
        }, 2700);
    }

    /* ---------------------------------------------------------
       5. PRODUCT CARDS
       --------------------------------------------------------- */
    function actionHTML(p) {
        const q = cartQty(p.id);
        if (q > 0) {
            return '<div class="stepper" role="group" aria-label="Quantity for ' + p.name + '">' +
                '<button type="button" data-act="dec" aria-label="Decrease quantity">−</button>' +
                '<span aria-live="polite">' + q + '</span>' +
                '<button type="button" data-act="inc" aria-label="Increase quantity">+</button>' +
                '</div>';
        }
        return '<button type="button" class="btn btn-primary btn-sm" data-act="add">Add to Cart</button>';
    }

    function productCard(p) {
        const wished = state.wishlist.indexOf(p.id) > -1;
        return '' +
            '<article class="product-card glass" data-id="' + p.id + '">' +
            '<div class="ph pc-img">' +
            '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" decoding="async" onerror="imgFail(this)">' +
            '<span class="ph-fallback" aria-hidden="true">' + p.emoji + '</span>' +
            '<span class="badge">' + p.tag + '</span>' +
            '<button type="button" class="wish' + (wished ? ' on' : '') + '" data-act="wish" ' +
            'aria-label="Save ' + p.name + ' to wishlist" aria-pressed="' + wished + '">' +
            '<svg viewBox="0 0 24 24" width="17" height="17" fill="' + (wished ? 'currentColor' : 'none') + '" ' +
            'stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" aria-hidden="true">' +
            '<path d="M12 20.4S4.6 15.8 4.6 10.3A4.4 4.4 0 0 1 12 7.2a4.4 4.4 0 0 1 7.4 3.1c0 5.5-7.4 10.1-7.4 10.1Z"/></svg>' +
            '</button>' +
            '</div>' +
            '<div class="pc-body">' +
            '<div class="pc-top"><h3>' + p.name + '</h3><span class="rate">★ ' + p.rating.toFixed(1) + '</span></div>' +
            '<p class="pc-desc">' + p.desc + '</p>' +
            '<div class="pc-row">' +
            '<span class="unit">per ' + p.unit + '</span>' +
            '<span class="freshness"><i></i>Harvested today</span>' +
            '</div>' +
            '<div class="pc-foot">' +
            '<div class="price">' + money(p.price) + '<small>/' + p.unit + '</small></div>' +
            '<div class="pc-action">' + actionHTML(p) + '</div>' +
            '</div>' +
            '</div>' +
            '</article>';
    }

    /* ---------------------------------------------------------
       6. CART LOGIC
       --------------------------------------------------------- */
    function addToCart(id, n) {
        n = n || 1;
        const item = state.cart.find(i => i.id === id);
        if (item) { item.qty += n; } else { state.cart.push({ id: id, qty: n }); }
        state.cart = state.cart.filter(i => i.qty > 0);
        syncCart();
    }
    function setQty(id, qty) {
        const item = state.cart.find(i => i.id === id);
        if (!item) return;
        item.qty = qty;
        state.cart = state.cart.filter(i => i.qty > 0);
        syncCart();
    }
    function syncCart() {
        safeSave('gb_cart', state.cart);
        renderCart();
        updateAllCardActions();
        renderBadge();
    }
    function renderBadge() {
        const el = $('#cartCount');
        const n = cartCount();
        el.textContent = n;
        el.classList.remove('pop');
        void el.offsetWidth;
        el.classList.add('pop');
    }
    function updateAllCardActions() {
        $$('.product-card').forEach(card => {
            const p = getProduct(card.dataset.id);
            if (!p) return;
            const holder = card.querySelector('.pc-action');
            if (holder) holder.innerHTML = actionHTML(p);
            const w = card.querySelector('.wish');
            if (w) {
                const on = state.wishlist.indexOf(p.id) > -1;
                w.classList.toggle('on', on);
                w.setAttribute('aria-pressed', String(on));
                const svg = w.querySelector('svg');
                if (svg) svg.setAttribute('fill', on ? 'currentColor' : 'none');
            }
        });
    }

    const cartItemsEl = $('#cartItems');
    const cartFootEl = $('#cartFoot');

    function renderCart() {
        const items = state.cart
            .map(i => ({ id: i.id, qty: i.qty, p: getProduct(i.id) }))
            .filter(i => i.p);

        const count = items.reduce((s, i) => s + i.qty, 0);
        $('#cartSubLabel').textContent = count + (count === 1 ? ' item' : ' items');

        if (!items.length) {
            cartItemsEl.innerHTML =
                '<div class="cart-empty">' +
                '<div class="ce-ico">🧺</div>' +
                '<h4>Your basket is empty</h4>' +
                '<p>Add some farm-fresh vegetables to get started.</p>' +
                '<a href="#/shop" class="btn btn-primary btn-sm" data-close-cart>Browse Vegetables</a>' +
                '</div>';
            cartFootEl.style.display = 'none';
            return;
        }
        cartFootEl.style.display = '';

        cartItemsEl.innerHTML = items.map(function (item) {
            const p = item.p;
            return '' +
                '<div class="cart-item" data-id="' + p.id + '">' +
                '<div class="ph ci-img">' +
                '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="imgFail(this)">' +
                '<span class="ph-fallback" aria-hidden="true">' + p.emoji + '</span>' +
                '</div>' +
                '<div class="ci-info">' +
                '<strong>' + p.name + '</strong>' +
                '<small>' + money(p.price) + ' per ' + p.unit + '</small>' +
                '<div class="ci-row">' +
                '<div class="stepper sm">' +
                '<button type="button" data-cart="dec" aria-label="Decrease ' + p.name + '">−</button>' +
                '<span>' + item.qty + '</span>' +
                '<button type="button" data-cart="inc" aria-label="Increase ' + p.name + '">+</button>' +
                '</div>' +
                '<button type="button" class="ci-remove" data-cart="remove">Remove</button>' +
                '</div>' +
                '</div>' +
                '<div class="ci-price">' + money(p.price * item.qty) + '</div>' +
                '</div>';
        }).join('');

        const subtotal = items.reduce((s, i) => s + i.p.price * i.qty, 0);
        const delivery = subtotal >= FREE_OVER ? 0 : DELIVERY_FEE;
        const total = subtotal + delivery;

        $('#sumSubtotal').textContent = money(subtotal);
        $('#sumDelivery').innerHTML = delivery === 0
            ? '<span class="free-tag">FREE</span>'
            : money(delivery);
        $('#sumTotal').textContent = money(total);

        const hint = $('#deliveryHint');
        if (subtotal >= FREE_OVER) {
            hint.textContent = '🎉 You have unlocked free delivery!';
            hint.style.color = 'var(--green-700)';
        } else {
            hint.textContent = 'Add ' + money(FREE_OVER - subtotal) + ' more for free delivery';
            hint.style.color = '';
        }
    }

    /* ---------------------------------------------------------
       7. CART PANEL UI
       --------------------------------------------------------- */
    const cartPanel = $('#cartPanel');
    const overlay = $('#overlay');

    function openCart() {
        cartPanel.classList.add('open');
        overlay.classList.add('open');
        cartPanel.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    function closeCart() {
        cartPanel.classList.remove('open');
        overlay.classList.remove('open');
        cartPanel.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    $('#cartBtn').addEventListener('click', openCart);
    $('#cartClose').addEventListener('click', closeCart);
    overlay.addEventListener('click', closeCart);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCart(); });

    document.addEventListener('click', function (e) {
        if (e.target.closest('[data-close-cart]')) closeCart();
    });

    checkoutBtnInit();
    function checkoutBtnInit() {
        $('#checkoutBtn').addEventListener('click', function () {
            if (!state.cart.length) { toast('Your basket is empty', 'err'); return; }
            toast('Demo checkout — no payment is processed 🌱');
        });
    }

    /* Delegated product interactions */
    document.addEventListener('click', function (e) {
        const actEl = e.target.closest('[data-act]');
        if (!actEl) return;
        const card = actEl.closest('.product-card');
        if (!card) return;
        const p = getProduct(card.dataset.id);
        if (!p) return;

        const act = actEl.dataset.act;
        if (act === 'add') {
            addToCart(p.id, 1);
            toast(p.name + ' added to your basket');
        } else if (act === 'inc') {
            addToCart(p.id, 1);
        } else if (act === 'dec') {
            const next = cartQty(p.id) - 1;
            setQty(p.id, next);
            if (next <= 0) toast(p.name + ' removed from basket');
        } else if (act === 'wish') {
            toggleWish(p);
            updateAllCardActions();
        }
    });

    /* Delegated cart panel interactions */
    cartItemsEl.addEventListener('click', function (e) {
        const btn = e.target.closest('[data-cart]');
        if (!btn) return;
        const row = btn.closest('[data-id]');
        if (!row) return;
        const id = row.dataset.id;
        const act = btn.dataset.cart;
        if (act === 'inc') addToCart(id, 1);
        else if (act === 'dec') {
            const next = cartQty(id) - 1;
            setQty(id, next);
            if (next <= 0) toast('Item removed from basket');
        } else if (act === 'remove') {
            setQty(id, 0);
            toast('Item removed from basket');
        }
    });

    function toggleWish(p) {
        const idx = state.wishlist.indexOf(p.id);
        if (idx > -1) {
            state.wishlist.splice(idx, 1);
            toast(p.name + ' removed from wishlist');
        } else {
            state.wishlist.push(p.id);
            toast(p.name + ' saved to wishlist ♥');
        }
        safeSave('gb_wish', state.wishlist);
    }

    /* ---------------------------------------------------------
       8. HOME RENDERING
       --------------------------------------------------------- */
    function renderHome() {
        const catGrid = $('#catGrid');
        catGrid.innerHTML = CATEGORY_TILES.map(function (c) {
            return '' +
                '<a class="cat-card reveal" href="#/shop" data-cat="' + c.id + '">' +
                '<div class="ph" style="position:absolute;inset:0;">' +
                '<img src="' + c.img + '" alt="' + c.label + '" loading="lazy" onerror="imgFail(this)">' +
                '<span class="ph-fallback" aria-hidden="true">' + c.emoji + '</span>' +
                '</div>' +
                '<div class="cat-label"><strong>' + c.label + '</strong><small>' + c.sub + '</small></div>' +
                '</a>';
        }).join('');

        catGrid.addEventListener('click', function (e) {
            const card = e.target.closest('[data-cat]');
            if (!card) return;
            state.category = card.dataset.cat;
            syncChips();
        });

        const popular = PRODUCTS.filter(p => p.popular).slice(0, 6);
        $('#popularGrid').innerHTML = popular.map(productCard).join('');
    }

    /* ---------------------------------------------------------
       9. SHOP RENDERING
       --------------------------------------------------------- */
    const shopGrid = $('#shopGrid');
    const emptyState = $('#emptyState');

    function syncChips() {
        $$('#categoryChips .chip').forEach(function (chip) {
            chip.classList.toggle('active', chip.dataset.cat === state.category);
        });
    }

    function renderChips() {
        const holder = $('#categoryChips');
        holder.innerHTML = CATEGORIES.map(function (c) {
            return '<button type="button" class="chip' + (c.id === state.category ? ' active' : '') +
                '" data-cat="' + c.id + '">' + c.label + '</button>';
        }).join('');

        holder.addEventListener('click', function (e) {
            const chip = e.target.closest('.chip');
            if (!chip) return;
            state.category = chip.dataset.cat;
            syncChips();
            renderShop();
        });
    }

    function renderShop() {
        const q = state.search.trim().toLowerCase();

        let list = PRODUCTS.filter(function (p) {
            const okCat = state.category === 'all' || p.cat === state.category;
            const okQ = !q ||
                p.name.toLowerCase().indexOf(q) > -1 ||
                p.desc.toLowerCase().indexOf(q) > -1 ||
                p.tag.toLowerCase().indexOf(q) > -1;
            return okCat && okQ;
        });

        switch (state.sort) {
            case 'price-asc': list.sort((a, b) => a.price - b.price); break;
            case 'price-desc': list.sort((a, b) => b.price - a.price); break;
            case 'name': list.sort((a, b) => a.name.localeCompare(b.name)); break;
            case 'rating': list.sort((a, b) => b.rating - a.rating); break;
            default: list.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0) || b.rating - a.rating);
        }

        shopGrid.innerHTML = list.map(productCard).join('');

        $('#resultCount').textContent = list.length +
            (list.length === 1 ? ' product found' : ' products found');

        emptyState.classList.toggle('show', list.length === 0);
        initReveals();
    }

    function initShopControls() {
        renderChips();

        const search = $('#searchInput');
        let searchTimer;
        search.addEventListener('input', function () {
            clearTimeout(searchTimer);
            searchTimer = setTimeout(function () {
                state.search = search.value;
                renderShop();
            }, 150);
        });

        $('#sortSelect').addEventListener('change', function (e) {
            state.sort = e.target.value;
            renderShop();
        });

        $('#clearFilters').addEventListener('click', function () {
            state.search = '';
            state.category = 'all';
            state.sort = 'popular';
            search.value = '';
            $('#sortSelect').value = 'popular';
            syncChips();
            renderShop();
            toast('Filters cleared');
        });
    }

    /* ---------------------------------------------------------
       10. ROUTER
       --------------------------------------------------------- */
    const PAGES = ['home', 'shop', 'about', 'contact'];

    function route() {
        const raw = (location.hash || '').replace(/^#\/?/, '').split('?')[0];
        const page = PAGES.indexOf(raw) > -1 ? raw : 'home';
        state.page = page;

        $$('.page').forEach(function (sec) {
            sec.classList.toggle('active', sec.id === 'page-' + page);
        });
        $$('.nav-links a').forEach(function (a) {
            a.classList.toggle('active', a.dataset.nav === page);
        });

        closeMobileNav();

        const htmlEl = document.documentElement;
        const prev = htmlEl.style.scrollBehavior;
        htmlEl.style.scrollBehavior = 'auto';
        window.scrollTo(0, 0);
        htmlEl.style.scrollBehavior = prev;

        if (page === 'shop') renderShop();
        if (page === 'about') resetCounters();

        initReveals();
    }

    window.addEventListener('hashchange', route);

    /* ---------------------------------------------------------
       11. MOBILE NAV
       --------------------------------------------------------- */
    const navLinks = $('#navLinks');
    const burger = $('#burger');

    function closeMobileNav() {
        navLinks.classList.remove('open');
        burger.classList.remove('active');
        burger.setAttribute('aria-expanded', 'false');
    }

    burger.addEventListener('click', function (e) {
        e.stopPropagation();
        const open = navLinks.classList.toggle('open');
        burger.classList.toggle('active', open);
        burger.setAttribute('aria-expanded', String(open));
    });

    navLinks.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') closeMobileNav();
    });

    document.addEventListener('click', function (e) {
        if (!navLinks.classList.contains('open')) return;
        if (e.target.closest('.navbar')) return;
        closeMobileNav();
    });

    /* ---------------------------------------------------------
       12. SCROLL REVEALS
       --------------------------------------------------------- */
    const revealObserver = ('IntersectionObserver' in window)
        ? new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' })
        : null;

    function initReveals() {
        $$('.reveal:not(.in)').forEach(function (el, i) {
            if (!el.dataset.delaySet) {
                el.style.transitionDelay = Math.min((i % 6) * 55, 260) + 'ms';
                el.dataset.delaySet = '1';
            }
            if (revealObserver) revealObserver.observe(el);
            else el.classList.add('in');
        });
    }

    /* ---------------------------------------------------------
       13. STAT COUNTERS
       --------------------------------------------------------- */
    function animateCount(el) {
        if (el.dataset.done === '1') return;
        el.dataset.done = '1';

        const target = parseFloat(el.dataset.count) || 0;
        const suffix = el.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        function step(now) {
            const k = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - k, 3);
            const value = Math.round(target * eased);
            el.textContent = (value >= 1000 ? value.toLocaleString('en-IN') : value) + suffix;
            if (k < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
    }

    function resetCounters() {
        $$('.stat-num').forEach(function (el) {
            el.dataset.done = '0';
            el.textContent = '0';
            counterObserver.observe(el);
        });
    }

    const counterObserver = ('IntersectionObserver' in window)
        ? new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    animateCount(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 })
        : { observe: el => animateCount(el), unobserve: function () { } };

    /* ---------------------------------------------------------
       14. NEWSLETTER
       --------------------------------------------------------- */
    $('#newsForm').addEventListener('submit', function (e) {
        e.preventDefault();
        const input = $('#newsEmail');
        const value = input.value.trim();
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
        if (!ok) {
            toast('Please enter a valid email address', 'err');
            input.focus();
            return;
        }
        toast('Welcome to GreenBasket! Check your inbox 🌱');
        this.reset();
    });

    /* ---------------------------------------------------------
       15. CONTACT FORM VALIDATION
       --------------------------------------------------------- */
    function setInvalid(field, invalid) {
        field.classList.toggle('invalid', invalid);
        return !invalid;
    }

    const contactForm = $('#contactForm');
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const nameField = $('#cName').closest('.field');
        const emailField = $('#cEmail').closest('.field');
        const phoneField = $('#cPhone').closest('.field');
        const subjField = $('#cSubject').closest('.field');
        const msgField = $('#cMessage').closest('.field');

        const nameOk = setInvalid(nameField, $('#cName').value.trim().length < 2);
        const emailOk = setInvalid(emailField, !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test($('#cEmail').value.trim()));
        const digits = $('#cPhone').value.replace(/[^\d]/g, '');
        const phoneOk = setInvalid(phoneField, digits.length < 10 || digits.length > 15);
        const subjOk = setInvalid(subjField, $('#cSubject').value === '');
        const msgOk = setInvalid(msgField, $('#cMessage').value.trim().length < 10);

        const success = $('#formSuccess');

        if (nameOk && emailOk && phoneOk && subjOk && msgOk) {
            success.classList.add('show');
            contactForm.reset();
            toast('Message sent — we will reply within 24 hours');
            [nameField, emailField, phoneField, subjField, msgField].forEach(f => f.classList.remove('invalid'));
            setTimeout(() => success.classList.remove('show'), 6000);
        } else {
            success.classList.remove('show');
            const firstInvalid = $('.field.invalid input, .field.invalid textarea, .field.invalid select');
            if (firstInvalid) firstInvalid.focus();
            toast('Please correct the highlighted fields', 'err');
        }
    });

    contactForm.addEventListener('input', function (e) {
        const field = e.target.closest('.field');
        if (field) field.classList.remove('invalid');
    });
    contactForm.addEventListener('change', function (e) {
        const field = e.target.closest('.field');
        if (field) field.classList.remove('invalid');
    });
    $('#resetBtn').addEventListener('click', function () {
        $$('.field', contactForm).forEach(f => f.classList.remove('invalid'));
        $('#formSuccess').classList.remove('show');
    });

    /* ---------------------------------------------------------
       16. FAQ ACCORDION
       --------------------------------------------------------- */
    $$('.faq-q').forEach(function (btn) {
        btn.addEventListener('click', function () {
            const item = btn.closest('.faq-item');
            const wasOpen = item.classList.contains('open');
            $$('.faq-item').forEach(function (i) { i.classList.remove('open'); });
            if (!wasOpen) item.classList.add('open');
        });
    });

    /* ---------------------------------------------------------
       17. BACK TO TOP
       --------------------------------------------------------- */
    const toTop = $('#toTop');
    let ticking = false;

    window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            toTop.classList.toggle('show', window.scrollY > 500);
            ticking = false;
        });
    }, { passive: true });

    toTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ---------------------------------------------------------
       18. INIT
       --------------------------------------------------------- */
    function init() {
        $('#year').textContent = new Date().getFullYear();

        renderHome();
        initShopControls();
        renderCart();
        renderBadge();
        initReveals();
        route();

        // Re-observe stats when about page becomes visible
        $$('.stat-num').forEach(el => counterObserver.observe(el));
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();