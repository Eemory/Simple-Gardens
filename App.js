import React, {useState, useEffect} from 'react';
//firebase hooks
import { onSnapshot, collection } from 'firebase/firestore';
import db from './firebase';
//routing
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { AuthProvider } from './login/AuthContext';
//css amd bootstrap imports
import './App.css';
//component imports
import LoginPage from './login/LoginPage';
import Home from './layout/home/Home';
import CreatePlantPage from './layout/create-plant-page/CreatePlantPage';
import NotFound from './layout/errors/Errors';
import SignUp from './login/SignUp';
import PrivateRoute from './layout/PrivateRoute';
import ForgotPassword from './login/ForgotPassword';
import UserProfile from './layout/user-profile/UserProfile';
import PlantPage from './layout/plant-page/PlantPage';
import UpdateProfile from './layout/user-profile/UpdateProfile';

function App() {
 
  const [pages, setPages] = useState([]);

  //fetch's data from firestore
    useEffect(
        () => 
            onSnapshot(collection(db, 'pages'), (snapshot) => 
            setPages(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id, }) ))
            ), []
    );
  
  return (
<>
  <Router>
  <AuthProvider>
    <Switch>
      <PrivateRoute exact path = '/'>
          <Home pages={pages}/>
      </PrivateRoute>
      <PrivateRoute path ='/addplant'>
        <CreatePlantPage pages={pages}/>
      </PrivateRoute>
      <PrivateRoute path='/profile' component={UserProfile} />
      <PrivateRoute path='/update-profile' component={UpdateProfile} />
      <PrivateRoute path="/pages/:pageId">
        <PlantPage pages={pages}/>
      </PrivateRoute>
      <Route path ='/login' component={LoginPage} /> 
      <Route path ='/signup' component={SignUp} />
      <Route to='/forgot-password' component={ForgotPassword} />
      <Route component={NotFound} />
    </Switch>
  </AuthProvider>
  </Router>
</>
  );
}

export default App;