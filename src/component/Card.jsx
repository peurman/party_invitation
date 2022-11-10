import React, { useState } from "react";
import "./Card.sass";
import logo from "../assets/images/whatsapp_logo.png";
import ESP from "../assets/images/ESP.png";
import ENG from "../assets/images/ENG.png";
import ReactWhatsapp from "react-whatsapp";

function Card() {
  const [button1On, setButton1On] = useState(false);
  const [button2On, setButton2On] = useState(false);
  const [button3On, setButton3On] = useState(false);
  const [spanishLang, setSpanishLang] = useState(true);

  var classNames = require("classnames");

  return (
    <div className="container0">
      <div className="fade-in-title">
        <h4 className="title">PARTY!!</h4>
      </div>
      <div className="langSelector">
        <button
          className={classNames("switch", { active: !spanishLang })}
          id="switch"
          onClick={() => setSpanishLang(!spanishLang)}
        >
          <span className="langESP">
            <img src={ESP} alt="" />
          </span>
          <span className="langENG">
            <img src={ENG} alt="" />
          </span>
        </button>
      </div>
      {spanishLang ? (
        <div className="when">CUÁNDO ES?</div>
      ) : (
        <div className="when">WHEN TO COME?</div>
      )}
      <div className={classNames("container1", { expand: button1On })}>
        <span
          className="button1"
          onClick={() => {
            setButton2On(false);
            setButton3On(false);
            setButton1On(!button1On);
          }}
        >
          &#10006;
        </span>
        {spanishLang ? (
          <div className="content">
            <div className="head">
              <h1>Cuándo? (dijo Arjona)</h1>
            </div>
            <div className="body">
              <p>
                <b>TENÉS</b> que venir el
                <br />
                <em>SÁBADO 17/12 a las 22 hs</em>
                <br />
                La fiesta termina <b>a las 6 am</b>
                <br />
              </p>
              <label>🚨 puertas cerradas hasta esa hora!😉</label>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="head">
              <h1>When will be?</h1>
            </div>
            <div className="body">
              <p>
                <b>YOU MUST</b> come on
                <br />
                <em>SATURDAY 12/17 at 10 pm</em>
                <br />
                Party ends <b>at 6 am</b>
                <br />
              </p>
              <label> 🚨Doors will be closed till that hour!😉</label>
            </div>
          </div>
        )}
      </div>
      {spanishLang ? (
        <div className="where">DÓNDE SERÁ?</div>
      ) : (
        <div className="where">WHERE WILL BE?</div>
      )}
      <div className={classNames("container2", { expand: button2On })}>
        <span
          className="button2"
          onClick={() => {
            setButton1On(false);
            setButton3On(false);
            setButton2On(!button2On);
          }}
        >
          &#10006;
        </span>
        {spanishLang ? (
          <div className="content">
            <div className="head">
              <h1>Estaremos a puro festejo en...</h1>
            </div>
            <div className="body">
              <h3>ELEMENTARY</h3>
              <p>
                <em> 221B Baker St., London, UK</em>
                <br />
                ➔ Copiá el texto de color naranja
                <br />➔ Pegalo en Google Maps ➔ Cómo llegar
              </p>
              <label>Y voilà! Ya tenés resuelto eso💪</label>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="head">
              <h1>We'll be partying at...</h1>
            </div>
            <div className="body">
              <h3>ELEMENTARY</h3>
              <p>
                <em> 221B Baker St., London, UK</em>
                <br />
                ➔ &nbsp;Copy the orange text
                <br />➔ &nbsp;Paste it in Google Maps ➔ Directions
              </p>
              <label>And voilà! You know how to get there! 💪</label>
            </div>
          </div>
        )}
      </div>
      {spanishLang ? (
        <div className="coming">&nbsp;VENÍS O NO?&nbsp;</div>
      ) : (
        <div className="coming">
          <span style={{ textDecoration: "line-through" }}>
            &nbsp;RSVP&nbsp;
          </span>
          &nbsp;COMING OR NOT?&nbsp;
        </div>
      )}
      <div className={classNames("container3", { expand: button3On })}>
        <span
          className="button2"
          onClick={() => {
            setButton1On(false);
            setButton2On(false);
            setButton3On(!button3On);
          }}
        >
          &#10006;
        </span>
        {spanishLang ? (
          <div className="content">
            <div className="head">
              <h1>Confirmame que venís</h1>
            </div>
            <div className="body">
              <p>
                Porfa mandame mensaje por <em>SI</em> o <em>NO</em>...
              </p>
              <div className="actionBar">
                <div className="waWithLogo">
                  ➔ &nbsp;<b>con tu celu</b>:&nbsp;
                  <div className="imgButton">
                    <ReactWhatsapp
                      number="+5492234484060"
                      message="SI, voy de una!!"
                    />
                  </div>
                </div>
                <div className="waWithLogo">
                  ➔&nbsp;<b>desde la compu&nbsp;</b>:&nbsp;
                  <a
                    href="https://web.whatsapp.com/send?phone=+5492234484060&text=SI,%20voy%20de%20una!!&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logo} alt="WhatsApp logo" />
                  </a>
                </div>
                <label>
                  🚨OJO: no confirmo = no puedo entrar <br />
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="content">
            <div className="head">
              <h1>Confirm your presence</h1>
            </div>
            <div className="body">
              <p>
                Please whatsapp me <em>YES</em> or <em>NO</em>...
              </p>
              <div className="actionBar">
                <div className="waWithLogo">
                  ➔ &nbsp;<b>with your phone</b>:&nbsp;
                  <div className="imgButton">
                    <ReactWhatsapp
                      number="+5492234484060"
                      message="YES, I'll be there!"
                    />
                  </div>
                </div>
                <div className="waWithLogo">
                  ➔&nbsp;<b>with WhatsApp Web</b>:&nbsp;
                  <a
                    href="https://web.whatsapp.com/send?phone=+5492234484060&text=YES,%20I'll%20be%20there!&app_absent=0"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={logo} alt="WhatsApp logo" />
                  </a>
                </div>
                <label>
                  🚨Important: NO answer means NO entry <br />
                </label>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
