import React, { Fragment } from "react";
import NumberFormat from "react-number-format";
import { FormValidation } from "calidation";
var Recaptcha = require("react-recaptcha");

var callback = function () {
  console.log("Done!!!!");
};
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

export class BizeUlasin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      AdSoyad: "",
      Telefon: "",
      Email: "",
      Konu: "",
      Mesaj: "",
      isVerified: false,
    };

    this.handleSubmit = this.handleSubmit(this);
  }

  handleSubmit = ({ errors, isValid }) => {
    if (this.state.isVerified) {
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
          from: "DogGO App no-reply@doggoapp.com",
          to: "elvanerkaya@gmail.com",
          subject:
            "Bize Ulaşın - Websitesi - " +
            this.state.Konu +
            "\n" +
            this.state.AdSoyad,
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
    }
  };
  // specifying your onload callback function
  callback() {
    console.log("Done!!!!");
  }

  // specifying verify callback function
  verifyCallback(response) {
    console.log(response);
  }

  render() {
    return (
      <section className="sec-header doggo-color-thi-bg footer-margin">
        <div className="container sec">
          <div className="row">
            <div className="col-md-5 col-lg-5 col-xl-5">
              <h1 className="doggo-color-main">
                {" "}
                Bize <b>Ulaşın!</b>{" "}
              </h1>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAjYAAAG4CAYAAABW5K0AAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiY2MxNDE3Ni04MzExLTQzZmUtOThkOS0zZTcwMDUzNzVhYWMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzBDQTQzODg4OUEwMTFFODhCNkVBNTU2MzlGNkFCNTciIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzBDQTQzODc4OUEwMTFFODhCNkVBNTU2MzlGNkFCNTciIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5M2RlZGIwNS1jN2Q5LTQyM2QtYjRjNy1lMzU1NzUyNmI5NTIiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1MjAxZTU4Ni02NzBlLTgwNGQtYjEy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"
                alt="kapida bekleyen bir kopek"
                className="img-responsive doggo-dog-bize-ulasin-margin"
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
                    <Recaptcha
                      sitekey="6Lf9mpMUAAAAAKfFjU3feit-hi2Eu5Pv9jLsEDm6"
                      render="explicit"
                      hl={"ja"}
                      verifyCallback={callback}
                    />

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
            </div>
          </div>
        </div>
      </section>
    );
  }
}
