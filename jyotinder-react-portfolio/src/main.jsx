import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
// Import actual page components
import HomePage from './pages/HomePage'; 
import BookshelfPage from './pages/BookshelfPage'; 
import ResumePage from './pages/ResumePage'; 
import './index.css' // Default Vite CSS
import './styles.css' // Your custom styles

// Remove placeholder component
// const Placeholder = ({ title }) => <div style={{ padding: '20px' }}><h1>{title}</h1><p>Content coming soon...</p></div>;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Use actual page components */}
          <Route index element={<HomePage />} /> 
          <Route path="bookshelf" element={<BookshelfPage />} />
          <Route path="resume" element={<ResumePage />} />
          {/* Add a catch-all route for 404 if desired */}
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
) 