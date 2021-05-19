import "./App.css";
import imageLeft from "./images/imageLeft.jpg";
import imageRight from "./images/imageRight.jpg";
import imageMiddle from "./images/imageMiddle.jpg";
import title from "./images/title.png";

export default function App() {
  return (
    <div>
      <div className="sector">
        <div className="innerSector">
          <div className="mediaq">
            <div className="mainContainer">
              <div className="title">
                <img src={title} alt="" />
              </div>
              <div className="imageLeft">
                <img src={imageLeft} alt="" />
              </div>
              <div className="imageMiddle">
                <img src={imageMiddle} alt="" />
              </div>
              <div className="imageRight">
                <img src={imageRight} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div style={{ background: "lightblue", height: "100vh" }}></div>
      </section>
    </div>
  );
}

/*https://marcoabba.com/ 
https://steibweddings.com/

for badges
https://actsofadventure.com/
https://madeinvideo.es/en/

footer
https://www.yidakistudio.com/


*/
