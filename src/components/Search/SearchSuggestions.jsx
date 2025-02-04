import { useSearchHistory } from '../../hooks/useSearchHistory';
import { SuggestionsContainer, SuggestionItem } from './styles';

const SearchSuggestions = ({ onSelect }) => {
  const { history, clearHistory } = useSearchHistory();

  if (history.length === 0) return null;

  return (
    <SuggestionsContainer>
      <div className="header">
        <h4>Recent Searches</h4>
        <button onClick={clearHistory}>Clear</button>
      </div>
      
      {history.map((query, index) => (
        <SuggestionItem
          key={index}
          onClick={() => onSelect(query)}
        >
          <span>{query}</span>
        </SuggestionItem>
      ))}
    </SuggestionsContainer>
  );
}; 