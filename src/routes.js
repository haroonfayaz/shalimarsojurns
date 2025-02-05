import PackagePage from './pages/PackagePage';
import LocationsPage from './pages/LocationsPage';
import RegisterPage from './pages/RegisterPage';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Navigate } from 'react-router-dom';

const routes = [
  { path: '/', exact: true, element: <HomePage/> },
  { path: '/about', element: <AboutPage/> },
  { path: '/contact', element: <ContactPage/> },
  { path: '/register', element: <RegisterPage/> },
  { path: '/packages', element: <PackagePage/> },
  { path: '/locations', element: <LocationsPage/> },
  { path: '*', element: <Navigate to="/" /> },

];

export default routes;
