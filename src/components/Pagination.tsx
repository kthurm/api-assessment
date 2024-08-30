interface PaginationProps {
  nPages: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  nPages,
  currentPage,
  setCurrentPage,
}) => {
  const pageNumbers = [...Array(nPages).keys()].map((num) => num + 1);

  const goToNextPage = () => {
    if (currentPage < nPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav>
      <ul className="lg:-ml-3 flex justify-around my-6">
        <li className="px-2">
          <a
            className="hover:text-secondary text-dark font-bold"
            onClick={goToPrevPage}
            href="#"
          >
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={`page-item ${currentPage === pgNumber ? "active" : ""}`}
          >
            <a
              onClick={() => setCurrentPage(pgNumber)}
              className="px-3"
              href="#"
            >
              {pgNumber}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            className="hover:text-secondary text-dark font-bold"
            onClick={goToNextPage}
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
