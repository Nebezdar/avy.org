import { useState } from 'react';
import styled from 'styled-components';

const CatalogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
`;

const Header = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  color: #333;
  margin-bottom: 1rem;
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0,123,255,0.25);
  }
`;

const FiltersContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  min-width: 150px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const ModelCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

const ModelImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: contain;
  background: #f8f9fa;
  padding: 1rem;
`;

const ModelInfo = styled.div`
  padding: 1rem;

  h3 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    color: #333;
  }

  p {
    color: #666;
    font-size: 0.9rem;
    margin-bottom: 1rem;
  }
`;

const DownloadButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: #0056b3;
  }
`;

// Моковые данные
const mockModels = [
  {
    id: 1,
    name: "Tube Fitting",
    category: "fittings",
    type: "tube",
    series: "standard",
    description: "High-pressure tube fitting",
    thumbnail: "https://via.placeholder.com/400x300?text=Tube+Fitting"
  },
  {
    id: 2,
    name: "Ball Valve",
    category: "valves",
    type: "ball",
    series: "premium",
    description: "Standard ball valve",
    thumbnail: "https://via.placeholder.com/400x300?text=Ball+Valve"
  },
  // Добавьте больше моделей...
];

const categories = ["All", "Fittings", "Valves", "Pipes"];
const types = ["All", "Tube", "Ball", "Check", "Gate"];
const series = ["All", "Standard", "Premium", "Industrial"];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSeries, setSelectedSeries] = useState('All');

  return (
    <CatalogContainer>
      <Header>
        <Title>3D Models Catalog</Title>
        <SearchBar 
          type="text"
          placeholder="Search models..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <FiltersContainer>
          <Select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </Select>
          <Select 
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            {types.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </Select>
          <Select 
            value={selectedSeries}
            onChange={(e) => setSelectedSeries(e.target.value)}
          >
            {series.map(series => (
              <option key={series} value={series}>{series}</option>
            ))}
          </Select>
        </FiltersContainer>
      </Header>

      <Grid>
        {mockModels.map(model => (
          <ModelCard key={model.id}>
            <ModelImage src={model.thumbnail} alt={model.name} />
            <ModelInfo>
              <h3>{model.name}</h3>
              <p>{model.description}</p>
              <DownloadButton>Download</DownloadButton>
            </ModelInfo>
          </ModelCard>
        ))}
      </Grid>
    </CatalogContainer>
  );
};

export default Catalog; 