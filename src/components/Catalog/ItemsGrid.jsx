import { ItemsWrapper, ItemCard } from './styles';
import { useNavigate } from 'react-router-dom';

const ItemsGrid = ({ items, currentLevel }) => {
  const navigate = useNavigate();

  const handleItemClick = (item) => {
    switch (currentLevel) {
      case 'productType':
        navigate(`/catalog/${item.productType}/${item.id}`);
        break;
      case 'category':
        navigate(`/catalog/${item.productType}/${item.category}/${item.id}`);
        break;
      case 'series':
        navigate(`/product/${item.id}`);
        break;
    }
  };

  return (
    <ItemsWrapper>
      {items.map((item) => (
        <ItemCard 
          key={item.id}
          onClick={() => handleItemClick(item)}
        >
          <div className="image-container">
            {item.imageUrl ? (
              <img src={item.imageUrl} alt={item.name} />
            ) : (
              <div className="placeholder-image">No image</div>
            )}
          </div>
          <h3>{item.name}</h3>
        </ItemCard>
      ))}
    </ItemsWrapper>
  );
};

export default ItemsGrid; 