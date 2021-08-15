import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import NumberFormat from "react-number-format";
import { FormValidation } from "calidation";
import PopUp from "./PopUp";
import "./Home.css";
import ios from "../DogGO-Website/assets/sec-1-4.png";
import android from "../DogGO-Website/assets/sec-1-3.png";
import location from "../images/sec-4-1.png";
import time from "../images/sec-4-2.png";
import celendar from "../images/sec-4-3.png";
import thumb from "../DogGO-Website/assets/doggo-assets-14.png";
import conversation from "../DogGO-Website/assets/doggo-assets-16.png";
import instagram from "../images/instagram.svg";
import facebook from "../images/facebook.svg";
import twitter from "../images/twitter.svg";
import walkingdog from "../images/sec-3-1.png";
import girlwalkingdog from "../images/sec-4-0.png";
import mobile from "../DogGO-Website/assets/sec-1-2.png";
import cakbipati from "../DogGO-Website/assets/sec-2-1.png";
import kalamis from "../images/kalamis.png";
import kafein from "../images/kafein.png";
import kadikoy from "../images/kadikoy.png";
import cakbipaticon from "../images/cakbipaticon.png";
import bupaw from "../images/bupaw.png";
import patibirligi from "../images/patibirligi.png";

const config = {
  AdSoyad: {
    isRequired: "Lütfen adınızı ve soyadınızı yazınız.",
  },
  Email: {
    isRequired: "Lütfen geçerli bir e-mail yazınız.",
    isEmail: "Lütfen geçerli bir e-mail yazınız.",
  },
  Telefon: {
    isRequired: "Lütfen telefon numaranızı yazınız.",
    isRegexMatch: {
      message:
        "Lütfen telefon numaranızı (532 555 55 55) formatina uygun yazınız.",
      regex: /^([0-9]{10,14})$/,
    },
  },
  Konu: {
    isRequired: "Lütfen bir konu seçiniz.",
  },
  Mesaj: {
    isRequired: "Lütfen mesajınızı yazınız.",
  },
};
export class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.togglePopup()
    }, 5000)
  }
  state = {
    AdSoyad: "",
    Email: "",
    Telefon: "",
    Konu: "",
    Mesaj: "",
    popUpModal: false,
  };
  handleSubmit = ({ fields, errors, isValid }) => {
    if (isValid) {
      const mailgunheaders = {
        "Content-Type": "application/json",
      };

      const data = {
        from: "DogGO App <no-reply@doggoapp.com>",
        to: this.state.Email,
        subject: "Talebinizi Aldık!",
        text:
          "Merhaba " +
          this.state.AdSoyad +
          "! \n \nMesajınızı aldık! DogGO'ya gösterdiğiniz ilgi için teşekkür ederiz. Sizinle en kısa zamanda iletişime geçeceğiz. \n \nMutlu günler dileriz! \n \nDogGO İnternet Hiz. Paz. ve Tic. A.Ş \nCaferağa Mah., Murat Bey Sk., Merih Apt. No:18/1, 34710 Kadıköy/ İstanbul \n+90 542 503 64 46",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const body = {
        from: "Doggo App no-reply@doggoapp.com",
        to: "officeteam@doggoapp.com",
        subject: "Bize Ulaşın - Websitesi - " + this.state.AdSoyad,
        text:
          "Isim Soyisim : " +
          this.state.AdSoyad +
          "\n" +
          "Email : " +
          this.state.Email +
          "\n" +
          "Telefon : " +
          this.state.Telefon +
          "\n" +
          "Konu : " +
          this.state.Konu +
          "\n" +
          "Mesaj : " +
          this.state.Mesaj,
      };
    } else {
      console.log("Something is wrong:", errors);
    }
  };

  togglePopup = () => {
    this.setState({
      popUpModal: !this.state.popUpModal
    })
  }

  render() {
    const popUpModal = this.state.popUpModal;
    const { togglePopup } = this
    return (
      <>
        {
          popUpModal ? (
            
            <PopUp handleClose={togglePopup} />
          ) : null
        }
        <div className={popUpModal ? 'popOpen': null}></div>
          <Helmet>
            <meta charSet="utf-8" />
            <title>
              DogGO - Türkiye'nin İlk ve Tek Köpek Gezdirme Uygulaması
            </title>
            <link rel="canonical" href="https://www.doggoapp.com/" />
            <meta
              name="description"
              content="DogGO, mobil uygulama üzerinden köpek sahiplerine güvenli ve profesyonel şekilde köpek gezdirme ve bakım hizmeti sunan Türkiye'deki ilk şirkettir."
            ></meta>
          </Helmet>
          <section
            className="sec-logo sec-2-bg  sec-1-bg doggo-color-thi"
            ref="1"
            id="1"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div className="row">
                    <h1>
                      DogGO <b>Nedir?</b>
                    </h1>
                  </div>
                  <div className="row">
                    <h5>
                      DogGO, mobil uygulama üzerinden köpek sahiplerine güvenli ve
                      profesyonel şekilde köpek gezdirme ve bakım hizmeti sunan
                      Türkiye’deki ilk şirkettir.
                    </h5>
                  </div>
                  <div className="row logo-div">
                    <div className="row">
                      <div className="col-md-4 col-lg-4 col-xl-4 no-padding ">
                        <a
                          href="https://itunes.apple.com/us/app/doggo/id1321405113?ls=1&mt=8"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <img
                            src={ios}
                            alt="app-store"
                            className="home-mobil-photo img-responsive"
                          />
                        </a>
                      </div>
                      <div className="col-md-4 col-lg-4 col-xl-4 no-padding">
                        <a
                          href="https://play.google.com/store/apps/details?id=com.doggoapp.owner"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <img
                            src={android}
                            alt="android logo"
                            className="home-mobil-photo img-responsive"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1">
                  <img
                    src={mobile}
                    alt="mobile"
                    className="display-none mobile-style"
                  />
                </div>
              </div>
            </div>
          </section>
          <hr />
          <section className="  container">
            <div className="logo-container justify-content-around">
              <div className="box column-center cakbipati">
                <img
                  src={cakbipaticon}
                  alt="Second slide"
                  className="logo-style"
                />
              </div>
              <div className="box column-center bupaw">
                <img src={bupaw} alt="Second slide" className="logo-style" />
              </div>
              <div className="box column-center kadikoy">
                <img src={kadikoy} alt="Second slide" className="logo-style" />
              </div>
              <div className="box column-center kafein">
                <img src={kafein} alt="Second slide" className=" logo-style" />
              </div>
              <div className="box column-center patibirligi">
                <img
                  src={patibirligi}
                  alt="Second slide"
                  className="logo-style"
                />
              </div>
              <div className="box column-center kalamis">
                <img src={kalamis} alt="Second slide" className="logo-style" />
              </div>
            </div>
          </section>
          <hr />
          <section className="sec doggo-color-thi-bg" ref="2" id="2">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div>
                    <div className="row">
                      <h1 className="doggo-color-main doggo-h1">
                        DogGO İLE BEŞİKTAŞ’TA ISINMA TURLARI BAŞLADI!
                      </h1>
                    </div>
                    <div className="row">
                      <h5 className="doggo-color-fiv">
                        DogGO, Beşiktaş’ta da köpek gezdirmeye başladı. Köpeğinize
                        en uygun gezdiricilerle
                        <span className="doggo-color-main"> 45 dakika</span> bire
                        bir gezdirmenin gelirinin bir bölümü
                        <span className="doggo-color-main"> ÇAKbiPATİ </span>ile
                        sokak ve barınaklardaki dostlarımıza gidiyor!
                      </h5>
                    </div>
                    <div className="row">
                      <h5 className="doggo-color-main">
                        <b>
                          Köpeğinin gezdirilmesi icin planini yap, hem köpeğin;
                          hem de barınaklardaki dostlarımız mutlu olsun!
                        </b>
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 ">
                  <img
                    src={cakbipati}
                    alt="doghouse"
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn doggo-btn doggo-color-fou-bg"
                >
                  <a href="/gezdirme-planla">
                    GEZDİRME PLANI YAPMAK İÇİN TIKLAYIN!
                  </a>
                </button>
              </div>
            </div>
          </section>
          <section className="sec" id="3" ref="3" name="3">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <div className="row">
                    <h1 className="doggo-color-main">
                      Neden <b>DogGO?</b>
                    </h1>
                  </div>
                  <img
                    src={walkingdog}
                    alt="man-with-dog"
                    className="img-responsive"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 offset-md-1 offset-lg-1 offset-xl-1">
                  <div className="home-pati-list-margin">
                    <div className="row">
                      <ul className="doggo-list doggo-color-fiv">
                        <li>DogGO'da gezdirmeleri bire bir yapıyoruz.</li>
                        <li>
                          Gezdiricilerimizin adli sicil kayıtlarını kontrol ediyor
                          ve ekibimizi DogGO’nun özel oryantasyondan geçiriyoruz.
                        </li>
                        <li>
                          DogGO uygulaması üzerinden köpeğinizi takip edebiliyor
                          ve anlık fotoğrafını isteyebiliyorsunuz.
                        </li>
                        <li>
                          Gezdirme sonunda; katedilen toplam mesafe, tuvalet
                          durumu ve benzeri bilgilerin bulunduğu gezdirme raporunu
                          paylaşıyoruz.
                        </li>
                      </ul>
                    </div>
                    <div className="row">
                      <h5 className="doggo-color-main">
                        <b>
                          Böylelikle, köpeğiniz güvenli ve mutlu bir DogGO
                          yürüyüşü geçirmenin keyfini yaşıyor!
                        </b>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec doggo-color-thi-bg" ref="4" id="4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div>
                    <div className="row">
                      <h1 className="doggo-color-main">
                        DogGO <b>Ailesine Katıl!</b>
                      </h1>
                    </div>
                    <div className="row doggo-color-fiv">
                      <h6>
                        Köpekleri çok seviyoruz! Tıpkı bizim gibi bu sevgiyi
                        paylaşan, aynı zamanda da yeni bir gelir kapısı arayan
                        arkadaşlarımızı DogGO ailesine bekliyoruz.
                      </h6>
                      <h6>
                        Mobil uygulamamız üzerinden özelliklerinize uygun olarak
                        eşleştiğiniz köpekleri gezdirirken hem para kazanacak hem
                        de keyifli vakit geçirebileceksiniz.
                      </h6>
                      <h6>
                        Tecrübeli köpek eğitmenleri tarafından hazırlanan müfredat
                        kapsamında alacağınız DogGO oryantasyonu ile beraber siz
                        de DogGO Walker olabilirsiniz!
                      </h6>
                      <h6>
                        Alternatif bir çalışma ortamı ve köpek dostlarımız sizi
                        bekliyor!
                      </h6>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 ">
                  <img
                    src={girlwalkingdog}
                    alt="family"
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="d-flex justify-content-center">
                <button
                  type="button"
                  className="btn doggo-btn doggo-color-main-bg"
                >
                  <NavLink to="/doggo-walker">
                    DogGO WALKER OLMAK İÇİN TIKLAYIN!
                  </NavLink>
                </button>
              </div>
            </div>
          </section>
          <section className="sec doggo-color-main-bg" ref="5" id="5">
            <div className="container">
              <div className="text-center">
                <h2 className="doggo-color-thi heading-font-size">
                  <b>Gezdirme Türleri</b>
                </h2>
                <h5 className="doggo-color-thi">
                  DogGO’da size uygun bir seçenek mutlaka bulunuyor. İster Anlık,
                  ister Planlı, isterseniz de Devamlı seçeneklerinden birini
                  tercih edebilirsiniz.
                </h5>
                <div className="card-group">
                  <div className="card mx-auto">
                    <img
                      className="card-img-top mx-auto"
                      src={location}
                      alt="location"
                    />
                    <div className="card-body">
                      <h3 className="card-title doggo-color-main">
                        <b>Anlık</b>
                      </h3>
                      <hr className="hr-card" />
                      <p className="card-text doggo-color-fiv">
                        <b>1 saat içinde </b>
                        DogGO Walker’ımız köpeğinizi gezdirmek için evinizde!
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img className="card-img-top mx-auto" src={time} alt="time" />
                    <div className="card-body">
                      <h3 className="card-title doggo-color-main">
                        <b>Planlı</b>
                      </h3>
                      <hr className="hr-card" />
                      <p className="card-text doggo-color-fiv">
                        Belirlediğiniz <b>ileri bir tarihte</b> köpeğinizi
                        gezdirmek için hazırız!
                      </p>
                    </div>
                  </div>
                  <div className="card">
                    <img
                      className="card-img-top mx-auto"
                      src={celendar}
                      alt="celendar"
                    />
                    <div className="card-body">
                      <h3 className="card-title doggo-color-main">
                        <b>Paket</b>
                      </h3>
                      <hr className="hr-card" />
                      <p className="card-text doggo-color-fiv">
                        Bir ay boyunca{" "}
                        <b>Her Gün Günde 1 Kez ya da Her Gün Günde 2 Kez</b>{" "}
                        köpeğinizi gezdirmek için hazırız!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec doggo-color-thi-bg" ref="6" id="6">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <img
                    src="data:image/png;base64,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"
                    alt="man-with-dog"
                    className="img-responsive middle home-photo-size image-margin"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 offset-md-1 offset-lg-1 offset-xl-1">
                  <div>
                    <div className="row">
                      <h2 className="heading-font-size doggo-color-main">
                        <b>Yardımsever</b> DogGO
                      </h2>
                    </div>
                    <div className="row doggo-color-fiv">
                      <h6>
                        DogGO olarak evdeki köpeklerimiz için hissettiğimiz
                        sorumluluğu, barınaklardaki ve sokaklardaki köpekler için
                        de hissediyoruz.
                      </h6>
                      <h6>
                        Bu sorumluluk duygusuyla DogGO’da yapılan her gezdirme
                        sonunda elde edilen gelirin bir bölümünü bakım ihtiyacı
                        duyan köpekler ile paylaşıyoruz.
                      </h6>
                      <h6>
                        Öncelikli olarak belediyelerle ve üniversitelerdeki
                        arkadaşlarımızla gerçekleştirdiğimiz projelere destek
                        vererek onlara yardım edebilir ve hayatlarını
                        güzelleştirme yolunda bize ortak olabilirsiniz.
                      </h6>
                      <h6>
                        Çalışmalarımıza gönüllü olarak katılabilir, fikirleriniz
                        ve desteklerinizle projelerin hayata geçirilmesinde rol
                        oynayabilirsiniz.
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec" ref="7" id="7">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <div className="row">
                    <h1 className="doggo-color-main">
                      DogGO <b>Garantisi</b>
                    </h1>
                    <h5 className="doggo-color-fiv">
                      DogGO olarak köpeğinize olan hassasiyetinizi paylaşıyor ve
                      bunu misyonumuz haline getiriyoruz!
                    </h5>
                  </div>
                  <img
                    src="data:image/png;base64,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"
                    alt="guarantee"
                    className="img-responsive home-photo-size image-margin"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 offset-md-1 offset-lg-1 offset-xl-1">
                  <div>
                    <div>
                      <h5 className="doggo-color-sec">DogGO Garantisi ile;</h5>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <img
                          src={thumb}
                          alt="thumb"
                          className="img-responsive home-list-photo-size"
                        />
                      </div>
                      <div className="col-md-9 col-lg-9 col-xl-9">
                        <h6 className="doggo-color-fiv">
                          IBPSA üyesi olan tecrübeli köpek eğitmenleri tarafindan
                          verilen oryantasyonu başarıyla tamamlayan Walker'lar ile
                          gezdirmelerimizi gerçekleştiriyoruz.
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <img
                          src="data:image/png;base64,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"
                          alt="iyzico"
                          className="img-responsive home-list-photo-size"
                        />
                      </div>
                      <div className="col-md-9 col-lg-9 col-xl-9">
                        <h6 className="doggo-color-fiv">
                          İyzico güvencesiyle gerçekleşen Online Ödeme seçeneği
                          ile kişisel bilgilerinizi koruma altında tutuyoruz.
                        </h6>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 col-lg-3 col-xl-3">
                        <img
                          src={conversation}
                          alt="conversation"
                          className="img-responsive home-list-photo-size"
                        />
                      </div>
                      <div className="col-md-9 col-lg-9 col-xl-9">
                        <h6 className="doggo-color-fiv">
                          Müşteri Hizmetleri desteğimizle yaşayabileceğiniz tüm
                          sorunlara hızlı çözümler üretiyoruz.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="sec doggo-color-thi-bg" ref="8" id="8">
            <div className="container">
              <div className="row">
                <div className="col-md-5 col-lg-5 col-xl-5">
                  <h2 className="heading-font-size doggo-color-main">
                    {" "}
                    Bize <b>Ulaşın!</b>{" "}
                  </h2>
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAAG4CAYAAABW5K0AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiY2MxNDE3Ni04MzExLTQzZmUtOThkOS0zZTcwMDUzNzVhYWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzBDQTQzODg4OUEwMTFFODhCNkVBNTU2MzlGNkFCNTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzBDQTQzODc4OUEwMTFFODhCNkVBNTU2MzlGNkFCNTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M2RlZGIwNS1jN2Q5LTQyM2QtYjRjNy1lMzU1NzUyNmI5NTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MjAxZTU4Ni02NzBlLTgwNGQtYjEy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"
                    alt="kapida bekleyen bir kopek"
                    className="img-responsive display-none doggo-dog-margin"
                  />
                </div>
                <div className="col-md-6 col-lg-6 col-xl-6 offset-md-1 offset-lg-1 offset-xl-1">
                  <FormValidation
                    name="plan"
                    config={config}
                    onSubmit={this.handleSubmit}
                  >
                    {({ errors, submitted }) => (
                      <Fragment>
                        <div className="form-group row">
                          <input
                            type="text"
                            name="AdSoyad"
                            onChange={(e) =>
                              this.setState({ AdSoyad: e.target.value })
                            }
                            className="form-control"
                            placeholder="Ad-Soyad*"
                            id="AdSoyad"
                          />
                          {submitted && errors.AdSoyad && (
                            <span className="error">{errors.AdSoyad}</span>
                          )}
                        </div>
                        <div className="form-group row">
                          <input
                            type="email"
                            name="Email"
                            className="form-control"
                            placeholder="E-mail*"
                            id="Email"
                            onChange={(e) =>
                              this.setState({ Email: e.target.value })
                            }
                          />
                          {submitted && errors.Email && (
                            <span className="error">{errors.Email}</span>
                          )}
                        </div>
                        <div className="form-group row">
                          <input
                            type="tel"
                            name="Telefon"
                            placeholder="Telefon*"
                            className="form-control"
                            onChange={(e) =>
                              this.setState({ Telefon: e.target.value })
                            }
                          />
                          {submitted && errors.Telefon && (
                            <span className="error">{errors.Telefon}</span>
                          )}
                        </div>
                        <div className="form-group row">
                          <label placeholder="Konu*"></label>

                          <select
                            className="form-control"
                            name="Konu"
                            placeholder=""
                            value={this.state.Konu}
                            onChange={(e) =>
                              this.setState({ Konu: e.target.value })
                            }
                            id="Konu"
                          >
                            <option hidden={true}>Konu</option>
                            <option>Soru</option>
                            <option>Öneri</option>
                            <option>Şikayet</option>
                          </select>
                          {submitted && errors.Konu && (
                            <span className="error">{errors.Konu}</span>
                          )}
                        </div>
                        <div className="form-group row">
                          <textarea
                            className="form-control"
                            name="Mesaj"
                            id="Mesaj"
                            rows="3"
                            placeholder="Mesaj"
                            onChange={(e) =>
                              this.setState({ Mesaj: e.target.value })
                            }
                          />
                          {submitted && errors.Mesaj && (
                            <span className="error">{errors.Mesaj}</span>
                          )}
                        </div>
                        <div className="form-group row">
                          <div className=" text-center">
                            <button
                              type="submit"
                              id="submit"
                              name="submit"
                              className="btn doggo-btn-scd doggo-color-main-bg"
                            >
                              GÖNDER
                            </button>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </FormValidation>
                  <div className="row">
                    <ul className="social-media-size">
                      <li>
                        {" "}
                        <a
                          href="https://www.facebook.com/DogGOTR/"
                          target="_blank"
                          alt="facebook logo"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={facebook}
                            alt="facebook-icon"
                            className="img-responsive"
                          />
                        </a>
                      </li>

                      <li>
                        {" "}
                        <a
                          href="https://twitter.com/DogGOTR"
                          target="_blank"
                          alt="twitter logo"
                          rel="noopener noreferrer"
                        >
                          {" "}
                          <img
                            src={twitter}
                            alt="twitter icon"
                            className="img-responsive"
                          />
                        </a>
                      </li>

                      <li>
                        {" "}
                        <a
                          href="https://instagram.com/doggotr?utm_source=ig_profile_share&igshid=bl2i66knma26"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src={instagram}
                            alt="instagram-icon"
                            className="img-responsive"
                          />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        
      </>
    );
  }
}
export default Home;
