import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes/routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import Loading from './Components/Shared/Loading/Loading';

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
    return <Loading></Loading>
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
