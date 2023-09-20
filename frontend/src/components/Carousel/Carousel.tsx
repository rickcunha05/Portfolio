import { useState, useEffect } from 'react';
import ProcessCard from '../processCard/ProcessCard';

function Carousel() {
  const [cards] = useState([
    {
      title: 'Card 1',
      description: 'Descrição do Card 1',
      imageUrl: 'image1.jpg',
    },
    {
      title: 'Card 2',
      description: 'Descrição do Card 2',
      imageUrl: 'image2.jpg',
    },
    {
      title: 'Card 3',
      description: 'Descrição do Card 3',
      imageUrl: 'image3.jpg',
    },
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [cards]);

  return (
    <div className="carousel">
      {/* Renderize o componente de card com base no índice atual */}
      <ProcessCard
        title={cards[currentIndex].title}
        description={cards[currentIndex].description}
      />     
      
    </div>
  );
}

export default Carousel;
