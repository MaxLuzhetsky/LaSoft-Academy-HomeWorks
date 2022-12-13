import "./about.css";
import React from "react";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

import mapImg from "./img/map.png";
import address from "./img/address.png";
import number from "./img/number.png";
import facebook from "./img/facebook.png";
import insta from "./img/instagram.png";
import twitter from "./img/twitter.png";

export default function AboutUs() {
  return (
    <>
      <Header></Header>
      <div className="about-us-container">
        <div className="about-us-text">
          <h3 className="about-us-title">Who we are?</h3>
          <p className="about-us-par">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pharetra
            nulla ornare lacus, accumsan purus sem donec. Vitae ornare sit
            rhoncus vitae id neque. Non vitae et, pellentesque lacus. Nunc, eu
            sollicitudin massa senectus eu diam pharetra. Sit nisl quisque eget
            arcu cursus scelerisque. Aliquam et urna tellus blandit sit nulla
            nec. Ultricies sapien sit lorem aliquet. Phasellus enim feugiat sed
            parturient elementum varius ut in vel. Neque egestas magna sed orci,
            consequat. Sit magnis nunc consequat id proin tortor egestas arcu
            ac. At faucibus leo et, nisi, sollicitudin. Malesuada sagittis
            massa, viverra tempor etiam hendrerit eget amet. Odio magna ultrices
            diam, facilisis. Habitant diam eros molestie pretium.
            <br />
            <br />
            Viverra parturient eu tincidunt sem. Aliquet ultrices volutpat orci
            tristique. Sit eleifend donec bibendum sed fermentum. Amet,
            sagittis, libero, at nullam vestibulum. Fusce et sit maecenas urna
            orci felis sodales. Dignissim aliquam at id duis gravida. Nunc sit
            arcu lectus lorem libero vel vitae adipiscing amet. In cras sed
            tristique nisl, amet accumsan urna quis. Condimentum laoreet a
            convallis sit pellentesque laoreet at fringilla. Porttitor ut mi nec
            cras. Nunc, sit non ipsum aliquam enim. Blandit dictum nunc duis ac
            faucibus neque feugiat vitae. Quis ac malesuada pulvinar ac cras
            mollis dictum ullamcorper pretium. Pellentesque ac nunc, eu
            fermentum erat nunc vel natoque volutpat.
            <br />
            <br />
            Et ac a leo et rhoncus montes, enim viverra. Nulla aliquam ut massa,
            praesent viverra integer massa justo. Vitae pellentesque quis sit
            neque. Facilisis aliquam dolor habitant commodo ultricies. Lacus
            pellentesque ultricies viverra curabitur at fermentum tincidunt
            aliquet. Mi congue sed turpis ligula egestas odio tincidunt libero
            vitae. Amet pellentesque aliquam quam viverra proin urna vitae
            egestas turpis. Enim, dictum nisl, dictum sed velit. Aliquam
            dignissim orci auctor ipsum ac ultrices at. Et, nisl, egestas id
            eget. Nisl diam et scelerisque at consectetur.
            <br />
            <br />
          </p>
        </div>
        <div className="about-us-map-container">
          <img className="about-us-map" src={mapImg}></img>
          <div className="address-container">
            <img src={address}></img>
            <span>2464 Royal Ln. Mesa, New Jersey 45463</span>
          </div>
          <div className="address-container">
            <img src={number}></img>
            <span>(208) 555-0112</span>
          </div>
          <div className="other-contacts">
            <img className="other-icons" src={facebook}></img>
            <img className="other-icons" src={insta}></img>
            <img className="other-icons" src={twitter}></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
