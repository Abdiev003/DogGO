import React from "react";
import {Helmet} from "react-helmet";
import "./Home.css";
import "./sozlesmeler.css";

export class IyzicoAliciSozlesmesi extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0);
      }
    
    render() {
        return (
            <React.Fragment>
                <Helmet>
                <meta charSet="utf-8" />
                <title>DogGO - Türkiye'nin İlk ve Tek Köpek Gezdirme Uygulaması</title>
                <link rel="canonical" href="https://www.doggoapp.com/Iyzico-Alici-Sozlesmesi" />
                <meta name="description" content="DogGO, mobil uygulama üzerinden köpek sahiplerine güvenli ve profesyonel şekilde köpek gezdirme ve bakım hizmeti sunan Türkiye'deki ilk şirkettir."></meta>

            </Helmet>
                <section className=" sec-header soz-1-bg doggo-color-thi" id="1">
                        <h1 className="soz-h1-sty">Iyzico Iyzibazaar Alıcı Sözleşmesi</h1>
                </section>
                <section>
                        <div className="container">
                            <h2>iyzibazaar Alıcı Ödeme Hizmeti Çerçeve Sözleşmesi</h2>
                            <p>1. TARAFLAR</p>
                            <p>İşbu iyzibazaar Alıcı Ödeme Hizmeti Çerçeve Sözleşmesi, aşağıda bilgileri yer alan iyzico ile bu Sözleşme’deki hizmetlerden faydalanmak isteyen Kullanıcı arasında akdedilmiştir.</p>
                            <p><strong>Unvan</strong>: iyzi Ödeme ve Elektronik Para Hizmetleri A.Ş.</p>
                            <p><strong>Adres</strong>: Burhaniye Mah. Atilla Sok. No:7 Üsküdar İstanbul</p>
                            <p><strong>Vergi Daire ve No</strong>.: Üsküdar Vergi Dairesi – 483 034 3157</p>
                            <p>iyzico ve Kullanıcı bundan böyle birlikte “Taraflar”, ayrı ayrı “Taraf” olarak anılacaktır.</p>
                            <p>2. TANIMLAR</p>
                            <p><strong>Kullanıcı</strong>: İnternet Sitesi üzerinden işbu Sözleşme kapsamında sunulan servisler aracılığı ile mal veya hizmet alımı yapan ve bu amaçla Servis’ten faydalanan gerçek veya tüzel kişi,</p>
                            <p><strong>Hassas Ödeme Verisi</strong>: Kullanıcı tarafından ödeme emrinin verilmesinde veya Kullanıcı’nın kimliğinin doğrulanmasında kullanılan, ele geçirilmesi veya değiştirilmesi halinde dolandırıcılık ya da kullanıcılar adına sahte işlem yapılmasına imkan verebilecek şifre, güvenlik sorusu, kart numarası, son kullanma tarihi, CVV2, CVC2 kodu gibi veriler</p>
                            <p><strong>Hatalı/Yetkisiz İşlem</strong>: Hatalı bir şekilde veya Kullanıcı’nın talimatı dışında gerçekleştirilen Ödeme İşlemi</p>
                            <p><strong>İnternet Sitesi</strong>: İnternet üzerinden ticari faaliyet yürütülen, Satıcılar tarafından satışa sunulan ürün ve hizmetleri teşhir etmek için, Kullanıcı tarafından ise mal veya hizmetlerin satın alınması için kullanılan internet sitesi</p>
                            <p><strong>iyzico</strong>: İletişim bilgileri işbu Sözleşme’nin 1. maddesinde belirtilen ve işbu Sözleşme’de ödeme hizmeti sağlayıcı taraf olan iyzi Ödeme ve Elektronik Para Hizmetleri A.Ş.</p>
                            <p><strong>Onay Tarihi</strong>: Kullanıcı tarafından İnternet Sitesi’nden satın alınan ürün veya hizmetin ayıpsız bir şekilde teslim edildiğine ilişkin onayın verildiği veya söz konusu onayın verilmesi için Pazaryeri tarafından belirlenen üst sürenin dolduğu tarih</p>
                            <p><strong>Ödeme Aracı</strong>: Kullanıcı tarafından ödeme emrini vermek için kullanılan kart, cep telefonu, şifre ve benzeri kişiye özel araç</p>
                            <p><strong>Ödeme Hesabı</strong>: Kullanıcı adına iyzico nezdinde açılan ve ödeme işleminin yürütülmesinde kullanılan hesap</p>
                            <p><strong>Ödeme İşlemi</strong>: İnternet Sitesi’nde satışa sunulan ürünler veya hizmetler için ödeme yapılması amacıyla, Platform aracılığı ile yürütülen bir dizi operasyon</p>
                            <p><strong>Pazaryeri</strong>: İnternet Sitesi’ni işletmekte olan gerçek veya tüzel kişi</p>
                            <p><strong>Platform</strong>: iyzico tarafından geliştirilen sanal ödeme ve doğrulama ağ geçidi olan bir yazılımdan ibaret sanal platform</p>
                            <p><strong>Satıcı</strong>: Ödeme İşlemi’ne konu fonun ulaşması istenilen, İnternet Sitesi üzerinden satış gerçekleştiren gerçek veya tüzel kişi</p>
                            <p><strong>Servis</strong>: Sözleşme’de belirlenen hüküm ve koşullar çerçevesinde Kullanıcı’ya sunulacak olan hizmeti</p>
                            <p><strong>Sistem Ortağı</strong>: Platform aracılığı ile ödemelerin işlenmesi konusunda işbirliğinde bulunulan banka veya finans kuruluşu</p>
                            <p><strong>Sözleşme</strong>: Kullanıcı ile akdedilen işbu Sanal Platform Kullanım Çerçeve Sözleşmesi</p>
                            <p><strong>Şüpheli İşlem</strong>: Sözleşme ile belirlenen durumlar da dahil olmak üzere, Hatalı/Yetkisiz İşlem olarak değerlendirilme ihtimali bulunan Ödeme İşlemi</p>
                            <p><strong>Yetkili Personel</strong>: Kullanıcı’ya Platform kullanımı hakkında destek vermek ve iletişime geçmek üzere iyzico tarafından yetkilendirilmiş olan personel</p>
                            <p>3. SÖZLEŞMENİN KONUSU</p>
                            <p>İnternet Sitesi üzerinde Pazaryeri tarafından işletilmekte olan sanal pazaryerinde ödeme hizmetleri iyzico tarafından sunulmaktadır. iyzico, bu kapsamda hem Pazaryeri’ne hem Satıcı’ya hem de Kullanıcı’ya 6493 sayılı Ödeme ve Menkul Kıymet Mutabakat Sistemleri, Ödeme Hizmetleri ve Elektronik Para Kuruluşları Hakkında Kanun (“Kanun”) uyarınca ödeme hizmeti verecek, bu kapsamda Kullanıcı’dan bedeli tahsil edilen ve İnternet Sitesi’nden temin edilen mal veya hizmetin Kullanıcı’ya tam ve gereği gibi teslimine ilişkin işbu Sözleşme’de belirtilen şekilde onayın alınmasına kadar Kullanıcı’nın Ödeme Hesabı’nda tutulan bedelleri, Onay Tarihi’nde Satıcı’nın Ödeme Hesabına
                                aktaracaktır.</p>
                            <p>İşbu Sözleşme, yukarıda belirtilen kapsamda Kullanıcı’ya İnternet Sitesi üzerinden satın aldığı ürün ve hizmetlerin bedellerinin Satıcı’ya aktarımı için sunulan Servis’e ilişkin esaslar ile Taraflar’ın bu kapsamdaki hak ve yükümlülüklerini düzenlemektedir.</p>
                            <p>4. GENEL ŞARTLAR</p>
                            <p>4.1. KAYIT</p>
                            <p>Sözleşme’nin Kullanıcı tarafından İnternet Sitesi üzerinden onaylandığı tarih itibariyle işbu Sözleşme yürürlük ve geçerlilik kazanacaktır.</p>
                            <p>4.2. KULLANIM KOŞULLARI</p>
                            <p>a) Kullanıcı Servis’i ancak Sözleşme yürürlüğe girdikten sonra kullanabilecektir.</p>
                            <p>b) iyzico, Kullanıcı’yı telefon ile arama ve Pazaryeri tarafından iletilen bilgileri doğrulama, ek bilgi ve belge talep etme haklarını saklı tutmaktadır.</p>
                            <p>4.3. PLATFORM ÇALIŞMA PRENSİPLERİNE İLİŞKİN ESASLAR</p>
                            <p>4.3.1 Genel Esaslar</p>
                            <p>a) İşbu Sözleşme uyarınca iyzico, Kullanıcı tarafından İnternet Sitesi’nden sipariş edilen ürün ve hizmetlere ilişkin ödemelerin kabul edilmesi ve işleme alınması ve Satıcı’ya ödemelerin yapılması amacıyla Servis sunmayı kabul ve taahhüt eder.</p>
                            <p>b) iyzico, yetkisiz kişiler tarafından bilgilere erişilmesinin engellenmesi amacıyla Platform’u gerekli güvenlik seviyesinde tutmak için en iyi çabayı gösterecektir. Kullanıcı bu anlamda iyzico’ya azami desteği sağlayacak ve iyzico’nun talimatlarına uygun davranacaktır.</p>
                            <p>c) iyzico, özellikle Sistem Ortakları tarafından gerçekleştirilen güvenlik standardı değişikliklerinin sonucunda güvenlik standardını değiştirme hakkını saklı tutar.</p>
                            <p>d) Kullanıcı, Kullanıcı tarafından yapılan ödemelere ait provizyonların Sistem Ortakları tarafından belirtilen koşullar kapsamında gerçekleştirildiğini bildiğini, Sistem Ortakları’nın sitelerine yönelik ihlâller veya saldırılarda (hacking, phishing) iyzico’nun herhangi bir sorumluluğu bulunmadığını beyan eder.</p>
                            <p>e) Kullanıcı Platform’a erişim imkanı tanıyan şifreyi ve/veya Ödeme Aracı’na ilişkin temin ettiği bilgileri (varsa) gizli tutmakla, yetkisiz şahıslara ifşa etmemekle ve bu şifrelerin tahsis amacı haricinde başkaca amaçlar için kullanılmasını önlemekle yükümlüdür. Kullanıcı ayrıca bahsi geçen bilgiler veya Ödeme Aracı’na ait bilgilerin kaybolması, çalınması veya yetkisiz bir şekilde kullanımının söz konusu olması halinde durumu derhal iyzico’ya işbu Sözleşme’de belirtilen yöntemlerden biriyle bildirmekle yükümlüdür. iyzico, Kullanıcı tarafından söz konusu bilgilerin kaybedilmesi veya ifşa edilmesi durumunda herhangi bir sorumluluğa sahip olmadığı gibi, kusurun iyzico’ya ait
                                olduğu kanıtlanmadığı müddetçe üçüncü şahıslar tarafından Kullanıcı’ya verilecek zararlardan da sorumlu değildir. h) Kullanıcı, Platform’un veya bir yönetim hesabının kanıtlanabilir bir şekilde yetkisiz olarak kötü amaçlı kullanımından veya yönetim hesabına yetkisiz erişimden kendi kusuru ölçüsünde sorumlu olacaktır.</p>
                            <p>5. KULLANICI’NIN HAK VE YÜKÜMLÜLÜKLERİ</p>
                            <p>a) Kullanıcı, Platform’un işlevlerine müdahale etmeyeceğini, Platform’u kurulum ve kullanım talimatlarına uygun olarak kullanacağını kabul ve beyan eder.</p>
                            <p>b) Kullanıcı, iyzico tarafından sunulan Platform özelliklerine ilişkin açıklama ile “iyzico Platform Aracılığıyla Ödeme Yapılmasına İlişkin Kurallar”a ve bunlarla ilgili tüm güncellemelere uyacak, uymaması nedeniyle meydana gelecek tüm taleplerden sorumlu olacaktır.</p>
                            <p>6. iyzico’NUN HAK VE YÜKÜMLÜLÜKLERİ</p>
                            <p>6.1. iyzico’nun Platform’a Erişimi Engelleme Hakkı</p>
                            <p>a) iyzico, özellikle aşağıdaki durumların meydana gelmesi halinde, Platform’a erişimi engelleme hakkına sahip olacaktır. Söz konusu durumun ortadan kaldırılmasını müteakip erişim tekrar sağlanacaktır.</p>
                            <p>– Platform’a yönelik bilgisayar virüsü tehdidi varsa,</p>
                            <p>– Kullanıcı işbu Sözleşme kapsamında kendisinden talep edilen bilgileri sağlamıyorsa,</p>
                            <p>B) iyzico’nun işbu Sözleşme’ye ilişkin hizmetleri önceden Kullanıcı’ya haber vermeksizin denetleme yetkisi mevcuttur.</p>
                            <p>6.2. Platform Bakımı, Kesintiler ve Arıza Çözümleri</p>
                            <p>a) iyzico, Platform’un düzgün olarak çalışması için gerekli olan sürekli bakımı, donanımı ve teknik desteği sağlayacaktır. Bununla bağlantılı olarak iyzico’nun, işbu Sözleşme’de açıkça belirtilen durumlarda ilgili sunucuların çalışmasını geçici olarak durdurma veya sınırlandırma hakkı saklıdır. Bu durumda, Kullanıcı’nın herhangi bir tazminat hakkı mevcut değildir.</p>
                            <p>B) iyzico, Platform’un kesintisiz çalışacağını garanti etmemektedir. iyzico, ödemeleri zamanında işleyecek olup, Sistem Ortakları’ndan kaynaklanan sorunlar nedeniyle, bu işlemlerin zamanında gerçekleşmemesinden sorumlu olmamakla birlikte, söz konusu sorunların en kısa süre içerisinde giderilmesi için gayret edecek ve Sistem Ortakları ile iletişim halinde olacaktır.</p>
                            <p>6.3. Kişisel Bilgilerin Korunması</p>
                            <p>a) Kullanıcı, kendisine ait bilgilerin sadece Servis’in verilmesini temin amacıyla iyzico Gizlilik&amp;Kişisel Veri Politikası’nın <a href="https://www.iyzico.com/gizlilik-politikasi/">https://www.iyzico.com/gizlilik-politikasi/</a> adresinde
                                yayınlanan en güncel halinde belirtildiği şekilde iyzico tarafından işlenmesine, saklanmasına ve benzeri işlemlerin (sisteme tanımlamak ve kayıt etmek) yapılmasına ve gerektiğinde üçüncü kişiler ile paylaşılmasına ilişkin bilgilendirildiğini kabul etmektedir. iyzico kişisel verilerin “gizli bilgi” olduğunun, kendisine bu amaçla verilen kişisel bilgilerin gizliliğini temin için gerekli özeni göstermekle yükümlü olduğunun ve 6698 sayılı Kişisel Verilen Korunması Kanunu’na ve diğer güncel mevzuatlara uygun davranacağının bilincindedir.</p>
                            <p>b) Kullanıcı, iyzico’nun bir şikâyeti işleme aldığı durumlarda, Servis kapsamında gerçekleştirdiği işlemlere ilişkin bilgiler ile kendisine ait sair bilgilerin, şikâyetin çözümü için gerekli olduğu ölçüde Satıcı ve/veya Pazaryeri’ne iletilebileceğini bildiğini kabul ve beyan eder.</p>
                            <p>7. ŞİKÂYET PROSEDÜRÜ, HATA VE ZARAR SORUMLULUKLARI</p>
                            <p>7.1. ŞİKÂYET PROSEDÜRÜ</p>
                            <p>a) Kullanıcı, iyzico tarafından sağlanan hizmetlere ilişkin şikâyetleri <a href="mailto:sikayet@iyzico.com">sikayet@iyzico.com</a> e-posta adresine e-posta göndermek suretiyle iletecektir.</p>
                            <p>b) Kullanıcı tarafından ayrıca Yetkili Personel’e iletişim telefon numarasından ulaşarak da şikâyet prosedürü başlatılabilecektir.</p>
                            <p>c) iyzico, şikâyet konusu sorunun giderilmesi için elinden gelen en iyi çabayı sarf edecektir. iyzico, şikâyetlerdeki eksiklikler (bildirim eksiklikleri) ile bağlantılı olarak meydana gelen gecikmelerden sorumlu olmayacaktır.</p>
                            <p>d) Kullanıcı tarafından yöneltilecek şikâyetler en az şu ayrıntıları içereceklerdir: Şikâyet nedeni, işlemde dahil edilen tarafların listesi, varsa işlem kodu ve sorunun ayrıntılı bir listesi ve olası hata mesajlarının içeriği.</p>
                            <p>e) Kullanıcı ile herhangi bir Kullanıcı veya Satıcı arasında meydana gelen uyuşmazlıklar ile ilgili Kullanıcı ile işlemin tarafı olan Kullanıcı veya Satıcı arasında çözüme ulaştırılacak olup, iyzico bu işlemlerden veya uyuşmazlıklardan sorumlu olmayacaktır. iyzico’nun bu madde kapsamında herhangi bir nedenle (kendi kusurundan kaynaklı haller dışında) bir bedel ödemek durumunda kalması halinde Kullanıcı bunu derhal tazmin edecektir.</p>
                            <p>g) Şikâyetler, iyzico tarafından kendisine ulaşma tarihinden itibaren en geç 20 (yirmi) gün içerisinde yanıtlanacaktır.</p>
                            <p>7.2. HATA VE ZARARDAN DOĞAN SORUMLULUK</p>
                            <p>a) iyzico, İnternet Sitesi’nde sunulan ürünlerin veya hizmetlerin Kullanıcı’ya tedarik edilmesine veya iade edilmesine katılmayacaktır. Bu nedenle Platform aracılığıyla ödemesi yapılan ürünler veya hizmetlerden veya bu ödemesi yapılan ürünler veya hizmetlere ilişkin Kullanıcı ve Satıcı arasındaki sözleşmenin hukuka uygun bir şekilde akdedilmiş olmasından iyzico sorumlu olmayacaktır.</p>
                            <p>b) iyzico, sadece Sözleşme’den kaynaklanan yükümlülüklerini ihlâl etmesi hâlinde meydana gelen doğrudan zararlardan sorumlu olup, kendi kusurunun bulunmadığı üçüncü şahıs veya Sistem Ortakları tarafından neden olunan zararlardan sorumlu olmayacaktır.</p>
                            <p>c) iyzico, ödeme emrinin verilmesinin ardından Kullanıcı tarafından bilgilerin hatalı veya eksik girilmesi nedeniyle işlemlerin tamamlanmaması veya gecikmesi nedeniyle meydana gelen durumlardan dolayı, tutarların Satıcı’nın hesabına transfer edilmesinin gecikmesinden sorumlu olmayacaktır. iyzico, kendisi tarafından öngörülemeyen veya engellenemeyen durumlar neticesinde meydana gelen gecikmelerden ötürü, Ödeme İşlemi’nin gerçekleştirilememesinden veya Ödeme İşlemi’nde kendi kusuru dışında hata
                                meydana gelmesinden veya bunların sonucunda meydana gelen zararlardan sorumlu olmayacaktır.</p>
                            <p>d) Kullanıcı’nın işbu Sözleşme kapsamındaki herhangi bir taahhüt veya yükümlülüğüne aykırı davranmayacak; davranması, yasaları veya herhangi bir üçüncü kişinin haklarını ihlal etmesi nedeniyle iyzico’nun, görevlilerinin, yöneticilerinin ve çalışanlarının bir zarara uğraması yahut yasal, idari veya cezai bir yaptırıma tabi tutulması halinde ilgili tutarlar (avukatlık ücretleri de dahil) ilk talepte ödenmek üzere ferileri ile birlikte Kullanıcı’ya rücu edilecektir.</p>
                            <p>7.3. ŞÜPHELİ/YETKİLENDİRİLMEMİŞ/HATALI İŞLEMLERDE SORUMLULUK</p>
                            <p>a) Kullanıcı tarafından ödemenin iyzico’ya iletilmesi halinde iyzico işbu Sözleşme’de belirtilen koşullarda ve Pazaryeri tarafından belirtilen kurallar dahilinde ilgili onay süreçlerinin tamamlanmasını müteakip ödemeyi Onay Tarihi’nden sonra Satıcı’ya aktaracaktır. Kullanıcı’dan kaynaklanan sebeplerle ödemenin iyzico’ya aktarılmaması halinde, iyzico’nun Satıcı’ya ödeme yapma yükümlülüğü söz konusu olmayacaktır.</p>
                            <p>b) Kullanıcı, iyzico’nun Kullanıcı tarafından iyzico’ya gönderilen tutarları Satıcı’ya aktarma yükümlülüğünün Onay Tarihi’nden sonra itibariyle başlayacağını kabul ve beyan eder. Kullanıcı tarafından gerekli onayların verilmemesi ve/veya Pazaryeri onay sürecinin herhangi bir nedenle gereği gibi tamamlanmaması halinde iyzico ilgili tutarı Kullanıcı’ya iade edebilecektir.</p>
                            <p>c) Onay Tarihi’nde Kullanıcı ilgili Ödeme İşlemi’ne ilişkin ödeme emrini vermiş kabul edilir. Kullanıcı ürün veya hizmetin tam ve gereği gibi teslim edilmediğine ilişkin bir bildirim yaptığı takdirde Pazaryeri ve/veya Kullanıcı tarafından iyzico’ya yapılacak bildirim doğrultusunda ilgili tutar Kullanıcı’ya iade edilecek; Pazaryeri tarafından belirlenen usul ve sürelerde herhangi bir onay veya red bildirimi yapılmadığı takdirde ise Kullanıcı’nın mal veya hizmeti tam ve gereği gibi teslim aldığı kabul edilecek ve ilgili tutar yine Satıcı hesabına aktaracaktır. Kullanıcı, teslimata (geç veya eksik teslim, ayıplı ürün vb.) ilişkin herhangi bir bildirim yapmaması veya teslimatın gereği
                                gibi gerçekleştiğine ilişkin bildirim yapmış olması halinde tutarın Satıcı’ya aktarılmış olması ile ilgili iyzico’dan herhangi bir talepte bulunamaz.</p>
                            <p>d) Herhangi bir işleme ilişkin olarak iyzico’ya Hatalı/Yetkisiz İşlem bildiriminde bulunulduğu takdirde, derhal ve her halükarda Ödeme İşlemi’nin gerçekleştirilmesini takip eden azami 13 (onüç) ay içerisinde Kullanıcı tarafından VISA, Mastercard kuralları gereğince düzeltme veya harcama itirazı talebinde bulunulabilecektir. Bu durumda söz konusu bildirimin doğru olduğunun kanıtlanması veya Sistem Ortağı’nın &nbsp;halinde ilgili işlem bedeli Satıcı’ya aktarılmayarak iyzico tarafından doğrudan Kullanıcı’ya iade edilebilecek, bildirim anında işlem bedeli Satıcı’ya aktarılmış ise iyzico ilgili tutarları Satıcı’dan iade talep ederek (Satıcı iadeyi 1 gün içerisinde gerçekleştirecek olup iyzico’nun ilgili bedeli Satıcı’ya yapılacak ödemelerden mahsup hakkı saklıdır) Kullanıcı’ya aktarabilecektır. </p>
                            <p>e) iyzico, özellikle aşağıdaki durumlar olmak üzere Şüpheli İşlemler’de ve Kullanıcı veya Sistem Ortağı tarafından kendisine bildirilmesi hâlinde, işlem tutarlarını Sistem Ortağı veya Kullanıcı’nın Ödeme İşlemi’ne ilişkin onayı verme tarihine kadar saklama ve Satıcı’ya ödeme yapmama hakkına sahiptir. Şüpheli durumun belgelendirilmek kaydıyla kesinleşmesi halinde ödemeler kesin olarak işlenmeyecektir.</p>
                            <p>– Ödeme İşlemi’nin yasal hükümlere uygun olmadığına yönelik bir şüphe varsa,</p>
                            <p>– Ödeme İşlemi’nin, Ödeme İşlemi’nde kullanılan kredi kartının hamilinin bilgisi dışında yapıldığına yönelik bir şüphe varsa,</p>
                            <p>– Ödeme İşlemi’nin, Ödeme İşlemi’nde kullanılan banka hesabı sahibinin bilgisi dışında yapıldığına yönelik bir şüphe varsa,</p>
                            <p>– Ödeme İşlemi’nin gerçek bir Ödeme İşlemi olmadığına (testler hariç) yönelik bir şüphe varsa.</p>
                            <p>f) Kayıp veya çalıntı bir Ödeme Aracı’nın kullanılması ya da kişisel güvenlik bilgilerinin gereği gibi muhafaza edilmemesi nedeniyle ödeme aracının başkaları tarafından kullanılması durumunda, Kullanıcı, yetkilendirmediği ödeme işlemlerinden doğan zararın Ödeme Hizmetleri ve Elektronik Para İhracı ile Ödeme Kuruluşları ve Elektronik Para Kuruluşları Hakkında Yönetmelik (“Yönetmelik”) Madde 45/4’te belirtilen miktar kadar olan bölümünden sorumludur. Kullanıcı, Yönetmelik’in 44. maddesinin dördüncü fıkrası uyarınca yaptığı bildirimden sonra gerçekleşen yetkilendirmediği ödeme işlemlerinden sorumlu değildir. Ödeme Aracı’nı hileli kullanması veya bildirim
                                yükümlülüklerini kasten veya ağır ihmalle yerine getirmemesi durumunda ise Kullanıcı, yetkilendirilmemiş işlemden doğan zararın tamamından sorumlu olacaktır.</p>
                            <p>8. ÖDEMELERE İLİŞKİN ESASLAR</p>
                            <p>8.1. GENEL ESASLAR</p>
                            <p>a) iyzico, Sözleşme kapsamında Kullanıcı tarafından kendisine iletilen bedellerin, Onay Tarihi’ni takip eden iş günü içerisinde Satıcı’ya aktarılmasından sorumludur. </p>
                            <p>b) iyzico, Kullanıcı tarafından yapılan Ödeme İşlemi’nin konusu olan tutarın Satıcı’ya aktarılması işleminde Kullanıcı’dan herhangi bir ücret tahsil etmemektedir ancak iyzico’nun ücretlendirme koşullarını tek taraflı olarak değiştirme hakkı saklıdır.</p>
                            <p>c) Kullanıcı, iyzico’nun bir banka, kredi veya finans kurumu olmadığını ve iyzico tarafından işbu Sözleşme uyarınca verilen hizmetin bir bankacılık hizmeti olmadığını, iyzico’nun ödeme kuruluşu olarak Kanun kapsamında ödeme hizmetleri sunduğunu kabul eder. Bu kapsamda iyzico, Ödeme İşlemi kapsamında tahsil edilen tutarlara faiz işletmeyecek yahut Ödeme Aracı ihracında bulunmayacak olup Kullanıcı iyzico’dan faiz veya sair adlar altında herhangi bir menfaat talebinde bulunmayacaktır. iyzico Kullanıcı’ye kredi verme, taksitlendirme, tahsil edilemeyen tutarlara ilişkin ödeme veya ödeme garantisi verme yahut bu anlama gelecek faaliyetlerde bulunamaz. Kullanıcı, iyzico’dan bu kapsamda talepte bulunmamayı kabul ve taahhüt eder. Bununla birlikte Satıcı kendisi taksitlendirme yaptığı takdirde, taksit bedellerinin ödenmesine ilişkin ödeme hizmeti sunulabilecektir.</p>
                            <p>9. SÖZLEŞMENİN SÜRESİ VE FESİH</p>
                            <p>a) İşbu Sözleşme Kullanıcı’nın kabul tarihinde yürürlüğe girecek olup taraflarca feshedilmedikçe yürürlükte kalacaktır.</p>
                            <p>b) Taraflar, işbu Sözleşme’den doğan yükümlülüklerini yerine getirmediği takdirde, diğer Taraf, söz konusu aykırılığın giderilmesi için karşı Taraf’a göndereceği bir ihtar ile aykırılığın giderilmesi için 14 (ondört) gün süre verecek olup, aykırılığın bu süre içerisinde giderilmemesi halinde Sözleşme başka bir ihtara gerek olmaksızın feshedilmiş sayılacaktır.</p>
                            <p>c) Kullanıcı, işbu Sözleşme’yi, herhangi bir sebep bildirmeksizin, her zaman 1 (bir) ay öncesinden yazılı fesih ihbarında bulunmak kaydıyla feshedebilecektir. iyzico ise, Sözleşme’yi 2 (iki) ay öncesinden yazılı bildirimle herhangi bir sebep göstermeksizin ve tazminat ödemeksizin feshi hakkına sahip olacaktır. Sözleşme’nin fesih tarihinden önce muaccel olan işbu Sözleşme’ye konu yükümlülüklerin yerine getirilmesine halel getirmeyecek olup, Taraflar’ın fesih tarihine kadar muaccel olan alacak hakları saklıdır.</p>
                            <p>d) iyzico’nun işbu Sözleşme kapsamındaki Servis’i sunmasına imkan tanıyan izin ve lisansların herhangi bir şekilde ortadan kalkması ve/veya Pazaryeri ile iyzico arasındaki İnternet Sitesi üzerinden yapılan satışlara ilişkin bedellerin tahsiline ilişkin anlaşmanın sona ermesi halinde işbu Sözleşme kendiliğinden sona erecektir. </p>
                            <p>e) iyzico hileli veya yetkisiz kullanım şüphesinin söz konusu olduğu hallerde Servis’i askıya alabilecek, Ödeme Aracı’nın kullanımını engelleyebilecek ve Ödeme İşlemi’ni iptal edebilecektir. Bu durumda iyzico, ilgili mevzuatta bilgi verilmesini engelleyici düzenlemeler bulunmaması veya güvenliği tehdit edici objektif nedenler olmaması kaydı ile Kullanıcı’yı konu ile ilgili bilgilendirecek ve engelleme sebebi ortadan kalktığında Servis ve Ödeme Aracı’nı yeniden kullanıma açacaktır. iyzico ayrıca Kullanıcı’nın işbu
                                Sözleşme’ye aykırılığı durumunda da aykırılık giderilene kadar Servis’i askıya alabilecektir.</p>
                            <p>10. ÇEŞİTLİ HÜKÜMLER</p>
                            <p>a) iyzico tarafından hizmetlerin sağlanmasına yönelik olarak <a href="http://www.iyzico.com">www.iyzico.com</a> internet sitesinde ilân edilecek şartlar ve koşullar, işbu Sözleşme’nin eki ve ayrılmaz bir parçasını teşkil etmektedir. İşbu Sözleşme iyzico’nun <a href="http://www.iyzico.com">www.iyzico.com</a> internet sitesinde veya bağlantılı adreslerinde her zaman Kullanıcı tarafından erişilebilir olacaktır</p>
                            <p>b) İşbu Sözleşme’den kaynaklanan her türlü resim, harç ve vergi Taraflarca eşit olarak ödenecektir.</p>
                            <p>c) Taraflar işbu Sözleşme’den kaynaklanan doğmuş veya doğacak olan alacakları diğer Taraf’ın yazılı izni olmaksızın hiçbir surette üçüncü kişilere devir veya temlik edemez.</p>
                            <p>d) iyzico, Sözleşme’deki her türlü değişikliği, internet sitesinde ilân edebilir ve/veya yeni sürümlerini yayınlayabilir. Değişikliklere ilişkin olarak iyzico, değişikliğin kapsamı, yürürlük tarihi ve Kullanıcı’nın fesih hakkına ilişkin bilgileri içeren bildirimi yürürlüğe girme tarihinden 30 (otuz) gün önce Kullanıcı’ya iletir. Bu durumda Kullanıcı’nın Sözleşme’yi herhangi bir ücret ödemeksizin feshetme hakkı saklı olup belirtilen 30 (otuz) günlük süre içinde itiraz edilmemesi halinde değişiklik kabul edilmiş sayılacaktır.</p>
                            <p>e) Taraflar’ın, kendi iradeleri dışında gerçekleşen, müdahale imkanları bulunmayan ve makul bir şekilde önceden öngörülmesi mümkün olmayan nedenlerle yükümlülüklerini yerine getiremedikleri savaş, sıkıyönetim, seferberlik, terörist eylemler, doğal afetler, yangın, grev ve lokavt da dahil istisnai olaylar mücbir sebep olarak kabul edilir. Mücbir sebebin ortaya çıkması halinde, Sözleşme’ye ilişkin edimler mücbir sebep hali sona erinceye kadar askıya alınır. Askıya alınma süresi 1 (bir) ayı geçtiği takdirde,
                                Taraflar’ın işbu Sözleşme’yi fesih hakkı doğar.</p>
                            <p>f) Kullanıcı, kanunlara ve VISA, Mastercard ve diğer ödeme kartı kuruluş ve otoritelerinin (B.D.D.K., T.C.M.B. vb) kuralları ile iyzico tarafından hazırlanan kurallara ve prosedürlere uyacaktır.</p>
                            <p>g) İşbu Sözleşme’nin herhangi bir hükmünü herhangi bir nedenle geçersiz olması hâlinde, diğer hükümlerin veya Sözleşme’nin uygulanabilirliği ve/veya geçerliliği bu geçersizlikten etkilenmeyecektir.</p>
                            <p>h) Taraflar, Platform veya Yönetim Arayüzü üzerinden erişilebilir kayıtların Taraflar arasında delil sözleşmesi mahiyetinde kabul edileceği hususunda mutabıktır.</p>
                            <p>i) Taraflar işbu Sözleşme’den doğacak uyuşmazlıkların çözümünde İstanbul Anadolu Mahkemelerinin ve İcra Dairelerinin yetkisini kabul etmişlerdir.</p>
                            <p>j) Taraflar, işbu Sözleşme’de belirtilen adreslerinde meydana gelen değişiklikleri karşı tarafa yazılı olarak bildirmedikleri takdirde, işbu sözleşmede belirtilen adreslere yapılacak tebligat ve bildirimler geçerli tebliğ hükmünde olacaktır. iyzico, işbu Sözleşme kapsamında Kullanıcı’ya yönelik yapacağı bildirimleri Sözleşme’de belirtilen zamanlarda Kullanıcı’nın belirtilen adresine iletilecek e-posta aracılığıyla yapacaktır. Ancak Türk Ticaret Kanunu’nun 18/3 maddesi uyarınca, karşı tarafı temerrüde düşürmeye veya Sözleşme’yi feshetmeye ilişkin bildirimler, noter aracılığıyla, taahhütlü mektupla, telgrafla veya güvenli elektronik imza kullanılarak kayıtlı elektronik posta sistemi ile yapılacaktır.
                            </p>







                    </div>
                </section>
                </React.Fragment>
        )
      }
    }

    export default IyzicoAliciSozlesmesi;