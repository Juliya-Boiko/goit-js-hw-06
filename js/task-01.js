const categories = document.querySelectorAll('.item');
console.log(`Number of categories:`, categories.length);
categories.forEach((category) => {
    console.log('Category:', category.firstElementChild.textContent);
    console.log('Elements:', category.children[1].children.length);
});
