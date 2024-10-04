const clothingItems = document.querySelectorAll('.clothing-item');

clothingItems.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('visible');
    });
});
