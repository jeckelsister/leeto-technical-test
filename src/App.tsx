import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import GiftCards from './pages/GiftCards';
import GiftCardDetail from './pages/GiftCardDetail';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<GiftCards />} />
                <Route path="/gift-cards/:id" element={<GiftCardDetail />} />
            </Routes>
        </Router>
    );
}

export default App;
