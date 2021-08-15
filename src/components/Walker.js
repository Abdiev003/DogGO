import React, { Fragment } from "react";
import { Checkbox, CheckboxGroup } from "./react-checkbox-group";
import { Helmet } from "react-helmet";
import "./Walker.css";
import { FormValidation } from "calidation";
import walkingdog from "../DogGO-Website/assets/doggo-assets-17.png";

const config = {
  Ad: {
    isRequired: "Lütfen adınızı yazınız.",
  },
  Soyad: {
    isRequired: "Lütfen soyadınızı yazınız.",
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
  YasadiginizSemt: {
    isRequired: "Lütfen yaşadığınız semti yazınız.",
  },
  Cinsiyet: {
    isRequired: "Lütfen cinsiyetinizi seçiniz.",
  },
  DogumTarihi: {
    isRequired: "Lütfen doğum tarihinizi yazınız.",
  },

  IsletimSistemi: {
    isRequired: "Lütfen işletim sisteminizi seçiniz.",
  },

  Meslek: {
    isRequired: "Lütfen mesleğinizi yazınız.",
  },

  NeredenDuydunuz: {
    isRequired: "Lütfen bizi nereden duyduğunuzdan bahsediniz.",
  },
  KendiniziTanitin: {
    isRequired: "Lütfen kendinizden bahsediniz.",
  },
  NedenDoggo: {
    isRequired:
      "Lütfen neden DogGO'da gezdirici olmak istediğinizden bahsediniz.",
  },
  HayvanVarmi: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Haftaici: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Haftasonu: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Aydabir: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Prowalker: {
    isRequired: "Lütfen bu soruya cevap veriniz.",
  },
  Gonullu: {
    isRequired: "Lütfen bu soruya cevap veriniz.",
  },
  VetorPet: {
    isRequired: "Lütfen bu soruya cevap veriniz.",
  },
  EvBakim: {
    isRequired: "Lütfen bu soruya cevap veriniz.",
  },
  Evimde: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Evlerinde: {
    isRequired: "Lütfen bir seçeneği işaretleyiniz.",
  },
  Deneyim: {
    isRequired: "Lütfen deneyiminizden bahsediniz.",
  },
  Yuruyus: {
    isRequired:
      "Lütfen hangi yürüyüş tipi için Walker olmak istediğinizi seçiniz.",
  },
  Ulasim: {
    isRequired:
      "Lütfen yürüyüşler arası ulaşımınızı nasıl sağlayacağınızı seçiniz.",
  },
  digerIlceler: {
    isRequired:
      "Lütfen başka hangi ilçelerde çalışabileceğinizi seçiniz. Tercihiniz yoksa Hiçbiri seçeneğini seçiniz.",
  },
};

export class Walker extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  constructor() {
    super();
    this.state = {
      Yuruyus: "",
      Ulasim: "",
      digerIlceler: [],
      Ad: "",
      Soyad: "",
      Email: "",
      Telefon: "",
      YasadiginizIlce: "",
      YasadiginizSemt: "",
      Cinsiyet: "",
      DogumTarihi: "",
      FotoLink: "",
      IsletimSistemi: "",
      Meslek: "",
      Facebook: "",
      NeredenDuydunuz: "",
      KendiniziTanitin: "",
      NedenDoggo: "",
      HayvanVarmi: "",
      Haftaici: "",
      Haftasonu: "",
      Aydabir: "",
      Prowalker: "",
      Gonullu: "",
      VetorPet: "",
      EvBakim: "",
      Evimde: "",
      Evlerinde: "",
      Deneyim: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  yuruyusChanged = (nextStateYuruyus) => {
    this.setState({
      Yuruyus: nextStateYuruyus,
    });
  };

  ulasimChanged = (nextStateUlasim) => {
    this.setState({
      Ulasim: nextStateUlasim,
    });
  };

  digerIlcelerChanged = (nextStateDigerIlce) => {
    this.setState({
      digerIlceler: nextStateDigerIlce,
    });
  };

  handleSubmit = ({ fields, errors, isValid }) => {
    if (isValid) {
      const headers = {
        "Content-Type": "application/json",
      };

      const data = {
        from: "DogGO App <no-reply@doggoapp.com>",
        to: this.state.Email,
        subject: "Talebinizi Aldık!",
        text:
          "Merhaba " +
          this.state.Ad +
          " " +
          this.state.Soyad +
          ", \n \nBaşvurunuz bize ulaştı! DogGO'ya gösterdiğiniz ilgi için teşekkür ederiz. Sizinle en kısa zamanda iletişime geçeceğiz. \n \nMutlu günler dileriz! \n \nDogGO İnternet Hiz. Paz. ve Tic. A.Ş \nCaferağa Mah., Murat Bey Sk., Merih Apt. No:18/1, 34710 Kadıköy/ İstanbul \n+90 542 503 64 46",
      };

      const datax = {
        from: "Dilara Kongur <dilarakongur@doggoapp.com>",
        to: this.state.Email,
        subject: "DogGO Walker Başvurunuz İçin Teşekkürler!",
        text:
          "Merhaba " +
          this.state.Ad +
          " " +
          this.state.Soyad +
          ", \n \nDogGO'ya gösterdiğiniz ilgi için teşekkür ederiz.\n\nŞu anda sadece Kadıkoy ve Beşiktaş ilçelerinde hizmet verdiğimiz için, öncelikli olarak bu ilçelerden gelen başvuruları değerlendiriyoruz. Hizmet alanımızı genişlettikçe sizi de aramızda görmekten mutluluk duyacağız. \n \nEğer bir sorunuz olursa bu maile cevap yazarak bize ulaşabilirsiniz.\n \n Görüşmek üzere! \n \nDogGO İnternet Hiz. Paz. ve Tic. A.Ş \nCaferağa Mah., Murat Bey Sk., Merih Apt. No:18/1, 34710 Kadıköy/ İstanbul \n+90 542 503 64 46",
      };

      var ilceK = "Kadıköy";

      var foundK = false;
      for (var i = 0; i < this.state.digerIlceler.length; i++) {
        if (this.state.digerIlceler[i] === ilceK) {
          foundK = true;
          break;
        }
      }

      var ilceB = "Beşiktaş";

      var foundB = false;
      for (var y = 0; y < this.state.digerIlceler.length; y++) {
        if (this.state.digerIlceler[y] === ilceB) {
          foundB = true;
          break;
        }
      }

      const body = {
        from: "DogGO App no-reply@doggoapp.com",
        to:
          "bkaran@ku.edu.tr, dilarakongur@doggoapp.com, cemelibol@doggoapp.com",
        subject: "Walker Basvurusu - " + this.state.YasadiginizIlce,
        text:
          "İsim: " +
          this.state.Ad +
          "\n" +
          "Soyisim: " +
          this.state.Soyad +
          "\n" +
          "Email: " +
          this.state.Email +
          "\n" +
          "Telefon: " +
          this.state.Telefon +
          "\n" +
          "Yasadiginiz Ilce: " +
          this.state.YasadiginizIlce +
          "\n" +
          "Yasadiginiz Semt: " +
          this.state.YasadiginizSemt +
          "\n" +
          "Diger ilceler : " +
          this.state.digerIlceler +
          "\n" +
          "Cinsiyetiniz: " +
          this.state.Cinsiyet +
          "\n" +
          "Dogum Tarihi: " +
          this.state.DogumTarihi +
          "\n" +
          "Fotograf : " +
          this.state.FotoLink +
          "\n" +
          "Isletim Sistemi : " +
          this.state.IsletimSistemi +
          "\n" +
          "Meslek : " +
          this.state.Meslek +
          "\n" +
          "Facebook Linki : " +
          this.state.Facebook +
          "\n" +
          "Bizi nereden duydunuz? : " +
          this.state.NeredenDuydunuz +
          "\n" +
          "Kendinizi Tanitin : " +
          this.state.KendiniziTanitin +
          "\n" +
          "Neden Doggo da gezdirici olmak istiyorsunuz : " +
          this.state.NedenDoggo +
          "\n" +
          "Kopek veya Evcil Hayvan Sahibi Misiniz : " +
          this.state.HayvanVarmi +
          "\n" +
          "Tercih ettiginiz yuruyus tipi : " +
          this.state.Yuruyus +
          "\n" +
          "Hafta Ici Hergun En Az Bir Kopek Gezdirebilirim : " +
          this.state.Haftaici +
          "\n" +
          "Hafta Sonu Hergun En Az Bir Kopek Gezdirebilirim : " +
          this.state.Haftasonu +
          "\n" +
          "Bir ay boyunca her gun kopek gezdirebilirim : " +
          this.state.Aydabir +
          "\n" +
          "Yuruyusler arasi ulasimi nasil saglayacaksiniz : " +
          this.state.Ulasim +
          "\n" +
          "Daha Once Profesyonel Kopek Gezdiriciligi Yaptiniz Mi: " +
          this.state.Prowalker +
          "\n" +
          "Evcil Hayvanlarla Ilgili Gonullu Olarak Bir Faaliyet: " +
          this.state.Gonullu +
          "\n" +
          "Daha Once Veteriner veya Petshopta Calistiniz mi: " +
          this.state.VetorPet +
          "\n" +
          "Daha Once Evde Kopek Bakim Hizmeti Verdiniz mi: " +
          this.state.EvBakim +
          "\n" +
          "Gelecekte Doggo ile Kendi Evimde Kopek Bakim Hizmetinde Bulunmak Isterim: " +
          this.state.Evimde +
          "\n" +
          "Gelecekte Doggo ile Kopek Sahibinin Evinde Kopek Bakarim: " +
          this.state.Evlerinde +
          "\n" +
          "Kopek Gezdirme Deneyimi Hakkinda Bizi Bilgilendirin: " +
          this.state.Deneyim +
          "\n",
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
          <title>DogGO Walker Başvuru Form Sayfası</title>
          <link rel="canonical" href="https://www.doggoapp.com/doggo-walker" />
          <meta
            name="description"
            content="DogGO Ailesine Katıl! Köpekleri çok seviyoruz. Tıpkı bizim gibi bu sevgiyi paylaşan,
                aynı zamanda da yeni bir gelir kapısı arayan arkadaşlarımızı DogGO Walker olmaya çağıyoruz."
          ></meta>
          <meta
            http-equiv="Cache-Control"
            content="no-cache, no-store, must-revalidate"
          />
          <meta http-equiv="Pragma" content="no-cache" />
          <meta http-equiv="Expires" content="0" />
        </Helmet>
        <section className="sec-header sec-1-bg-walker doggo-color-thi">
          <img
            src={walkingdog}
            alt="man walking a dog "
            className="mx-auto d-block doggo-center-image"
          />
        </section>
        <section>
          <div className="row">
            <div className="container text-center">
              <h1 className="doggo-color-main">
                <b>DogGO Ailesine Katıl!</b>
              </h1>
              <h5 className="doggo-color-fiv">
                Köpekleri çok seviyoruz! Tıpkı bizim gibi bu sevgiyi paylaşan,
                aynı zamanda da yeni bir gelir kapısı arayan arkadaşlarımızı
                DogGO ailesine bekliyoruz.
              </h5>
            </div>
          </div>
        </section>
        <section className="sec container" id="form">
          <FormValidation
            className="simple-form"
            name="walker"
            config={config}
            id="walker"
            onSubmit={this.handleSubmit}
          >
            {({ errors, submitted }) => (
              <Fragment>
                <div className="form-group row">
                  <label
                    htmlFor="first-name"
                    className="col-sm-3 col-form-label"
                  >
                    Adınız*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="Ad"
                      className="form-control"
                      id="Ad"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Ad && (
                      <span className="error">{errors.Ad}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="surname" className="col-sm-3 col-form-label">
                    Soyadınız*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="Soyad"
                      className="form-control"
                      id="Soyad"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Soyad && (
                      <span className="error">{errors.Soyad}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="email" className="col-sm-3 col-form-label">
                    E-mail Adresiniz*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="email"
                      name="Email"
                      className="form-control"
                      id="Email"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Email && (
                      <span className="error">{errors.Email}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="Telefon" className="col-sm-3 col-form-label">
                    Telefon* (532 555 55 55)
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="tel"
                      name="Telefon"
                      id="Telefon"
                      className="form-control"
                      onChange={this.handleChange}
                      autoComplete="tel"
                    />
                    {submitted && errors.Telefon && (
                      <span className="error">{errors.Telefon}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="city" className="col-sm-3 col-form-label">
                    Yaşadığınız İl*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="YasadiginizIl"
                      value="İstanbul"
                      className="form-control"
                      id="YasadiginizIl"
                      readOnly
                    />
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="district" className="col-sm-3 col-form-label">
                    Yaşadığınız İlçe*
                  </label>
                  <div className="col-sm-9">
                    <select
                      className="form-control"
                      name="YasadiginizIlce"
                      id="YasadiginizIlce"
                      onChange={this.handleChange}
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
                  <label htmlFor="town" className="col-sm-3 col-form-label">
                    Yaşadığınız Mahalle*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="YasadiginizSemt"
                      className="form-control"
                      id="YasadiginizSemt"
                      onChange={(e) =>
                        this.setState({
                          YasadiginizSemt: e.target.value.toUpperCase(),
                        })
                      }
                    />
                    {submitted && errors.YasadiginizSemt && (
                      <span className="error">{errors.YasadiginizSemt}</span>
                    )}
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div id="" className="row">
                    <label className="col-form-label col-sm-3 pt-0 radio-padding">
                      Yaşadığınız ilçe dışında hangi ilçelerde hizmet
                      verebilirsiniz?*
                    </label>

                    <CheckboxGroup
                      name="digerIlceler"
                      checkboxDepth={19}
                      value={this.state.digerIlceler}
                      onChange={this.digerIlcelerChanged}
                    >
                      <div className="col-sm-9">
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Hiçbiri"
                          />
                          <label className="form-check-label">Hiçbiri</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Ataşehir"
                          />
                          <label className="form-check-label">Ataşehir</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Bahçelievler"
                          />
                          <label className="form-check-label">
                            Bahçelievler
                          </label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Bakırköy"
                          />
                          <label className="form-check-label">Bakırköy</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Başakşehir"
                          />
                          <label className="form-check-label">Başakşehir</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input "
                            value="Beşiktaş"
                          />
                          <label className="form-check-label">Beşiktaş</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Beykoz"
                          />
                          <label className="form-check-label">Beykoz</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Beylikdüzü"
                          />
                          <label className="form-check-label">Beylikdüzü</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Beyoğlu"
                          />
                          <label className="form-check-label">Beyoğlu</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Çekmeköy"
                          />
                          <label className="form-check-label">Çekmeköy</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Kadıköy"
                          />
                          <label className="form-check-label">Kadıköy</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Kartal"
                          />
                          <label className="form-check-label">Kartal</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Maltepe"
                          />
                          <label className="form-check-label">Maltepe</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Pendik"
                          />
                          <label className="form-check-label">Pendik</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Sarıyer"
                          />
                          <label className="form-check-label">Sarıyer</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Şişli"
                          />
                          <label className="form-check-label">Şişli</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Tuzla"
                          />
                          <label className="form-check-label">Tuzla</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Ümraniye"
                          />
                          <label className="form-check-label">Ümraniye</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Üsküdar"
                          />
                          <label className="form-check-label">Üsküdar</label>
                        </div>
                        {submitted && errors.digerIlceler && (
                          <span className="error">{errors.digerIlceler}</span>
                        )}
                      </div>
                    </CheckboxGroup>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      Cinsiyetiniz*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Cinsiyet"
                          id="gender1"
                          value="Erkek"
                          checked={this.state.Cinsiyet === "Erkek"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="gender1">
                          Erkek
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Cinsiyet"
                          id="gender2"
                          value="Kadın"
                          checked={this.state.Cinsiyet === "Kadın"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="gender2">
                          Kadın
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Cinsiyet"
                          id="gender3"
                          value="Diğer"
                          checked={this.state.Cinsiyet === "Diğer"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="gender2">
                          Diğer
                        </label>
                      </div>
                      {submitted && errors.Cinsiyet && (
                        <span className="error">{errors.Cinsiyet}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label htmlFor="bday" className="col-sm-3 col-form-label">
                    Doğum Tarihiniz*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="date"
                      name="DogumTarihi"
                      className="form-control"
                      max="2000-12-31"
                      onChange={this.handleChange}
                    />
                    <p>
                      DogGO Walker olmanız için 18 yaşından büyük olmanız
                      gerekmektedir.
                    </p>
                    {submitted && errors.DogumTarihi && (
                      <span className="error">{errors.DogumTarihi}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label htmlFor="fotoğraf" className="col-sm-3 col-form-label">
                    Fotoğrafınızın Linki
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="FotoLink"
                      className="form-control"
                      id="FotoLink"
                      onChange={this.handleChange}
                    />
                    <p>
                      Lütfen fotoğrafınızın Facebook linkini paylaşın ya da{" "}
                      <a
                        style={{ color: "#742915" }}
                        href="https://imageshack.us"
                      >
                        {" "}
                        https://imageshack.us'a{" "}
                      </a>
                      kaydolup, fotoğrafınızı yükleyerek verilen linki giriniz.
                    </p>
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      Telefon İşletim Sisteminiz*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="IsletimSistemi"
                          id="ios"
                          value="IOS"
                          checked={this.state.IsletimSistemi === "IOS"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="ios">
                          IOS
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="IsletimSistemi"
                          id="android"
                          value="Android"
                          checked={this.state.IsletimSistemi === "Android"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="Andriod">
                          Android
                        </label>
                      </div>
                      {submitted && errors.IsletimSistemi && (
                        <span className="error">{errors.IsletimSistemi}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label htmlFor="job" className="col-sm-3 col-form-label">
                    Mesleğiniz*
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="Meslek"
                      className="form-control"
                      id="Meslek"
                      onChange={this.handleChange}
                    />
                    <p>Öğrenciyseniz okuduğunuz okulu belirtiniz.</p>
                    {submitted && errors.Meslek && (
                      <span className="error">{errors.Meslek}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="facebook-url"
                    className="col-sm-3 col-form-label"
                  >
                    Facebook Linkiniz
                  </label>
                  <div className="col-sm-9">
                    <input
                      type="text"
                      name="Facebook"
                      className="form-control"
                      id="Facebook"
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      DogGO'yu Nereden Duydunuz?*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="NeredenDuydunuz"
                          id="internet"
                          value="İnternet"
                          checked={this.state.NeredenDuydunuz === "İnternet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="internet">
                          İnternet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="NeredenDuydunuz"
                          id="s-media"
                          value="Sosyal Medya"
                          checked={
                            this.state.NeredenDuydunuz === "Sosyal Medya"
                          }
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="s-media">
                          Sosyal Medya
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="NeredenDuydunuz"
                          id="word-of-mouth"
                          value="Yakın Çevre"
                          checked={this.state.NeredenDuydunuz === "Yakın Çevre"}
                          onChange={this.handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="word-of-mouth"
                        >
                          Yakın Çevre
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="NeredenDuydunuz"
                          id="Veteriner/Petshop"
                          value="Veteriner/Petshop"
                          checked={
                            this.state.NeredenDuydunuz === "Veteriner/Petshop"
                          }
                          onChange={this.handleChange}
                        />
                        <label
                          className="form-check-label"
                          htmlFor="Veteriner/Petshop"
                        >
                          Veteriner/Petshop
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="NeredenDuydunuz"
                          id="other"
                          value="Diğer"
                          checked={this.state.NeredenDuydunuz === "Diğer"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="other">
                          Diğer
                        </label>
                      </div>
                      {submitted && errors.NeredenDuydunuz && (
                        <span className="error">{errors.NeredenDuydunuz}</span>
                      )}
                    </div>
                  </div>
                </fieldset>

                <div className="form-group row">
                  <label
                    htmlFor="explain-yourself"
                    className="col-sm-3 col-form-label"
                  >
                    Kendinizi Tanıtın*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="KendiniziTanitin"
                      id="KendiniziTanitin"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.KendiniziTanitin && (
                      <span className="error">{errors.KendiniziTanitin}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Neden DogGO'da Gezdirici Olmak İstiyorsunuz?*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="NedenDoggo"
                      id="NedenDoggo"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.NedenDoggo && (
                      <span className="error">{errors.NedenDoggo}</span>
                    )}
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      Köpek veya Evcil Hayvan Sahibi misiniz?*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="HayvanVarmi"
                          type="radio"
                          value="Evet"
                          checked={this.state.HayvanVarmi === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Evet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="HayvanVarmi"
                          value="Hayır"
                          checked={this.state.HayvanVarmi === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="no">
                          Hayır
                        </label>
                      </div>
                      {submitted && errors.HayvanVarmi && (
                        <span className="error">{errors.HayvanVarmi}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <label className="col-form-label col-sm-3 pt-0 radio-padding">
                      Tercih Ettiğiniz Yürüyüş Tipi Hangisi?*
                    </label>
                    <CheckboxGroup
                      name="Yuruyus"
                      checkboxDepth={3}
                      value={this.state.Yuruyus}
                      onChange={this.yuruyusChanged}
                    >
                      <div className="col-sm-9">
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Anlık"
                          />
                          <label className="form-check-label">Anlık</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Planlı"
                          />
                          <label className="form-check-label">Planlı</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            value="Paket‎"
                          />
                          <label className="form-check-label">Paket‎</label>
                        </div>
                      </div>
                      {submitted && errors.Yuruyus && (
                        <span className="error">{errors.Yuruyus}</span>
                      )}
                    </CheckboxGroup>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      <b>Hafta içi </b> her gün en az bir köpek gezdirebilirim.*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="Haftaici"
                          type="radio"
                          value="Evet"
                          checked={this.state.Haftaici === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Evet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Haftaici"
                          value="Hayır"
                          checked={this.state.Haftaici === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="no">
                          Hayır
                        </label>
                      </div>
                      {submitted && errors.Haftaici && (
                        <span className="error">{errors.Haftaici}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      <b>Hafta sonu </b> her gün en az bir köpek
                      gezdirebilirim.*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="Haftasonu"
                          type="radio"
                          value="Evet"
                          checked={this.state.Haftasonu === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Evet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Haftasonu"
                          value="Hayır"
                          checked={this.state.Haftasonu === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="no">
                          Hayır
                        </label>
                      </div>
                      {submitted && errors.Haftasonu && (
                        <span className="error">{errors.Haftasonu}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      <b>Bir ay boyunca </b> her gün en az bir köpek
                      gezdirebilirim.*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="Aydabir"
                          type="radio"
                          value="Evet"
                          checked={this.state.Aydabir === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Evet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Aydabir"
                          value="Hayır"
                          checked={this.state.Aydabir === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="no">
                          Hayır
                        </label>
                      </div>
                      {submitted && errors.Aydabir && (
                        <span className="error">{errors.Aydabir}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <label className="col-form-label col-sm-3 pt-0 radio-padding">
                      Yürüyüşler Arası Ulaşımınızı Nasıl Sağlayacaksınız?*
                    </label>
                    <CheckboxGroup
                      name="Ulasim"
                      checkboxDepth={6}
                      value={this.state.Ulasim}
                      onChange={this.ulasimChanged}
                    >
                      <div className="col-sm-9">
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Yürüyerek"
                          />
                          <label className="form-check-label">Yürüyerek</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Bisiklet"
                          />
                          <label className="form-check-label">Bisiklet</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Motorsiklet"
                          />
                          <label className="form-check-label">
                            Motorsiklet
                          </label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Toplu Taşıma"
                          />
                          <label className="form-check-label">
                            Toplu&nbsp;Taşıma
                          </label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Araba"
                          />
                          <label className="form-check-label">Araba</label>
                        </div>
                        <div className="form-check">
                          <Checkbox
                            className="form-check-input"
                            value="Diğer"
                          />
                          <label className="form-check-label">Diğer</label>
                        </div>
                      </div>
                      {submitted && errors.Ulasim && (
                        <span className="error">{errors.Ulasim}</span>
                      )}
                    </CheckboxGroup>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Daha Önce Profesyonel Köpek Gezdiriciliği Yaptınız mı?*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="Prowalker"
                      id="Prowalker"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Prowalker && (
                      <span className="error">{errors.Prowalker}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Evcil Hayvanlarla İlgili Gönüllü Olarak Bir Faaliyette
                    Bulundunuz mu?*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="Gonullu"
                      id="Gonullu"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Gonullu && (
                      <span className="error">{errors.Gonullu}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Daha Önce Veteriner veya Petshopta Çalıştınız mı?*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="VetorPet"
                      id="VetorPet"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.VetorPet && (
                      <span className="error">{errors.VetorPet}</span>
                    )}
                  </div>
                </div>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Daha Önce Evde Köpek Bakım Hizmeti Verdiniz mi?*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="EvBakim"
                      id="EvBakim"
                      rows="3"
                      onChange={this.handleChange}
                    />
                    {submitted && errors.EvBakim && (
                      <span className="error">{errors.EvBakim}</span>
                    )}
                  </div>
                </div>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      Gelecekte DogGO ile kendi evimde köpek bakım hizmeti
                      verebilirim.*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="Evimde"
                          type="radio"
                          value="Evet"
                          checked={this.state.Evimde === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label">Evet</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Evimde"
                          value="Hayır"
                          checked={this.state.Evimde === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label">Hayır</label>
                      </div>
                      {submitted && errors.Evimde && (
                        <span className="error">{errors.Evimde}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <fieldset className="form-group fieldset-margin">
                  <div className="row">
                    <legend className="col-form-label col-sm-3 pt-0 radio-padding">
                      Gelecekte DogGO ile köpek sahibinin evinde köpek bakım
                      hizmeti verebilirim.*
                    </legend>
                    <div className="col-sm-9">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          name="Evlerinde"
                          type="radio"
                          value="Evet"
                          checked={this.state.Evlerinde === "Evet"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="yes">
                          Evet
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="Evlerinde"
                          value="Hayır"
                          checked={this.state.Evlerinde === "Hayır"}
                          onChange={this.handleChange}
                        />
                        <label className="form-check-label" htmlFor="no">
                          Hayır
                        </label>
                      </div>
                      {submitted && errors.Evlerinde && (
                        <span className="error">{errors.Evlerinde}</span>
                      )}
                    </div>
                  </div>
                </fieldset>
                <div className="form-group row">
                  <label
                    htmlFor="why-doggo"
                    className="col-sm-3 col-form-label"
                  >
                    Köpek Gezdirme Deneyiminiz Hakkında Bizi Bilgilendirin.*
                  </label>
                  <div className="col-sm-9">
                    <textarea
                      className="form-control"
                      name="Deneyim"
                      id="Deneyim"
                      rows="3"
                      value={this.state.Deneyim}
                      onChange={this.handleChange}
                    />
                    {submitted && errors.Deneyim && (
                      <span className="error">{errors.Deneyim}</span>
                    )}
                  </div>
                </div>
                <hr />
                <div>
                  <p>
                    "Gönder" butonuna tıklayarak
                    <a
                      style={{ color: "#007bff", cursor: "pointer" }}
                      href="/Kullanici-Sozlesmesi"
                    >
                      "DogGO Kullanıcı Sözleşmesi"
                    </a>
                    ni,
                    <a
                      style={{ color: "#007bff", cursor: "pointer" }}
                      href="/Iyzico-Alici-Sozlesmesi"
                    >
                      "İyzico Kullanıcı Sözleşmesi"
                    </a>
                    ni, ve
                    <a
                      style={{ color: "#007bff", cursor: "pointer" }}
                      href="/Gizlilik-Politikasi"
                    >
                      "Gizlilik Politikası"
                    </a>
                    nı kabul etmiş oluyorsunuz.{" "}
                  </p>
                </div>
                <div className="form-group row">
                  <div className="col text-center">
                    <button
                      type="submit"
                      name="submit"
                      value="submit"
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

export default Walker;
