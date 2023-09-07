import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './router/App.tsx'
import './index.css'
import BlogProvider from './context/BlogProvider.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BlogProvider>
      <App />
    </BlogProvider>
  </React.StrictMode>,
)
