import styled from 'styled-components';
import MainCarousel from '../../components/Carousel/MainCarousel';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ModelModal from '../../components/ModelModal';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(to right, #f8f9fa, #e9ecef);
  border-radius: 8px;
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #333;
  max-width: 600px;
  margin: 0 auto;
  margin-bottom: 2rem;
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  font-size: 1.1rem;
  border: 2px solid #e1e1e1;
  border-radius: 50px;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 4px rgba(0,123,255,0.1);
  }

  &::placeholder {
    color: #999;
  }
`;

const SearchButton = styled.button`
  position: absolute;
  right: 8px;
  top: 50%;
  transform: translateY(-50%);
  padding: 0.5rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #0056b3;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin: 4rem 0;
`;

const FeatureCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  text-align: center;

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
  }
`;

const CatalogPreview = styled.section`
  margin: 4rem 0;
`;

const PreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const PreviewTitle = styled.h2`
  font-size: 1.8rem;
  color: #333;
`;

const ViewAllButton = styled.a`
  color: #007bff;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

const ModelGrid = styled.div`
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
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
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
    color: #333;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    font-size: 0.9rem;
  }
`;

const previewModels = [
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
    name: "Check Valve",
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

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedModel, setSelectedModel] = useState(null);
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <HomeContainer>
      <Hero>
        <Title>3D Models Library for Engineers</Title>
        <Subtitle>
          Download ready-to-use 3D models of fittings, valves, and other components for your projects
        </Subtitle>
        <SearchContainer>
          <form onSubmit={handleSearch}>
            <SearchInput
              type="text"
              placeholder="Search for models..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <SearchButton type="submit">Search</SearchButton>
          </form>
        </SearchContainer>
      </Hero>

      <MainCarousel />

      <CatalogPreview>
        <PreviewHeader>
          <PreviewTitle>Popular Models</PreviewTitle>
          <ViewAllButton href="/catalog">
            View All Models
            <span>&rarr;</span>
          </ViewAllButton>
        </PreviewHeader>

        <ModelGrid>
          {previewModels.map(model => (
            <ModelCard 
              key={model.id}
              onClick={() => setSelectedModel(model)}
            >
              <ModelImage src={model.thumbnail} alt={model.name} />
              <ModelInfo>
                <h3>{model.name}</h3>
                <p>{model.description}</p>
              </ModelInfo>
            </ModelCard>
          ))}
        </ModelGrid>
      </CatalogPreview>

      <FeaturesGrid>
        <FeatureCard>
          <h3>Free Downloads</h3>
          <p>Access thousands of models at no cost</p>
        </FeatureCard>
        <FeatureCard>
          <h3>Multiple Formats</h3>
          <p>STEP, IGES, STL and other formats</p>
        </FeatureCard>
        <FeatureCard>
          <h3>High Quality</h3>
          <p>Accurate and detailed models</p>
        </FeatureCard>
      </FeaturesGrid>
      {selectedModel && (
        <ModelModal 
          model={selectedModel} 
          onClose={() => setSelectedModel(null)}
        />
      )}
    </HomeContainer>
  );
};

export default Home;