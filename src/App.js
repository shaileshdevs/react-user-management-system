import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import AddUser from './components/user/AddUser';
import PageNotFound from './components/pages/PageNotFound';
import NavBar from './components/layout/NavBar.js';
import EditUser from './components/user/EditUser';
import ViewUser from './components/user/ViewUser';
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route exact path="/" element={<HomePage />} ></Route>
          <Route exact path="/about" element={<AboutPage />}></Route>
          <Route exact path="/contact" element={<ContactPage />}></Route>
          <Route exact path="/users/add" element={<AddUser />}></Route>
          <Route exact path="/users/edit/:userId" element={<EditUser />}></Route>
          <Route exact path="/users/view/:userId" element={<ViewUser />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
