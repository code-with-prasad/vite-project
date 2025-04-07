import React, { useEffect, useState } from 'react'

const StopWatch = () => {
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setSecond((prevSecond) => {
          if (prevSecond === 59) {
            setMinute((prevMinute) => {
              if (prevMinute === 59) {
                setHour((prevHour) => prevHour + 1);
                return 0;
              } else {
                return prevMinute + 1;  
              }
            });
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
    }

    // Cleanup interval on pause or unmount
    return () => clearInterval(timer);
  }, [isRunning]);

  const handleStartClick = () => {
    setIsRunning(true);
  };

  const handlePauseClick = () => {
    setIsRunning(false);
  };

  const handleResetClick = () => {
    setIsRunning(false);
    setHour(0);
    setMinute(0);
    setSecond(0);
  };

  return (
    <section className="h-screen bg-[#030712] flex justify-center items-center">
      <div className="w-lg bg-[#10141E] p-6 rounded-md text-center">
        <h1 className="text-white text-2xl mb-5">Stop Watch</h1>
        <h1 className="text-white text-5xl transition-all duration-300 ease-in-out">
          {String(hour).padStart(2, '0')} : {String(minute).padStart(2, '0')} : {String(second).padStart(2, '0')}
        </h1>
        <div className="mt-8 flex gap-5 justify-center">
          <button
            onClick={handleStartClick}
            className="bg-green-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-700"
          >
            Start
          </button>
          <button
            onClick={handlePauseClick}
            className="bg-yellow-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-yellow-700"
          >
            Pause
          </button>
          <button
            onClick={handleResetClick}
            className="bg-red-600 text-white px-4 py-2 cursor-pointer rounded hover:bg-red-700"
          >
            Reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default StopWatch;
