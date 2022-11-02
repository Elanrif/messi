import React, { Component } from "react";
import "./User.css";
import HomeIcon from "@material-ui/icons/Home";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import EventIcon from "@material-ui/icons/Event";
import LocationOnIcon from "@material-ui/icons/LocationOn";

class User extends React.Component {
  render() {
    return (
      <div className="user">
        <img src="./images/messi.jpg" alt="" className="user__messi" />
        <h1 className="user__name">Elanrif Said Baco </h1>
        <p className="user__proffession"> Dévellopeur Web</p>
        <div className="user__infos">
          <p className="user__info">
            <HomeIcon />
            22 rue Avenu MohamedVI Martil
          </p>
          <p className="user__info">
            <a href="tel: +33">
              <PhoneIcon />
              0606820152
            </a>
          </p>
          <p className="user__info">
            <a href="mailto:elanrif@gmail.com">
              <MailIcon />
              elanrif@gmail.com
            </a>
          </p>
          <p className="user__info">
            <EventIcon /> de naissance : 22 Mai 2000
          </p>
          <p className="user__info">
            <LocationOnIcon /> Lieu de naissance : Comores
          </p>
        </div>
      </div>
    );
  }
}

export default User;
