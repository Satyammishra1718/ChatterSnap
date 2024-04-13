import  { Suspense, lazy } from 'react';
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Spin from './components/CommonComponents/Spin/Spin';

const Home = lazy(() => import('./views/Home/Home'));
const Login = lazy(() => import('./views/Login/Login'));
const Register = lazy(() => import('./views/Register/Register'));
const Chat = lazy(() => import('./views/Chat/Chat'));
const GroupManagement = lazy(() => import('./views/GroupManagement/GroupManagement'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<Spin/>}>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/chat/:chatId' element={<Chat/>}/>
        <Route path='/group' element={<GroupManagement/>}/>
        <Route path="/register" element={<Register/>}/>
       </Routes>
      </Suspense>
    </Router>
  )
}

export default App;
