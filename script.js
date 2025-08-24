// 1️⃣ Дані галереї
const galleryData = [
  {
    category: 'logos',
    title: 'Logo 1',
    image: 'works/logo1.png',
    description: 'My first logo'
  },
  {
    category: 'posters',
    title: 'Poster 1',
    image: 'works/poster1.png',
    description: 'My first poster'
  },
  {
    category: '3d',
    title: '3D Model 1',
    image: 'works/3d1.png',
    description: 'My first 3D model'
  }
];

// 2️⃣ Вставка картинок на сторінку
const galleryContainer = document.querySelector('.gallery-items');

galleryData.forEach(item => {
  const div = document.createElement('div');
  div.classList.add('item', item.category);

  div.innerHTML = `
    <img src="${item.image}" alt="${item.title}" />
    <h4>${item.title}</h4>
    <p>${item.description}</p>
  `;

  galleryContainer.appendChild(div);
});

// 3️⃣ Фільтр кнопками
const buttons = document.querySelectorAll('.gallery-menu button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    const items = document.querySelectorAll('.gallery-items .item');

    items.forEach(item => {
      if (category === 'all' || item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
