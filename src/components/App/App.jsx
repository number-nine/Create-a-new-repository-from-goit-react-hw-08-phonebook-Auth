import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Notify } from 'notiflix';

import SharedLayout from 'components/SharedLayout';
import Phonebook from 'pages/Phonebook';
import Dashboard from 'pages/Dashboard';
import { authApi } from 'redux/authOperations';
// import * as contactsAPI from 'redux/contactOperations';
import { selectAuth, selectIsLoading, selectError } from 'redux/selectors';
import SplashScreen from 'components/SplashScreen';
import Login from 'pages/Login';
import SignUp from 'pages/SignUp';
import { RestrictedRoute } from 'components/RestrictedRoute'
import { PrivateRoute } from 'components/PrivateRoute';


export default function App() {
  const dispatch = useDispatch();

  const { isLoggedIn } = useSelector(selectAuth);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(authApi.refresh());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route
            index
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<Login />} />
            }
          />
          <Route
            path="signup"
            element={
              <RestrictedRoute redirectTo="/phonebook" component={<SignUp />} />
            }
          />
          <Route path="phonebook" element={<PrivateRoute redirectTo="/" component={<Phonebook />}/>} />

          <Route
            path="dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />}
          />
        </Route>
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
      {/* {isLoading && <SplashScreen />} */}
      {error && Notify.info(error)}
    </>
  );
}
