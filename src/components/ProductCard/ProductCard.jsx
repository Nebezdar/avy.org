import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useDownloadLimit } from '../../hooks/useDownloadLimit';
import { 
  ProductWrapper, 
  ModelViewer, 
  DownloadSection,
  FormatSection,
  DownloadButton,
  LimitModal 
} from './styles';

const ProductCard = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedFormat3D, setSelectedFormat3D] = useState(null);
  const [selectedFormatCAD, setSelectedFormatCAD] = useState(null);
  const [showLimitModal, setShowLimitModal] = useState(false);
  
  const { isAuthenticated } = useAuth();
  const { checkDownloadAvailability, incrementDownloadCount } = useDownloadLimit();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.getProduct(id);
        setProduct(response.data);
      } catch (error) {
        console.error('Failed to fetch product:', error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleDownload = async () => {
    const selectedFormat = selectedFormat3D || selectedFormatCAD;
    if (!selectedFormat) return;

    if (!checkDownloadAvailability()) {
      setShowLimitModal(true);
      return;
    }

    try {
      const url = `http://j743689.myjino.ru/fld/models/out/${id}.FLD.RU.${selectedFormat.toLowerCase()}`;
      await downloadFile(url);
      incrementDownloadCount();
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <ProductWrapper>
      <ModelViewer>
        <model-viewer
          src={product.modelUrl}
          alt={product.name}
          auto-rotate
          camera-controls
          shadow-intensity="1"
          environment-image="neutral"
        />
      </ModelViewer>

      <DownloadSection>
        <h2>Choose file type</h2>
        
        <FormatSection>
          <h3>3D model</h3>
          <div className="format-buttons">
            {['DWG', 'IGS', 'IPT', 'M3D', 'SAT', 'STL', 'STP', 'X_T'].map(format => (
              <button
                key={format}
                className={selectedFormat3D === format ? 'active' : ''}
                onClick={() => {
                  setSelectedFormat3D(format);
                  setSelectedFormatCAD(null);
                }}
              >
                {format}
              </button>
            ))}
          </div>
        </FormatSection>

        <FormatSection>
          <h3>CAD</h3>
          <div className="format-buttons">
            {['CDW', 'DXF', 'PDF', 'Drawing.DWG'].map(format => (
              <button
                key={format}
                className={selectedFormatCAD === format ? 'active' : ''}
                onClick={() => {
                  setSelectedFormatCAD(format);
                  setSelectedFormat3D(null);
                }}
              >
                {format}
              </button>
            ))}
          </div>
        </FormatSection>

        <DownloadButton
          onClick={handleDownload}
          disabled={!selectedFormat3D && !selectedFormatCAD}
        >
          Download
        </DownloadButton>
      </DownloadSection>

      <LimitModal 
        isOpen={showLimitModal} 
        onClose={() => setShowLimitModal(false)}
      />
    </ProductWrapper>
  );
}; 