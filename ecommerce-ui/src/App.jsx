import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

// ── STATIC PRODUCT DATA (with real images from Unsplash) ─────────────────────
const PRODUCTS = [
  { id: 1, name: "Air Max Sneakers",    price: 2499, category: "Footwear",     rating: 4.8, reviews: 312, badge: "Bestseller", desc: "Lightweight comfort with responsive cushioning for all-day wear.",         img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80" },
  { id: 2, name: "Leather Tote Bag",   price: 3199, category: "Bags",         rating: 4.6, reviews: 187, badge: "New",        desc: "Full-grain leather with spacious interior and gold-tone hardware.",       img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80" },
  { id: 3, name: "Polarized Sunnies",  price: 1599, category: "Accessories",  rating: 4.7, reviews: 245, badge: "",           desc: "UV400 protection with scratch-resistant lenses and titanium frame.",      img: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&q=80" },
  { id: 4, name: "Merino Wool Sweater",price: 2899, category: "Clothing",     rating: 4.9, reviews: 98,  badge: "Top Rated",  desc: "100% merino wool, naturally temperature-regulating and ultra-soft.",     img: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=400&q=80" },
  { id: 5, name: "Smart Watch Pro",    price: 8499, category: "Electronics",  rating: 4.5, reviews: 521, badge: "Hot",        desc: "Health tracking, GPS, and 7-day battery life in a sleek design.",        img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80" },
  { id: 6, name: "Canvas Backpack",    price: 1899, category: "Bags",         rating: 4.4, reviews: 163, badge: "",           desc: "Durable waxed canvas with padded laptop sleeve and organizer pockets.",  img: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80" },
  { id: 7, name: "Running Shorts",     price: 999,  category: "Clothing",     rating: 4.6, reviews: 74,  badge: "Sale",       desc: "Moisture-wicking fabric with secure zip pocket and reflective strips.",  img: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80" },
  { id: 8, name: "Wireless Earbuds",   price: 4599, category: "Electronics",  rating: 4.8, reviews: 892, badge: "Bestseller", desc: "Active noise cancellation with 30-hour battery and IPX4 rating.",        img: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&q=80" },
];

const CATEGORIES = ["All", "Clothing", "Footwear", "Bags", "Accessories", "Electronics"];
const BADGE_COLORS = {
  "Bestseller": { bg: "#FFF3CD", color: "#856404" },
  "New":        { bg: "#D1ECF1", color: "#0C5460" },
  "Top Rated":  { bg: "#D4EDDA", color: "#155724" },
  "Hot":        { bg: "#F8D7DA", color: "#721C24" },
  "Sale":       { bg: "#E2D9F3", color: "#4A235A" },
};

// ── HELPERS ───────────────────────────────────────────────────────────────────
function Stars({ rating }) {
  return (
    <span style={{ color: "#F5A623", fontSize: 13 }}>
      {"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

// ── EXERCISE 1: WISHLIST HEART BUTTON ─────────────────────────────────────────
// useState holds a Set of wishlisted product IDs.
// Clicking the heart toggles membership in that Set.
function WishlistBtn({ id, wishlist, onToggle }) {
  const liked = wishlist.has(id);
  return (
    <button
      style={{
        position: "absolute", top: 10, right: 10,
        background: liked ? "#FFE5E5" : "rgba(255,255,255,0.9)",
        border: "none", borderRadius: "50%",
        width: 34, height: 34, cursor: "pointer",
        fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center",
        boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
        transition: "transform 0.15s",
      }}
      onClick={e => { e.stopPropagation(); onToggle(id); }}
      title={liked ? "Remove from wishlist" : "Add to wishlist"}
    >
      {liked ? "❤️" : "🤍"}
    </button>
  );
}

// ── PRODUCT CARD ──────────────────────────────────────────────────────────────
function ProductCard({ product, onAdd, wishlist, onToggleWish }) {
  const [added, setAdded] = useState(false);
  const navigate = useNavigate();

  function handleAdd(e) {
    e.stopPropagation();
    onAdd(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    // EXERCISE 3: clicking the card navigates to /product/:id
    <div style={S.card} onClick={() => navigate(`/product/${product.id}`)}>
      {product.badge && (
        <span style={{ ...S.badge, ...BADGE_COLORS[product.badge] }}>{product.badge}</span>
      )}

      {/* EXERCISE 1: Heart toggle */}
      <WishlistBtn id={product.id} wishlist={wishlist} onToggle={onToggleWish} />

      {/* EXERCISE 2: Real <img> tag instead of emoji */}
      <div style={S.cardImgWrap}>
        <img
          src={product.img}
          alt={product.name}
          style={S.cardImg}
          onError={e => { e.target.src = "https://placehold.co/400x280?text=No+Image"; }}
        />
      </div>

      <div style={S.cardBody}>
        <p style={S.catLabel}>{product.category}</p>
        <h3 style={S.productName}>{product.name}</h3>
        <div style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 8 }}>
          <Stars rating={product.rating} />
          <span style={{ fontSize: 12, color: "#888" }}>({product.reviews})</span>
        </div>
        <div style={S.cardFooter}>
          <span style={S.price}>₹{product.price.toLocaleString()}</span>
          <button style={added ? S.btnAdded : S.btnAdd} onClick={handleAdd}>
            {added ? "✓ Added" : "+ Cart"}
          </button>
        </div>
      </div>
    </div>
  );
}

// ── CART SIDEBAR ──────────────────────────────────────────────────────────────
function CartSidebar({ cart, onClose, onRemove, onQty }) {
  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  return (
    <div style={S.overlay} onClick={onClose}>
      <div style={S.sidebar} onClick={e => e.stopPropagation()}>
        <div style={S.sidebarHeader}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>Your Cart</h2>
          <button style={S.closeBtn} onClick={onClose}>✕</button>
        </div>
        {cart.length === 0 ? (
          <div style={S.empty}><span style={{ fontSize: 48 }}>🛒</span><p style={{ color: "#888" }}>Cart is empty</p></div>
        ) : (
          <>
            <div style={S.cartItems}>
              {cart.map(item => (
                <div key={item.id} style={S.cartItem}>
                  <img src={item.img} alt={item.name} style={{ width: 52, height: 52, objectFit: "cover", borderRadius: 8 }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{item.name}</p>
                    <p style={{ margin: "2px 0 6px", color: "#888", fontSize: 13 }}>₹{item.price.toLocaleString()}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <button style={S.qtyBtn} onClick={() => onQty(item.id, -1)}>−</button>
                      <span style={{ fontSize: 14, fontWeight: 600 }}>{item.qty}</span>
                      <button style={S.qtyBtn} onClick={() => onQty(item.id, 1)}>+</button>
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ margin: 0, fontWeight: 700 }}>₹{(item.price * item.qty).toLocaleString()}</p>
                    <button style={S.removeBtn} onClick={() => onRemove(item.id)}>Remove</button>
                  </div>
                </div>
              ))}
            </div>
            <div style={S.cartSummary}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12 }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontWeight: 800, fontSize: 18 }}>₹{total.toLocaleString()}</span>
              </div>
              <button style={S.checkoutBtn}>Proceed to Checkout →</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

// ── SHARED HEADER ─────────────────────────────────────────────────────────────
function Header({ cartCount, wishCount, onCartOpen }) {
  return (
    <header style={S.header}>
      {/* EXERCISE 3: Link components for navigation */}
      <Link to="/" style={S.logo}>⚡ ShopNow</Link>
      <nav style={{ display: "flex", gap: 8 }}>
        <Link to="/" style={S.navLink}>Home</Link>
        <Link to="/wishlist" style={S.navLink}>
          ❤️ Wishlist {wishCount > 0 && <span style={S.cartBadge}>{wishCount}</span>}
        </Link>
        <Link to="/blog" style={S.navLink}>Blog</Link>
      </nav>
      <button style={S.cartBtn} onClick={onCartOpen}>
        🛒 Cart {cartCount > 0 && <span style={{ ...S.cartBadge, background: "#E74C3C" }}>{cartCount}</span>}
      </button>
    </header>
  );
}

// ── PAGE: HOME ────────────────────────────────────────────────────────────────
function HomePage({ cart, setCart, wishlist, onToggleWish }) {
  const [category, setCategory] = useState("All");
  const [search, setSearch]     = useState("");
  const [sortBy, setSortBy]     = useState("default");

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  }

  const filtered = PRODUCTS
    .filter(p => category === "All" || p.category === category)
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === "price-asc")  return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "rating")     return b.rating - a.rating;
      return 0;
    });

  return (
    <>
      <section style={S.hero}>
        <h1 style={S.heroTitle}>Discover Premium Products</h1>
        <p style={S.heroSub}>Free shipping on orders above ₹2,000 · Easy 30-day returns</p>
      </section>
      <div style={S.filters}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {CATEGORIES.map(c => (
            <button key={c} style={{ ...S.catTab, ...(category === c ? S.catTabActive : {}) }} onClick={() => setCategory(c)}>{c}</button>
          ))}
        </div>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <input style={S.searchInput} placeholder="🔍  Search..." value={search} onChange={e => setSearch(e.target.value)} />
          <select style={S.sort} value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="default">Featured</option>
            <option value="price-asc">Price ↑</option>
            <option value="price-desc">Price ↓</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>
      <main style={S.grid}>
        {filtered.length === 0
          ? <div style={S.empty}><span style={{ fontSize: 48 }}>🔍</span><p>No products found</p></div>
          : filtered.map(p => (
              <ProductCard key={p.id} product={p} onAdd={addToCart} wishlist={wishlist} onToggleWish={onToggleWish} />
            ))
        }
      </main>
    </>
  );
}

// ── PAGE: PRODUCT DETAIL ──────────────────────────────────────────────────────
// EXERCISE 3: This is a new page at /product/:id
function ProductDetailPage({ setCart, wishlist, onToggleWish }) {
  const { id } = useParams();                              // get :id from URL
  const navigate = useNavigate();
  const product = PRODUCTS.find(p => p.id === Number(id));
  const [added, setAdded] = useState(false);

  if (!product) return <div style={{ textAlign: "center", padding: 80 }}>Product not found. <Link to="/">Go back</Link></div>;

  function handleAdd() {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <div style={{ maxWidth: 900, margin: "40px auto", padding: "0 24px", display: "flex", gap: 40, flexWrap: "wrap" }}>
      <button onClick={() => navigate(-1)} style={S.backBtn}>← Back</button>
      <img src={product.img} alt={product.name} style={{ width: "100%", maxWidth: 420, borderRadius: 20, objectFit: "cover", aspectRatio: "4/3" }} />
      <div style={{ flex: 1, minWidth: 260 }}>
        {product.badge && <span style={{ ...S.badge, position: "static", display: "inline-block", marginBottom: 12, ...BADGE_COLORS[product.badge] }}>{product.badge}</span>}
        <p style={S.catLabel}>{product.category}</p>
        <h1 style={{ fontSize: 30, fontWeight: 800, margin: "4px 0 10px" }}>{product.name}</h1>
        <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 16 }}>
          <Stars rating={product.rating} />
          <span style={{ color: "#888", fontSize: 14 }}>{product.rating} · {product.reviews} reviews</span>
        </div>
        <p style={{ color: "#555", lineHeight: 1.8, marginBottom: 24 }}>{product.desc}</p>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
          <span style={{ fontSize: 32, fontWeight: 800 }}>₹{product.price.toLocaleString()}</span>
          <WishlistBtn id={product.id} wishlist={wishlist} onToggle={onToggleWish} />
        </div>
        <button style={{ ...S.checkoutBtn, width: "auto", padding: "13px 36px", fontSize: 16 }} onClick={handleAdd}>
          {added ? "✓ Added to Cart!" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
}

// ── PAGE: WISHLIST ────────────────────────────────────────────────────────────
// EXERCISE 3: New /wishlist page
function WishlistPage({ wishlist, setCart, onToggleWish }) {
  const wished = PRODUCTS.filter(p => wishlist.has(p.id));

  function addToCart(product) {
    setCart(prev => {
      const exists = prev.find(i => i.id === product.id);
      if (exists) return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  }

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 26, marginBottom: 24 }}>❤️ My Wishlist ({wished.length})</h1>
      {wished.length === 0
        ? <div style={S.empty}><span style={{ fontSize: 48 }}>🤍</span><p>No items wishlisted yet. <Link to="/">Browse products →</Link></p></div>
        : <div style={S.grid}>{wished.map(p => <ProductCard key={p.id} product={p} onAdd={addToCart} wishlist={wishlist} onToggleWish={onToggleWish} />)}</div>
      }
    </div>
  );
}

// ── PAGE: BLOG (EXERCISE 4: useEffect + fetch from real API) ──────────────────
// Fetches posts from JSONPlaceholder — a free public REST API for practice.
function BlogPage() {
  // EXERCISE 4: Three states for async data loading
  const [posts, setPosts]     = useState([]);   // the fetched data
  const [loading, setLoading] = useState(true); // show a spinner
  const [error, setError]     = useState(null); // handle failures

  // EXERCISE 4: useEffect runs once when the component mounts
  useEffect(() => {
    // fetch() is built into the browser — no library needed!
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=6")
      .then(res => {
        if (!res.ok) throw new Error("Network error");
        return res.json();          // parse JSON response
      })
      .then(data => {
        setPosts(data);             // save to state
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);      // save error message
        setLoading(false);
      });
  }, []); // [] = run only once on mount

  if (loading) return <div style={S.empty}><div style={S.spinner} /><p style={{ color: "#888" }}>Loading posts from API...</p></div>;
  if (error)   return <div style={S.empty}><span style={{ fontSize: 48 }}>⚠️</span><p style={{ color: "#E74C3C" }}>Error: {error}</p></div>;

  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "32px 24px" }}>
      <h1 style={{ fontWeight: 800, fontSize: 26, marginBottom: 4 }}>📰 Blog</h1>
      <p style={{ color: "#888", marginBottom: 28 }}>Posts fetched live from <code>jsonplaceholder.typicode.com</code> using <code>useEffect + fetch()</code></p>
      <div style={{ display: "grid", gap: 16 }}>
        {posts.map(post => (
          <div key={post.id} style={S.blogCard}>
            <span style={S.blogId}>#{post.id}</span>
            <h3 style={{ margin: "0 0 8px", fontWeight: 700, textTransform: "capitalize", fontSize: 17 }}>{post.title}</h3>
            <p style={{ margin: 0, color: "#666", lineHeight: 1.7, fontSize: 14 }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── ROOT APP ──────────────────────────────────────────────────────────────────
export default function App() {
  const [cart, setCart]       = useState([]);
  const [wishlist, setWishlist] = useState(new Set()); // EXERCISE 1
  const [showCart, setShowCart] = useState(false);

  // EXERCISE 1: toggle wishlist membership
  function toggleWish(id) {
    setWishlist(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  }

  function removeFromCart(id) { setCart(prev => prev.filter(i => i.id !== id)); }
  function changeQty(id, d)   { setCart(prev => prev.map(i => i.id === id ? { ...i, qty: i.qty + d } : i).filter(i => i.qty > 0)); }

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    // EXERCISE 3: BrowserRouter wraps the whole app
    <Router>
      <div style={S.app}>
        <Header cartCount={cartCount} wishCount={wishlist.size} onCartOpen={() => setShowCart(true)} />

        {/* EXERCISE 3: Route definitions */}
        <Routes>
          <Route path="/" element={<HomePage cart={cart} setCart={setCart} wishlist={wishlist} onToggleWish={toggleWish} />} />
          <Route path="/product/:id" element={<ProductDetailPage setCart={setCart} wishlist={wishlist} onToggleWish={toggleWish} />} />
          <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} setCart={setCart} onToggleWish={toggleWish} />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="*" element={<div style={S.empty}><span style={{ fontSize: 48 }}>404</span><p><Link to="/">Go Home</Link></p></div>} />
        </Routes>

        <footer style={S.footer}>© 2025 ShopNow · Built with React ⚛️ + Vite ⚡</footer>

        {showCart && <CartSidebar cart={cart} onClose={() => setShowCart(false)} onRemove={removeFromCart} onQty={changeQty} />}
      </div>
    </Router>
  );
}

// ── STYLES ────────────────────────────────────────────────────────────────────
const S = {
  app:          { fontFamily: "'Segoe UI', sans-serif", background: "#F7F8FA", minHeight: "100vh", display: "flex", flexDirection: "column" },
  header:       { background: "#fff", padding: "0 24px", height: 64, display: "flex", alignItems: "center", gap: 16, boxShadow: "0 1px 4px rgba(0,0,0,0.08)", position: "sticky", top: 0, zIndex: 100 },
  logo:         { fontWeight: 800, fontSize: 22, color: "#1a1a1a", textDecoration: "none", marginRight: "auto" },
  navLink:      { textDecoration: "none", color: "#444", fontSize: 14, fontWeight: 500, padding: "6px 12px", borderRadius: 8, background: "none" },
  cartBtn:      { background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "9px 18px", fontSize: 14, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" },
  cartBadge:    { background: "#E74C3C", color: "#fff", borderRadius: "50%", fontSize: 11, fontWeight: 700, padding: "1px 6px", marginLeft: 6 },
  hero:         { background: "linear-gradient(135deg,#1a1a1a,#2d2d2d)", color: "#fff", textAlign: "center", padding: "56px 24px" },
  heroTitle:    { margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: -1 },
  heroSub:      { margin: "10px 0 0", color: "#ccc", fontSize: 15 },
  filters:      { maxWidth: 1200, margin: "0 auto", padding: "20px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 },
  catTab:       { padding: "7px 16px", borderRadius: 20, border: "1.5px solid #E0E0E0", background: "#fff", fontSize: 13, fontWeight: 500, cursor: "pointer", color: "#555" },
  catTabActive: { background: "#1a1a1a", color: "#fff", border: "1.5px solid #1a1a1a" },
  searchInput:  { padding: "9px 14px", border: "1.5px solid #E0E0E0", borderRadius: 10, fontSize: 13, outline: "none", background: "#fff", width: 200 },
  sort:         { padding: "8px 12px", border: "1.5px solid #E0E0E0", borderRadius: 10, fontSize: 13, background: "#fff", cursor: "pointer" },
  grid:         { maxWidth: 1200, margin: "24px auto", padding: "0 24px 40px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20, width: "100%" },
  card:         { background: "#fff", borderRadius: 16, overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)", position: "relative", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" },
  cardImgWrap:  { height: 200, overflow: "hidden", background: "#F0F0F0" },
  cardImg:      { width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.3s" },
  cardBody:     { padding: "14px 16px 16px" },
  catLabel:     { margin: "0 0 3px", fontSize: 11, fontWeight: 600, color: "#999", textTransform: "uppercase", letterSpacing: 0.5 },
  productName:  { margin: "0 0 6px", fontSize: 16, fontWeight: 700, color: "#1a1a1a", lineHeight: 1.3 },
  cardFooter:   { display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 8 },
  price:        { fontSize: 18, fontWeight: 800, color: "#1a1a1a" },
  btnAdd:       { background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  btnAdded:     { background: "#27AE60", color: "#fff", border: "none", borderRadius: 8, padding: "7px 14px", fontSize: 13, fontWeight: 600, cursor: "pointer" },
  badge:        { position: "absolute", top: 12, left: 12, padding: "3px 10px", borderRadius: 20, fontSize: 11, fontWeight: 700, zIndex: 2 },
  backBtn:      { background: "none", border: "1.5px solid #ddd", borderRadius: 8, padding: "7px 14px", cursor: "pointer", fontSize: 14, marginBottom: 20, width: "100%" },
  blogCard:     { background: "#fff", borderRadius: 14, padding: "20px 24px", boxShadow: "0 1px 6px rgba(0,0,0,0.06)", position: "relative" },
  blogId:       { position: "absolute", top: 16, right: 20, fontSize: 12, color: "#bbb", fontWeight: 700 },
  spinner:      { width: 36, height: 36, border: "3px solid #eee", borderTop: "3px solid #1a1a1a", borderRadius: "50%", animation: "spin 0.8s linear infinite", margin: "0 auto 12px" },
  overlay:      { position: "fixed", inset: 0, background: "rgba(0,0,0,0.45)", zIndex: 200, display: "flex", justifyContent: "flex-end" },
  sidebar:      { background: "#fff", width: 380, maxWidth: "90vw", height: "100vh", display: "flex", flexDirection: "column", boxShadow: "-4px 0 20px rgba(0,0,0,0.15)" },
  sidebarHeader:{ padding: "20px 20px 16px", borderBottom: "1px solid #eee", display: "flex", justifyContent: "space-between", alignItems: "center" },
  closeBtn:     { background: "none", border: "1.5px solid #E0E0E0", borderRadius: 8, width: 32, height: 32, cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" },
  cartItems:    { flex: 1, overflow: "auto", padding: "0 20px" },
  cartItem:     { display: "flex", gap: 12, padding: "14px 0", borderBottom: "1px solid #F0F0F0", alignItems: "flex-start" },
  qtyBtn:       { background: "#F0F0F0", border: "none", borderRadius: 6, width: 26, height: 26, cursor: "pointer", fontSize: 16 },
  removeBtn:    { background: "none", border: "none", color: "#E74C3C", fontSize: 12, cursor: "pointer", marginTop: 6, padding: 0 },
  cartSummary:  { padding: 20, borderTop: "1px solid #eee" },
  checkoutBtn:  { width: "100%", background: "#1a1a1a", color: "#fff", border: "none", borderRadius: 10, padding: "13px 20px", fontSize: 15, fontWeight: 700, cursor: "pointer" },
  empty:        { textAlign: "center", padding: "80px 0", gridColumn: "1/-1", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 },
  footer:       { textAlign: "center", padding: 24, color: "#999", fontSize: 14, borderTop: "1px solid #eee", background: "#fff", marginTop: "auto" },
};