"use client";

import React from "react";
import Link from "next/link";

import data from "const/data";
import WorkTime from "const/workTime";
import { navigationLinks } from "const/navigation";

import classNames from "functions/classNames";


import TelegramIcon from "/public/static/icons/telegram.svg";
import IoTechLogo from "/public/static/images/ioTech.png";
import WhatsappIcon from "/public/static/icons/whatsapp.svg";

import style from "./index.module.scss";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footer__line}>
        <hr />
      </div>
      <div className={classNames(
        style.column,
        style.column__nav
      )}>
        {navigationLinks.map((item, index) => (
          <Link
            className={style.item}
            key={index}
            href={item.href}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className={classNames(
        style.column,
        style.column__info
      )}>
        <div className={style.column__block}>
          <p>
            Время работы комплекса: &nbsp;
            <WorkTime />
          </p>
        </div>
        <div className={style.column__block}>
          <Link href={`tel:${data.phone}`} passHref>
            Строй-отдел: &nbsp; {data.phone}
          </Link>
          <Link href={`https://t.me/${data.telegram}`} target="_blank" rel="noreferrer">
            <TelegramIcon />
          </Link>
          <Link href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsappIcon />
          </Link>
        </div>
        <div className={style.column__block}>
          <p>
            {data.shortAddress}
          </p>
          <Link href="/contacts">
            Как добраться
          </Link>
        </div>
      </div>
      <div className={classNames(
        style.column,
        style.column__copyright
      )}>
        <p>
          © Не является публичной офертой <br /> Все права защищены
        </p>
      </div>
      <div className={classNames(
        style.logo,
        style.column
      )}>
        <Image src={IoTechLogo} alt="" />
      </div>
    </footer>
  );
}
