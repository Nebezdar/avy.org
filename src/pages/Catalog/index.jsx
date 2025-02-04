import { useState, useEffect } from 'react';
import styled from 'styled-components';

// ... предыдущие styled-components остаются без изменений ...

// Расширим моковые данные для лучшего тестирования
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
  {
    id: 3,
    name: "Check Valve DN15",
    category: "valves",
    type: "check",
    series: "industrial",
    description: "Industrial check valve",
    thumbnail: "https://via.placeholder.com/400x300?text=Check+Valve"
  },
  {
    id: 4,
    name: "Gate Valve",
    category: "valves",
    type: "gate",
    series: "premium",
    description: "Premium gate valve",
    thumbnail: "https://via.placeholder.com/400x300?text=Gate+Valve"
  }
];

const Catalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [selectedSeries, setSelectedSeries] = useState('All');
  const [filteredModels, setFilteredModels] = useState(mockModels);

  // Функция фильтрации моделей
  const filterModels = () => {
    let result = [...mockModels];

    // Поиск по названию и описанию
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(model => 
        model.name.toLowerCase().includes(query) ||
        model.description.toLowerCase().includes(query)
      );
    }

    // Фильтрация по категории
    if (selectedCategory !== 'All') {
      result = result.filter(model => 
        model.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Фильтрация по типу
    if (selectedType !== 'All') {
      result = result.filter(model => 
        model.type.toLowerCase() === selectedType.toLowerCase()
      );
    }

    // Фильтрация по серии
    if (selectedSeries !== 'All') {
      result = result.filter(model => 
        model.series.toLowerCase() === selectedSeries.toLowerCase()
      );
    }

    setFilteredModels(result);
  };

  // Применяем фильтры при изменении любого параметра
  useEffect(() => {
    filterModels();
  }, [searchQuery, selectedCategory, selectedType, selectedSeries]);

  // Получаем уникальные значения для фильтров из данных
  const categories = ['All', ...new Set(mockModels.map(model => 
    model.category.charAt(0).toUpperCase() + model.category.slice(1)
  ))];
  
  const types = ['All', ...new Set(mockModels.map(model => 
    model.type.charAt(0).toUpperCase() + model.type.slice(1)
  ))];
  
  const series = ['All', ...new Set(mockModels.map(model => 
    model.series.charAt(0).toUpperCase() + model.series.slice(1)
  ))];

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

      {filteredModels.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '2rem' }}>
          <p>No models found matching your criteria</p>
        </div>
      ) : (
        <Grid>
          {filteredModels.map(model => (
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
      )}
    </CatalogContainer>
  );
};

export default Catalog; 