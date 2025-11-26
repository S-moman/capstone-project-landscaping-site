import { Link } from "react-router";
import NavBar from "./NavBar";
import hpImg from "../assets/hp.jpg";
import FooterNav from "./FooterNav";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <section>
        <div id="info-sec">
          <h1 id="info-title">
            Winter is upon us! Browse the winter services & get your snow
            removal quote now!
          </h1>
          <p id="info-tag">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus accusantium odit consequuntur nesciunt, iure aliquam,
            quia provident, voluptatibus libero commodi ipsa vitae in harum
            officia distinctio ea! Earum, vero aperiam. Lorem ipsum, dolor sit
            amet consectetur adipisicing elit. Suscipit ut officiis temporibus
            velit magni. Mollitia iure, soluta expedita quos perferendis
            obcaecati provident nulla deleniti est inventore consequatur
            recusandae, voluptates asperiores.
          </p>
          <Link to="/getquote">
            <button id="info-button">Get Quote</button>
          </Link>
          <Link to="/services">
            <button id="info-button">Services</button>
          </Link>
        </div>
        <img id="info-img" src={hpImg} alt="landscape picture" />
      </section>
      <FooterNav />
    </>
  );
}
