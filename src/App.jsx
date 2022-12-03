import './App.css';
////Components
import Users from './components/Users/Users';
import Posts from './components/Posts/Posts';
import {useState} from 'react';
import Header from './components/Header/Header';
import Footer from './Footer/Footer';
function App() {
  const [userId,setUserId]=useState(1);
  console.log(userId);
  return (
    <div className='app'>
      {/* <Users setUserId={setUserId} />
      <Posts userId={userId} /> */}
      <Header/>
      <Footer />
    </div>
  );
}

export default App;
