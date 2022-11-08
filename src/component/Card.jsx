import React from "react";
import "./Card.sass";
import $ from "jquery";
import logo from "../assets/images/whatsapp_logo.png";
import ReactWhatsapp from "react-whatsapp";
// import { FloatingWhatsApp } from "react-floating-whatsapp-button";
// import "react-floating-whatsapp-button/dist/index.css";
// import { render } from "react-dom";

var button1 = false;
var button2 = false;
var button3 = false;

class Card extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.handleClick();
  }

  handleClick() {
    $(".button1").on("click", function () {
      button1 = !button1;
      $(this).parent().toggleClass("expand");
      if (button2) {
        $(".button2").parent().toggleClass("expand");
        button2 = false;
      }
      if (button3) {
        $(".button3").parent().toggleClass("expand");
        button3 = false;
      }
    });
    $(".button2").on("click", function () {
      $(this).parent().toggleClass("expand");
      button2 = !button2;
      if (button1) {
        $(".button1").parent().toggleClass("expand");
        button1 = false;
      }
      if (button3) {
        $(".button3").parent().toggleClass("expand");
        button3 = false;
      }
    });
    $(".button3").on("click", function () {
      $(this).parent().toggleClass("expand");
      button3 = !button3;
      if (button1) {
        $(".button1").parent().toggleClass("expand");
        button1 = false;
      }
      if (button2) {
        $(".button2").parent().toggleClass("expand");
        button2 = false;
      }
    });
  }

  render() {
    return (
      <div className="container0">
        <div className="fade-in-title">
          <h4 className="title">
            My
            <br />
            Party
          </h4>
        </div>
        <div className="when">WHEN TO COME?</div>
        <div className="container1">
          <span className="button1">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>When will be?</h1>
            </div>
            <div className="body">
              <p>
                <b>YOU MUST</b> come <br />
                <em>SATURDAY 12/17 at 10 pm</em>
                <br />
                Party ends at 6 am
                <br />
                <label> 🚨Doors will be closed till that hour!😉</label>
              </p>
            </div>
          </div>
        </div>
        <div className="where">WHERE WILL BE?</div>
        <div className="container2">
          <span className="button2">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>And the place is...</h1>
            </div>
            <div className="body">
              <p>
                <em> 230 Fifth Ave MANHATTAN</em>
                <br />
                ➔ Copy the orange text
                <br />➔ Paste it in Google Maps...and voilà!
              </p>
              <label>You already know how to get there! 💪</label>
            </div>
          </div>
        </div>
        <div className="coming">
          <span style={{ textDecoration: "line-through" }}>
            &nbsp;RSVP&nbsp;
          </span>
          &nbsp;COMING OR NOT?
        </div>

        <div className="container3">
          <span className="button3">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>Confirm your presence...</h1>
            </div>
            <div className="body">
              <p>
                Please whatsapp me <em>YES</em> or <em>NO</em>:
              </p>
              <div className="actionBar">
                <div>
                  ➔ with your cellphone:&nbsp;
                  <ReactWhatsapp
                    number="+5492234484060"
                    message="YES, I'll be there!"
                  />
                </div>
                <div className="waWithLogo">
                  ➔ with WhatsApp Web:&nbsp;
                  <a
                    href="https://web.whatsapp.com/send?phone=+5492234484060&text=YES,%20I'll%20be%20there!&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logo} alt="WhatsApp logo" />
                  </a>
                </div>
                {/*<img
                  src={logo}
                  alt="WhatsApp logo"
                  onClick={render(
                    <ReactWhatsapp
                      number="+5492234484060"
                      message="Hello World!!!"
                    />,
                    document.getElementById("actionBar")
                  )}
                />
                <br />*/}
                <label>
                  🚨Important: No answer means NO entry <br />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
