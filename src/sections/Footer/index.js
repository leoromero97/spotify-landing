import React from "react";
import icInstagram from "../../assets/instagram.png";
import icTwitter from "../../assets/twitter.png";
import icFacebook from "../../assets/facebook.png";
import icLogo from "../../assets/logo.png";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container-links" >
        <a href="#home" target="blank" className="container-logo-footer">
            <img src={icLogo} alt="logo" className="logo2" />
          </a>
        <div className="footer-content">
            <h1 className="footer-title">
              Compañía
            </h1>
          <a 
            href="https://www.spotify.com/ar/about-us/contact/" 
            className="footer-link">
            Acerca de
          </a>
          <a 
            href="https://www.spotifyjobs.com/?_gl=1*1k408j3*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.183133987.448951681.1623880828-1398993276.1604927309&_gac=1.83963243.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_BwE" 
            className="footer-link">
            Empleo
          </a>
          <a 
            href="https://newsroom.spotify.com/?_gl=1%2Awb838t%2A_gcl_aw%2AR0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..%2A_gcl_dc%2AR0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.187477805.448951681.1623880828-1398993276.1604927309&_gac=1.158090952.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_BwE" 
            className="footer-link">
            For the Record
          </a>
        </div>
        <div className="footer-content">
            <h1 className="footer-title">
              Comunidades
            </h1>
          <a 
            href="https://artists.spotify.com/?_gl=1*k969m0*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.121208973.448951681.1623880828-1398993276.1604927309&_gac=1.155405129.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_Bw" 
            className="footer-link">
            Para artistas
          </a>
          <a 
            href="https://developer.spotify.com/?_gl=1*k969m0*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.121208973.448951681.1623880828-1398993276.1604927309&_gac=1.155405129.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_BwE" 
            className="footer-link">
            Desarrolladores
          </a>
          <a 
            href="https://ads.spotify.com/en-US/?_gl=1*1bfyxqv*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.183201571.448951681.1623880828-1398993276.1604927309&_gac=1.93408751.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_BwE" 
            className="footer-link">
            Publicidad
          </a>
          <a 
            href="https://investors.spotify.com/home/default.aspx" 
            className="footer-link">
            Inversionistas
          </a>
          <a 
            href="https://spotifyforvendors.com/" 
            className="footer-link">
            Proveedores
          </a>
        </div>
        <div className="footer-content">
            <h1 className="footer-title">
              Enlaces útiles
            </h1>
          <a 
            href="https://support.spotify.com/ar/?_gl=1*oah66v*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.119318412.448951681.1623880828-1398993276.1604927309&_gac=1.94587374.1623880828.CjwKCAjwwqaGBhBKEiwAMk" 
            className="footer-link">
            Ayuda
          </a>
          <a 
            href="https://open.spotify.com/?_gl=1*1edbieg*_gcl_aw*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE2MjM4ODA4MjguQ2p3S0NBand3cWFHQmhCS0Vpd0FNay1GdEdYTDVxWlN4R0VfODR1aTFIYWJyYWVHa1c3NGtWRVVoakc3Um9TanhEOTJmcHlLcjlaWldSb0NCZTBRQXZEX0J3RQ..&_ga=2.182693027.448951681.1623880828-1398993276.1604927309&_gac=1.190048857.1623880828.CjwKCAjwwqaGBhBKEiwAMk-FtGXL5qZSxGE_84ui1HabraeGkW74kVEUhjG7RoSjxD92fpyKr9ZZWRoCBe0QAvD_BwE" 
            className="footer-link">
            Reproductor web
          </a>
          <a 
            href="https://www.spotify.com/ar/download/" 
            className="footer-link">
            App móvil gratis
          </a>
        </div>
        <div className="footer-container-socialLinks">
          <a href="https://www.instagram.com/spotify/" className="circle-socialLink">
            <img src={icInstagram} alt="Instagram" />
          </a>
          <a href="https://twitter.com/spotify" className="circle-socialLink">
            <img src={icTwitter} alt="Twitter"  />
          </a>
          <a href="https://www.facebook.com/Spotify" className="circle-socialLink">
            <img src={icFacebook} alt="Facebook"  />
          </a>
        </div>
      </div>

      <div className="container-sublinks">
        <div className="content-sublinks1">
          <a href="https://www.spotify.com/ar/legal/end-user-agreement/" className="sublink">
            Legal
          </a> 
          <a href="https://www.spotify.com/ar/privacy" className="sublink">
            Centro de privacidad
          </a>
          <a href="https://www.spotify.com/ar/legal/privacy-policy/" className="sublink">
            Política de privacidad
          </a>
          <a href="https://www.spotify.com/ar/legal/cookies-policy/" className="sublink">
            cookies
          </a>
          <a href="https://www.spotify.com/ar/legal/privacy-policy/#s3" className="sublink">
            Sobre los anuncios
          </a>
        </div>
        <div className="content-sublinks2">
          <a href="https://www.spotify.com/ar/select-your-country-region/" className="sublink">
            Argentina
          </a>
          <p className="copyright">&copy; 2021 Spotify AB - By Leonardo Gerbacio Romero</p>
        </div>
      </div>
     
    </div>
  );
}

export default Footer;
