import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/router';
import './utils/i18n';

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
