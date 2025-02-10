import React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalogItems } from '../../store/catalogSlice';
import {
  CatalogContainer,
  Sidebar,
  CategoryItem,
  ProductGrid,
  ProductCard,
  ImageContainer,
  ProductInfo,
  ProductName,
  Breadcrumbs,
  ProductImage
} from './styles';
import styled from 'styled-components';

const Pagination = styled.div`
  padding: 20px;
  text-align: center;
`;

const products = [
  { id: 1, name: 'B102' },
  { id: 2, name: 'B110' },
  { id: 3, name: 'B112' },
  { id: 4, name: 'H1B' },
  { id: 5, name: 'SO' },
  { id: 6, name: 'T' },
];

// Используем локальное изображение из публичной директории
const placeholderImage = '/B1SV-.jpg'; // или какое у вас там расширение (.jpg, .webp и т.д.)

const Catalog = () => {
  const { productType, category, series } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState('productType');
  
  const { items, loading, currentPage, totalPages } = useSelector(
    (state) => state.catalog
  );

  useEffect(() => {
    dispatch(fetchCatalogItems({ 
      type: productType, 
      category, 
      series, 
      page: currentPage 
    }));
  }, [productType, category, series, currentPage]);

  const renderBreadcrumbs = () => {
    const crumbs = [];
    if (productType) crumbs.push({ name: productType, path: `/catalog/${productType}` });
    if (category) crumbs.push({ name: category, path: `/catalog/${productType}/${category}` });
    if (series) crumbs.push({ name: series, path: `/catalog/${productType}/${category}/${series}` });

    return (
      <Breadcrumbs>
        <span onClick={() => navigate('/catalog')}>Catalog</span>
        {crumbs.map((crumb, index) => (
          <span key={index} onClick={() => navigate(crumb.path)}>
            {' > '}{crumb.name}
          </span>
        ))}
      </Breadcrumbs>
    );
  };

  return (
    <CatalogContainer>
      <Sidebar>
        <CategoryItem>Fittings</CategoryItem>
        <CategoryItem style={{ color: '#333', background: '#f5f5f5', borderRadius: '6px' }}>
          Valves
        </CategoryItem>
      </Sidebar>
      <div>
        <Breadcrumbs>
          Valves <span>{'>'}</span> Ball Valve
        </Breadcrumbs>
        <ProductGrid>
          {products.map(product => (
            <ProductCard key={product.id}>
              <ImageContainer>
                <ProductImage src={placeholderImage} alt={product.name} />
              </ImageContainer>
              <ProductInfo>
                <ProductName>{product.name}</ProductName>
              </ProductInfo>
            </ProductCard>
          ))}
        </ProductGrid>
        {totalPages > 1 && (
          <Pagination 
            currentPage={currentPage}
            totalPages={totalPages}
          />
        )}
      </div>
    </CatalogContainer>
  );
};

export default Catalog; 