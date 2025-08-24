const buttons = document.querySelectorAll('.gallery-menu button');
const items = document.querySelectorAll('.gallery-items .item');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    items.forEach(item => {
      if (item.classList.contains(category)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});
