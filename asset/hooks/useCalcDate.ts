import {useState, useEffect} from 'react';

function useCalcDate(getStart:number, getEnd:number) {

    let startDate = new Date(getStart * 1000);
    let endDate = new Date(getEnd * 1000);
    const startDateString:string = `${startDate.getFullYear()} / ${startDate.getMonth() + 1} / ${startDate.getDate()} ${startDate.getHours()}:${startDate.getMinutes() < 10 ? '0' + startDate.getMinutes() : startDate.getMinutes()}`;
    const endDateString:string = `${endDate.getFullYear()} / ${endDate.getMonth() + 1} / ${endDate.getDate()} ${endDate.getHours()}:${endDate.getMinutes() < 10 ? '0' + endDate.getMinutes() : endDate.getMinutes()}`;
    const duration:string = `진행기간: ${startDateString} ~ ${endDateString}`;

    const [timeLeft, setTimeLeft] = useState({duration: 'Loading...', remainingTime: 'Loading...'});

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
        let timeDiff;

        if(currentTime < startDate){
            timeDiff = Math.floor((startDate.getTime() - currentTime.getTime()) / 1000);
        } else{
            timeDiff = Math.floor((endDate.getTime() - currentTime.getTime()) / 1000);
        }

        if (timeDiff > 0) {
            const days = Math.floor(timeDiff / (60 * 60 * 24));
            const hours = Math.floor((timeDiff % (60 * 60 * 24)) / (60 * 60));
            const minutes = Math.floor((timeDiff % (60 * 60)) / 60);
            const seconds = Math.floor(timeDiff % 60);

            if (currentTime < startDate) {
                if(days >= 1){
                    const remainingTime:any = `시작까지: ${days}일 ${hours}시간`;
                    return {duration, remainingTime};
                }
                else if(hours >= 1){
                    const remainingTime:any = `시작까지: ${hours}시간 ${minutes}분`;
                    return {duration, remainingTime};
                }
                else if(minutes >= 1){
                    const remainingTime:any = `시작까지: ${minutes}분 ${seconds}초`;
                    return {duration, remainingTime};
                }
                else{
                    const remainingTime:any = `시작까지: ${seconds}초`;
                    return {duration, remainingTime};
                }
            } else {
                if(days >= 1){
                    const remainingTime:any = `종료까지: ${days}일 ${hours}시간`;
                    return {duration, remainingTime};
                }
                else if(hours >= 1){
                    const remainingTime:any = `종료까지: ${hours}시간 ${minutes}분`;
                    return {duration, remainingTime};
                }
                else if(minutes >= 1){
                    const remainingTime:any = `종료까지: ${minutes}분 ${seconds}초`;
                    return {duration, remainingTime};
                }
                else{
                    const remainingTime:any = `종료까지: ${seconds}초`;
                    return {duration, remainingTime};
                }
            }
        }
        else{
            return {duration: duration, remainingTime: '종료'}
        }
    }
    return timeLeft;
}

export default useCalcDate;