import React from 'react';
import { Link } from "react-router-dom";

import gorsel from '../images/tanisma-yuruyusu-gorsel.svg';
import check from "../images/Check.svg";
import "./Popup.css";

const PopUp = (props) => {
    return (
        <section className="popup-box d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
            <img className="popup-image" src={gorsel} alt="" />
            <div className="box">
                <article>
                    <span className="close-icon" onClick={props.handleClose}>x</span>
                    <h1 className="box-title">Ücretsiz Tanışma Yürüyüşü</h1>
                </article>
                <div className="box-description">
                    <div>
                        <img src={check} alt="" />
                    </div>
                    <span>Tanışma Yürüyüşü ücretsiz gerçekleşir.</span>
                </div>
                <div className="box-description">
                    <div>
                        <img src={check} alt="" />
                    </div>
                    <span>Köpek sahibi, DogGO yetkilisi ile tanışır.</span>
                </div>
                <div className="box-description">
                    <div>
                        <img src={check} alt="" />
                    </div>
                    <span>Köpek sahibi, köpeği hakkında DogGO yetkilisini bilgilendirir.</span>
                </div>
                <div className="box-description">
                    <div>
                        <img src={check} alt="" />
                    </div>
                    <span>DogGO yetkilisi, köpeğin yürüyüş alışkanlıklarını deneyimler.</span>
                </div>
                <div className="box-description">
                    <div>
                        <img src={check} alt="" />
                    </div>
                    <span>Köpeğinize ve talebinize en uygunWalker eşleşmesi sağlanır.</span>
                </div>
                <div className="box-btn">
                    <Link to='/tanisma-yuruyusu'>Ücretsiz Tanisma Yuruyusu Planla!</Link>
                </div>
            </div>
        </section>
    )
};

export default PopUp;