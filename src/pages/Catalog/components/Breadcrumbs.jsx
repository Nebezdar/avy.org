const Breadcrumbs = ({ items, onBreadcrumbClick }) => {
  return (
    <nav>
      {items.map((item, index) => (
        <span key={index}>
          <a onClick={() => onBreadcrumbClick(item, index)}>
            {item.name}
          </a>
          {index < items.length - 1 && ' > '}
        </span>
      ))}
    </nav>
  );
}; 