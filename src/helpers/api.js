class api {
  async getCategoryById(id) {
    const response = await fetch(`http://jservice.io/api/category?id=${id}`);
    const json = await response.json();
    return json;
  }
  async getClues(value) {
    const response = await fetch(`http://jservice.io/api/clues=${value}`)
    const json = await response.json();
    return json;
  }
  async getRandom() {
    const response = await fetch('http://jservice.io/api/random?count=100');
    const json = await response.json();
    return json;
  }
  async getCategories() {
    const response = await fetch('http://jservice.io/api/categories?count=100');
    const json = await response.json();
    return json;
  }
  async getInavlid(id) {
    const response = await fetch(`http://jservice.io/api/invalid?id=${id}`);
    const json = await response.json();
    return json;
  }
}

export default new api();