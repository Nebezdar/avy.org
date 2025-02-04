class SearchIndex {
  constructor() {
    this.index = new Map();
  }

  // Добавление элемента в индекс
  addToIndex(item) {
    const tokens = this.tokenize(
      `${item.name} ${item.type} ${item.series} ${item.description}`
    );
    
    tokens.forEach(token => {
      if (!this.index.has(token)) {
        this.index.set(token, new Set());
      }
      this.index.get(token).add(item.id);
    });
  }

  // Поиск по индексу
  search(query) {
    const tokens = this.tokenize(query);
    if (tokens.length === 0) return new Set();

    let results = this.index.get(tokens[0]) || new Set();
    
    for (let i = 1; i < tokens.length; i++) {
      const tokenResults = this.index.get(tokens[i]) || new Set();
      results = new Set([...results].filter(x => tokenResults.has(x)));
    }

    return results;
  }

  // Токенизация текста
  tokenize(text) {
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(token => token.length > 0);
  }

  // Очистка индекса
  clear() {
    this.index.clear();
  }
}

export const searchIndex = new SearchIndex(); 