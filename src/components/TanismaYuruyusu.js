import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Walker.css";
import { FormValidation } from "calidation";

const config = {
  AdSoyad: {
    isRequired: "Lütfen adınız ve soyadınızı yazınız.",
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
  YasadiginizIlce: {
    isRequired: "Lütfen yaşadığınız ilçeyi seçiniz.",
  },
};

export class TanismaYuruyusu extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor() {
    super();
    this.state = {
      AdSoyad: "",
      Email: "",
      Telefon: "",
      YasadiginizIlce: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  UygunGunChanged = (nextStateUygunGun) => {
    this.setState({
      UygunGun: nextStateUygunGun,
    });
  };

  UygunSaatChanged = (nextStateUygunSaat) => {
    this.setState({
      UygunSaat: nextStateUygunSaat,
    });
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
          "!\n \nBaşvurunuz bize ulaştı! \n \nKöpeğiniz ile tanışmak için sabırsızlanıyoruz. DogGO'ya gösterdiğiniz ilgi için teşekkür ederiz. Sizinle en kısa zamanda iletişime geçeceğiz.\n \nMutlu günler dileriz! \n \nDogGO İnternet Hiz. Paz. ve Tic. A.Ş \nCaferağa Mah., Murat Bey Sk., Merih Apt. No:18/1, 34710 Kadıköy/ İstanbul \n+90 542 503 64 46",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const body = {
        from: "DogGO App no-reply@doggoapp.com",
        to: "officeteam@doggoapp.com",
        subject:
          "M&G - " + this.state.YasadiginizIlce + " " + this.state.AdSoyad,
        text:
          "Isim : " +
          this.state.AdSoyad +
          "\n" +
          "Email : " +
          this.state.Email +
          "\n" +
          "Telefon : " +
          this.state.Telefon +
          "\n" +
          "YasadiginizIlce : " +
          this.state.YasadiginizIlce,
      };
    } else {
      console.log("Something is wrong:", errors);

      document.getElementById("form").scrollIntoView();
    }
  };

  render() {
    return (
      <React.Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Ücretsiz Yürüyüş Planlamak için tıklayın - Türkiye'nin İlk ve Tek
            Köpek Gezdirme Uygulaması
          </title>
          <link
            rel="canonical"
            href="https://www.doggoapp.com/tanisma-yuruyusu"
          />
          <meta
            name="description"
            content="DogGO ile ücretsiz tanışma yürüyüşü planla!"
          ></meta>
          <meta
            http-equiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
        </Helmet>
        <section id="body-color">
          <section className="sec-header dont-display-x doggo-color-thi-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-lg-6 col-xl-6">
                  <div>
                    <div className="row">
                      <h1 className="doggo-color-snd plan-h2-2-font-size">
                        <b>Ücretsiz Tanışma</b>
                      </h1>

                      <h2 className="doggo-color-main plan-h1-font-size">
                        <b>Yürüyüşüne Başla!</b>
                      </h2>
                    </div>
                    <div className="row">
                      <h5 className="doggo-color-fiv">
                        {" "}
                        Sadık dostunuzun sizin için önemini biliyoruz ve güvene
                        ihtiyaç duyduğunuzun farkındayız!
                        <span className="doggo-color-main">
                          {" "}
                          Ücretsiz Tanışma Yürüyüşü
                        </span>{" "}
                        planlayarak hem DogGO'yu tanıma fırsatı yakalayın hem de
                        Walker Direktörümüz köpeğinize en uygun eşleşmeyi
                        gerçekleştirsin.{" "}
                      </h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-5 col-lg-5 col-xl-5 offset-md-1 offset-lg-1 offset-xl-1 ">
                  <video
                    alt="DogGO tanisma yuruyusu"
                    className="tanisma-video img-responsive"
                    loop
                    autoPlay
                    muted
                    src="https://cdn.shopify.com/s/files/1/0015/0005/3617/files/tanismayuruyusu.mp4?2024775631858840624"
                  ></video>
                </div>
              </div>
            </div>
          </section>
          <section className="sec-header doggo-color-thi-bg dont-display-y  container">
            <div className="box column-center">
              <h1 className="doggo-color-snd plan-h2-2-font-size">
                <b>Ücretsiz Tanışma</b>
              </h1>

              <h2 className="doggo-color-main plan-h1-font-size">
                <b>Yürüyüşüne Başla!</b>
              </h2>
            </div>
            <div className="logo-container justify-content-around">
              <div className="box column-center">
                <iframe
                  className="tanisma-video img-responsive"
                  title="DogGO tanışma yürüyüşü"
                  src="https://www.youtube.com/embed/D7VCNoUqRaE?rel=0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
              <div className="box column-center">
                <h5 className="doggo-color-fiv">
                  {" "}
                  Sadık dostunuzun sizin için önemini biliyoruz ve güvene
                  ihtiyaç duyduğunuzun farkındayız!
                  <span className="doggo-color-main">
                    {" "}
                    Ücretsiz Tanışma Yürüyüşü
                  </span>{" "}
                  planlayarak hem DogGO'yu tanıma fırsatı yakalayın hem de
                  Walker Direktörümüz köpeğinize en uygun eşleşmeyi
                  gerçekleştirsin.{" "}
                </h5>
              </div>
            </div>
          </section>
          <section>
            <div id="form" className="row">
              <div className="container text-center">
                <h2 className="doggo-color-main">
                  <b>ŞİMDİ SEN DE BİR ÜCRETSİZ TANIŞMA YÜRÜYÜŞÜ PLANLA!</b>
                </h2>
                <h5 className="doggo-color-fiv">
                  Köpek ve Köpek Sahibi Bilgileri{" "}
                </h5>
              </div>
            </div>
          </section>
          <section className=" container">
            <FormValidation
              name="plan"
              config={config}
              onSubmit={this.handleSubmit}
            >
              {({ errors, submitted }) => (
                <Fragment>
                  <div className="form-group row">
                    <label
                      htmlFor="first-name"
                      className=" col-md-3 col-form-label"
                    >
                      Adınız Soyadınız*
                    </label>
                    <div className=" col-md-9">
                      <input
                        type="text"
                        name="AdSoyad"
                        className="form-control"
                        onChange={this.handleChange}
                      />
                      {submitted && errors.AdSoyad && (
                        <span className="error">{errors.AdSoyad}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="mobile" className="col-md-3 col-form-label">
                      Telefon* (532 55 55 55)
                    </label>
                    <div className="col-md-9">
                      <input
                        type="tel"
                        name="Telefon"
                        className="form-control"
                        id="mobile"
                        onChange={this.handleChange}
                      />
                      {submitted && errors.Telefon && (
                        <span className="error">{errors.Telefon}</span>
                      )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label htmlFor="email" className="col-md-3 col-form-label">
                      E-mail Adresiniz*
                    </label>
                    <div className="col-md-9">
                      <input
                        type="email"
                        name="Email"
                        className="form-control"
                        id="email"
                        onChange={this.handleChange}
                      />
                      {submitted && errors.Email && (
                        <span className="error">{errors.Email}</span>
                      )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      htmlFor="district"
                      className="col-md-3 col-form-label"
                    >
                      Yaşadığınız İlçe*
                    </label>
                    <div className="col-md-9">
                      <select
                        className="form-control"
                        name="YasadiginizIlce"
                        id="YasadiginizIlce"
                        onChange={this.handleChange}
                        required
                      >
                        <option hidden={true}>Seçiniz</option>
                        <option>Adalar</option>
                        <option>Arnavutköy</option>
                        <option>Ataşehir</option>
                        <option>Avcılar</option>
                        <option>Bağcılar</option>
                        <option>Bahçelievler</option>
                        <option>Bakırköy</option>
                        <option>Başakşehir</option>
                        <option>Bayrampaşa</option>
                        <option>Beşiktaş</option>
                        <option>Beykoz</option>
                        <option>Beylikdüzü</option>
                        <option>Beyoğlu</option>
                        <option>Büyükçekmece</option>
                        <option>Çatalca</option>
                        <option>Çekmeköy</option>
                        <option>Esenler</option>
                        <option>Esenyurt</option>
                        <option>Eyüp</option>
                        <option>Fatih</option>
                        <option>Gaziosmanpaşa</option>
                        <option>Güngören</option>
                        <option>Kadıköy</option>
                        <option>Kâğıthane</option>
                        <option>Kartal</option>
                        <option>Küçükçekmece</option>
                        <option>Maltepe</option>
                        <option>Pendik</option>
                        <option>Sancaktepe</option>
                        <option>Sarıyer</option>
                        <option>Silivri</option>
                        <option>Sultanbeyli</option>
                        <option>Sultangazi</option>
                        <option>Şile</option>
                        <option>Şişli</option>
                        <option>Tuzla</option>
                        <option>Ümraniye</option>
                        <option>Üsküdar</option>
                        <option>Zeytinburnu</option>
                      </select>
                      {submitted && errors.YasadiginizIlce && (
                        <span className="error">{errors.YasadiginizIlce}</span>
                      )}
                    </div>
                  </div>

                  <div className="form-group row">
                    <div className="col text-center">
                      <button
                        type="submit"
                        className="btn doggo-btn doggo-color-main-bg"
                      >
                        GÖNDER
                      </button>
                    </div>
                  </div>
                </Fragment>
              )}
            </FormValidation>
          </section>
        </section>
      </React.Fragment>
    );
  }
}
export default TanismaYuruyusu;
