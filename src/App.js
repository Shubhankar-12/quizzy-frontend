import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import SignIn from './components/Auth/signin/Signin';
import SignUp from './components/Auth/signup/Signup';
import Dashboard from './components/dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import ProfilePage from './components/profile/ProfilePage';
import UpdateForm from './components/profile/updateForm/UpdateForm';
import { useSelector } from 'react-redux';
import Quiz from './components/quizPage/Quiz';
import AdminLogin from './components/Auth/adminLogin/AdminLogin';

function App() {

  const isModalOpen = useSelector((state) => state.modal.isModalOpen);
  return (
    <div className="App">
      <ToastContainer />
      {isModalOpen && <UpdateForm />}
      <Router>
        <Routes>
          <Route path='/' element={<Navbar />} >

            <Route index element={<Home />} />
            <Route path='/login' element={<SignIn />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='' element={<PrivateRoute />}>
              <Route path='/dashboard' element={<Dashboard />} />
            </Route>
            <Route path='' element={<PrivateRoute />}>
              <Route path='/profile' element={<ProfilePage />} />
            </Route>
            <Route path='' element={<PrivateRoute />}>
              <Route path='quiz/*' element={<Quiz />} />
            </Route>
          </Route>
        </Routes>
      </Router>
      <Footer />
    </div >
  );
}

export default App;
