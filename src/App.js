import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="Header" style={{}}>
        <div className="menu">
          <img
            src="/assets/menu.png "
            height={40}
            style={{ marginRight: "20px" }}
          />
        </div>
        <div className="youtube">
          <img src="/assets/youtubelogo.png" alt="icon" height={60} />
        </div>
        <input
          className="search"
          placeholder="search"
          style={{
            paddingLeft: "10px",
            fontSize: "20px",
            marginLeft: "100px",
          }}
        />
        <div className="mic">
          <img
            src="/assets/mic.png"
            height={40}
            style={{
              borderRadius: "50px",
              marginLeft: "10px",
            }}
          />
        </div>
        <div className="video">
          <img
            src="/assets/video .png"
            height={40}
            alt="dafasd"
            style={{ boderRadius: "50px", marginLeft: "80px" }}
          />
        </div>
        <div className="bellicon">
          <img
            src="/assets/bellicon.png"
            height={40}
            style={{ boderRadius: "50px", marginLeft: "10px" }}
          />
        </div>
        <div className="profile">
          <img
            src="/assets/profile.png"
            height={40}
            style={{ boderRadius: "50px", marginLeft: "10px" }}
          />
        </div>
      </div>

      <div className="Bottom">
        <div
          className="template"
          style={{
            width: "70px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          all
        </div>
        <div
          className="template2"
          style={{
            width: "90px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          music
        </div>
        <div
          className="template3"
          style={{
            width: "90px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          movie
        </div>
        <div
          className="template4"
          style={{
            width: "70px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          mix
        </div>
        <div
          className="template5"
          style={{
            width: "120px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          t-series
        </div>
        <div
          className="template6"
          style={{
            width: "90px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          trailer
        </div>
        <div
          className="template7"
          style={{
            width: "90px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          salman
        </div>
        <div
          className="template7"
          style={{
            width: "60px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          idea
        </div>
        <div
          className="template7"
          style={{
            width: "60px",
            height: "40px",
            backgroundColor: "#313438",
            display: "flex",
            alignItems: "center",
            marginLeft: "20px",
            fontSize: "20px",
            justifyContent: "center",
            borderRadius: "12px",
            color: "white",
          }}
        >
          hii
        </div>
        <div className="more">
          <img
            src="assets/more.png"
            style={{ height: "30px", marginLeft: "30px" }}
          />
        </div>
      </div>
      {/* footer */}
      <div className="Footer">
        <div className="image1">
          <img
            src="assets/poster1.png"
            style={{
              marginTop: "40px",
              borderRadius: "30px",
              height: "250px",
              width: "400px",
              marginRight: "15px",
              marginLeft: "20px",
            }}
          />
          <div class className="image4">
            <img
              src="assets/&tv.png"
              style={{
                height: "40px",
                borderRadius: "100px",
                marginLeft: "20px",
              }}
            />
            <div className="paragraph">
              Bhabi Ji Ghar Par Hai - Episode 716 - Indian Hilarious Comedy
              Serial - Angoori bhabi - And TV
            </div>
          </div>
        </div>

        <div className="image3">
          <img
            src="assets/poster3.png"
            style={{
              marginTop: "40px",
              borderRadius: "30px",
              height: "250px",
              width: "400px",
              marginRight: "20px",
            }}
          />
        </div>
      </div>
      <div className="nextfooter"></div>
    </div>
  );
}

export default App;
