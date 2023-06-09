import React from "react";
import sound from "../assets/Birthday.mp3";
//import birth from "../images/BirthDay.avif";
import birthback from "../images/backGif.gif";
import birthgif from "../images/BirthGif.gif";
import ReactAudioPlayer from "react-audio-player";
import click from "../images/click.gif";
import vars from "../images/varshini.jpg";

const BirthdayProfile = () => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        background: `url(${birthback})`,
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        zIndex: 1,
      }}
    >
      <h2
        style={{
          marginTop: "10px",
          border: "2px solid violet",
          padding: "10px",
          boxShadow: "2px 5px 4px black",
          color: "black",
        }}
      >
        Happy Birthday!
      </h2>
      {/* <h4>Celebrate this special day with joy and laughter.</h4> */}
      <div
        style={{
          display: "flex",
          position: "absolute",
          marginTop: "150px",
          zIndex: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          className="mobile_view"
          style={{
            display: "flex",
            justifyContent: "space-between",
            //border: "2px solid red",
            width: "100%",
          }}
        >
          <img
            src={vars}
            alt="gif"
            style={{
              width: "200px",
              //position: "fixed",
              height: "200px",
              border: "2px solid black",
              transform: "rotate(-20deg)",
              boxShadow: "5px 5px 5px brown",
            }}
          />
          <img
            src={birthgif}
            alt="gif"
            style={{
              width: "200px",
              //position: "fixed",
              height: "200px",
              border: "2px solid black",
              transform: "rotate(20deg)",
              boxShadow: "5px 5px 5px brown",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            //border: "2px solid red",
          }}
        >
          <ReactAudioPlayer
            src={sound}
            controls
            autoPlay={true}
            style={{ marginTop: "20%" }}
          />
          <img
            src={click}
            alt="gif"
            style={{
              width: "50px",
              //position: "fixed",
              height: "50px",
              transform: "rotate(20deg)",
              zIndex: 3,
            }}
          />
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h1>
            <i
              style={{
                color: "red",
                boxShadow: "2px 2px 2px 2px aqua",
                fontSize: "35px",
                borderRadius: "10px",
              }}
            >
              26
            </i>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BirthdayProfile;
