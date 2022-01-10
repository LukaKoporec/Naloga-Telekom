import React from "react";
import "../Styles/About.scss";

function About() {
  return (
    <div>
      <p id="start">
        Paket NEO Svet B poleg SVETOVNE mobilne telefonije, televizije,
        interneta ter Fiksne telefonije novim in obstoječim naročnikom ponuja
        tudi naprave po SVETOVNIH cenah.
      </p>
      <h2>Paket NEO Svet B</h2>
      <ol>
        <ul>
          <hr />
          <h3>MOBILNA TELEFONIJA</h3>
          <hr />
          <li>
            <b>neomejeni</b> klici in sporočila SMS/MMS v vsa slovenska mobilna
            in fiksna omrežja in v državah območja EU-tarife
          </li>
          <li>
            <b>200 GB</b> prenos podatkov v Sloveniji, od tega do{" "}
            <b>16.106 MB</b> brezplačno v državah območja EU-tarife
          </li>
          <li>
            hitrost mobilnega interneta do <b>150/50 Mbit/s</b>
          </li>
          <li>
            možnost do <b>4</b> dodatne številke Druga številka - NEO
          </li>
        </ul>
        <ul>
          <hr />
          <h3>TELEVIZIJA</h3>
          <hr />
          <li>programska shema Mega HD</li>
          <li>vključen prvi NEO Smartbox</li>
          <li>
            <b>ogled nazaj</b> za 7 dni in <b>snemalnik</b>
          </li>
          <li>predpripravljen vmesnik za storitev Pametni dom</li>
        </ul>
        <ul>
          <hr />
          <h3>INTERNET</h3>
          <hr />
          <li>
            hitrost do <b>350/100 Mbit/s</b> na optiki (do 25/5 Mbit/s na VDSL,
            do 20/1 Mbit/s na ADSL)
          </li>
          <li>modem z možnostjo WiFi brezplačno</li>
          <li>možnost razširitve omrežja WiFi s storitvijo Turbo Wifi</li>
        </ul>
        <ul>
          <hr />
          <h3>FIKSNA TELEFONIJA</h3>
          <hr />
          <li>3.000 minut klicev v vsa slovenska fiksna in mobilna omrežja</li>
        </ul>
      </ol>
      <p id="cena"> Redna cena paketa: 74 €</p>
      <h2>Naj NEO naprave</h2>
      <div class="aligncenter">
        <div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/telefonija/mobiteli/apple-iphone-13-128gb-crna">
            <img
              src="https://ts.sdn.si/hybris/1000/70031663_00/apple-iphone-13-128gb-crna/001.jpg"
              alt="Apple iPhone 13"
            />
          </a>
          <div class="top-left">Apple iPhone 13</div>
          <div class="bottom-right">
            CENA 24 x <b>34,24 €</b>
          </div>
          <div class="bottom-left">
            <a href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-apple-iphone-13">
              Test
            </a>
          </div>
        </div>
        <div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/sport-in-prosti-cas/pametne-ure-in-zapestnice/apple-pametna-ura-watch-series-s7-gps-41mm-sport-band-mkmx3bs-a-41-mm-crna-s-crnim-pasckom-sb">
            <img
              src="https://ts.sdn.si/hybris/1000/70031976_00/apple-pametna-ura-watch-series-s7-gps-41mm-sport-band-mkmx3bs-a-41-mm-crna-s-crnim-pasckom-sb/001.jpg"
              alt="Apple Pametna ura Series 7"
            />
          </a>
          <div class="top-left">
            Apple Pametna ura Watch Series S7 GPS 41mm Sport Band (MKMX3BS/A)
          </div>
          <div class="bottom-right">
            CENA 24 x <b>15,39 €</b>
          </div>
          <div class="bottom-left">
            <a href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-apple-watch7">
              Test
            </a>
          </div>
        </div>
        <div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/racunalnistvo/igralne-konzole/sony-playstation5-825gb-bela">
            <img
              src="https://ts.sdn.si/hybris/1000/70028128_00/sony-playstation5-825gb-bela/001.jpg"
              alt="Sony PlayStation 5"
            />
          </a>
          <div class="top-left">Sony PlayStation®5</div>
          <div class="bottom-right">
            CENA 24 x <b>21,00 €</b>
          </div>
          <div class="bottom-left">
            <a href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-playstation-5">
              Test
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
