import Video from "./Video";
import data from "./data";
import "./fontawesome-free-5.12.1-web/css/all.css";
import "./App.css";


function App(){
  return  <main>
            <div className="videos-container">
              {
                data.map(video=>{
                  return <Video{...video}/>
                })
              }
            </div>
          </main>
}

export default App;
