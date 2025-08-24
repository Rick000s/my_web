// 1️⃣ Дані галереї (усі картинки, шляхи під твою папку works/)
const galleryData = [
  { category: 'logos', title: 'Logo 1', image: 'works/logo1.png.png', description: 'My first logo' },
  { category: 'logos', title: 'Logo 2', image: 'works/logo2.png.png', description: 'Another logo' },
  { category: 'posters', title: 'Poster 1', image: 'works/posters1.png.png', description: 'My first poster' },
  { category: 'posters', title: 'Poster 2', image: 'works/posters2.png.png', description: 'Another poster' },
  { category: '3d', title: '3D Model 1', image: 'works/3d1.png.png', description: 'My first 3D model' },
  { category: '3d', title: '3D Model 2', image: 'works/3d2.png.png', description: 'Another 3D model' }
];

// 2️⃣ Вставка картинок на сторінку
const galleryContainer = document.querySelector('.gallery-items');
galleryContainer.innerHTML = ''; // очищаємо перед додаванням, щоб не дублювати

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
      item.style.display = (category === 'all' || item.classList.contains(category)) ? 'block' : 'none';
    });
  });
});
