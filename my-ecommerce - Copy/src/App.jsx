import { useState } from "react";

// ── DATA ──────────────────────────────────────────────────────────────────────
const PRODUCTS = [
  { id: 1, name: "Air Max Sneakers", price: 2499, category: "Footwear", rating: 4.8, reviews: 312, badge: "Bestseller", img: "👟", desc: "Lightweight comfort with responsive cushioning for all-day wear." },
  { id: 2, name: "Leather Tote Bag", price: 3199, category: "Bags", rating: 4.6, reviews: 187, badge: "New", img: "👜", desc: "Full-grain leather with spacious interior and gold-tone hardware." },
  { id: 3, name: "Polarized Sunglasses", price: 1599, category: "Accessories", rating: 4.7, reviews: 245, badge: "", img: "🕶️", desc: "UV400 protection with scratch-resistant lenses and titanium frame." },
  { id: 4, name: "Merino Wool Sweater", price: 2899, category: "Clothing", rating: 4.9, reviews: 98, badge: "Top Rated", img: "🧥", desc: "100% merino wool, naturally temperature-regulating and ultra-soft." },
  { id: 5, name: "Smart Watch Pro", price: 8499, category: "Electronics", rating: 4.5, reviews: 521, badge: "Hot", img: "⌚", desc: "Health tracking, GPS, and 7-day battery life in a sleek design." },
  { id: 6, name: "Canvas Backpack", price: 1899, category: "Bags", rating: 4.4, reviews: 163, badge: "", img: "🎒", desc: "Durable waxed canvas with padded laptop sleeve and organizer pockets." },
  { id: 7, name: "Running Shorts", price: 999, category: "Clothing", rating: 4.6, reviews: 74, badge: "Sale", img: "🩳", desc: "Moisture-wicking fabric with secure zip pocket and reflective strips." },
  { id: 8, name: "Wireless Earbuds", price: 4599, category: "Electronics", rating: 4.8, reviews: 892, badge: "Bestseller", img: "🎧", desc: "Active noise cancellation with 30-hour total battery and IPX4 rating." },
];

const CATEGORIES = ["All", "Clothing", "Footwear", "Bags", "Accessories", "Electronics"];

const BADGE_COLORS = {
  "Bestseller": { bg: "#FFF3CD", color: "#856404" },
  "New":        { bg: "#D1ECF1", color: "#0C5460" },
  "Top Rated":  { bg: "#D4EDDA", color: "#155724" },
  "Hot":        { bg: "#F8D7DA", color: "#721C24" },
  "Sale":       { bg: "#E2D9F3", color: "#4A235A" },
};

// ── STAR RATING ───────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <span style={{ color: "#F5A623", fontSize: 13, letterSpacing: 1 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

// ── PRODUCT CARD ──────────────────────────────────────────────────────────────
function ProductCard({ product, onAdd, onView }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div style={styles.card}>
      {product.badge && (
        <span style={{ ...styles.badge, ...BADGE_COLORS[product.badge] }}>
          {product.badge}
        </span>
      )}
      <div style={styles.cardImg} onClick={() => onView(product)}>
        <span style={{ fontSize: 64 }}>{product.img}</span>
      </div>
      <div style={styles.cardBody}>
        <p style={styles.category}>{product.category}</p>
        <h3 style={styles.productName} onClick={() => onView(product)}>{product.name}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: 12, color: "#888" }}>({product.reviews})</span>
        </div>
        <div style={styles.cardFooter}>
          <span style={styles.price}>₹{product.price.toLocaleString()}</span>
          <button style={added ? styles.btnAdded : styles.btnAdd} onClick={handleAdd}>
            {added ? "✓ Added" : "+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CART SIDEBAR ──────────────────────────────────────────────────────────────
function CartSidebar({ cart, onClose, onRemove, onQuantity }) {
  const total = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.sidebar} onClick={e => e.stopPropagation()}>
        <div style={styles.sidebarHeader}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Your Cart</h2>
          <button style={styles.closeBtn} onClick={onClose}>✕</button>
        </div>
        {cart.length === 0 ? (
          <div style={styles.emptyCart}>
            <span style={{ fontSize: 48 }}>🛒</span>
            <p style={{ color: "#888", marginTop: 12 }}>Your cart is empty</p>
          </div>
        ) : (
          <>
            <div style={styles.cartItems}>
              {cart.map(item => (
                <div key={item.id} style={styles.cartItem}>
                  <span style={{ fontSize: 32 }}>{item.img}</span>
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{item.name}</p>
                    <p style={{ margin: "2px 0 6px", color: "#888", fontSize: 13 }}>₹{item.price.toLocaleString()}</p>
                    <div style={styles.qtyRow}>
                      <button style={styles.qtyBtn} onClick={() => onQuantity(item.id, -1)}>−</button>
                      <span style={{ fontSize: 14, fontWeight: 600, minWidth: 20, textAlign: "center" }}>{item.qty}</span>
                      <button style={styles.qtyBtn} onClick={() => onQuantity(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>₹{(item.price * item.qty).toLocaleString()}</p>
                    <button style={styles.removeBtn} onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={styles.cartSummary}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: 18 }}>₹{total.toLocaleString()}</span>
              </div>
              <button style={styles.checkoutBtn}>Proceed to Checkout →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── PRODUCT MODAL ─────────────────────────────────────────────────────────────
function ProductModal({ product, onClose, onAdd }) {
  const [added, setAdded] = useState(false);
  function handleAdd() {
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }
  return (
    <div style={styles.overlay} onClick={onClose}>
      <div style={styles.modal} onClick={e => e.stopPropagation()}>
        <button style={{ ...styles.closeBtn, position: "absolute", top: 16, right: 16 }} onClick={onClose}>✕</button>
        <div style={styles.modalImg}>
          <span style={{ fontSize: 100 }}>{product.img}</span>
        </div>
        <div style={styles.modalBody}>
          {product.badge && <span style={{ ...styles.badge, ...BADGE_COLORS[product.badge] }}>{product.badge}</span>}
          <p style={{ color: "#888", marginBottom: 4, fontSize: 13, marginTop: 8 }}>{product.category}</p>
          <h2 style={{ margin: "0 0 8px", fontSize: 26, fontWeight: 800 }}>{product.name}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <Stars rating={product.rating} />
            <span style={{ fontSize: 13, color: "#888" }}>{product.rating} · {product.reviews} reviews</span>
          </div>
          <p style={{ color: "#555", lineHeight: 1.7, marginBottom: 20 }}>{product.desc}</p>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 28, fontWeight: 800, color: "#1a1a1a" }}>₹{product.price.toLocaleString()}</span>
            <button style={added ? styles.btnAdded : styles.checkoutBtn} onClick={handleAdd}>
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── MAIN APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [category, setCategory]   = useState("All");
  const [search, setSearch]       = useState("");
  const [cart, setCart]           = useState([]);
  const [showCart, setShowCart]   = useState(false);
  const [viewProduct, setViewProduct] = useState(null);
  const [sortBy, setSortBy]       = useState("default");

  const filtered = PRODUCTS
    .filter(p => (category === "All" || p.category === category))
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(id) {
    setCart(prev => prev.filter(i => i.id !== id));
  }

  function changeQuantity(id, delta) {
    setCart(prev => prev
      .map(i => i.id === id ? { ...i, qty: i.qty + delta } : i)
      .filter(i => i.qty > 0)
    );
  }

  const cartCount = cart.reduce((sum, i) => sum + i.qty, 0);

  return (
    <div style={styles.app}>
      {/* HEADER */}
      <header style={styles.header}>
        <div style={styles.logo}>⚡ ShopNow</div>
        <div style={styles.searchWrap}>
          <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", fontSize: 16 }}>🔍</span>
          <input
            style={styles.searchInput}
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <button style={styles.cartBtn} onClick={() => setShowCart(true)}>
          🛒 Cart {cartCount > 0 && <span style={styles.cartBadge}>{cartCount}</span>}
        </button>
      </header>

      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>Discover Premium Products</h1>
        <p style={styles.heroSub}>Free shipping on orders above ₹2,000 · Easy 30-day returns</p>
      </section>

      {/* FILTERS */}
      <div style={styles.filters}>
        <div style={styles.catTabs}>
          {CATEGORIES.map(c => (
            <button
              key={c}
              style={{ ...styles.catTab, ...(category === c ? styles.catTabActive : {}) }}
              onClick={() => setCategory(c)}
            >
              {c}
            </button>
          ))}
        </div>
        <select style={styles.sort} value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="default">Sort: Featured</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="rating">Top Rated</option>
        </select>
      </div>

      {/* GRID */}
      <main style={styles.grid}>
        {filtered.length === 0 ? (
          <div style={styles.noResults}>
            <span style={{ fontSize: 48 }}>🔍</span>
            <p>No products found</p>
          </div>
        ) : (
          filtered.map(p => (
            <ProductCard key={p.id} product={p} onAdd={addToCart} onView={setViewProduct} />
          ))
        )}
      </main>

      {/* FOOTER */}
      <footer style={styles.footer}>
        <p>© 2025 ShopNow · Built with React ⚛️</p>
      </footer>

      {/* MODALS */}
      {showCart && (
        <CartSidebar
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemove={removeFromCart}
          onQuantity={changeQuantity}
        />
      )}
      {viewProduct && (
        <ProductModal
          product={viewProduct}
          onClose={() => setViewProduct(null)}
          onAdd={addToCart}
        />
      )}
    </div>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const styles = {
  app:          { fontFamily: "'Segoe UI', sans-serif", background: "#F7F8FA", minHeight: "100vh" },
  header:       { background: "#fff", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 },
  logo:         { fontWeight: 800, fontSize: 22, color: "#1a1a1a", whiteSpace: "nowrap" },
  searchWrap:   { flex: 1, position: "relative", maxWidth: 440 },
  searchInput:  { width: "100%", padding: "9px 12px 9px 36px", border: "1.5px solid #E0E0E0", borderRadius: 10, fontSize: 14, outline: "none", background: "#F7F8FA", boxSizing: "border-box" },
  cartBtn:      { background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "9px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap", position: "relative" },
  cartBadge:    { background: "#E74C3C", color: "#fff", borderRadius: "50%", fontSize: 11, fontWeight: 700, padding: "1px 6px", marginLeft: 6 },
  hero:         { background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)", color: "#fff", textAlign: "center", padding: "56px 24px" },
  heroTitle:    { margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1 },
  heroSub:      { margin: "10px 0 0", color: "#ccc", fontSize: 15 },
  filters:      { maxWidth: 1200, margin: "0 auto", padding: "20px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
  catTabs:      { display: "flex", gap: 8, flexWrap: "wrap" },
  catTab:       { padding: "7px 16px", borderRadius: 20, border: "1.5px solid #E0E0E0", background: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#555" },
  catTabActive: { background: "#1a1a1a", color: "#fff", border: "1.5px solid #1a1a1a" },
  sort:         { padding: "8px 12px", border: "1.5px solid #E0E0E0", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" },
  grid:         { maxWidth: 1200, margin: "24px auto", padding: "0 24px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 },
  card:         { background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "relative", transition: "transform 0.2s, box-shadow 0.2s", cursor: "default" },
  cardImg:      { background: "#F7F8FA", height: 180, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" },
  cardBody:     { padding: "14px 16px 16px" },
  category:     { margin: "0 0 3px", fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.5 },
  productName:  { margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#1a1a1a", cursor: "pointer", lineHeight: 1.3 },
  cardFooter:   { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  price:        { fontSize: 18, fontWeight: 800, color: "#1a1a1a" },
  btnAdd:       { background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  btnAdded:     { background: "#27AE60", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  badge:        { position: "absolute", top: 12, left: 12, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700 },
  overlay:      { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "flex", justifyContent: "flex-end" },
  sidebar:      { background: "#fff", width: 380, maxWidth: "90vw", height: "100vh", display: "flex", flexDirection: "column", boxShadow: "-4px 0 20px rgba(0,0,0,0.15)" },
  sidebarHeader:{ padding: "20px 20px 16px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" },
  closeBtn:     { background: "none", border: "1.5px solid #E0E0E0", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
  emptyCart:    { flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  cartItems:    { flex: 1, overflow: "auto", padding: "0 20px" },
  cartItem:     { display: "flex", gap: 12, padding: "14px 0", borderBottom: "1px solid #F0F0F0", alignItems: "flex-start" },
  qtyRow:       { display: "flex", alignItems: "center", gap: 10 },
  qtyBtn:       { background: "#F0F0F0", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" },
  removeBtn:    { background: "none", border: "none", color: "#E74C3C", fontSize: 12, cursor: "pointer", marginTop: 6, padding: 0 },
  cartSummary:  { padding: 20, borderTop: "1px solid #eee" },
  checkoutBtn:  { width: "100%", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "13px 20px", fontSize: 15, fontWeight: 700, cursor: "pointer" },
  modal:        { background: "#fff", borderRadius: 20, maxWidth: 520, width: "90vw", margin: "auto", position: "relative", overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.2)", alignSelf: "center", display: "flex", flexDirection: "column" },
  modalImg:     { background: "#F7F8FA", height: 220, display: "flex", alignItems: "center", justifyContent: "center" },
  modalBody:    { padding: 28 },
  footer:       { textAlign: "center", padding: "24px", color: "#999", fontSize: 14, borderTop: "1px solid #eee", background: "#fff" },
  noResults:    { gridColumn: "1/-1", textAlign: "center", padding: "60px 0", color: "#888" },
};
