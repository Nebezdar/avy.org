import { createSelector } from '@reduxjs/toolkit';

// Селекторы для каталога
export const selectCatalogState = (state) => state.catalog;

export const selectCatalogItems = createSelector(
  [selectCatalogState],
  (catalog) => catalog.items
);

export const selectCatalogBreadcrumbs = createSelector(
  [selectCatalogState],
  (catalog) => catalog.breadcrumbs
);

export const selectCatalogPagination = createSelector(
  [selectCatalogState],
  (catalog) => catalog.pagination
);

// Селекторы для скачиваний
export const selectDownloadState = (state) => state.download;

export const selectRemainingDownloads = createSelector(
  [selectDownloadState],
  (download) => download.remainingDownloads
);

export const selectIsLimitReached = createSelector(
  [selectDownloadState],
  (download) => download.limitReached
);

// Селекторы для поиска
export const selectSearchState = (state) => state.search;

export const selectSearchResults = createSelector(
  [selectSearchState],
  (search) => search.results
);

export const selectSearchHistory = createSelector(
  [selectSearchState],
  (search) => search.history
); 