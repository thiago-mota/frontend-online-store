export async function getCategories() {
  try {
    const URL = 'https://api.mercadolibre.com/sites/MLB/categories';
    const response = await fetch(URL);
    const categories = await response.json();
    return categories;
  } catch (error) {
    return Error(error);
  }
}

export async function getProductsFromCategoryAndQuery(CATEGORY_ID, QUERY) {
  try {
    const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY_ID}&q=${QUERY} `;
    const response = await fetch(URL);
    const categories = await response.json();
    return categories;
  } catch (error) {
    return Error(error);
  }
}
