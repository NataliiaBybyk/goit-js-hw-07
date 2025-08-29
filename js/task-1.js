const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const title = item.querySelector('h2');
  console.log(`Category: ${title.textContent}`);
  const itemElements = item.querySelectorAll('li');
  console.log(`Elements: ${itemElements.length}`);
});
