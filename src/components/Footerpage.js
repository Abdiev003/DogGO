import React from "react";
import "./Footer.css";
import { Col, Container, Row, Footer } from "mdbreact";
import renklilogo from "../images/doggo-renkli-logo.png"
import ios from "../DogGO-Website/assets/sec-1-4.png";
import android from "../DogGO-Website/assets/sec-1-3.png";
import phone from "../images/phone.png";
import mail from "../images/mail.png";
import address from "../images/address.png";
import {NavLink} from "react-router-dom";



export class Footerpage extends React.Component {


    render() {


        return (
            <Footer color="blue" className="container font-small pt-4 mt-4">
                <Container fluid className="text-center text-md-left">
                    <Row>
                        <Col md="6">
                            <img className="footer-logo doggo-logo" src={renklilogo} alt="doggo-logo"/>
                            <ul className="app-store-style footer-os-center">
                           <li> <a href="https://itunes.apple.com/us/app/doggo/id1321405113?ls=1&mt=8" target="_blank" rel="noopener noreferrer"><img src={ios} alt="app-store" className="img-responsive"/></a></li>
                                <li><a href="https://play.google.com/store/apps/details?id=com.doggoapp.owner" target="_blank" rel="noopener noreferrer"> <img src={android} alt="google-play" className="img-responsive"/></a></li>
                            </ul>
                        </Col>
                        <Col md="6">
                            <ul className="footer-address">
                                <ul className="footer-icon-size">
                                    <li className="footer-icon-padding"> <img src={phone} alt="phone" className="img-responsive"/></li>
                                    <li><a href="tel:+905425036446" className="footer-info-style">0542 503 64 46</a></li>
                                </ul>
                                <ul className="footer-icon-size">
                                    <li className="footer-icon-padding"> <a href="mailto:info@doggoapp.com" ><img src={mail} alt="mail" className="img-responsive"/> </a></li>
                                    <li><a href="mailto:info@doggoapp.com" className="footer-info-style">info@doggoapp.com</a></li>
                                </ul>
                                <ul className="footer-icon-size">
                                    <li className="footer-icon-padding"> <img src={address} alt="address" className="img-responsive"/></li>
                                    <li><h6 className="footer-info-style">Moda, Caferağa Mahallesi,<br/> Muratbey Sokak, No:18/1, <br/> Kadıköy/İstanbul</h6></li>
                                </ul>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <div className="footer-copyright text-center py-3">
                    <Container fluid className="doggo-link-color">
                        &copy; <a className="doggo-link-color" href="/"> DogGO </a>  {new Date().getFullYear()}
                        <ul><li className="footer-ref-style align-right">v2.20</li></ul>
                        <ul className="ul-flex">
                            <li><NavLink className="footer-ref-style" to="/Kullanici-Sozlesmesi">Kullanıcı Sözleşmesi</NavLink></li>
                            <li><NavLink className="footer-ref-style" to="/Gizlilik-Politikasi">Gizlilik Politikası</NavLink></li>
                            <li><NavLink className="footer-ref-style" to="/Iyzico-Alici-Sozlesmesi">Iyzico Alıcı Sözleşmesi</NavLink></li>
                            <li><NavLink className="footer-ref-style" to="/Iyzico-Satici-Sozlesmesi">Iyzico Satıcı Sözleşmesi</NavLink></li>
                        </ul>
                        
                    </Container>
                </div>
            </Footer>

        ) }}




          /*  <footer className="site-footer">
<section className="sec-footer">
<div className="container">
    <div className="row">
<ul className="footer-logo-padding">
<li><img className="footer-logo " src={logo} alt="doggo-logo"/></li>
<li><h6 className="doggo-color-main"><b>Çok Yakında!</b></h6></li>
<ul className="app-store-style">
<li><img src={ios} alt="app-store" className="img-responsive"/></li>
<li> <img src={android} alt="google-play" className="img-responsive"/></li>
</ul>
</ul>


    <ul className="footer-info-padding">
        <ul className="footer-icon-size">
            <li className="footer-icon-padding"> <img src={phone} alt="phone" className="img-responsive"/></li>
            <li><h6 className="footer-info-style">0542 503 64 46</h6></li>
        </ul>
        <ul className="footer-icon-size">
            <li className="footer-icon-padding"> <img src={mail} alt="mail" className="img-responsive"/></li>
            <li><h6 className="footer-info-style">info@doggoapp.com</h6></li>
        </ul>
        <ul className="footer-icon-size">
            <li className="footer-icon-padding"> <img src={address} alt="address" className="img-responsive"/></li>
            <li><h6 className="footer-info-style">Moda, Caferağa Mahallesi, Muratbey Sokak, No:18/1, Kadıköy/İstanbul</h6></li>
        </ul>
    </ul>
</div>
    <ul className="footer-icon-size">
        <li><a className="footer-doggo-style" href="/">© DogGO 2018</a></li>
        <ul className="ul-flex">
        <li><a className="footer-ref-style" href="/Kullanici-Sozlesmesi">Kullanıcı Sözleşmesi</a></li>
        <li><a className="footer-ref-style" href="/Gizlilik-Politikasi">Gizlilik Politikası</a></li>
        <li><a className="footer-ref-style" href="/Iyzico-Alici-Sozlesmesi">Iyzico Alıcı Sözleşmesi</a></li>
            <li><a className="footer-ref-style" href="/Iyzico-Satici-Sozlesmesi">Iyzico Satıcı Sözleşmesi</a></li>
        </ul>
    </ul>
</div>
</section>
            </footer>



        /*
        <div className="row footer-padding">
<div className="col-md-6 col-lg-6 col-xl-6 offset-md-1 offset-lg-1 offset-xl-1">
<div className="row">
    <div className="col-md-3 col-lg-3 col-xl-3 footer-icon-padding">
        <img src={phone} alt="phone" className="img-responsive"/>
    </div>
    <div className="col-md-9 col-lg-9 col-xl-9">
        <h6 className="footer-info-style">0542 503 64 46</h6>
    </div>
</div>
<div className="row">
    <div className="col-md-3 col-lg-3 col-xl-3 footer-icon-padding">
        <img src={mail} alt="mail" className="img-responsive"/>
    </div>
    <div className="col-md-9 col-lg-9 col-xl-9">
        <h6 className="footer-info-style">info@doggoapp.com</h6>
    </div>
</div>
<div className="row">
    <div className="col-md-3 col-lg-3 col-xl-3">
        <img src={address} alt="address" className="img-responsive"/>
    </div>
    <div className="col-md-9 col-lg-9 col-xl-9">
        <h6 className="footer-info-style">Moda, Caferağa Mahallesi, Muratbey Sokak, No:18/1, Kadıköy/İstanbul</h6>
    </div>
</div>
</div>
</div>
         */
