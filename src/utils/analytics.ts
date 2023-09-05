import axios from 'axios';
import { useLocation, Location } from 'react-router-dom';
import config from '../config';

enum ActionType {
    CLICK = 'click',
    EVENT = 'event',
    PAGE_VIEW = 'page_view',
    TEXT_ENTRY = 'text_entry',
};

interface Analytics {
    id: number;
    asset_id: string;
    action_type: ActionType;
    path: string;
    details?: string;
    flags?: string[];
    request: any;
    payload?: any;
    datetime_created: Date;
    datetime_updated: Date;
    datetime_deleted?: Date;
};

const dispatch = (action_type: ActionType, location: Location, data?: Partial<Analytics>) => {
    const { details, flags, payload } = data || {};
    const record = {
        asset_id: config.asset_id,
        path: location.pathname,
        action_type,
        ...(details && { details }),
        ...(flags &&{ flags }),
        ...(payload && { payload }),
    };
    try {
        const url = `${config.serverURL}/api/analytics`;
        axios.post(url, record);
    } catch (error) {
        console.error(error);
    }
}

export default {
    click(location: Location, data?: Partial<Analytics>) {
        dispatch(ActionType.CLICK, location, data);
    },
    event(location: Location, data?: Partial<Analytics>) {
        dispatch(ActionType.EVENT, location, data);
    },
    pageView(location: Location, data?: Partial<Analytics>) {
        dispatch(ActionType.PAGE_VIEW, location, data);
    },
    textEntry(location: Location, data?: Partial<Analytics>) {
        dispatch(ActionType.TEXT_ENTRY, location, data);
    },
};
