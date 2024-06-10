import React from "react";

export default class WorkTime extends React.Component<any, any> {

  private months = [
    "8:00 - 18:00", // янв
    "8:00 - 18:00", // фев
    "8:00 - 19:00", // март
    "8:00 - 19:00", // апр
    "8:00 - 20:00", // май
    "8:00 - 20:00", // июнь
    "8:00 - 20:00", // июль
    "8:00 - 20:00", // авг
    "8:00 - 20:00", // сен
    "8:00 - 20:00", // окт
    "8:00 - 19:00", // ноя
    "8:00 - 18:00" // дек
  ];

  render() {
    const date = new Date();
    const month = date.getMonth();

    return this.months[month];
  }

}
