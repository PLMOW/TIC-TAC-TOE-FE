import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Room from './pages/room';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/room" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
