import logo from './logo.svg';
import './App.css';
import Header from './component/organisms/header'
// import Login from './component/pages/Login'
 import AppRouter from "./AppRouter"
import List from "./component/pages/list"

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Login/> */}
                  <List/>

      <AppRouter />

    </div>
  );
}

export default App;
