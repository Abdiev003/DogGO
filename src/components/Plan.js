import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./Walker.css";
import { FormValidation } from "calidation";
import cakbipati from "../DogGO-Website/assets/sec-2-1.png";

const config = {
  AdSoyad: {
    isRequired: "Lütfen adınızı yazınız.",
  },
  KopekAdi: {
    isRequired: "Lütfen köpeğinizin adını yazınız.",
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
  Semt: {
    isRequired: "Lütfen yaşadığınız semti yazınız.",
  },
  KopekCinsi: {
    isRequired: "Lütfen köpeğinizin cinsini seçiniz.",
  },
  KopekKilosu: {
    isRequired: "Lütfen köpeğinizin hangi kilo grubunda olduğunu seçiniz.",
  },
};

export class Plan extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }
  constructor() {
    super();
    this.state = {
      AdSoyad: "",
      KopekAdi: "",
      Email: "",
      Telefon: "",
      Semt: "",
      KopekCinsi: "",
      KopekKilosu: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

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
          "!\n \nBaşvurunuz bize ulaştı! \n \n" +
          this.state.KopekAdi +
          " ile tanışmak için sabırsızlanıyoruz. DogGO'ya gösterdiğiniz ilgi için teşekkür ederiz. Sizinle en kısa zamanda iletişime geçeceğiz.\n \nMutlu günler dileriz! \n \nDogGO İnternet Hiz. Paz. ve Tic. A.Ş \nCaferağa Mah., Murat Bey Sk., Merih Apt. No:18/1, 34710 Kadıköy/ İstanbul \n+90 542 503 64 46",
      };

      const headers = {
        "Content-Type": "application/json",
      };
      const body = {
        from: "DogGO App no-reply@doggoapp.com",
        to: "officeteam@doggoapp.com",
        subject: "BJK Gezdirme Planla - " + this.state.Semt,
        text:
          "Isim : " +
          this.state.AdSoyad +
          "\n" +
          "KopekAdi : " +
          this.state.KopekAdi +
          "\n" +
          "Email : " +
          this.state.Email +
          "\n" +
          "Telefon : " +
          this.state.Telefon +
          "\n" +
          "Semt : " +
          this.state.Semt +
          "\n" +
          "Kopegin Cinsi : " +
          this.state.KopekCinsi +
          "\n" +
          "Kopegin Kilosu : " +
          this.state.KopekKilosu,
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
            Gezdirme Planlamak için tıklayın - Türkiye'nin İlk ve Tek Köpek
            Gezdirme Uygulaması
          </title>
          <link
            rel="canonical"
            href="https://www.doggoapp.com/gezdirme-planla"
          />
          <meta
            name="description"
            content="ŞİMDİ SEN DE BİR GEZDİRME PLANLA!"
          ></meta>
          <meta
            http-equiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
        </Helmet>
        <section className="sec-header doggo-color-thi-bg">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-6 col-xl-6">
                <div>
                  <div className="row">
                    <h1 className="doggo-color-snd plan-h1-font-size">
                      <b>Beşiktaş'ın köpeklerini</b>
                    </h1>

                    <h2 className="doggo-color-main plan-h2-2-font-size">
                      <b>GEZDİRİYORUZ!</b>
                    </h2>
                  </div>
                  <div className="row">
                    <h5 className="doggo-color-fiv">
                      DogGO’nun köpek dostu, verdiğimiz oryantasyona katılmış
                      DogGO Walkerlarıyla gerçekleşecek 45 dakikalık bire bir
                      gezdirmelerin gelirinin bir bölümü köpek dostlarının
                      adıyla
                      <span className="doggo-color-main">
                        <b> ÇAKbiPATİ’ye bağışlanacak. </b>
                      </span>
                    </h5>
                  </div>
                  <div className="row">
                    <h5 className="doggo-color-main">
                      <b>
                        Sen de köpeğinin, dostlarını kurtaran bir kahraman
                        olmasını sağlayabilirsin!
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
          </div>
        </section>
        <section>
          <div id="form" className="row">
            <div className="container text-center">
              <h2 className="doggo-color-main">
                <b>ŞİMDİ SEN DE BİR GEZDİRME PLANLA!</b>
              </h2>
              <h5 className="doggo-color-fiv">Köpek Sahibi Bilgileri </h5>
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
                      id="first-name"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.AdSoyad && (
                      <span className="error">{errors.AdSoyad}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="surname" className="col-md-3 col-form-label">
                    Köpeğinizin Adı*
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="KopekAdi"
                      className="form-control"
                      id="surname"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.KopekAdi && (
                      <span className="error">{errors.KopekAdi}</span>
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
                      onChange={this.handleChange}
                      className="form-control"
                      id="mobile"
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
                      onChange={this.handleChange}
                      id="email"
                    />
                    {submitted && errors.Email && (
                      <span className="error">{errors.Email}</span>
                    )}
                  </div>
                </div>

                <div className="form-group row">
                  <label htmlFor="town" className="col-md-3 col-form-label">
                    Mahalle*
                  </label>
                  <div className="col-md-9">
                    <textarea
                      className="form-control"
                      name="Semt"
                      id="town"
                      onChange={this.handleChange}
                      rows="1"
                    />
                    {submitted && errors.Semt && (
                      <span className="error">{errors.Semt}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="kopegincinsi"
                    className="col-md-3 col-form-label"
                  >
                    Köpeğinizin Cinsi*
                  </label>
                  <div className="col-md-9">
                    <select
                      className="form-control"
                      name="KopekCinsi"
                      id="kopegincinsi"
                      onChange={this.handleChange}
                    >
                      <option hidden={true}>Seçiniz</option>
                      <option>Affenpinscher</option>
                      <option>Afghan Hound</option>
                      <option>Airedale Terrier</option>
                      <option>Akita</option>
                      <option>Alaska Malamutu</option>
                      <option>Alaskan Klee Kai</option>
                      <option>Alman Çoban</option>
                      <option>Amerikan Bulldog</option>
                      <option>Amerikan Eskimo</option>
                      <option>Amerikan Foxhound </option>
                      <option>Amerikan İngiliz Coonhound</option>
                      <option>Amerikan Pit Bull Terrier</option>
                      <option>Amerikan Staffordshire Terrier</option>
                      <option>Amerikan Water Spaniel</option>
                      <option>Anadolu Çoban</option>
                      <option>Appenzeller Sennenhunde</option>
                      <option>Avustralya Çoban</option>
                      <option>Avustralya Kelpie</option>
                      <option>Avustralya Terrier</option>
                      <option>Azawakh</option>
                      <option>Barbet</option>
                      <option>Basenji</option>
                      <option>Basset Hound</option>
                      <option>Beagle</option>
                      <option>Bearded Collie</option>
                      <option>Bedlington Terrier</option>
                      <option>Belçika Çoban</option>
                      <option>Belçika Malinois</option>
                      <option>Belçika Tervuren</option>
                      <option>Bernedoodle</option>
                      <option>Bernese Dağ Köpeği</option>
                      <option>Bichon Bolognese</option>
                      <option>Bişon çuha köpeği</option>
                      <option>Black Mouth Cur</option>
                      <option>Bloodhound</option>
                      <option>Blue Lacy</option>
                      <option>Boerboel</option>
                      <option>Border Collie</option>
                      <option>Border Terrier</option>
                      <option>Borzoi</option>
                      <option>Boston Terrier</option>
                      <option>Boxer</option>
                      <option>Boykin Spaniel</option>
                      <option>Bracco Italiano</option>
                      <option>Briard</option>
                      <option>Brittany</option>
                      <option>Brussels Griffon</option>
                      <option>Bull Terrier</option>
                      <option>Bulldog</option>
                      <option>Bullmastiff</option>
                      <option>Cairn Terrier</option>
                      <option>Canaan Dog</option>
                      <option>Cane Corso</option>
                      <option>Cardigan Welsh Corgi</option>
                      <option>Catahoula Leopard Dog</option>
                      <option>Cavalier King Charles Spaniel</option>
                      <option>Cesky Terrier</option>
                      <option>Chesapeake Bay Retriever</option>
                      <option>Chihuahua</option>
                      <option>Chinese Crested</option>
                      <option>Chinook</option>
                      <option>Chow Chow</option>
                      <option>Clumber Spaniel</option>
                      <option>Cockapoo</option>
                      <option>Cocker Spaniel</option>
                      <option>Collie</option>
                      <option>Coton de Tulear</option>
                      <option>Curly-Coated Retriever</option>
                      <option>Dachshund</option>
                      <option>Dalmaçya</option>
                      <option>Dandie Dinmont Terrier</option>
                      <option>Doberman Pinscher</option>
                      <option>Dogo Argentino</option>
                      <option>Dogue de Bordeaux</option>
                      <option>Dutch Shepherd</option>
                      <option>English Cocker Spaniel</option>
                      <option>English Foxhound</option>
                      <option>English Setter</option>
                      <option>English Springer Spaniel</option>
                      <option>English Toy Spaniel</option>
                      <option>Entlebucher Mountain Dog</option>
                      <option>Eski İngiliz Çoban Köpeği</option>
                      <option>Fare Terrier</option>
                      <option>Field Spaniel</option>
                      <option>Finnish Lapphund</option>
                      <option>Finnish Spitz</option>
                      <option>Flandre Çoban </option>
                      <option>Flat-Coated Retriever</option>
                      <option>Fox Terrier</option>
                      <option>French Bulldog</option>
                      <option>Galler Springer Spaniel</option>
                      <option>Galler Terrier</option>
                      <option>German Pinscher</option>
                      <option>German Shorthaired Pointer</option>
                      <option>German Wirehaired Pointer</option>
                      <option>Giant Schnauzer</option>
                      <option>Glen of Imaal Terrier</option>
                      <option>Goldador</option>
                      <option>Golden Retriever</option>
                      <option>Goldendoodle</option>
                      <option>Gordon Setter</option>
                      <option>Great Dane</option>
                      <option>Great Pyrenees</option>
                      <option>Greater Swiss Mountain Dog</option>
                      <option>Greyhound</option>
                      <option>Harrier</option>
                      <option>Havanese</option>
                      <option>Ibizan Hound</option>
                      <option>Icelandic Sheepdog</option>
                      <option>İpek Terrier</option>
                      <option>Irish Red and White Setter</option>
                      <option>Irish Setter</option>
                      <option>Irish Terrier</option>
                      <option>Irish Water Spaniel</option>
                      <option>Irish Wolfhound</option>
                      <option>İskoç Geyik Tazısı</option>
                      <option>İsveç Vallhund</option>
                      <option>Italian Greyhound</option>
                      <option>Jack Russell Terrier</option>
                      <option>Japon Chin</option>
                      <option>Japon Spitz</option>
                      <option>Kafkas Çoban Köpeği</option>
                      <option>Karelistan Ayı Köpeği</option>
                      <option>Keeshond</option>
                      <option>Kerry Mavi Terrier</option>
                      <option>Komondor</option>
                      <option>Kooikerhondje</option>
                      <option>Kore Jindo Köpeği</option>
                      <option>Küçük Munsterlander Pointer</option>
                      <option>Kuvasz</option>
                      <option>Labradoodle</option>
                      <option>Labrador Retriever</option>
                      <option>Lagotto Romagnolor</option>
                      <option>Lakeland Terrier</option>
                      <option>Lancashire Heeler</option>
                      <option>Leonberger</option>
                      <option>Lhasa Apso</option>
                      <option>Lowchen</option>
                      <option>Maltese</option>
                      <option>Maltese Shih Tzu</option>
                      <option>Maltipoo</option>
                      <option>Manchester Terrier</option>
                      <option>Mastiff</option>
                      <option>Mini Beagle</option>
                      <option>Miniature Pinscher</option>
                      <option>Miniature Schnauzer</option>
                      <option>Mudi</option>
                      <option>Mutt</option>
                      <option>Neapolitan Mastiff</option>
                      <option>Newfoundland Çoban Köpeği</option>
                      <option>Norfolk Terrier</option>
                      <option>Norveç Buhund</option>
                      <option>Norveç Elkhound</option>
                      <option>Norveç Lundehund</option>
                      <option>Norwich Terrier</option>
                      <option>Nova Scotia Ördekçi Retriever</option>
                      <option>Otterhound</option>
                      <option>Oyuncak Fox Terrier</option>
                      <option>Papillon</option>
                      <option>Peekapoo</option>
                      <option>Pekingese</option>
                      <option>Pembroke Welsh Corgi</option>
                      <option>Petit Basset Griffon Vendeen</option>
                      <option>Pharaoh Hound</option>
                      <option>Picardy Çoban Köpeği</option>
                      <option>Pirene Çoban Köpeği</option>
                      <option>Pitbull Terrier</option>
                      <option>Plott</option>
                      <option>Pointer</option>
                      <option>Polonya Lowland Çoban Köpeği</option>
                      <option>Pomeranian</option>
                      <option>Pomsky</option>
                      <option>Poodle</option>
                      <option>Portekiz Su Köpeği</option>
                      <option>Pug</option>
                      <option>Puggle</option>
                      <option>Puli</option>
                      <option>Rakun Tazısı</option>
                      <option>Redbone Coonhound</option>
                      <option>Rhodesian Ridgeback</option>
                      <option>Rottweiler</option>
                      <option>Saint Bernard</option>
                      <option>Saluki</option>
                      <option>Samoyed</option>
                      <option>Schipperke</option>
                      <option>Schnoodle</option>
                      <option>Scottish Terrier</option>
                      <option>Sealyham Terrier</option>
                      <option>Shar-Pei</option>
                      <option>Shetland Çoban Köpeği</option>
                      <option>Shiba Inu</option>
                      <option>Shih Tzu</option>
                      <option>Siberian Husky</option>
                      <option>Silken Windhound</option>
                      <option>Siyah Rus Terrieri</option>
                      <option>Skye Terrier</option>
                      <option>Sloughi</option>
                      <option>Stabyhoun</option>
                      <option>Staffordshire Bull Terrier</option>
                      <option>Standard Schnauzer</option>
                      <option>Sussex Spaniel</option>
                      <option>Tibetan Mastiff</option>
                      <option>Tibetan Spaniel</option>
                      <option>Tibetan Terrier</option>
                      <option>Treeing Tennessee Brindle</option>
                      <option>Treeing Walker Coonhound</option>
                      <option>Vizsla</option>
                      <option>Weimaraner</option>
                      <option>West Highland White Terrier</option>
                      <option>Whippet</option>
                      <option>Wirehaired Pointing Griffon</option>
                      <option>Xoloitzcuintli</option>
                      <option>Yorkipoo</option>
                      <option>Yorkshire Terrier</option>
                      <option>Yumuşak Tüylü Wheaten Terrier</option>
                    </select>
                    {submitted && errors.KopekCinsi && (
                      <span className="error">{errors.KopekCinsi}</span>
                    )}
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-2 pt-0">
                      Köpeğinizin Kilosu*
                    </legend>

                    <div className="col-sm-10 legend-padding">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="KopekKilosu"
                          id="015kg"
                          value="0-15 kg"
                          onChange={this.handleChange}
                        />

                        <label className="form-check-label" htmlFor="015kg">
                          0-15 kg
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="KopekKilosu"
                          id="1525kg"
                          value="15-25 kg"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label">15-25 kg</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="KopekKilosu"
                          id="25kg"
                          value="+25 kg"
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label">+25 kg</label>
                      </div>
                      {submitted && errors.KopekKilosu && (
                        <span className="error">{errors.KopekKilosu}</span>
                      )}
                    </div>
                  </div>
                </fieldset>

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
      </React.Fragment>
    );
  }
}
export default Plan;
