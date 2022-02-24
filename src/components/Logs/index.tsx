import React, { useMemo } from 'react';

import './style.css';

type TProps = {
    logs: string[];
};

const Logs = (props: TProps) => {
    const {
        logs,
    } = props;

    const value = useMemo(() => {
        const str = logs.join('\n');
        return str;
    }, [
        logs,
    ]);

    return (
        <div className="Logs">
            <div className='Logs__title'>Логи</div>
            <textarea className='Logs__body' value={value} readOnly={true} />
        </div>
    );
}

export default Logs;
