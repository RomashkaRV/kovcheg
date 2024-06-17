import Link from "next/link";

import style from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={style.notFound}>
      <h2 className={style.notFound__title}>
        Данная страница не существует!
      </h2>
      <Link
        className={style.notFound__subtitle}
        href="/"
      >
        Вернуться на главную страницу сайта
      </Link>
    </div>
  );
}
