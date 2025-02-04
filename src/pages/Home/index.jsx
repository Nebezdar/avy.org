import styled from 'styled-components';
import MainCarousel from '../../components/Carousel/MainCarousel';

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(to right, #f8f9fa, #f8f9fa);
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

const Home = () => {
  return (
    <HomeContainer>
      <Hero>
        <Title>3D Models Library for Engineers</Title>
        <Subtitle>
          Download ready-to-use 3D models of fittings, valves, and other components for your projects
        </Subtitle>
      </Hero>

      <MainCarousel />

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
    </HomeContainer>
  );
};

export default Home; 