import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FaTelegram, FaYoutube } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { Container } from "./style";
import icon from "../../Assets/Img/Icon.png";

function Fouter() {
  return (
    <Container>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12 foot-first-col">
              <div className="foot-first">
                <img
                  src={
                    icon
                  }
                  alt={"Logo"}
                />
                <p>Сайт Ташкентского университета информационных технологий</p>
                <p>Ташкент, улица Амира Темура дом 108</p>
                <ul>
                  <li>
                    <FontAwesomeIcon icon={faPhone} className="foot-icons" />
                    +99870 716-68-05
                  </li>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} className="foot-icons" />
                    tvchdpi@edu.uz
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="https://t.me/tvchdpi2017">
                      <FaTelegram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@chirchiqdavlatpedagogikaun3178">
                      <FaYoutube />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/chirchiq_ped_universitet/">
                      <AiOutlineInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/tvchdpi2017/">
                      <AiOutlineFacebook />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-8 col-12 foot-col-second">
              <div className="foot-last">
                <h4>Полезные ссылки</h4>
                <ul>
                  <li>
                    <a href="https://www.cspi.uz/">главный</a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/barcha-yangiliklar">
                    О  нас
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/fakultetlar-detal-sahifasi/matematika-va-informatika-fakulteti">
                   Наши фотографии
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/otm-tarixi">
                    Наши учителя
                    </a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/otm-reytingi"> результаты</a>
                  </li>
                  <li>
                    <a href="https://www.cspi.uz/qayta-loqa">Связь</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-4 col-12">
              <div className="foot-thirt">
                <h4>Время работы</h4>
                <ul>
                  <li>
                    <span>Понедельник - Среда :</span>
                    <span>6.00 - 22.00</span>
                  </li>
                  <li>
                    <span>Четверг - Пятница :</span>
                    <span>8.00 - 22.00</span>
                  </li>
                  <li>
                    <span>Суббота:</span>
                    <span>8.00 - 16.00</span>
                  </li>
                  <li>
                    <span>Воскресенье :</span>
                    <span>Закрыто</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Fouter;
