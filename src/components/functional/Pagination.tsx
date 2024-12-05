type PaginationProps = {
  totalProducts: number;
  productsPerPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
};

const Pagination = ({
  totalProducts,
  productsPerPage,
  setCurrentPage,
  currentPage,
}: PaginationProps) => {
  const pages = [];
  for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
    pages.push(i);
  }
  return (
    <>
      <div className="w-full flex justify-end px-4">
        <div className="flex gap-1">
          {pages.map((page, index) => {
            return (
              <div key={index}>
                <button
                  className={`${
                    page === currentPage
                      ? "bg-accent text-white"
                      : " bg-gray-100 text-gray-400"
                  } h-6 w-6 rounded-full text-md `}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pagination;
