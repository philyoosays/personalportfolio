import { useState } from 'react';
import axios from 'axios';
import {
    Button,
    Input,
    InputLabel,
} from 'yoo-lib/dist/components';
import Form from 'yoo-lib/dist/components/Form';
import { useLocation } from 'react-router-dom';
// import analytics from '../utils/analytics';
import config from '../config';

import './styles/contact.scss';

export namespace Type {
    export interface Contact {
        email: string;
        name: string;
        note: string;
    }
    export interface Props {}
}

const Contact = (props: Type.Props) => {
    const [buttonTxt, setButtonTxt] = useState('Submit');
    const [timers, setTimers] = useState<{[key: string]: NodeJS.Timeout}>({})
    const [disable, setDisable] = useState<boolean>(false);
    const location = useLocation();

    const onSubmit = (values: Type.Contact) => {
        axios.post(`${config.serverURL}/api/site/contact`, values)
        .then(res => {
            if (res.data) {
                setButtonTxt('Successful')
                setDisable(true)
            }
        })
        .catch(console.error)
    }
    const validations = {
        email: {
            message: 'Please enter a valid email',
            test: (email: string) => {
                return !!String(email)
                    .toLowerCase()
                    .match(
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    );
            },
        },
        name: {
            message: 'Too few characters',
            test: (value?: string) => value && value.length > 1,
        },
        note: {
            message: 'Too few characters',
            test: (value?: string) => value && value.length >= 4,
        },
    };
    const handleOnBlur = (e: Event, name: string) => {
        const newTimers = { ...timers };
        const value = (e.target || {} as any).value;
        newTimers[name] = setTimeout(() => {
            if (value) {
                // analytics.textEntry(location, {
                //     details: `ContactForm:${name}`,
                //     payload: { key: name, value },
                // });
            }
        }, 1000);
    };
    const handleOnClick = (e: any) => {
        // analytics.click(location, {
        //     details: 'ContactForm:submit',
        //     flags: ['button'],
        // });
    }
    return (
        <div className="contact">
            <div className="contact-form">
                <Form
                    onBlur={handleOnBlur}
                    onSubmit={onSubmit}
                    validations={validations}
                    inputOptions={{ collapseRequired: false }}
                >
                    <InputLabel
                        className="contact-label"
                        name="email"
                        label="Email"
                        required={true}
                    >
                        <Input />
                    </InputLabel>
                    <InputLabel name="name" label="Name" required={true}>
                        <Input />
                    </InputLabel>
                    <InputLabel name="note" label="Note" required={true}>
                        <textarea rows={10} className="note-area yoolib-input" />
                    </InputLabel>
                    <Button
                        className="contact-submitButton"
                        onClick={handleOnClick}
                        disabled={buttonTxt === 'Successful'}
                        type="submit"
                    >
                        {buttonTxt}
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default Contact;
