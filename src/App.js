import './App.css';
import "./Style.css"
import A from "./imageInSrc.jpg"
import Video from "./myVideo.mp4"

function App() {
  return (
    <div className="App">
        <div style= {{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 class="title red">Your name here</h1>
        <br/>
<img src={A}/>
<br/>
<img src="./imageInPublic.jpg"/>
        </div>
        <video style={{width:"320px",height:"240px"}}  controls>
 <source src={Video} type="video/mp4" />
</video>
    </div>
  );
}

export default App;
