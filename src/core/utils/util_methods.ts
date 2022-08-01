import { isFulfilled } from "@reduxjs/toolkit";
import moment, { Moment } from "moment";
import "moment/locale/id";

export class UtilMethods {
 

  public static getIndonesianFormatDate(date: Date | Moment | string): string {
    return moment(date).format("DD MMMM YYYY");
  }
  public static getIndonesianTimeFormat(date: Date | Moment | string): string {
    return moment(date).format("DD-MMMM-YYYY, HH:mm");
  }

  
}
