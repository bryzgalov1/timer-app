import { useCallback, useState } from 'react';

import { TTimerData } from '../types/TTimerData';

import getLogFormat from '../utils/getLogFormat';

type TList = string[];
type TAdd = (data: TTimerData) => void;
type TClear = () => void;

type TUse = () => [
    TList,
    TAdd,
    TClear,
];

const useLogs: TUse = () => {

    const [list, setList] = useState<string[]>([]);

    const add: TAdd = useCallback((data) => {
        const log = getLogFormat(data);

        setList((oldList) => {
            return [
                ...oldList,
                log
            ];
        });
    }, []);

    const clear: TClear = useCallback(() => {
        setList([])
    }, []);

    return [
        list,
        add,
        clear,
    ]
};

export default useLogs;
