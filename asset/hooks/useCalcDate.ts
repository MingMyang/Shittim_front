import {useState, useEffect} from 'react';

function useCalcDate(getStart:number, getEnd:number) {

    let startDate = new Date(getStart * 1000);
    let endDate = new Date(getEnd * 1000);
    const startDateString:string = `${startDate.getFullYear()} / ${startDate.getMonth() + 1} / ${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes() < 10 ? '0' + startDate.getMinutes() : startDate.getMinutes()}`;
    const endDateString:string = `${endDate.getFullYear()} / ${endDate.getMonth() + 1} / ${endDate.getDate()} ${endDate.getHours()}:${endDate.getMinutes() < 10 ? '0' + endDate.getMinutes() : endDate.getMinutes()}`;
    const duration:string = `진행기간: ${startDateString} ~ ${endDateString}`;

    const [timeLeft, setTimeLeft] = useState({duration: '', remainingTime: ''});

    useEffect(() => {
        const intervalId = setInterval(() => {
          setTimeLeft(calcTimeLeft());
        }, 1000);
    
        return () => {
          clearInterval(intervalId);
        };
      }, [endDate]);

    function calcTimeLeft() {
        let currentTime = new Date();
        const timeDiff = Math.floor((endDate.getTime() - currentTime.getTime()) / 1000);

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (60 * 60 * 24));
            const hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((timeDiff % (60 * 60)) / 60);
            const seconds = Math.floor(timeDiff % 60);

            if (currentTime < startDate) {
                const remainingTime:any = `시작까지: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
                return {duration, remainingTime};
            } else {
                const remainingTime:any = `종료까지: ${days}일 ${hours}시간 ${minutes}분 ${seconds}초`;
                return {duration, remainingTime};
            }
        }
        else{
            return {duration: duration, remainingTime: '종료되었습니다.'}
        }
    }
    return timeLeft;
}

export default useCalcDate;