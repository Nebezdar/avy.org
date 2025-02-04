export const modelUtils = {
  // Проверка поддержки WebGL
  checkWebGLSupport() {
    try {
      const canvas = document.createElement('canvas');
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      );
    } catch (e) {
      return false;
    }
  },

  // Оптимизация настроек просмотра в зависимости от устройства
  getViewerSettings(isMobile) {
    return {
      'camera-controls': true,
      'auto-rotate': !isMobile,
      'rotation-per-second': isMobile ? '30deg' : '60deg',
      'interaction-prompt': isMobile ? 'when-focused' : 'auto',
      'camera-orbit': isMobile ? '0deg 75deg 105%' : '0deg 75deg 105%',
      'max-camera-orbit': '180deg 180deg 105%',
      'min-camera-orbit': '-180deg 0deg 105%',
      'camera-target': '0m 0m 0m',
      exposure: '1',
    };
  },

  // Преобразование настроек в строку атрибутов
  getViewerAttributes(settings) {
    return Object.entries(settings)
      .map(([key, value]) => `${key}="${value}"`)
      .join(' ');
  }
}; 