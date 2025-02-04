import { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import debounce from 'lodash/debounce';
import { 
  SearchContainer, 
  SearchInput, 
  SearchResults,
  ResultItem 
} from './styles';

const AdvancedSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Функция очистки запроса от пробелов и знаков препинания
  const cleanQuery = (input) => {
    return input.replace(/[^\w\s]/g, '').replace(/\s+/g, '').toLowerCase();
  };

  // Дебаунсинг поискового запроса
  const debouncedSearch = useCallback(
    debounce(async (searchQuery) => {
      if (!searchQuery.trim()) {
        setResults([]);
        return;
      }

      setIsLoading(true);
      try {
        const cleanedQuery = cleanQuery(searchQuery);
        const response = await api.search(cleanedQuery);
        setResults(response.data);
      } catch (error) {
        console.error('Search error:', error);
      } finally {
        setIsLoading(false);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]);

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
      />
      
      {isLoading && <div className="loader">Searching...</div>}
      
      {results.length > 0 && (
        <SearchResults>
          {results.map((result) => (
            <ResultItem
              key={result.id}
              onClick={() => {
                navigate(`/product/${result.id}`);
                setQuery('');
                setResults([]);
              }}
            >
              <img src={result.thumbnail || '/placeholder.png'} alt="" />
              <div className="result-info">
                <h4>{result.name}</h4>
                <p>{result.type} - {result.series}</p>
              </div>
            </ResultItem>
          ))}
        </SearchResults>
      )}
    </SearchContainer>
  );
}; 