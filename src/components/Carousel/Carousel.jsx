import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [randomModels, setRandomModels] = useState({
    fitting: null,
    valve: null
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Загрузка рандомных моделей при монтировании компонента
    fetchRandomModels();
  }, []);

  const slides = [
    {
      title: "Fittings",
      text: "Hy-Lok Fittings have been designed with great care...",
      model: randomModels.fitting,
      type: "fittings"
    },
    {
      title: "Valves",
      text: "Hy-Lok Instrument Valves & Manifolds...",
      model: randomModels.valve,
      type: "valves"
    }
  ];

  return (
    <div className="carousel">
      {slides.map((slide, index) => (
        <div 
          key={slide.title} 
          className={`slide ${activeSlide === index ? 'active' : ''}`}
          onClick={() => navigate(`/product/${slide.model.id}`)}
        >
          <h2>{slide.title}</h2>
          <p>{slide.text}</p>
          <model-viewer
            src={slide.model?.modelUrl}
            alt={slide.title}
            auto-rotate
            camera-controls
          />
        </div>
      ))}
    </div>
  );
};

export default Carousel; 