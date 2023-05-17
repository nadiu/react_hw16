import comments_logo from '../img/comments_logo.png';
import arrows_logo from '../img/arrows_logo.png';
import heart_logo from '../img/heart_logo.png';
import download_logo from '../img/download_logo.png';

function Footer (){
    return(
        <div className="footer">
        <img className="msg" src={comments_logo} alt="comments_logo"/>
        <p className="score">482</p>
        <img className="arrow" src={arrows_logo} alt="arrows_logo"/>
        <p className="score">146</p>
        <img className="like" src={heart_logo} alt="like_logo"/>
        <p className="score">887</p>
        <img className="load" src={download_logo} alt="load_logo"/>
        </div>
    );
  }
  export default Footer;