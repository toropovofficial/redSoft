export function getFormattedPrice(value) {
  let price = typeof value === 'number' ? String(value) : value;
  price = price.replace(/(\D)/g, ',');

  const result = price.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1 ');

  return result;
}

export function getProductListByPhrase(productList, phrase) {
  return productList.filter((product) => {
    const title = product.title.toLowerCase();
    const searchPhrase = phrase.toLowerCase();

    return title.includes(searchPhrase);
  });
}

export function preparedProductListForSave(list, id) {
  return list.map((item) => {
    const product = item;
    if (product.id === id) {
      product.status = 'selected';
    }

    return product;
  });
}

export function generateRandomString() {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}
