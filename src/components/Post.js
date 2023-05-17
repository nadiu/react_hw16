const RAY_IMAGE = "https://specials-images.forbesimg.com/imageserve/5e63b3c8e1e617000759130e/960x0.jpg?fit=scale";
function Post (){
    return(
      <div className="post">
       <div className="text">WTF? Who is Ray? Why she is Skywalker? Luke...?"</div>
        <img className="ray" src={RAY_IMAGE} alt="Ray Skywalker"/>
      </div>
    );
  }
  export default Post;