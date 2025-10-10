<!-- ==== BAGIAN MENU ==== -->
<section id="menu" class="menu-section">
  <h2 class="menu-title">Daftar Menu Cilok Goang Teh Desi</h2>
  <div id="menu-container" class="menu-container"></div>
</section>

<script>
// =========================
// Data Menu
// =========================
const menuItems = [
  { id: 'm1', name: 'Cilok Goang Tulang', price: 17000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm2', name: 'Cilok Goang Tofu Sehah', price: 16000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm3', name: 'Cilok Granat', price: 14000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm4', name: 'Cilok Kuah Sambal Ijo', price: 14000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm5', name: 'Cilok Goang Ceker Sambal Ijo', price: 17000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm6', name: 'Cilok Kuah Boncabe', price: 16000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm7', name: 'Mie Cilok Goang', price: 16000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm8', name: 'Cilok Goang Ceker Pedas', price: 18000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm9', name: 'Cilok Kuah Endolita', price: 14000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm10', name: 'Seblak Kerupuk Endolita', price: 16000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm11', name: 'Seblak Mie Kuah Telur Pedas', price: 14000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm12', name: 'Seblok Endolita', price: 13000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm13', name: 'Seblok Ceker Endolita', price: 17000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm14', name: 'Seblak Kerupuk Rafaell', price: 17000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm15', name: 'Seblak 4 Varian', price: 17000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm16', name: 'Seblak 5 Varian', price: 19000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm17', name: 'Seblak 6 Varian', price: 22000, img: 'images/placeholder_menu.jpg', desc: '' },
  { id: 'm18', name: 'Paket Hemat 1 (2 porsi)', price: 12000, img: 'images/placeholder_menu.jpg', desc: '' }
];

// =========================
// Render ke Halaman
// =========================
const menuContainer = document.getElementById("menu-container");

function renderMenu() {
  menuContainer.innerHTML = menuItems.map(item => `
    <div class="menu-item">
      <img src="${item.img}" alt="${item.name}" class="menu-img">
      <h3 class="menu-name">${item.name}</h3>
      <p class="menu-price">Rp ${item.price.toLocaleString('id-ID')}</p>
      <p class="menu-desc">${item.desc || 'Deskripsi menu belum ditambahkan.'}</p>
      <button class="order-btn">Pesan Sekarang</button>
    </div>
  `).join('');
}

renderMenu();
</script>

<style>
.menu-section {
  padding: 40px 20px;
  background: #fff8f5;
  text-align: center;
}

.menu-title {
  font-size: 28px;
  margin-bottom: 20px;
  color: #d10000;
}

.menu-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  justify-items: center;
}

.menu-item {
  background: #ffe8e8;
  border-radius: 12px;
  padding: 15px;
  width: 220px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.15);
  transition: 0.3s;
}

.menu-item:hover {
  transform: scale(1.05);
  background: #ffdddd;
}

.menu-img {
  width: 100%;
  height: 150px;
  border-radius: 10px;
  object-fit: cover;
}

.menu-name {
  font-weight: bold;
  color: #b30000;
  margin-top: 10px;
}

.menu-price {
  color: #000;
  margin: 5px 0;
  font-weight: 500;
}

.menu-desc {
  font-size: 14px;
  color: #444;
  margin-bottom: 10px;
}

.order-btn {
  background: #ff0000;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}

.order-btn:hover {
  background: #cc0000;
}
</style>
