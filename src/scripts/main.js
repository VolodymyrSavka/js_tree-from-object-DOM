'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  if (!element || !data || typeof data !== 'object') {
    return;
  }

  Object.keys(data).forEach((key) => {
    const li = document.createElement('li');

    li.textContent = key;

    if (typeof data[key] === 'object' && data[key] !== null) {
      const ul = document.createElement('ul');

      li.appendChild(ul);

      createTree(ul, data[key]);
    } else {
      li.textContent = `${key}: ${data[key]}`;
    }

    element.appendChild(li);
  });
}

createTree(tree, food);
