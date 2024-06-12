import React, { memo } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoIosPhonePortrait, IoIosArrowDown } from "react-icons/io";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { FaTelegramPlane, FaOdnoklassniki } from "react-icons/fa";
import logo from "../../assets/icons/logo.svg";

import "./header.scss";

const Header = () => {
  return (
    <>
      {/* top */}
      <div className="top">
        <div className="container top__container">
          <ul className="top__list">
            <li>
              <Link className="top__link">Гарантия свежести</Link>
            </li>
            <li>
              <Link className="top__link">Доставка и оплата</Link>
            </li>
            <li>
              <Link className="top__link">Оптовые поставки</Link>
            </li>
            <li>
              <Link className="top__link">Контакты</Link>
            </li>
          </ul>
          <div className="top__right">
            <div className="top__location">
              <MdOutlineLocationOn />
              <select name="" id="">
                <option value="">Санкт-Петербург</option>
                <option value="">Санкт-Петербург</option>
                <option value="">Санкт-Петербург</option>
              </select>
            </div>
            <div className="top__tel">
              <IoIosPhonePortrait />
              <span>8 812 309-82-88</span>
            </div>
            <div className="top__cart">
              <HiOutlineShoppingBag />
              <span>В корзине (4 товара)</span>
            </div>
            <div className="top__socials">
              <FaTelegramPlane />
              <FaOdnoklassniki />
              <FaTelegramPlane />
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <header className="header">
        <div className="container header__container">
          <ul className="header__list">
            <li>
              <NavLink className={"header__link"}>
                СЛАДКИЕ ДНИ <span>%</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"}>
                подарочные наборы <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"}>Собрать набор</NavLink>
            </li>
          </ul>
          <div>
            <Link>
              <img src={logo} alt="logo img" />
            </Link>
          </div>
          <ul className="header__list">
            <li>
              <NavLink className={"header__link"}>Создать дизайн</NavLink>
            </li>
            <li>
              <NavLink className={"header__link"}>
                КОМПАНИЯМ <IoIosArrowDown />
              </NavLink>
            </li>
            <li>
              <NavLink className={"header__link"}>
                {" "}
                КОМПАНИЯМ <IoIosArrowDown />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default memo(Header);
