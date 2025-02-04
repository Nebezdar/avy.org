import { useDownloadLimit } from '../../hooks/useDownloadLimit';
import { CounterWrapper } from './styles';

const DownloadCounter = () => {
  const { getRemainingDownloads } = useDownloadLimit();
  const remaining = getRemainingDownloads();

  if (remaining === Infinity) return null;

  return (
    <CounterWrapper>
      <span>Downloads remaining today: {remaining}</span>
    </CounterWrapper>
  );
}; 