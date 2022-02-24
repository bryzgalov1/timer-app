import { useCallback, useRef } from 'react';

import createTimer, { Timer } from '../utils/createTimer';

import useLogs from './useLogs';

type TAdd = (buttonNumber: number) => void;
type TClear = () => void;
type TLogs = string[];

type TUse = () => [
    TAdd,
    TClear,
    TLogs,
];

const useTimers: TUse = () => {

    const queueRef = useRef<Timer[]>([]);

    const isRunRef = useRef<boolean>(false);

    const [logs, addLog, clearLogs] = useLogs();

    const clear = useCallback(() => {
        for (const timer of queueRef.current) {
            timer.timerClear();
        }
        queueRef.current = [];
        isRunRef.current = false;
        clearLogs();
    }, [
        clearLogs,
    ]);

    const run = useCallback(async () => {
        const [timer] = queueRef.current;
        if (timer) {
            const data = await timer.timerStart();
            if (data) {
                addLog(data);
            }
            const [, ...timers] = queueRef.current;
            queueRef.current = timers;
            await run();
        }
    }, [
        addLog,
    ]);

    const runCallback = useCallback(async () => {
        if (!isRunRef.current) {
            isRunRef.current = true;
            await run();
            isRunRef.current = false;
        }
    }, [
        run,
    ]);

    const add = useCallback((buttonNumber: number) => {
        const timer = createTimer(buttonNumber);
        queueRef.current.push(timer);
        runCallback();
    }, [
        runCallback,
    ]);

    return [
        add,
        clear,
        logs,
    ];
};

export default useTimers;
