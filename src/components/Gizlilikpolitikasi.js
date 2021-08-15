import React from "react";
import {Helmet} from "react-helmet";
import "./Home.css";
import "./sozlesmeler.css";

export class Gizlilikpolitikasi extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render() {
        return (

            <React.Fragment>
                <Helmet>
                <meta charSet="utf-8" />
                <title>DogGO - Türkiye'nin İlk ve Tek Köpek Gezdirme Uygulaması</title>
                <link rel="canonical" href="https://www.doggoapp.com/Gizlilik-Politikasi" />
                <meta name="description" content="DogGO, mobil uygulama üzerinden köpek sahiplerine güvenli ve profesyonel şekilde köpek gezdirme ve bakım hizmeti sunan Türkiye'deki ilk şirkettir."></meta>

            </Helmet>
                <section className=" sec-header soz-1-bg doggo-color-thi">
                        <h1 className="soz-h1-sty">Gizlilik Politikası</h1>
                        </section>
                            <section>
                                <div className="container">

                            <p><strong>Doggo İnternet Hizmetleri Pazarlama ve Ticaret Anonim Şirketi (“DogGo”)</strong>
                                tarafından toplanan kişisel bilgiler, internet sitesi ve mobil hizmetlerimiz üzerinden talep
                                edilen hizmetlerin tamamlanabilmesi ve ilgili iletişimin sağlanması veya ürünler, servisler,
                                kampanyalarla ilgili bilgi vermek için veya müşterilerimizin alışveriş tercihlerini daha iyi anlamak,
                                istatistiksel analizler yapmak, sitenin güvenliğinin güçlendirilmesi için kullanılır.</p>

                            ​

                            <p>Kişisel bilgiler, üye/misafir kullanıcının haberi ya da aksi bir talimatı olmaksızın,
                                üçüncü şahıslarla kesinlikle paylaşılamaz, faaliyet dışı hiçbir nedenle ticari amaçla
                                kullanılamaz ve satılamaz.</p>

                            ​

                            <p>Bu bilgiler, ancak resmi makamlarca hukuka uygun şekilde talep edilmesi halinde ve yürürlükteki
                                emredici mevzuat hükümleri gereğince resmi makamlara açıklama yapmak zorunda kalınan durumlarda
                                yalnızca paylaşılması talep edilen resmi makamlar ile paylaşılabilecektir.</p>

                            ​

                            <p>Kullanıcıların, DogGo’nun web sitesi ve/veya mobil uygulaması üzerinden girdiği tüm bilgilere
                                sadece ilgili kullanıcı ulaşabilmekte ve bu bilgileri sadece ilgili kullanıcı değiştirebilmektedir.
                                Bir başkasının bu bilgilere ulaşması ve bunları değiştirmesi mümkün değildir.</p>

                            ​

                            <p>Ödeme sayfasında istenen kredi kartı bilgileri, kullanıcıların güvenliğini en üst seviyede tutmak
                                amacıyla hiçbir şekilde DogGo ve/veya bağlı şirketlerinin sunucularında tutulmamaktadır.
                                Bu şekilde ödemeye yönelik tüm işlemlerin DogGo ara yüzü üzerinden banka ve bilgisayarınız
                                arasında gerçekleşmesi sağlanmaktadır.</p>

                            ​

                            <p>İşbu gizlilik bildiriminde zaman zaman yasal düzenlemeler gereği güncellemeler yapılabilmektedir.
                                İlgili güncellemeler yapıldığında güncellemenin yapıldığı tarih belirtilerek DogGo’nun web sitesi
                                ve mobil uygulaması üzerinden aynı sekmede paylaşılır.</p>


                            <p>İnternet sitemiz ve/veya mobil uygulama üzerinden verilen hizmetleri kullanmanız işbu gizlilik
                                bildirimini ve yapılacak güncellemeleri kabul ettiğiniz anlamına gelmektedir.</p>

                                </div>

                </section>

            </React.Fragment>

        );
      }
    }
export default Gizlilikpolitikasi;