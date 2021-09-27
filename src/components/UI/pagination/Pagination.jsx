import React from 'react';
import { usePages } from "../../../hooks/usePages"

function Pagination({ totalPages, page, changePage }) {
  const pagesArray = usePages(totalPages);

  return (
    <div className="pagination">
      {pagesArray.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={
            page === p
              ? "pagination__page pagination__page--current"
              : "pagination__page"
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
}

export default Pagination;