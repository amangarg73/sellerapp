import React from 'react';
import { useState } from 'react';
const Pagination = ({ currentPage, paginate, next, prev }) => {
  const pageNumbers = [];

  for (let i = 1; i <= 10; i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className='Pagination'>
        <div>
            <p>Current Page: {currentPage}</p>
        </div>
      <ul className='pagination'>
      <li><a onClick={() => currentPage>1 && prev()}><i className="fa-solid fa-chevron-right fa-rotate-180"></i></a></li>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href={currentPage} className='page-link'>
              {number}
            </a>
          </li>
        ))}
        <li><a onClick={() => currentPage<10 && next()}><i className="fa-solid fa-chevron-right"></i></a></li>
      </ul>
    </nav>
  );
};

export default Pagination;