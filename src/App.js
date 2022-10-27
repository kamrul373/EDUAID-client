import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes/routes';
import { Toaster } from 'react-hot-toast';
import { createContext, useEffect, useState } from 'react';

export const CategoryContext = createContext();

function App() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch("https://eduaid-server-side.vercel.app/categories")
      .then(response => response.json())
      .then(categories => setCategories(categories));
  }, []);
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
