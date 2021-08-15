import React, {Component} from "react";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import "./App.css";
import "./components/Walker.css";
import "./components/sozlesmeler.css";
import "./components/Home.css";
import {Navbar} from "./components/Navbar";
import {Home} from "./components/Home";
import {Walker} from "./components/Walker";
import {Plan} from "./components/Plan";
import {KSozlesmesi} from "./components/KSozlesmesi";
import {Gizlilikpolitikasi} from "./components/Gizlilikpolitikasi";
import {BizeUlasin} from "./components/BizeUlasin";
import {TanismaYuruyusu} from "./components/TanismaYuruyusu";
import {Thankyou} from "./components/Thankyou";
import {Mesajialdik} from "./components/Mesajialdik";
import {IyzicoAliciSozlesmesi} from "./components/IyzicoAliciSozlesmesi";
import {IyzicoSaticiSozlesmesi} from "./components/IyzicoSaticiSozlesmesi";
import {Footerpage} from "./components/Footerpage";
import {Error} from "./components/Error";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-112920436-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

    render() {

        return (
                <BrowserRouter>
                    <div>
                        <Navbar/>
                        <Switch>
                            <Route path={"/"} component={Home} exact/>
                            <Route path={"/doggo-walker"} component={Walker}/>
                            <Route path={"/gezdirme-planla"} component={Plan}/>
                            <Route path={"/tanisma-yuruyusu"} component={TanismaYuruyusu}/>
                            <Route path={"/Kullanici-Sozlesmesi"} component={KSozlesmesi}/>
                            <Route path={"/Gizlilik-Politikasi"} component={Gizlilikpolitikasi}/>
                            <Route path={"/Iyzico-Alici-Sozlesmesi"} component={IyzicoAliciSozlesmesi}/>
                            <Route path={"/Bize-Ulasin"} component={BizeUlasin}/>
                            <Route path={"/Tesekkurler"} component={Thankyou}/>
                            <Route path={"/Mesajinizi-aldik"} component={Mesajialdik}/>
                            <Route path={"/Iyzico-Satici-Sozlesmesi"} component={IyzicoSaticiSozlesmesi}/>
                            <Route component={Error}/>
                        </Switch>
                        
                        <Footerpage/>
                    </div>
                    
                </BrowserRouter>

        );
    }
}

export default App;
