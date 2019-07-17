import React, { useState, useEffect } from 'react';

function Timer(props) {
    const [time, setTime] = useState(900);
    //900sec=15 min
    useEffect(() => {
        //console.log('first render');
        setInterval(() => {
            //console.log('interval', time);
            //lines 11-14 can be written as: setTime(time => time-1); or as: setTime(newTime => newTime-1);
            setTime((newTime) => {
                //console.log('time', time, 'newTime', newTime);
                return newTime - 1;
            });
        }, 1000);
    }, []);
    //setInterval's cb fxn is a closure; it accesses a variable outside of its scope
    return (
        <div className="timer">{time}</div>
    );
}

export default Timer;