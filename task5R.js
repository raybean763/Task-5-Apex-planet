

const products = [
    {
      name: 'Buds S',
      description: 'Feel the real sound with the new airdopes.',
      image: 'https://images.unsplash.com/photo-1600374917838-1df876d745c7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z2FsYXh5JTIwYnVkc3xlbnwwfHwwfHx8MA%3D%3D',
      price: 5999
    },
    {
      name: 'Watch S',
      description: 'Every thing on your Wrist',
      image: 'https://images.unsplash.com/photo-1553545204-4f7d339aa06a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FsYXh5JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D',
      price: 12999
    },
    {
      name: 'Mouse S',
      description: 'Designed for professional Use smoothly as ever.',
      image: 'https://images.unsplash.com/photo-1707592691247-5c3a1c7ba0e3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fE1vdXNlJTIwc2Ftc3VuZ3xlbnwwfHwwfHx8MA%3D%3D',
      price: 3299
    },
    {
      name: 'Power Bank S',
      description: 'Keep your Gadgets Charge all the day ',
      image: 'https://images.unsplash.com/photo-1652105425694-a21d31f7ed9e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TW91c2UlMjBzYW1zdW5nfGVufDB8fDB8fHww',
      price: 4999
    },
    {
      name: 'Vaccum Bot S',
      description: 'Clean Your House .',
      image: 'https://media.istockphoto.com/id/1290170579/photo/a-woman-using-a-robotic-vacuum-cleaner-application-on-her-smartphone.webp?a=1&b=1&s=612x612&w=0&k=20&c=pdKrUY3hWgFp_iQ8771kzipQZ-IWPVBkO-8LqABy_BE=',
      price: 149999
    },
    {
      name: 'Phone S',
      description: 'Elevate ur Things With The Beast',
      image: 'https://images.unsplash.com/photo-1610792516307-ea5acd9c3b00?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHMyMXxlbnwwfHwwfHx8MA%3D%3D',
      price: 119999
    },
    {
      name: 'Pad S',
      description: 'Laptop for your Work.',
      image: 'https://plus.unsplash.com/premium_photo-1681666713728-9ed75e148617?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHNhbXN1bmclMjBsYXB0b3B8ZW58MHx8MHx8fDA%3D',
      price: 139999
    },
    {
      name: 'Tv S',
      description: 'Theater experience at Home',
      image: 'https://images.samsung.com/is/image/samsung/p6pim/in/qa65qn900fuxxl/gallery/in-qled-qn900f-qa65qn900fuxxl-547298500?$684_547_JPG$',
      price: 100000
    },
    {
      name: 'Tab S',
      description: 'Unlock The Artist in U',
      image: 'https://images.unsplash.com/photo-1654852360714-3899af1f5be7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFRhYmxldCUyMHNhbXN1bmd8ZW58MHx8MHx8fDA%3D',
      price: 56999
    },
  ];
  
  const productContainer = document.getElementById('products');
  const cartItems = [];
  const cartContainer = document.getElementById('cart');
  const totalAmount = document.getElementById('total');
  const sortSelect = document.getElementById('sort');
  
  function displayProducts(data) {
    productContainer.innerHTML = "";
    data.forEach(product => {
      const productEl = document.createElement('div');
      productEl.classList.add('product');
      productEl.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <div class="product-info">
          <h3>${product.name}</h3>
          <p>${product.description}</p>
          <p>₹${product.price.toLocaleString('en-IN')}</p>
          <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        </div>
      `;
      productContainer.appendChild(productEl);
    });
  }
  
  function addToCart(name, price) {
    cartItems.push({ name, price });
    renderCart();
  }
  
  function renderCart() {
    cartContainer.innerHTML = "";
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
      const itemEl = document.createElement('p');
      itemEl.textContent = `${item.name} - ₹${item.price.toLocaleString('en-IN')}`;
      cartContainer.appendChild(itemEl);
    });
    totalAmount.textContent = `Total: ₹${total.toLocaleString('en-IN')}`;
  }
  
  sortSelect.addEventListener('change', function() {
    const value = sortSelect.value;
    if (value === 'price-asc') {
      displayProducts(products.slice().sort((a, b) => a.price - b.price));
    } else if (value === 'price-desc') {
      displayProducts(products.slice().sort((a, b) => b.price - a.price));
    } else {
      displayProducts(products);
    }
  });
  
  displayProducts(products);
  
