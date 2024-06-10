"use client";

import Link from "next/link";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

import classNames from "functions/classNames";

import data from "const/data";
import WorkTime from "const/workTime";
import { navigationLinks } from "const/navigation";

import LogoIcon from "/public/static/image/logo.png";
import WatchIcon from "/public/static/icons/watch.svg";
import PhoneIcon from "/public/static/icons/phone.svg";
import TelegramIcon from "/public/static/icons/telegram.svg";
import WhatsappIcon from "/public/static/icons/whatsapp.svg";

import style from "./index.module.scss";
import Image from "next/image";


export default function Header() {
  const [apiKeyExists, setApiKeyExists] = useState<boolean>(false);

  useEffect(() => {
    const cookieIsAdmin = Cookies.get("userToken");
    let isAdmin = false;

    if (cookieIsAdmin) {
      isAdmin = true;
    }

    setApiKeyExists(isAdmin);
  }, []);

  return (
    <header className={classNames(style.header, "container")}>
      <div className={style.top}>
        <div className={style.top__logo}>
          <Image src={LogoIcon} alt="logo" />
        </div>
        <div className={style.top__nav}>
          {navigationLinks.map((item, index) => (
            <Link
              className={style.item}
              key={index}
              href={item.href}
            >
              {item.name}
            </Link>
          ))}
          {apiKeyExists && (
            <Link
              className={style.item}
              href="/admin"
            >
              Админ панель
            </Link>
          )}
        </div>
      </div>
      <hr />
      <div className={style.bottom}>
        <div className={style.bottom__block}>
          <WatchIcon />
          <p>
            Время работы комплекса: <br />
            <WorkTime />
          </p>
        </div>
        <hr />
        <div className={style.bottom__block}>
          <PhoneIcon />
          <Link href={`tel:${data.phone}`} passHref>
            Строй-отдел: <br /> {data.phone}
          </Link>
        </div>
        <hr />
        <div className={style.bottom__block}>
          <Link href={`https://t.me/${data.telegram}`} target="_blank" rel="noreferrer">
            <TelegramIcon />
          </Link>
          <Link href={`https://wa.me/${data.whatsapp}`} target="_blank" rel="noreferrer">
            <WhatsappIcon />
          </Link>
        </div>
        <hr />
        <div className={style.bottom__block}>
          <p>
            {data.shortAddress}
          </p>
          <Link href="/contacts">
            Как добраться
          </Link>
        </div>
      </div>
    </header>
  );
}
