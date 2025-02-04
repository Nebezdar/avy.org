import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCatalogItems } from '../../store/catalogSlice';
import { CatalogWrapper, Sidebar, Content, Breadcrumbs } from './styles';

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
    <CatalogWrapper>
      {renderBreadcrumbs()}
      <div className="catalog-content">
        <Sidebar>
          <CategoryTree 
            currentLevel={currentLevel}
            productType={productType}
          />
        </Sidebar>
        <Content>
          <ItemsGrid 
            items={items}
            currentLevel={currentLevel}
          />
          {totalPages > 1 && (
            <Pagination 
              currentPage={currentPage}
              totalPages={totalPages}
            />
          )}
        </Content>
      </div>
    </CatalogWrapper>
  );
};

export default Catalog; 