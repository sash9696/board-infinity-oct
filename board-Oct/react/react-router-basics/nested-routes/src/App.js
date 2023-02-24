import './App.css';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
// import User from './components/User/User';

//user page
//profile page
//account page

//  /user
//  /user/profile
//  /user/account

function User() {
  return (
    <div>
      <h1>User Page</h1>


      <nav style={{
        margin: "20px 0",
        display: 'flex',
        justifyContent: 'space-around',
        width: 200
      }} >
        <Link to='/user/profile'>Profile</Link>
        <Link to='/user/account'>Account</Link>
      </nav>
      <Outlet />
    </div>

  )
}

const Profile = () => {
  return (
    <>
      <h3>Profile</h3>
    </>
  )
}

function App() {
  return (
    // <BrowserRouter>
    //   <div className="app">
    //     <h1>React Router</h1>

    //     <nav style={{
    //       margin: "20px 0",
    //       display: 'flex',
    //       justifyContent: 'space-around',
    //       width: 100
    //     }} >
    //       <Link to='/'>Home</Link>
    //       <Link to='user'>User</Link>
    //     </nav>

    //     <Routes>
    //       <Route index element={<h3>Home page</h3>} />
    //       <Route path='/' element={<h3>Home page</h3>} />

    //       <Route path='user' element={<User />} />
    //       {/* <Route index element={<h4>Profile page</h4>} /> */}
    //       <Route path='/user/profile' element={<h4>Profile page</h4>} />
    //       <Route path='/user/account' element={<h4>Account page</h4>} />
    //       <Route path='*' element={<h1>Request URL not found</h1>} />
    //     </Routes>
    //   </div>
    // </BrowserRouter>

    <BrowserRouter>
      <div className="app">
        <h1>React Router</h1>

        <nav style={{
          margin: "20px 0",
          display: 'flex',
          justifyContent: 'space-around',
          width: 100
        }} >
          <Link to='/'>Home</Link>
          <Link to='user'>User</Link>
        </nav>

        <Routes>
          <Route index element={<h3>Home page</h3>} />
          <Route path='home' element={<h3>Home page</h3>} />

          <Route path='user' element={<User />} >
            <Route index element={<Profile />} />
            <Route path='profile' element={<Profile />} />
            <Route path='account' element={<h4>Account page</h4>} />
          </Route>
          <Route path='*' element={<h1>Request URL not found</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
