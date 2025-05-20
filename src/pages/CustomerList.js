import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layouts from '../components/layouts';
import '../pages/css/styles.css';
import '../pages/css/customerlist.css';

function CustomerList() {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const itemsPerPage = 10;

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  // Fetch data when debounced search or page changes
  useEffect(() => {
    fetchCustomers();
  }, [debouncedSearch, currentPage]);

  const fetchCustomers = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get('https://4f19-160-238-92-78.ngrok-free.app/api/customers', {
        params: {
          page: currentPage,
          limit: itemsPerPage,
          search: debouncedSearch
        }
      });
      console.log("DDDDDDD",data);
      setCustomers(data.data);
      setTotalCustomers(data.pagination.totalCustomers);
      setTotalPages(Math.ceil(data.pagination.totalCustomers / itemsPerPage));
    } catch (error) {
      console.error('Error fetching customers:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const renderPageButton = (pageNum) => (
    <button
      key={pageNum}
      className={currentPage === pageNum ? 'active' : ''}
      onClick={() => handlePageChange(pageNum)}
    >
      {pageNum}
    </button>
  );

  const renderVisiblePages = (startPage, endPage) => {
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(renderPageButton(i));
    }
    return pages;
  };

  const renderPagination = () => {
    const maxVisiblePages = 5;
    const pages = [];

    if (totalPages <= maxVisiblePages) {
      return renderVisiblePages(1, totalPages);
    }

    // Always show first page
    pages.push(renderPageButton(1));

    // Calculate visible pages range
    const startPage = Math.max(2, currentPage - 1);
    const endPage = Math.min(totalPages - 1, currentPage + 1);

    // Add ellipsis and middle pages
    if (startPage > 2) {
      pages.push(<span key="ellipsis1" className="ellipsis">...</span>);
    }
    pages.push(...renderVisiblePages(startPage, endPage));
    if (endPage < totalPages - 1) {
      pages.push(<span key="ellipsis2" className="ellipsis">...</span>);
    }

    // Always show last page
    pages.push(renderPageButton(totalPages));
    return pages;
  };

  const renderContent = () => {
    if (loading) {
      return (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          width: '100%'
        }}>
          <div style={{
            width: '50px',
            height: '50px',
            border: '3px solid #f3f3f3',
            borderTop: '3px solid #b91c1c',
            borderRadius: '50%',
            animation: 'spin 1s linear infinite',
            position: 'relative'
          }}>
            <style>
              {`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}
            </style>
            <div style={{
              position: 'absolute',
              top: '-3px',
              left: '-3px',
              right: '-3px',
              bottom: '-3px',
              border: '3px solid transparent',
              borderTop: '3px solid rgba(185, 28, 28, 0.3)',
              borderRadius: '50%',
              animation: 'spin 2s linear infinite'
            }}></div>
          </div>
        </div>
      );
    }

    if (customers.length === 0) {
      return (
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '200px',
          width: '100%',
          gap: '12px'
        }}>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 8V12" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 16H12.01" stroke="#9197B3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <div style={{
            fontSize: '16px',
            color: '#4B5563',
            fontWeight: '500'
          }}>
            No customers found
          </div>
          <div style={{
            fontSize: '14px',
            color: '#6B7280'
          }}>
            {search ? 'Try adjusting your search' : 'No customers in the database'}
          </div>
        </div>
      );
    }

    return (
      <>
        <table>
          <thead>
            <tr>
              <th>Customer ID</th>
              <th>First Name</th>
              <th>Account No.</th>
              <th>Type</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer._id}>
                <td>#{customer.customer_id}</td>
                <td>{customer.frist_name}</td>
                <td>{customer.account_number}</td>
                <td>{customer.account_type}</td>
                <td>
                  <div>
                    <Link to={`/customer/${customer._id}`} className="view-btn">
                      <svg className="eye-icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 3.33334C4.66667 3.33334 1.82 5.55334 0.666667 8.66668C1.82 11.78 4.66667 14 8 14C11.3333 14 14.18 11.78 15.3333 8.66668C14.18 5.55334 11.3333 3.33334 8 3.33334ZM8 11.6667C6.16 11.6667 4.66667 10.1733 4.66667 8.33334C4.66667 6.49334 6.16 5.00001 8 5.00001C9.84 5.00001 11.3333 6.49334 11.3333 8.33334C11.3333 10.1733 9.84 11.6667 8 11.6667ZM8 6.66668C7.08 6.66668 6.33333 7.41334 6.33333 8.33334C6.33333 9.25334 7.08 10 8 10C8.92 10 9.66667 9.25334 9.66667 8.33334C9.66667 7.41334 8.92 6.66668 8 6.66668Z" fill="#b91c1c"/>
                      </svg>
                      View
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="table-footer">
          <span>Showing {((currentPage - 1) * itemsPerPage) + 1}-{Math.min(currentPage * itemsPerPage, totalCustomers)} from {totalCustomers} data</span>
          <div className="pagination">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            {renderPagination()}
            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </>
    );
  };

  return (
    <Layouts title="Customer List">
      <section className="customer-content">
        <div className="heading-container">
          <h2>Customer data</h2>
          <div className="search-container">
            <input
              type="text"
              placeholder="Customer ID / Account Number"
              value={search}
              onChange={handleSearch}
            />
            <svg className="search-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M15.75 15.75L12.4875 12.4875" stroke="#9197B3" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
        <div className="table-container">
          {renderContent()}
        </div>
      </section>
    </Layouts>
  );
}

export default CustomerList;