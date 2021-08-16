import React from 'react';
import { Link } from "react-router-dom";

import gorsel from '../images/tanisma-yuruyusu-gorsel.svg';
import check from "../images/Check.svg";
import "./Popup.css";

const PopUp = (props) => {
    document.addEventListener('click', props.handleClose)
    return (
        <div className="popup d-none d-lg-flex d-xl-flex">
            <div className="popup-inner">
                <button onClick={props.handleClose} className="close-btn">x</button>
                <div className="inner-content">
                    <div className="content-image">
                        <img className="content-background" src={gorsel} alt="Tanisma" />
                    </div>

                    <div className="content-desc">
                        <h1>Ücretsiz Tanışma Yürüyüşü</h1>

                        <div className="content-list">
                            <img className="check-image" src={check} alt="Check" />
                            <span>Tanışma Yürüyüşü ücretsiz gerçekleşir.</span>
                        </div>

                        <div className="content-list">
                            <img className="check-image" src={check} alt="Check" />
                            <span>Köpek sahibi, DogGO yetkilisi ile tanışır.</span>
                        </div>

                        <div className="content-list">
                            <img className="check-image" src={check} alt="Check" />
                            <span>Köpek sahibi, köpeği hakkında DogGO yetkilisini bilgilendirir.</span>
                        </div>

                        <div className="content-list">
                            <img className="check-image" src={check} alt="Check" />
                            <span>DogGO yetkilisi, köpeğin yürüyüş alışkanlıklarını deneyimler.</span>
                        </div>

                        <div className="content-list last">
                            <img className="check-image" src={check} alt="Check" />
                            <span>Köpeğinize ve talebinize en uygunWalker eşleşmesi sağlanır.</span>
                        </div>

                        <Link to="/tanisma-yuruyusu" className="content-btn" href="#">Ücretsiz tanışma yürüşü planla!</Link>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PopUp;