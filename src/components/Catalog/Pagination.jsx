import { PaginationWrapper, PageButton } from './styles';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 2 && i <= currentPage + 2)
      ) {
        pages.push(i);
      } else if (i === currentPage - 3 || i === currentPage + 3) {
        pages.push('...');
      }
    }
    return pages;
  };

  return (
    <PaginationWrapper>
      <PageButton 
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </PageButton>

      {getPageNumbers().map((page, index) => (
        <PageButton
          key={index}
          isActive={page === currentPage}
          onClick={() => typeof page === 'number' && onPageChange(page)}
          disabled={typeof page !== 'number'}
        >
          {page}
        </PageButton>
      ))}

      <PageButton
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </PageButton>
    </PaginationWrapper>
  );
}; 