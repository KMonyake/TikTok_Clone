import { useState,useRef } from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./App.css";


function Video({userName,tags,songName,src}){
    const videoRef = useRef(null);
    const [newVideo,setNewVideo] = useState(null);
    const [hasChanged,setHasChanged] = useState(false);

    function onVideoPress(){
        const currentVideo = videoRef.current;
        if(currentVideo.paused) currentVideo.play();
        else currentVideo.pause();
    }

    function handleNewVideo(currentVideo){
        setNewVideo(currentVideo);
        
            if(newVideo === currentVideo){
                setHasChanged(false);
            }
            else setHasChanged(true);
        console.log(hasChanged);
    }

    return  <div className="video-card">
                <Sidebar/>
                
                <video 
                    src={src} 
                    className="video" 
                    loop
                    ref={videoRef}
                    onPlay={()=>handleNewVideo(src)}
                    onClick={onVideoPress}>
                </video>

                <Footer 
                    userName={userName}
                    tags={tags}
                    songName={songName}>
                </Footer>
            </div>
}

export default Video;

