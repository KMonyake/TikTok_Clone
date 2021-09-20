import { useState } from "react";


function Sidebar() {
    const [heartState,setHeartState] = useState("far fa-heart");

    const [isLiked,setIsLiked] = useState(false);
    const [hasCommented,setHasCommented] = useState(false);
    const [isShared,setIsShared] = useState(false);

    const [likeCount,setLikeCount] = useState(5000);
    const [commentCount,setCommentCount] = useState(200);
    const [shareCount,setShareCount] = useState(800);

    return  <aside>
                <Icon 
                    iconClass={heartState} 
                    state={{setHeartState,isLiked,setIsLiked,likeCount,setLikeCount}}
                />
                <Icon 
                    iconClass="fas fa-comment-dots" 
                    state={{hasCommented,setHasCommented,commentCount,setCommentCount}}
                />
                <Icon 
                    iconClass="fas fa-share" 
                    state={{isShared,setIsShared,shareCount,setShareCount}}
                />
            </aside>   
}

function Icon({iconClass,state}){
    const{setHeartState,isLiked,setIsLiked,likeCount,setLikeCount} = state;
    const{hasCommented,setHasCommented,commentCount,setCommentCount} = state;
    const{isShared,setIsShared,shareCount,setShareCount} = state;
    
    function handleClick(iconClass){
        if(iconClass === "far fa-heart" || iconClass === "fas fa-heart"){
            likeFunc(setHeartState,isLiked,setIsLiked,likeCount,setLikeCount);
        } 
        if(iconClass === "fas fa-comment-dots") commentFunc(hasCommented,setHasCommented,commentCount,setCommentCount);
        if(iconClass === "fas fa-share") shareFunc(isShared,setIsShared,shareCount,setShareCount);
    }

    return  <div className="icon">
                <a href="#"><i className={iconClass} onClick={()=>handleClick(iconClass)}></i></a>
                <p>{likeCount || commentCount || shareCount}</p>
            </div>
}


export default Sidebar;


//===============================
//          functions
//===============================

function likeFunc(setHeartState,isLiked,setIsLiked,likeCount,setLikeCount){
    if(!isLiked){
        setHeartState("fas fa-heart");
        setLikeCount(likeCount + 1);
        setIsLiked(true);
    }
    else{
        setHeartState("far fa-heart");
        setLikeCount(likeCount - 1);
        setIsLiked(false);
    }
}

function commentFunc(hasCommented,setHasCommented,commentCount,setCommentCount){
    if(!hasCommented){
        setCommentCount(commentCount + 1);
        setHasCommented(true);
    }
    else{
        setCommentCount(commentCount - 1);
        setHasCommented(false);
    }
}

function shareFunc(isShared,setIsShared,shareCount,setShareCount){
    if(!isShared){
        setShareCount(shareCount + 1);
        setIsShared(true);
    }
    else{
        setShareCount(shareCount - 1);
        setIsShared(false);
    }
}
