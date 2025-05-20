import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PersonalInformation from './pages/PersonalInformation';
import CustomerList from './pages/CustomerList';
import TransactionDetail from './pages/TransactionDetail';
import CustomerDetails from './pages/CustomerDetails';
import NotificationSettings from './pages/NotificationSettings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PersonalInformation />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
        <Route path="/customer-list" element={<CustomerList />} /> 
        <Route path="/customer/:id" element={<CustomerDetails />} />
        <Route path="/transaction-detail" element={<TransactionDetail />} />
        <Route path="/notification-settings" element={<NotificationSettings />} />
      </Routes>
    </Router>
  );
}

export default App;
