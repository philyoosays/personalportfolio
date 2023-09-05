import { useEffect, useMemo, useState, } from 'react';
import Calendar from '../../components/Calendar';
import { useArray } from 'yoo-lib/dist/hooks';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import config from '../../config';

import './styles/dates.scss';

const { serverURL } = config;

export namespace Type {
    export interface Props {
        items: string[];
    }
}

const Dates = (props: Type.Props) => {
    const [selections, setSelections, arrUtils] = useArray<number[]>();
    const handleSubmit = async (selection: number[]) => {
        const res = await axios.post(`${serverURL}/api/planner`, {
            openings: selection,
            event_id: 1,
            user_id: 1,
        })
        console.log(res.data)
    }

    const fetchMyData = async () => {
        const res = await axios.get(`${serverURL}/api/planner/event/1/1`)
        // @ts-ignore disable-next-line
        if (res.data && res.data.dates) setSelections(res.data.dates)
        console.log(res.data && res.data)
    }

    const fetchOtherData = async () => {
        const res = await axios.get(`${serverURL}/api/planner/event/1`)
        // @ts-ignore disable-next-line
        if (res.data && res.data.dates) setSelections(res.data.dates)
        console.log(res.data && res.data)
    }

    useEffect(() => {
        if (!(selections as number[][]).length) fetchMyData()
    })

    return (
        <Calendar
            submitSelection={handleSubmit}
            selections={(selections as number[][])}
        />
    )
}

export default Dates;
