// components/Page.js
import React, { useState } from 'react';
import Card from './Card';
import Pagination from './Pagination';

const Page = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  return (
    <div className="page">
      <div className="card-container">
        {currentData.map((item, index) => (
          <Card key={index} title={item.title} />
        ))}
      </div>
      <Pagination
        pageCount={Math.ceil(data.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Page;
