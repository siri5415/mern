import logo from './logo.svg';
import './App.css';
import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import SummaryApi from './common';
import Context from './context';
import {useDispatch} from 'react-redux'
import { setUserDetails } from './store/userSlice';

function App() {
       const dispatch  = useDispatch()

  const fetchUserDetails = async()=>{
     try {
      const dataResponse = await fetch(SummaryApi.current_user.url,{
        method : SummaryApi.current_user.method,
        credentials : 'include'
       });

       if (!dataResponse.ok) {
        throw new Error(`HTTP error! status: ${dataResponse.status}`);
      }

       const dataApi = await dataResponse.json()

       if(dataApi.success){
           dispatch(setUserDetails(dataApi.data))
       }
  } catch (error) {
    // console.error("Failed to fetch user details:", error);
}
  }


  useEffect(()=>{
        /**user Details */
        fetchUserDetails()

  },[])
  return (
    <>
       <Context.Provider value={{
             fetchUserDetails // user detail fetch
       }}>
       <ToastContainer/>
       <Header/>
       <main className='min-h-[calc(100vh-120px)]'>
          <Outlet/>
       </main>
       <Footer/>
       </Context.Provider>
    </>
  );
}

export default App;
