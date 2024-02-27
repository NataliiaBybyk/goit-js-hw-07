const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const heading = item.querySelector('h2');
  console.log(`Category: ${heading.textContent}`);
  const itemElems = item.querySelectorAll('li');
  console.log(`Elements: ${itemElems.length}`);
});
