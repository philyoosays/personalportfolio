import { createContext } from 'react';

export interface IPDetails {
    reqIP: string;
    remIP: string | undefined;
    xForIP: string | string[] | undefined;
}

export interface Client extends IPDetails {
    userAgent: string;
}

export interface User {
    id: number;
    email: string;
    email_verified: boolean;
    fname: string;
    lname: string;
    locale: string;
    name: string;
    nickname?: string;
    access: string[];
    picture?: string;
    sub?: string;
    updated_at?: Date;
    color?: string;
    client: Client;
    datetime_created: Date;
    datetime_updated: Date;
    datetime_deleted?: Date;
};

const UserContext = createContext<Partial<User>>({});

export default UserContext;
