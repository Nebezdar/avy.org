export const downloadFile = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Download failed');

    const blob = await response.blob();
    const downloadUrl = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = downloadUrl;
    
    // Извлекаем имя файла из URL
    const fileName = url.split('/').pop();
    link.setAttribute('download', fileName);
    
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.URL.revokeObjectURL(downloadUrl);
  } catch (error) {
    throw new Error('Failed to download file');
  }
}; 