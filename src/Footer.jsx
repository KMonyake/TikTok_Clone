import Ticker from "react-ticker";
import "./App.css";

function Footer({userName,tags,songName}){
    return  <footer>
                <section>
                    <h4>@{userName}</h4>
                    <p>{tags}</p>
                    <i class="fas fa-music"></i>
                    
                    <Ticker mode="smooth" className="ticker" move={true}>
                        {
                            ({index})=><p>{songName}</p>
                        }
                    </Ticker>
                </section>

                <i class="fas fa-compact-disc"></i>
            </footer>
}

export default Footer;
