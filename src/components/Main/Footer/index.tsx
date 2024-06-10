import Link from "next/link";
import React from "react";

import { Divider, Typography } from "@mui/material";

import WorkTime from "components/workTime";

import { navigationLinks } from "const/navigation";

import TelegramIcon from "@mui/icons-material/Telegram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import style from "./index.module.scss";

export default class Footer extends React.Component<any, any> {

  render() {
    return (
      <footer className={style.footer}>
        <Divider className={style.footerBorder} />
        <div className="container">
          <div className={style.info}>
            <div className={style.column}>
              {navigationLinks.map((item, index) => (
                <Typography
                  className={style.menuItem}
                  key={index}
                  variant="body1"
                >
                  {item.href ? (
                    <Link href={item.href} passHref>
                      {item.name}
                    </Link>
                  ) : item.name}
                </Typography>
              ))}
            </div>
            <div className={style.column}>
              <Typography className={style.description} variant="body1">
                Время работы комплекса: <br />
                <WorkTime/>
              </Typography>
              <Typography className={style.description} variant="body1">
                 Номер телефона: <br />
                <Link href="tel:+79685516286" passHref>
                  +7(968)551-62-86
                </Link>
              </Typography>
              <div className={style.list}>
                <a href="https://t.me/+79685516286" target="_blank" rel="noreferrer">
                  <TelegramIcon className={style.icon} />
                </a>
                <a href="https://wa.me/+79685516286" target="_blank" rel="noreferrer">
                  <WhatsAppIcon className={style.icon} />
                </a>
              </div>
              <div className={style.list}>
                <Typography variant="subtitle2">
                  Наро-Фоминск, 73-й км Киевского шоссе
                </Typography>
                <Link href="/contacts" passHref>
                  <a>
                    <Typography variant="h6" className={style.point}>
                      Как добраться
                    </Typography>
                  </a>
                </Link>
              </div>
            </div>
            <div className={style.footerCopyright}>
              <Typography style={{ textAlign: "center" }} variant="body1">© Не является публичной офертой</Typography>
              <Link href="/" passHref>
                <Typography style={{ textAlign: "center" }} variant="body1">
                  Все права защищены
                </Typography>
              </Link>
            </div>
            <Link href="https://iotech.company/" passHref>
              <div className={style.ioLogo}>
                <img src="/static/ioTech_logo.png" alt=""/>
              </div>
            </Link>
          </div>
        </div>
      </footer>
    );
  }

}
