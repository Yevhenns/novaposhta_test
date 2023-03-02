import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Home } from './pages/Home/Home';
import { Departments } from './pages/Departments/Departments';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/parcels" element={<Departments />} />
      </Route>
    </Routes>
  );
}

export default App;
