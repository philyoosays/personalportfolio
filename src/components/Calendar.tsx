import React, { useEffect, useRef, useState, } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import * as Types from 'yoo-lib/dist/types'
// import axios from 'axios';
// import config from '../config';
// import { useArray } from 'yoo-lib/dist/hooks';

import './styles/calendar.scss';

const WEEKDAYS = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
]

export namespace Type {
    export interface DayProps {
        className?: string;
        ms: number;
        onClick?: {(ms?: number): void};
        selected?: number[];
        prevSelected?: number[][];
    }
    export interface Props extends Types.Comps.BaseProps {
        selections: number[][];
        submitSelection: {(selected: number[]): void};
    }
}

const Day = ({ className, ms, onClick, selected, prevSelected, }: Type.DayProps) => {
    let cn = 'yoolib-cal-day';
    let numClass = 'yoolib-cal-dayNum';
    if (className) cn += ` ${className}`

    const useDate = new Date(ms);

    let day: any = ms ? useDate.getDate() : ''
    const today = new Date(new Date().toLocaleDateString()).getTime();
    const isToday = (today / 86400000) - (useDate.getTime() / 86400000) > -1 && (today / 86400000) - (useDate.getTime() / 86400000) < 1

    if (isToday) numClass += ` ${numClass}-today`;
    if (prevSelected) {
        prevSelected.forEach(pair => {
            if (useDate.getTime() >= pair[0] && useDate.getTime() <= pair[1]) {
                cn += ' yoolib-cal-prevSelected';
            }
        })
    }
    if (selected) {
        if (selected.length === 2 && (useDate.getTime() >= selected[0] && useDate.getTime() <= selected[1])) {
            cn += ' yoolib-cal-selected';
        } else if (selected.length === 1 && useDate.getTime() === selected[0]) {
            cn += ' yoolib-cal-selected';
        }
    }

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (onClick) onClick()
    }

    return (
        <div className={cn} onClick={handleClick}>
            <div>
                <p className={numClass}>{day}</p>
            </div>
        </div>
    )
}

const Header = (props: { value: string }) => {
    return <div className="yoolib-cal-header"><p>{props.value.slice(0,3)}</p></div>
}

const Calendar = ({ selections, submitSelection }: Type.Props) => {
    const calRef = useRef<HTMLDivElement>(null);
    const [refDate, setRefDate] = useState(new Date().toDateString())
    const [selected, setSelected] = useState<number[]>([]);
    const [prevSelected, setPrevSelected] = useState<number[][]>([]);
    const [fetched, setFetched] = useState(false);
    // const user = useContext(UserContext);

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        submitSelection(selected);
    }

    const setDate = (ms: number) => {
        if (selected.length === 2) {
            setSelected([ms])
        } else if (selected.length === 1) {
            if (selected[0] < ms) setSelected(old => [...old, ms]);
            else setSelected([ms])
        } else if ((selected as []).length === 0) {
            setSelected(old => [...old, ms]);
        }
    }

    const changeMonth = (up?: boolean) => {
        const date = new Date(refDate);
        let month = date.getMonth();
        if (up) month += 1;
        else month -= 1
        date.setMonth(month);
        setRefDate(date.toDateString());
    }

    // const fetchPrevSelections = () => {
    //     console.log('right here')
    //     const token = localStorage.getItem('token');
    //     axios.get(`${config.serverURL}/api/planner/event/1/${user.id}`, {
    //         headers: { ['Authorization']: `Bearer ${token}` },
    //     })
    //     .then(res => res.data)
    //     .then(res => {
    //         console.log(res);
    //         return res;
    //     })
    //     .then(setSelected)
    //     .then(() => setFetched(true))
    //     .catch(console.error)
    // }

    const lsuser = localStorage.getItem('user');
    const user = lsuser && JSON.parse(lsuser);

    useEffect(() => {
        console.log('calendar')
        if (!fetched && user && user.id) {
            // fetchPrevSelections()
            
        }

        if (selections.length && !prevSelected.length) {
            setPrevSelected(selections)
        }
    }, [user, selections])

    const createHeader = () => WEEKDAYS.map((day, idx) => <Header value={day} key={'weekday'+idx} />)
    const createMonth = (date: string | number) => {
        // debugger
        const month = [];
        const firstDay = new Date(new Date(date).toLocaleDateString())
        firstDay.setDate(1);
        const dayOfWeek = firstDay.getDay();
        
        let count = dayOfWeek;
        if (count) {
            do {
                month.push(0);
                count--;
            } while (count)
        }

        month.push(firstDay.getTime())
        firstDay.setDate(2)

        let ms = firstDay.getTime();
        while (firstDay.getDate() !== 1) {
            month.push(ms)
            firstDay.setDate(firstDay.getDate() + 1)
            ms = firstDay.getTime()
        }

        while (month.length % 7 !== 0) {
            month.push(0)
        }

        return month.map((ms, idx) => {
            let className = ''
            if (idx < 7) className += ' yoolib-cal-toprow'
            if (idx%7 === 0) className += ' yoolib-cal-leftcol'
            if (idx%7 === 6) className += ' yoolib-cal-rightcol'
            return (
                <Day
                    className={className}
                    key={idx}
                    ms={ms}
                    onClick={() => setDate(ms)}
                    selected={selected}
                    prevSelected={prevSelected}
                />
            );
        })
    }

    const month = `${MONTHS[new Date(refDate).getMonth()]} ${new Date(refDate).getFullYear()}`

    return (
        <div className="yoolib-cal-container">
            <p className="yoolib-cal-month">{month}</p>
            <div className="yoolib-cal-headerContainer">
                {createHeader()}
            </div>
            <div className="yoolib-cal" ref={calRef}>
                {createMonth(refDate)}
            </div>
            <div className="yoolib-cal-buttons">
                <button onClick={() => changeMonth()}>{'<<<'}</button>
                <button onClick={handleSubmit}>Add</button>
                <button onClick={() => changeMonth(true)}>{'>>>'}</button>
            </div>
        </div>
    )
}

export default Calendar;
