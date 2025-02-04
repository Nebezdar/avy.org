import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  setCurrentView,
  setSelectedProductType,
  setSelectedItemType,
  setSelectedSeries,
  setSelectedModel
} from '../../store/catalogSlice';
import ProductTypeList from './components/ProductTypeList';
import ItemTypeGrid from './components/ItemTypeGrid';
import SeriesList from './components/SeriesList';
import ModelsList from './components/ModelsList';
import ModelCard from './components/ModelCard';

const CatalogContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const CatalogLayout = styled.div`
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 2rem;
`;

const Breadcrumbs = styled.div`
  padding: 1rem 0;
  color: #666;

  span {
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
`;

const Catalog = () => {
  const dispatch = useDispatch();
  const {
    currentView,
    selectedProductType,
    selectedItemType,
    selectedSeries,
    selectedModel
  } = useSelector(state => state.catalog);

  const handleProductTypeSelect = (productType) => {
    dispatch(setSelectedProductType(productType));
    dispatch(setCurrentView('itemType'));
  };

  const handleItemTypeSelect = (itemType) => {
    dispatch(setSelectedItemType(itemType));
    dispatch(setCurrentView('series'));
  };

  const handleSeriesSelect = (series) => {
    dispatch(setSelectedSeries(series));
    dispatch(setCurrentView('models'));
  };

  const handleModelSelect = (model) => {
    dispatch(setSelectedModel(model));
  };

  const renderBreadcrumbs = () => {
    const crumbs = [selectedProductType];
    if (selectedItemType) crumbs.push(selectedItemType);
    if (selectedSeries) crumbs.push(selectedSeries);

    return (
      <Breadcrumbs>
        {crumbs.map((crumb, index) => (
          <span key={index}>
            {index > 0 && ' > '}
            {crumb}
          </span>
        ))}
      </Breadcrumbs>
    );
  };

  return (
    <CatalogContainer>
      {renderBreadcrumbs()}
      
      <CatalogLayout>
        <ProductTypeList
          selected={selectedProductType}
          onSelect={handleProductTypeSelect}
        />

        <div>
          {currentView === 'itemType' && (
            <ItemTypeGrid
              productType={selectedProductType}
              onSelect={handleItemTypeSelect}
            />
          )}

          {currentView === 'series' && (
            <SeriesList
              productType={selectedProductType}
              itemType={selectedItemType}
              onSelect={handleSeriesSelect}
            />
          )}

          {currentView === 'models' && (
            <ModelsList
              productType={selectedProductType}
              itemType={selectedItemType}
              series={selectedSeries}
              onSelect={handleModelSelect}
            />
          )}
        </div>
      </CatalogLayout>

      {selectedModel && (
        <ModelCard
          model={selectedModel}
          onClose={() => dispatch(setSelectedModel(null))}
        />
      )}
    </CatalogContainer>
  );
};

export default Catalog; 