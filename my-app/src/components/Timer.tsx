import React, { useEffect, useState } from "react";

/**
 *
 * @returns A circle shaped timer
 */
const Timer = ({ timeToCountDown }: { timeToCountDown: Date }) => {
  const [time, setTime] = useState({
    hour: 0,
    minutes: 0,
    seconds: 0,
  });

  const updateTime = () => {
    let timeDiff = timeToCountDown.getTime() - new Date().getTime();

    let hour = (timeDiff / 1000 / 60 / 60) % 60;
    let minutes = (timeDiff / 1000 / 60) % 60;
    let seconds = (timeDiff / 1000) % 60;

    setTime({
        hour, minutes, seconds
    });
  };

  useEffect(() => {
    let timeout = setInterval(updateTime, 1000);
    return () => {
      clearInterval(timeout);
    }
  }, []);

  return (
    <div className="flex items-center justify-center rounded-full overflow-hidden">
      <span>
        {time.hour} : {time.minutes} : {time.seconds}
      </span>
    </div>
  );
};

export default Timer;
