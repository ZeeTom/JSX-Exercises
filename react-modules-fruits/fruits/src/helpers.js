function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function remove(items, item) {
  let idx = items.indexOf(item);
  if (idx === -1) return null; // maybe undefined?

  return items.splice(idx,1);
}

export {choice, remove}