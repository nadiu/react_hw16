import Header from './components/Header';
import Post from './components/Post';
import Footer from './components/Footer';
import './styles/App.css';




function App (){
  return(
    <div className = "container">
      <Header/>
      <Post/>
      <Footer/>
    </div>
  );
}
export default App;