import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes/routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';

export const CategoryContext = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://eduaid-server-side.vercel.app/categories")
      .then(response => response.json())
      .then(categories => {
        setLoading(false)
        return setCategories(categories)
      });
  }, []);
  if (loading) {
    return <div className='d-flex justify-content-center align-items-center min-vh-100'>
      <button className='explore-course-btn'>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading</button>

    </div>
  }
  return (
    <CategoryContext.Provider value={categories}>
      <div className="App">
        <RouterProvider router={router}></RouterProvider>
        <Toaster />
      </div>
    </CategoryContext.Provider>
  );
}

export default App;
