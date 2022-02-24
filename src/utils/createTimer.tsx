import { TTimerData } from "../types/TTimerData";

type TReturnData = TTimerData | undefined;
type TStart = () => Promise<TReturnData>;
type TClear = () => void;

export type Timer = {
    timerStart: TStart,
    timerClear: TClear,
};

type TCreateTimer = (buttonNumber: number) => Timer;

const ONE_SECOND = 1000;

const createTimer: TCreateTimer = (buttonNumber) => {
    const timeout = buttonNumber * ONE_SECOND;
    const timeStart = new Date();

    let timeoutID: number;
    let promiseResolve: (data: TReturnData) => void;

    const timerStart: TStart = () => {
        return new Promise((resolve) => {
            promiseResolve = resolve;
            timeoutID = window.setTimeout(() => {
                const timeEnd = new Date();
                const data: TTimerData = {
                    timeStart,
                    timeEnd,
                    buttonNumber
                };
                resolve(data);
            }, timeout);
        });
    };

    const timerClear: TClear = () => {
        if (timeoutID) {
            window.clearTimeout(timeoutID);
        }
        if (promiseResolve) {
            promiseResolve(undefined);
        }
    };

    return {
        timerStart,
        timerClear,
    };
};

export default createTimer;
