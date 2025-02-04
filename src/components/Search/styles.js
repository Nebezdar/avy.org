import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 16px;
  border: 2px solid #eee;
  border-radius: 8px;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-top: 8px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
`;

export const ResultItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #f5f5f5;
  }

  img {
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 4px;
    margin-right: 12px;
  }

  .result-info {
    h4 {
      margin: 0;
      font-size: 14px;
      color: #333;
    }

    p {
      margin: 4px 0 0;
      font-size: 12px;
      color: #666;
    }
  }
`;

export const SuggestionsContainer = styled.div`
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  padding: 12px;
  margin-top: 8px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #eee;

    h4 {
      margin: 0;
      color: #666;
    }

    button {
      color: var(--primary-color);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

export const SuggestionItem = styled.div`
  padding: 8px;
  cursor: pointer;
  transition: background 0.2s;
  border-radius: 4px;

  &:hover {
    background: #f5f5f5;
  }

  span {
    font-size: 14px;
    color: #333;
  }
`; 