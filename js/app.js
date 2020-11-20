document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form")
  form.addEventListener('submit', handleInput)



});

const handleInput = function(event){
  event.preventDefault();
  const newListItem = document.createElement('li');
  const list = document.querySelector('ul')
  const title = document.createElement('h2');
  const author = document.createElement('h3');
  const category = document.createElement('h5')
  title.textContent = `${event.target.title.value}`
  author.textContent = `${event.target.author.value}`
  category.textContent = `${event.target.category.value}`
  newListItem.appendChild(title)
  newListItem.appendChild(author)
  newListItem.appendChild(category)
  list.appendChild(newListItem)
  document.querySelector("#new-item-form").reset();
  
  // const resultParagraph = document.querySelector('#reading-list');
  // resultParagraph.textContent = `${event.target.value}`
  
};

