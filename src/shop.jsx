import { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import apiData from "./styles/api.json?raw";
import "./styles/shop.css";
import "./styles/responsive.css";

const apiProducts = JSON.parse(apiData).products.map((product) => ({
  ...product,
  id: product.id,
  name: product.title,
  price: product.price,
  description: product.description,
  category: product.category,
  image: product.images?.[0] || product.thumbnail,
  stock: product.stock,
  rating: product.rating,
  reviews: (product.reviews || []).map((review) => ({
    ...review,
    comment: review.comment?.replace(/!/g, ""),
  })),
}));

const additionalProducts = [
  ["Cedar Dining Table", "furniture", 249], ["Soft Lounge Chair", "furniture", 159],
  ["Oak Bookshelf", "furniture", 189], ["Modern Floor Lamp", "home-decoration", 79],
  ["Cotton Hand Towel", "home-decoration", 18], ["Ceramic Dinner Set", "home-decoration", 64],
  ["Daily Face Cleanser", "beauty", 24], ["Hydrating Hair Mask", "beauty", 29],
  ["Rose Body Lotion", "beauty", 22], ["Citrus Perfume", "fragrances", 48],
  ["Woodland Cologne", "fragrances", 56], ["Fresh Bloom Perfume", "fragrances", 62],
  ["Golden Rice Pack", "groceries", 12], ["Organic Honey Jar", "groceries", 16],
  ["Pasta Family Box", "groceries", 14], ["Crunchy Oat Cereal", "groceries", 11],
  ["Classic Denim Jacket", "mens-shirts", 75], ["Everyday Cotton Shirt", "mens-shirts", 42],
  ["Relaxed Summer Shirt", "mens-shirts", 38], ["Linen Evening Dress", "womens-dresses", 96],
  ["Floral Day Dress", "womens-dresses", 72], ["City Black Dress", "womens-dresses", 88],
  ["Running Sneaker", "mens-shoes", 84], ["Leather Work Shoe", "mens-shoes", 105],
  ["Canvas Travel Shoe", "mens-shoes", 66], ["Silver Charm Bracelet", "womens-jewellery", 58],
  ["Minimal Gold Ring", "womens-jewellery", 73], ["Pearl Drop Earrings", "womens-jewellery", 91],
  ["Everyday Backpack", "laptops", 54], ["Travel Laptop Stand", "laptops", 46],
].map(([title, category, price], index) => ({
  id: apiProducts.length + index + 1,
  title,
  description: `A carefully selected ${category.replace("-", " ")} product for everyday use.`,
  category,
  price,
  discountPercentage: 5,
  rating: 4.2,
  stock: 24,
  tags: [category],
  brand: "Muhammadamin Market",
  sku: `NEW-${String(index + 1).padStart(3, "0")}`,
  weight: 1,
  dimensions: { width: 20, height: 15, depth: 10 },
  warrantyInformation: "30 day warranty",
  shippingInformation: "Ships in 3-5 business days",
  availabilityStatus: "In Stock",
  reviews: [],
  returnPolicy: "30 day return policy",
  minimumOrderQuantity: 1,
  meta: { createdAt: "2026-09-22", updatedAt: "2026-09-22", barcode: `NEW${index + 1}`, qrCode: "#" },
  images: [],
  thumbnail: apiProducts[index % apiProducts.length].image,
}));

const products = [...apiProducts, ...additionalProducts].map((product) => ({
  ...product,
  name: product.name || product.title,
  image: product.images?.[0] || product.thumbnail,
}));

const pageSize = 12;

function formatPrice(price) {
  return `${new Intl.NumberFormat("uz-UZ").format(Math.round(price * 12500))} so'm`;
}

function Shop() {
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("alphabetical");
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState(() => {
    try {
      return JSON.parse(window.localStorage.getItem("shop-orders")) || [];
    } catch {
      return [];
    }
  });
  const [showOrders, setShowOrders] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 850);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    window.localStorage.setItem("shop-orders", JSON.stringify(orders));
  }, [orders]);

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const matchingProducts = products.filter((product) => {
      return !query || product.name.toLowerCase().includes(query);
    });

    return [...matchingProducts].sort((first, second) => {
      if (sort === "alphabetical") return first.name.localeCompare(second.name);
      if (sort === "price-low") return first.price - second.price;
      if (sort === "price-high") return second.price - first.price;
      return first.id - second.id;
    });
  }, [search, sort]);

  const pageCount = Math.max(1, Math.ceil(filteredProducts.length / pageSize));
  const visibleProducts = filteredProducts.slice((page - 1) * pageSize, page * pageSize);

  function updateSearch(event) {
    setSearch(event.target.value);
    setPage(1);
  }

  function updateFilter(setter) {
    return (event) => {
      setter(event.target.value);
      setPage(1);
    };
  }

  function addToOrders(product) {
    setOrders((currentOrders) => {
      const existingOrder = currentOrders.find((order) => order.id === product.id);
      if (existingOrder) {
        return currentOrders.map((order) => order.id === product.id
          ? { ...order, quantity: order.quantity + 1 }
          : order);
      }
      return [...currentOrders, { ...product, quantity: 1 }];
    });
    setSelectedProduct(null);
    setShowOrders(true);
  }

  function removeFromOrders(productId) {
    setOrders((currentOrders) => currentOrders.filter((order) => order.id !== productId));
  }

  function updateOrderQuantity(productId, change) {
    setOrders((currentOrders) => currentOrders.flatMap((order) => {
      if (order.id !== productId) return [order];
      const quantity = order.quantity + change;
      return quantity > 0 ? [{ ...order, quantity }] : [];
    }));
  }

  return (
    <>
      <div className={`shop-loader${isLoading ? "" : " shop-loader--hidden"}`} aria-hidden={!isLoading}>
        <div className="shop-loader__content">
          <img src="/me.jpg" alt="Muhammadamin" />
          <span>Loading shop</span>
          <div className="shop-loader__circle" aria-hidden="true" />
        </div>
      </div>
      <main className="shop-page">
      <header className="shop-header">
        <a className="shop-brand" href="/" aria-label="Muhammadamin home">M<span>.</span></a>
        <button className="shop-orders" type="button" onClick={() => setShowOrders(true)}>
          Your orders <span aria-hidden="true">({orders.reduce((total, order) => total + order.quantity, 0)})</span>
        </button>
      </header>

      <section className="shop-filters" aria-label="Filter products">
        <label className="shop-search">
          <span>Search</span>
          <input type="search" value={search} onChange={updateSearch} placeholder="Search the shelf" />
        </label>
        <label>
          <span>Sort by</span>
          <select value={sort} onChange={updateFilter(setSort)}>
            <option value="alphabetical">Alphabetical</option>
            <option value="price-low">Price: low to high</option>
            <option value="price-high">Price: high to low</option>
          </select>
        </label>
      </section>

      <div className="shop-results-bar">
        <p>{filteredProducts.length} products</p>
        <p>Page {page} of {pageCount}</p>
      </div>

      <section className="shop-grid" aria-label="Available products">
        {visibleProducts.map((product) => (
          <article
            className="shop-card"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") setSelectedProduct(product);
            }}
            role="button"
            tabIndex="0"
          >
            <div className="shop-card__topline"><span>{String(product.id).padStart(2, "0")}</span></div>
            <div className="shop-card__visual" aria-hidden="true">
              <img src={product.image} alt="" />
            </div>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <div className="shop-card__footer">
              <strong>{formatPrice(product.price)}</strong>
              <button type="button" onClick={(event) => { event.stopPropagation(); addToOrders(product); }}>Order <span aria-hidden="true">-&gt;</span></button>
            </div>
          </article>
        ))}
      </section>

      {visibleProducts.length === 0 && <p className="shop-empty">Nothing matched your search. Try another phrase.</p>}

      <nav className="shop-pagination" aria-label="Product pages">
        {Array.from({ length: pageCount }, (_, index) => index + 1).map((pageNumber) => (
          <button
            type="button"
            className={pageNumber === page ? "is-active" : ""}
            key={pageNumber}
            onClick={() => setPage(pageNumber)}
            aria-label={`Go to page ${pageNumber}`}
          >{pageNumber}</button>
        ))}
      </nav>

      {showOrders && (
        <div className="shop-overlay" role="presentation" onClick={() => setShowOrders(false)}>
          <section className="shop-panel" role="dialog" aria-modal="true" aria-labelledby="orders-title" onClick={(event) => event.stopPropagation()}>
            <div className="shop-panel__header">
              <h2 id="orders-title">Your orders</h2>
              <button type="button" onClick={() => setShowOrders(false)} aria-label="Close orders">&times;</button>
            </div>
            {orders.length === 0 ? <p className="shop-panel__empty">You have no orders yet.</p> : orders.map((order) => (
              <div className="shop-order" key={order.id}>
                <img className="shop-order__icon" src={order.image} alt="" />
                <div><strong>{order.name}</strong><small>Quantity: {order.quantity}</small></div>
                <b>{formatPrice(order.price * order.quantity)}</b>
                <div className="shop-order__quantity" aria-label={`Quantity for ${order.name}`}>
                  <button type="button" onClick={() => updateOrderQuantity(order.id, -1)} aria-label={`Decrease ${order.name}`}>-</button>
                  <span>{order.quantity}</span>
                  <button type="button" onClick={() => updateOrderQuantity(order.id, 1)} aria-label={`Increase ${order.name}`}>+</button>
                </div>
              </div>
            ))}
          </section>
        </div>
      )}

      {selectedProduct && (
        <div className="shop-overlay" role="presentation" onClick={() => setSelectedProduct(null)}>
          <section className="shop-details" role="dialog" aria-modal="true" aria-labelledby="product-title" onClick={(event) => event.stopPropagation()}>
            <button className="shop-details__close" type="button" onClick={() => setSelectedProduct(null)} aria-label="Close product details">&times;</button>
            <div className="shop-details__visual"><img src={selectedProduct.image} alt={selectedProduct.name} /></div>
            <div className="shop-details__content">
              <p className="shop-card__topline">Product {String(selectedProduct.id).padStart(2, "0")}</p>
              <h2 id="product-title">{selectedProduct.name}</h2>
              <p>{selectedProduct.description}</p>
              <p className="shop-details__meta">{selectedProduct.category} · {selectedProduct.rating} / 5 rating · {selectedProduct.stock} in stock</p>
              <strong>{formatPrice(selectedProduct.price)}</strong>
              <dl className="shop-details__data">
                <div><dt>Brand</dt><dd>{selectedProduct.brand}</dd></div>
                <div><dt>SKU</dt><dd>{selectedProduct.sku}</dd></div>
                <div><dt>Discount</dt><dd>{selectedProduct.discountPercentage}%</dd></div>
                <div><dt>Weight</dt><dd>{selectedProduct.weight}</dd></div>
                <div><dt>Dimensions</dt><dd>{selectedProduct.dimensions.width} × {selectedProduct.dimensions.height} × {selectedProduct.dimensions.depth}</dd></div>
                <div><dt>Availability</dt><dd>{selectedProduct.availabilityStatus}</dd></div>
                <div><dt>Warranty</dt><dd>{selectedProduct.warrantyInformation}</dd></div>
                <div><dt>Shipping</dt><dd>{selectedProduct.shippingInformation}</dd></div>
                <div><dt>Returns</dt><dd>{selectedProduct.returnPolicy}</dd></div>
                <div><dt>Minimum order</dt><dd>{selectedProduct.minimumOrderQuantity}</dd></div>
                <div><dt>Tags</dt><dd>{selectedProduct.tags.join(", ")}</dd></div>
                <div><dt>Barcode</dt><dd>{selectedProduct.meta.barcode}</dd></div>
                <div><dt>Created</dt><dd>{selectedProduct.meta.createdAt}</dd></div>
                <div><dt>Updated</dt><dd>{selectedProduct.meta.updatedAt}</dd></div>
              </dl>
              <section className="shop-details__reviews" aria-label="Product reviews">
                <h3>Reviews</h3>
                {selectedProduct.reviews.map((review) => (
                  <article key={`${review.reviewerEmail}-${review.date}`}>
                    <strong>{review.reviewerName} · {review.rating}/5</strong>
                    <p>{review.comment}</p>
                    <small>{review.date}</small>
                  </article>
                ))}
              </section>
              <button className="shop-details__order" type="button" onClick={() => addToOrders(selectedProduct)}>Add to your orders</button>
            </div>
          </section>
        </div>
      )}
      </main>
    </>
  );
}

const root = document.getElementById("shop-root");
createRoot(root).render(<Shop />);
