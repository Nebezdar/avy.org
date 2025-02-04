import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { 
  ProfileContainer,
  ProfileSection,
  DownloadHistory,
  HistoryItem 
} from './styles';

const Profile = () => {
  const { user, updateProfile } = useAuth();
  const { showNotification } = useNotification();
  const [downloads, setDownloads] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDownloadHistory = async () => {
      try {
        const response = await api.getDownloadHistory();
        setDownloads(response.data);
      } catch (error) {
        showNotification('Failed to load download history', 'error');
      } finally {
        setIsLoading(false);
      }
    };

    fetchDownloadHistory();
  }, []);

  return (
    <ProfileContainer>
      <ProfileSection>
        <h2>Profile Information</h2>
        <div className="info-group">
          <label>Email</label>
          <p>{user.email}</p>
        </div>
        {user.company && (
          <div className="info-group">
            <label>Company</label>
            <p>{user.company}</p>
          </div>
        )}
      </ProfileSection>

      <ProfileSection>
        <h2>Download History</h2>
        {isLoading ? (
          <p>Loading history...</p>
        ) : (
          <DownloadHistory>
            {downloads.map((download) => (
              <HistoryItem key={download.id}>
                <div className="download-info">
                  <h4>{download.productName}</h4>
                  <p>Format: {download.format}</p>
                </div>
                <div className="download-date">
                  {new Date(download.downloadDate).toLocaleDateString()}
                </div>
              </HistoryItem>
            ))}
          </DownloadHistory>
        )}
      </ProfileSection>
    </ProfileContainer>
  );
}; 