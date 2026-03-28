import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AdminLayout, CustomerLayout } from './components/Layouts';

// Admin Screens
import AdminDashboard from './screens/AdminDashboard';
import AdminMenuManagement from './screens/AdminMenuManagement';
import AdminActiveOrders from './screens/AdminActiveOrders';

// Customer Screens
import CustomerHome from './screens/CustomerHome';
import CustomerMenu from './screens/CustomerMenu';
import CustomerBooking from './screens/CustomerBooking';
import CustomerCart from './screens/CustomerCart';
import CustomerLogin from './screens/CustomerLogin';
import CustomerSignup from './screens/CustomerSignup';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Customer Routes */}
        <Route path="/" element={<CustomerLayout><CustomerHome /></CustomerLayout>} />
        <Route path="/menu" element={<CustomerLayout><CustomerMenu /></CustomerLayout>} />
        <Route path="/booking" element={<CustomerLayout><CustomerBooking /></CustomerLayout>} />
        <Route path="/cart" element={<CustomerLayout><CustomerCart /></CustomerLayout>} />
        <Route path="/login" element={<CustomerLogin />} />
        <Route path="/signup" element={<CustomerSignup />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
        <Route path="/admin/menu" element={<AdminLayout><AdminMenuManagement /></AdminLayout>} />
        <Route path="/admin/orders" element={<AdminLayout><AdminActiveOrders /></AdminLayout>} />
        <Route path="/admin/analytics" element={<AdminLayout><AdminDashboard /></AdminLayout>} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
