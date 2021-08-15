import React from "react";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import beyazlogo from "../images/beyazlogo.png"

export class Navbar extends React.Component {   

    render() {
        
        window.onscroll = function() {scrollFunction()};

        function scrollFunction() {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
              document.getElementById("navbar").style.background = "rgba(238, 88, 55, 0.8)";
              
            } else {
              document.getElementById("navbar").style.background = "#F15A2D";
              
            }
          }


        return (
            <header>
                <nav className="navbar navbar-color navbar-expand-lg fixed-top" id="navbar">
                    <div className="container">
                        <NavLink className="navbar-brand" onClick={ window.scrollTo(0, 0)} to="/"><img src={beyazlogo} alt="doggo-logo" className="doggo-logo"/></NavLink>
                        <button className="navbar-toggler" type="button" data-toggle="collapse"
                                data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div  className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav mr-auto align-center">
                                <li className="nav-item">
                                    <a href="/#3"className="nav-link inactive" activeclassname="active" >Neden DogGO?</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/#6" className="nav-link inactive" activeclassname="active">Yardımsever DogGO</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/#7"className="nav-link inactive" activeclassname="active"  >DogGO Garantisi</a>
                                </li>
                                <li className="nav-item">
                                    <a  href="/#8"className="nav-link inactive" activeclassname="active" >Bize Ulaşın</a>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-nav" to="/tanisma-yuruyusu">Tanışma Yürüyüşü Planla!</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link btn btn-nav" to="/doggo-walker">DogGO Walker Ol!</NavLink>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        );
    }
}
