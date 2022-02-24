import { TTimerData } from "../types/TTimerData";

const getStr = (num: number): string => {
    if (num > 9) {
        return `${num}`;
    }
    return `0${num}`;
};

const getDateFormat = (data: Date): string => {
    const newDate = new Date(data);
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const seconds = newDate.getSeconds();

    const dateStr = `${getStr(hours)}:${getStr(minutes)}:${getStr(seconds)}`;
    return dateStr;
};


const getLogFormat = (data: TTimerData): string => {
    const {
        timeEnd,
        buttonNumber,
        timeStart,
    } = data;

    const logFormat = `${getDateFormat(timeEnd)}: ${buttonNumber} / ${getDateFormat(timeStart)}`;
    return logFormat;
};

export default getLogFormat;
