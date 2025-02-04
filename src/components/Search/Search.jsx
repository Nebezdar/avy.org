import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import { SearchWrapper, SearchInput, SearchResults } from './styles';

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const searchProducts = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      try {
        // Удаляем пробелы и знаки препинания из запроса
        const cleanQuery = searchQuery.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
        const response = await api.searchProducts(cleanQuery);
        setResults(response.data);
      } catch (error) {
        console.error('Search failed:', error);
      }
    }, 300),
    []
  );

  useEffect(() => {
    searchProducts(query);
  }, [query, searchProducts]);

  return (
    <SearchWrapper>
      <SearchInput
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <SearchResults>
          {results.map((result) => (
            <div
              key={result.id}
              onClick={() => {
                navigate(`/product/${result.id}`);
                setQuery('');
                setResults([]);
              }}
            >
              {result.name}
            </div>
          ))}
        </SearchResults>
      )}
    </SearchWrapper>
  );
}; 