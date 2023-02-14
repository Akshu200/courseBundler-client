import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './componenets/Home/Home';
import Header from './componenets/Layout/Header/Header';
import Courses from './componenets/Courses/Courses';
import Footer from './componenets/Layout/Footer/Footer';
import Login from './componenets/Auth/Login';
import Register from './componenets/Auth/Register';
import ForgetPassword from './componenets/Auth/ForgetPassword';
import ResetPassword from './componenets/Auth/ResetPassword';
import Contact from './componenets/Contact/Contact';
import Request from './componenets/Request/Request';
import About from './componenets/About/About';

import NotFound from './componenets/Layout/NotFound/NotFound';
import PaymentSuccess from './componenets/Payments/PaymentSuccess';
import PaymentFail from './componenets/Payments/PaymentFail';
import Subscribe from './componenets/Payments/Subscribe';
import CoursePage from './componenets/CoursePage/CoursePage';
import Profile from './componenets/Profile/Profile';
import ChangePassword from './componenets/Profile/ChangePassword';
import UpdateProfile from './componenets/Profile/UpdateProfile';
/////admin
import Dashboard from './componenets/Admin/Dashboard/Dashboard';
import CreateCourse from './componenets/Admin/CreateCourse/CreateCourse';
import AdminCourses from './componenets/Admin/AdminCourses/AdminCourses';
import Users from './componenets/Admin/Users/Users';
import { useDispatch, useSelector } from 'react-redux';
import toast, { Toaster } from 'react-hot-toast';
import { loadUser } from './redux/actions/user';
import { ProtectedRoute } from 'protected-route-react';
import Loader from '../src/componenets/Layout/Loader/Loader';

function App() {
  window.addEventListener('contextmenu', e => {
    e.preventDefault();
  });

  const { isAuthenticated, user, message, error, loading } = useSelector(
    state => state.user
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'cleanError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'cleanMessage' });
    }
  }, [dispatch, error, message]);
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header isAuthenticated={isAuthenticated} user={user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/course/:id" element={<CoursePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request" element={<Request />} />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Profile user={user} />
                </ProtectedRoute>
              }
            />
            <Route
              path="/changepassword"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <ChangePassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/updateprofile"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <UpdateProfile user={user} />
                </ProtectedRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route
              path="/register"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <Register />
                </ProtectedRoute>
              }
            />
            <Route
              path="/forgetpassword"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ForgetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/resetpassword/:token"
              element={
                <ProtectedRoute
                  isAuthenticated={!isAuthenticated}
                  redirect="/profile"
                >
                  <ResetPassword />
                </ProtectedRoute>
              }
            />
            <Route
              path="/subscribe"
              element={
                <ProtectedRoute isAuthenticated={isAuthenticated}>
                  <Subscribe />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/paymentsuccess" element={<PaymentSuccess />} />
            <Route path="/paymentfail" element={<PaymentFail />} />
            //Admin dasboard
            <Route
              path="/admin/dashboard"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Dashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/createcourse"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                >
                  <CreateCourse />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/courses"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                >
                  <AdminCourses />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute
                  isAuthenticated={isAuthenticated}
                  adminRoute={true}
                  isAdmin={user && user.role === 'admin'}
                >
                  <Users />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
          <Toaster />
        </>
      )}
    </Router>
  );
}

export default App;
