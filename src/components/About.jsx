import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilePdf,
  faMobile,
  faTv,
  faDesktop,
  faPhone,
  faInfo
} from "@fortawesome/free-solid-svg-icons";
import "../Styles/Styles.scss";

function Accordion(e) {
  const target = e.target;
  target.classList.toggle("active");

  const panel = target.nextElementSibling;
  if (panel.style.display === "block") {
    panel.style.display = "none";
  } else {
    panel.style.display = "block";
  }
}

function About() {
  return (
    <div className="container row">
      <p id="start">
        <strong>Paket NEO Svet B</strong> poleg SVETOVNE mobilne telefonije,
        televizije, interneta ter Fiksne telefonije novim in obstoječim
        naročnikom ponuja tudi naprave <em>po SVETOVNIH cenah</em>.
      </p>
      <h2>Paket NEO Svet B</h2>

      <ul>
        <hr />

        <h3>
          {" "}
          <FontAwesomeIcon className="fonti" icon={faMobile} />
          MOBILNA TELEFONIJA
        </h3>
        <hr />
        <li>
          <b>neomejeni</b> klici in sporočila SMS/MMS v vsa slovenska mobilna in
          fiksna omrežja in v državah območja EU-tarife
        </li>
        <li>
          <b>200 GB</b> prenos podatkov v Sloveniji, od tega do <b>16.106 MB</b>{" "}
          brezplačno v državah območja EU-tarife
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

        <h3>
          <FontAwesomeIcon className="fonti" icon={faTv} /> TELEVIZIJA
        </h3>
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

        <h3>
          <FontAwesomeIcon className="fonti" icon={faDesktop} /> INTERNET
        </h3>
        <hr />
        <li>
          hitrost do <b>350/100 Mbit/s</b> na optiki (do 25/5 Mbit/s na VDSL, do
          20/1 Mbit/s na ADSL)
        </li>
        <li>modem z možnostjo WiFi brezplačno</li>
        <li>možnost razširitve omrežja WiFi s storitvijo Turbo Wifi</li>
      </ul>
      <ul>
        <hr />

        <h3>
          <FontAwesomeIcon className="fonti" icon={faPhone} /> FIKSNA TELEFONIJA
        </h3>
        <hr />
        <li>3.000 minut klicev v vsa slovenska fiksna in mobilna omrežja</li>
      </ul>

      <p id="cena">
        <FontAwesomeIcon className="fonti" icon={faInfo} /> Redna cena paketa:
        74 €
      </p>

      <h2>Naj NEO naprave</h2>
      <div className="aligncenter">
        <div className="inline">
          <div className="top-left">
            <p className="item">
              <em>Apple iPhone 13</em>
            </p>
            <a
              className="links"
              href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-apple-iphone-13"
            >
              Test Naprave
            </a>
          </div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/telefonija/mobiteli/apple-iphone-13-128gb-crna">
            <img
              src="https://ts.sdn.si/hybris/1000/70031663_00/apple-iphone-13-128gb-crna/001.jpg"
              alt="Apple iPhone 13"
              className="tumbnail"
            />
          </a>

          <div className="bottom-right">24 x 34,24 €</div>
        </div>
        <hr className="displayn" />
        <div className="inline">
          <div className="top-left">
            <p className="item">
              <em>
                Apple Pametna ura Watch Series S7 GPS 41mm Sport Band
                (MKMX3BS/A)
              </em>
            </p>
            <a
              className="links"
              href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-apple-watch7"
            >
              Test Naprave
            </a>
          </div>

          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/sport-in-prosti-cas/pametne-ure-in-zapestnice/apple-pametna-ura-watch-series-s7-gps-41mm-sport-band-mkmx3bs-a-41-mm-crna-s-crnim-pasckom-sb">
            <img
              src="https://ts.sdn.si/hybris/1000/70031976_00/apple-pametna-ura-watch-series-s7-gps-41mm-sport-band-mkmx3bs-a-41-mm-crna-s-crnim-pasckom-sb/001.jpg"
              alt="Apple Pametna ura Series 7"
              className="tumbnail"
            />
          </a>

          <div className="bottom-right">24 x 15,39 €</div>
        </div>
        <hr className="displayn" />
        <div className="inline">
          <div className="top-left">
            <p className="item">
              <em>Sony PlayStation®5</em>
            </p>
            <a
              className="links"
              href="https://tehnik.telekom.si/test-na-dlani/test-na-dlani-playstation-5"
            >
              Test Naprave
            </a>
          </div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/racunalnistvo/igralne-konzole/sony-playstation5-825gb-bela">
            <img
              src="https://ts.sdn.si/hybris/1000/70028128_00/sony-playstation5-825gb-bela/001.jpg"
              alt="Sony PlayStation 5"
              className="tumbnail"
            />
          </a>

          <div className="bottom-right">24 x 21,00 €</div>
        </div>
      </div>

      <div className="aligncenter">
        <hr />
        <h2>SUPER AKCIJA</h2>
        <div id="test">
          <div className="top-left">
            <p className="item">
              <em>Philips 75PML9506/12 4K</em>
            </p>
          </div>
          <a href="https://www.telekom.si/zasebni-uporabniki/ponudba/e-trgovina/izdelek/tv-in-avdio/televizorji/philips-75pml9506-12-4k-siva">
            <img
              className="akcija"
              src="https://ts.sdn.si/hybris/1000/70032576_00/philips-75pml9506-12-4k-siva/001.jpg"
              alt="Philips 75PML9506/12 4K"
            />
          </a>

          <div className="bottom-right">AKCIJSKA CENA 24 x 101,00 €</div>
        </div>
      </div>
      <div id="opis">
        <h4>Opis izdelka</h4>
        <p>
          S podrobnostmi vzbudi vaša čustva. Televizor MiniLED 4K UHD s sistemom
          Android. Od igranja igric do filmov boste s televizorjem Philips
          MiniLED občutili več. Slika je tako pristna, da boste segli po njej in
          se je želeli dotakniti. Vse je večje in intenzivnejše s čarobno
          4-stransko osvetlitvijo Ambilight.
        </p>
      </div>
      <div className="small-print">
        <button className="accordion" onClick={Accordion}>
          OPOMBE
        </button>
        <div className="panel">
          <p>
            <small>
              <sup>1</sup>Naročniško razmerje s paketom NEO Svet B lahko
              sklenejo novi ali obstoječi naročniki fiksnih in mobilnih
              storitev, ki so zasebni ali poslovni uporabniki. Paket NEO Svet B
              z mesečno naročnino 74 EUR z DDV oz 60,655 EUR brez DDV (78 EUR z
              DDV oz 63,94 EUR brez DDV v omrežju OŠO) vključuje fiksni internet
              s hitrostjo na FTTH do 350/100 Mbit/s (do 100/20 Mbit/s v OŠO), na
              VDSL do 25/5 Mbit/s VAR in na ADSL do 20/1 Mbit/s VAR, televizijo
              s programsko shemo Mega HD in IP-telefonijo z eno telefonsko
              številko, ki vključuje neomejene klice v IP-omrežje Telekoma
              Slovenije ter 3.000 minut klicev v vsa slovenska fiksna in mobilna
              omrežja. Prav tako paket vključuje eno mobilno telefonsko
              številko, ki vključuje neomejene pogovore in neomejene SMS-/MMS-e
              v vsa slovenska omrežja in v državah območja EU-tarife ter 200 GB
              prenosa podatkov, ki jih je mogoče porabiti v mobilnem omrežju
              Telekoma Slovenije (od tega brezplačno do 16.106 MB v državah
              območja EU-tarife). Pri poslanih in prejetih MMS-ih v državah
              območja EU-tarife se prenos podatkov odšteva od skupne količine
              prenosa podatkov. Po doseženi skupni vključeni količini prenosa
              podatkov se prenos podatkov zaračuna skladno s cenikom prenosa
              podatkov nad vključeno količino. Navedene količine in cene veljajo
              za storitve, opravljene v mobilnem omrežju Telekoma Slovenije in v
              državah območja EU-tarife v okviru enega obračunskega obdobja.
              Neporabljene količine se ne prenašajo v naslednje obračunsko
              obdobje. V primeru spremembe obstoječega fiksnega paketa v
              navedeni paket pa se zaračuna enkraten znesek v višini 10,95 EUR z
              DDV oz 8,98 EUR brez DDV EUR. Neomejeni pogovori v mobilnem
              omrežju Telekoma Slovenije, neomejeni pogovori v vsa slovenska
              omrežja in neomejena sporočila SMS/MMS v vsa slovenska omrežja in
              v državah območja EU-tarife so namenjeni običajni uporabi
              storitve. Novi in obstoječi naročniki paketa NEO Svet B, ki
              sklenejo naročniško razmerje z vezavo za 24 (oz. za 12) mesecev,
              prve 4 (oz. 1) mesece za izbrani paket plačujejo 50 % nižjo
              mesečno naročnino. Po pretečenih 4 (oz. 1) mesecih se začne
              zaračunavati redna mesečna naročnina paketa po takrat veljavnem
              ceniku. V času veljavnega popusta naročnik ne more prehajati na
              druge pakete brez poplačila pogodbene obveznosti. Ta akcijska
              ponudba se izključuje z ostalimi akcijskimi ponudbami, razen s
              tistimi, kjer je to posebej navedeno. Novi in obstoječi naročniki,
              ki sklenejo naročniško razmerje z vezavo za 24 mesecev, so
              upravičeni do brezplačne vzpostavitve priključka in namestitve
              opreme. Akcijska cena vzpostavitve priključka z namestitvijo
              opreme pri končnem uporabniku Telekoma Slovenije brez vezave znaša
              45 EUR z DDV, redna cena pa 99 EUR z DDV. V tem primeru Telekom
              Slovenije poskrbi za namestitev opreme na obstoječo hišno
              inštalacijo, aktivacijo in preizkus delovanja opreme. V primeru
              vezave za 12 mesecev se zaračuna namestitev opreme po znižani ceni
              20 EUR. Ta akcijska ponudba se ne izključuje z drugimi akcijskimi
              ponudbami. Novi in obstoječi naročniki paketov NEO Svet A, B, C in
              NEO SuperNet lahko ob sklenitvi vezave za 12 ali 24 mesecev
              izberejo izdelek po znižani ceni. Akcijska ponudba izdelkov Skupne
              ugodnosti se izključuje z drugimi akcijskimi nakupi naprav in
              ponudbami, razen s tistimi, kjer je to posebej navedeno. S
              sklenitvijo omenjene akcijske ponudbe se naročnik veže tako na
              nosilni mobilni številki kot tudi na fiksnem priključku. Nakup
              izdelka po akcijski ceni Skupne ugodnosti je mogoč tudi v
              enkratnem znesku. Mogoč je nakup le enega izdelka iz ponudbe.
              Količina izdelkov je omejena. Telekom Slovenije si pridržuje
              pravico do sprememb cen in pogojev. Več informacij je na voljo na
              www.telekom.si. <br />
              <sup>2</sup>Ob naročilu paketov NEO Svet A, B in C prejme naročnik
              en najemni TV-komunikator (če ga še nima). Novi naročniki in
              naročniki, ki preidejo iz paketov, ki ne vključujejo IP-televizije
              Telekoma Slovenije, v pakete NEO Svet A, B ali C, prejmejo 100 %
              popusta na najemnino ob izdaji prvega najemnega NEO Smartboxa
              (enkratna najemnina NEO Smartboxa ob izdaji znaša 29 EUR z DDV oz
              23,77 EUR brez DDV na kos). Možno je naročiti največ 8 najemnih
              TV-komunikatorjev (od tega največ 4 najemne TV-komunikatorje BOX
              S). Mesečna najemnina najemnega TV-komunikatorja (NEO Smartbox ali
              BOX S; pri čemer se za prvi najemni TV-komunikator NEO Smartbox ta
              najemnina ne zaračunava): 2,90 EUR z DDV oz 2,38 EUR EUR na mesec
              na kos. *Neo dosega najboljši rezultat na elementu »Za uporabnike,
              ki si želijo najboljšo uporabniško izkušnjo« (vir: raziskava
              Valicon, spremljanje produktnih znamk, n=1.032, dec 2020). <br />
              <sup>3</sup>Uporaba storitve, ki bi kakorkoli škodovala omrežju
              Telekoma Slovenije, ni dovoljena. Med kršitve sodijo namerna
              preobremenitev omrežja, onemogočanje normalne uporabe omrežja
              drugim uporabnikom, uporaba storitve v komercialne namene,
              preprodaja storitve tretjim osebam, uporaba storitve s sistemi za
              samodejno klicanje oz. pošiljanje SMS-/MMS-ov brez človekovega
              posredovanja ipd. V primeru, da Telekom Slovenije oceni, da je
              naročnikova uporaba storitve v nasprotju s temi pogoji, si
              pridržuje pravico naročnika opozoriti in/ali mu onemogočiti
              uporabo storitve. <br />
              <sup>4</sup>Novi in obstoječi naročniki fiksnih paketov s
              televizijo lahko izberejo brezplačne programske opcije za 12
              mesecev (oz. 4 mesece) ob vezavi za 24 mesecev (oz. 12 mesecev).
              Naročniki lahko koristijo akcijsko ponudbo tudi za več programskih
              opcij. Izbira brezplačne programske opcije (velja za opcije HBO,
              Eksplozivni, Voyo, Balkan, Pink, CineStar TV Premiere, Minimax+,
              Pickbox NOW, RUS 5+, Eksplozivni+ in Dajmedol+) je omogočena
              obstoječim naročnikom, ki v zadnjih 6 mesecih niso imeli naročene
              izbrane programske opcije. Novi in obstoječi naročniki fiksnih
              paketov NEO A, NEO B in NEO Svet A lahko izberejo tudi brezplačno
              nadgradnjo programske sheme za 12 mesecev (oz. 4 mesece) ob vezavi
              za 24 mesecev (oz. 12 mesecev) . Ta akcijska ponudba brezplačnih
              programskih shem velja tudi za obstoječe naročnike paketov NEO A,
              NEO B, TopTrio A, TopTrio B, Trio A, Trio B in Modri Net. Po
              preteku 12-mesečnega (oz. 4-mesečnega) brezplačnega obdobja se
              prične zaračunavati redna cena naročene programske sheme in/ali
              programskih opcij po takrat veljavnem ceniku in se zaračunava ves
              čas trajanja naročnine na opcijo oz. vsaj do izteka vezave. V času
              vezave programske opcije in/ali sheme naročnik te brez poplačila
              pogodbene obveznosti ne more izključiti. Akcijski ponudbi
              brezplačne programske opcije in/ali sheme ob vezavi se ne
              izključujeta z ostalimi akcijskimi ponudbami. V primeru menjave
              paketa v času vezave naročniki prenesejo obstoječe obveznosti in
              vezave na nov paket. <br />
              <sup>5</sup>Novi in obstoječi naročniki paketa NEO Svet A, B, C in
              SuperNet lahko ob sklenitvi vezave za 12 ali 24 mesecev izberejo
              izdelek po znižani ceni. Akcijska ponudba izdelkov Skupne
              ugodnosti se izključuje z drugimi akcijskimi nakupi naprav in
              ponudbami, razen s tistimi, kjer je to posebej navedeno. S
              sklenitvijo omenjene akcijske ponudbe se naročnik veže tako na
              nosilni mobilni številki kot tudi na fiksnem priključku. Naročnik
              paketa NEO Svet A je upravičen do nakupa izdelka po ceni iz Skupne
              ugodnosti A, Naročnik paketa NEO Svet B je upravičen do nakupa
              izdelka po ceni iz Skupne ugodnosti B, Naročnik paketa NEO Svet C
              in SuperNet je upravičen do nakupa izdelka po ceni iz Skupne
              ugodnosti C. Nakup izdelka po akcijski ceni Skupne ugodnosti je
              mogoč tudi v enkratnem znesku. Mogoč je nakup le enega izdelka iz
              ponudbe. Količina izdelkov je omejena. Telekom Slovenije si
              pridržuje pravico do sprememb cen in pogojev. <br />
              <sup>6</sup>Nov naročnik je vsak naročnik, ki sklene pogodbo, pri
              tem pa je izpolnjen pogoj, da v omrežju Telekoma Slovenije
              priključek na njegovem naslovu in njegovi številki stanovanja v
              preteklih šestih mesecih ni bil zaseden. Nov naročnik s podpisom
              zagotavlja, da izpolnjuje ta pogoj. V primeru, da Telekom
              Slovenije ob preveritvi priključka ugotovi, da je naročnik kršil
              ta pogoj, se naročniku zaračuna celoten znesek pogodbenih
              obveznosti. Kot nov naročnik se ne upošteva naročnik, ki prehaja
              znotraj različnih omrežij Telekoma Slovenije, upošteva se le
              naročnik na lokaciji ne glede na tip priključka. <br />
              <sup>7</sup>Naročniško razmerje Druga številka – NEO je dodatno
              podrejeno naročniško razmerje, ki je na voljo naročnikom paketov
              NEO Svet A, B, C in SuperNet. Z vklopom podrejenega naročniškega
              razmerja prejmejo naročniki dodatno kartico SIM, ki uporablja
              zakupljene količine nosilnega naročniškega razmerja. Znižana
              mesečna naročnina paketa Druga številka (12 EUR z DDV namesto
              14,99 EUR z DDV oz 9,84 EUR brez DDV namesto 12,29 EUR brez DDV)
              velja v promocijskem obdobju do 30. 6. 2022 za nove naročnike 24
              mesecev, za obstoječe naročnike, ki podaljšajo naročniško razmerje
              za 24 mesecev v skladu s Pogoji akcijskega nakupa naprav, pa 12
              mesecev. Paketom NEO Svet in paketu SuperNet se lahko doda do 4
              Druge številke – NEO. <br />
              <sup>8</sup>Domače omrežje (doma) je mobilno omrežje Telekoma
              Slovenije. Države območja EU-tarife so: Avstrija, Belgija,
              Bolgarija, Republika Ciper (grški del Cipra), Češka, Danska,
              Estonija, Finska, Francija, Gibraltar, Grčija, Hrvaška, Irska,
              Islandija, Italija, Kanarski otoki, Latvija, Liechtenstein, Litva,
              Luksemburg, Madžarska, Malta, Nemčija, Nizozemska, Norveška,
              Poljska, Portugalska, Romunija, Slovaška, Španija in Švedska.
            </small>
          </p>
        </div>
      </div>
      <div id="pdf">
        <h4>Prodajne ponudbe</h4>
        <FontAwesomeIcon icon={faFilePdf} />
        <a
          className="links"
          id="pdfLink"
          href="https://www.telekom.si/PodporaObrazci/Prodajna-ponudba-paketov-neo-svet.pdf"
        >
          Prodajna ponudba paketov NEO Svet
        </a>
        <br />
        <FontAwesomeIcon icon={faFilePdf} />
        <a
          className="links"
          id="pdfLink"
          href="https://www.telekom.si/PodporaObrazci/Prodajna-ponudba-paketov-neo-svet-na-oso.pdf"
        >
          Prodajna ponudba paketov NEO Svet na OŠO
        </a>
      </div>
    </div>
  );
}

export default About;
