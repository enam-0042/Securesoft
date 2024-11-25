import React from "react";
import "./Carousel.css";
const linkArr = [
  "https://apps.apple.com/ca/app/tv-remote-universal-control/id6443671916",
  "https://apps.apple.com/us/app/alpha-vpn-secure-unlimited/id1594310803",
];
export const Ourproducts = (props) => {
  return (
    <div
      id="products"
      className="text-center"
      style={{ backgroundColor: "white" }}
    >
      <div
        className="container"
        style={{ backgroundColor: "white", paddingBottom: "20px" }}
      >
        <div className="section-title">
          <h2>Our Products</h2>
          <p>We provide best software and services</p>
        </div>
        <div className="productbox">
          {/* <img
            className="productimage"
            // onClick={() => window.open(`${linkArr[slide]}`, "_blank")}

            src="./img/tv.png"
          /> */}
          <div className="productimage">
            <img
              // onClick={() => window.open(`${linkArr[slide]}`, "_blank")}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              src="./img/tvremote.png"
            />
            <img
              className="appicon"
              style={{ width: "83px", height: "83px" }}
              // onClick={() => window.open(`${linkArr[slide]}`, "_blank")}
              onClick={() => window.open(`${linkArr[0]}`, "_blank")}
              onMouseOver={(e) =>
                (e.currentTarget.src = "./img/icon hover.png")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.src = "./img/Appstore icon.png")
              }
              src="./img/Appstore icon.png"
            />
          </div>
          <div className="productimage">
            <img
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
              // onClick={() => window.open(`${linkArr[slide]}`, "_blank")}

              src="./img/vpn (1).png"
            />
            <img
              className="appicon"
              style={{ width: "83px", height: "83px" }} // onClick={() => window.open(`${linkArr[slide]}`, "_blank")}
              onClick={() => window.open(`${linkArr[1]}`, "_blank")}
              onMouseOver={(e) =>
                (e.currentTarget.src = "./img/icon hover.png")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.src = "./img/Appstore icon.png")
              }
              src="./img/Appstore icon.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
