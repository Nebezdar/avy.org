import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin: 2rem 0;
  
  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-button-next,
  .swiper-button-prev {
    color: var(--primary-color);
    
    &:after {
      font-size: 24px;
    }
  }
`;

export const SlideContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

export const SlideInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-color);
  }

  @media (max-width: 768px) {
    padding: 1rem;
    
    h2 {
      font-size: 2rem;
    }
  }
`;

export const ModelContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  border-radius: 8px;
  overflow: hidden;

  model-viewer {
    width: 100%;
    height: 100%;
    --poster-color: transparent;
  }
`; 