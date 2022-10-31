import React from "react";
import "./Card.sass";
import $ from "jquery";

var button1 = false;
var button2 = false;
var button3 = false;

class Cardos extends React.Component {
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
        <div className="when">WHEN TO COME?</div>
        <div className="container1">
          <span className="button1">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>when??</h1>
            </div>
            <div className="body">
              <p>
                <b>YOU MUST</b> come on <br />
                <em>SATURDAY MM/DD at 10 pm</em>
                <br />
                Party ends at 6 am
                <br />
                <label>(doors will be closed till that hour!)</label>
              </p>
            </div>
          </div>
        </div>
        <div className="where">WHERE TO GO?</div>
        <div className="container2">
          <span className="button2">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>where?</h1>
            </div>
            <div className="body">
              <p>
                <em>This PLACE</em>
                <br />
                This Adress 9999
              </p>
            </div>
          </div>
        </div>
        <div className="coming">
          <span Style={"text-decoration:line-through"}>RSVP</span>
          &nbsp;COMING OR WHAT?
        </div>

        <div className="container3">
          <span className="button3">&#10006;</span>
          <div className="content">
            <div className="head">
              <h1>YES or NO?</h1>
            </div>
            <div className="body">
              <p>
                Please WhatsApp me <em>YES</em> or <em>NO</em> trough this link:
              </p>
              <div className="actionBar">
                <a href="https://web.whatsapp.com/">whatsapp</a>
                <br />
                <label>
                  No answer = NO entry <br />
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cardos;
