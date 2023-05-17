import logo1 from '../img/logo1.png';
const ANAKIN_IMAGE = "https://preview.redd.it/z634jy02kpe61.png?width=640&crop=smart&auto=webp&v=enabled&s=53be943ac640705a6ec7ec810337c0b5d757e705";



function Header (){
    return(
      <div className="header">
        <img className="anakin" src = {ANAKIN_IMAGE}/>
         <p className="name">Anakin Skywalker</p>
         <img className="check" src = {logo1}/>
         <p className="nickname">@dart_vader</p>
         <p className="date">26 февр.</p>
      </div>
    );
  }
  export default Header;