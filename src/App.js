import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/routes/routes';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
    </div>
  );
}

export default App;
