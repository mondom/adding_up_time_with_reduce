const timeNodes = [...document.querySelectorAll('[data-time]')]
// ↑ zamiana NodeList na tablicę
console.log(timeNodes);

const seconds = timeNodes.map(node => node.dataset.time)
// .dataset daje nam dostęp do customowego atrybutu, ale musimy podać po kropce jeszcze jego drugi człon nazwy czyli w tym wypadku .time
console.log(seconds);