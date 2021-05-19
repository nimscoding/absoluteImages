import "./App.css";

export default function App() {
  return (
    <section className="chooseContainer">
      <div className="chooseWrap">
        <div className="contentWrap">
          <div className="beforeTitle">no code needed </div>
          <div className="title">Start with a template</div>
          <div className="text">
            Each design comes with a selection of premade layouts and content
            blocks to help you build a professional website, fast. Customize
            fonts, colors and the structure of your pages. Enjoy maximum control
            over your desktop and mobile site.
          </div>
          <div className="sliderWrap">
            <a className="aStyle" href="www.youtube.com">
              <div
                className="divStyle"
                style={{ backgroundImage: `url(/images/JuneTheme.jpg)` }}
              ></div>
              <div className="desc1">
                mono/
                <span> Minimal &amp; Versatile </span>
              </div>
            </a>
            <a className="aStyle" href="www.youtube.com">
              <div
                className="divStyle"
                style={{ backgroundImage: `url(/images/MonoTheme.jpg)` }}
              ></div>
              <div className="desc1">
                June/
                <span> Bossy, Fun &amp; Stylish</span>
              </div>
            </a>
            <a className="aStyle" href="www.youtube.com">
              <div
                className="divStyle"
                style={{ backgroundImage: `url(/images/VelvetTheme.jpg)` }}
              ></div>
              <div className="desc1">
                Velvet/
                <span> Minimal &amp; Versatile </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
