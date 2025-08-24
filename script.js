const buttons = document.querySelectorAll('.gallery-menu button');
const items = document.querySelectorAll('.gallery-items .item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;

    items.forEach(item => {
      // Якщо кнопка "All" — показати всі елементи
      if (category === 'all') {
        item.style.display = 'block';
      } else {
        // Інакше показати тільки елементи потрібної категорії
        item.style.display = item.classList.contains(category) ? 'block' : 'none';
      }
    });
  });
});
