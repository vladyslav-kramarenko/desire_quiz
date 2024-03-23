import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';

import $ from 'jquery';

import ModalMessage from "../ModalMessage/ModalMessage";
import {saveUTMParams} from "../../util/saveUTMParams";
import {useIntl} from "react-intl";

import './ContactInfo.css';
import 'react-phone-number-input/style.css';


import ua from 'react-phone-number-input/locale/ua';
import en from 'react-phone-number-input/locale/en';
import ru from 'react-phone-number-input/locale/ru';
import tr from 'react-phone-number-input/locale/tr';

const ContactInfo = ({answers}) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const intl = useIntl();

    const labels = {
        "en": en,
        "ua": ua,
        "ru": ru,
        "tr": tr
    }

    const handleSubmit = () => {
        if (name === '' || phone === '' || email === '') {
            setModalMessage(intl.formatMessage({id: 'pleaseFillAllFields'}));
            setIsModalOpen(true);
            return;
        }
        if (!agree) {
            setModalMessage(intl.formatMessage({id: 'youShouldAgreeToPolicy'}));
            setIsModalOpen(true);
            return;
        }

        if (!phone) {
            setModalMessage(intl.formatMessage({id: 'pleaseInputCorrectPhone'}));
            setIsModalOpen(true);
            return;
        }

        const minPhoneLength = 8;
        const maxPhoneLength = 15;

        // Remove non-digit characters for length validation
        const digitsOnlyPhone = phone.replace(/\D/g, '');

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setModalMessage(intl.formatMessage({id: 'pleaseInputCorrectEmail'}));
            setIsModalOpen(true);
            return;
        }

        if (digitsOnlyPhone.length < minPhoneLength || digitsOnlyPhone.length > maxPhoneLength) {
            setModalMessage(intl.formatMessage({id: 'pleaseInputCorrectPhone'}));
            setIsModalOpen(true);
            return;
        }

        const notes = Object
            .entries(answers)
            .map(([questionId, answerId]) => {
                const questionText = intl.formatMessage({id: questionId});
                const answerText = intl.formatMessage({id: answerId});
                return `${questionText}\n ${answerText}`;
            })
            .join(" \n\n ");

        const adv_id = {
            en: 10000010,
            ru: 20000010,
            ua: 30000010,
            tr: 40000010,
        };

        console.log("locale = " + intl.locale);

        const data = {
            action: 'partner-custom-form',
            token: process.env.REACT_APP_CRM_API_TOKEN,
            partner_id: process.env.REACT_APP_PARTNER_ID,
            name: name,
            phone: phone,
            email: email,
            building_id: process.env.REACT_APP_BUILDING_ID,
            lang: intl.locale,
            note: notes,
            adv_id: adv_id[intl.locale] || 30000010,
            ...saveUTMParams()
        };

        console.log(data);

        $.ajax({
            url: 'https://crm.g-plus.app/api/actions',
            method: 'post',
            data: data,
            success: function (response) {
                console.log(response);
                navigate('/thank-you');
            },
            error: function (error) {
                console.log(error);
                navigate('/thank-you');
            }
        });
    };

    return (
        <div className="contact-info">
            <h1>{intl.formatMessage({id: 'enterContactData'})}</h1>
            <div className={"name-and-phone"}>
                <PhoneInput
                    className={"phone-input"}
                    international
                    defaultCountry={intl.locale === "en" ? "US" : intl.locale.toString().toUpperCase()}
                    value={phone}
                    onChange={setPhone}
                    placeholder={intl.formatMessage({id: 'phone'})}
                    labels={labels[intl.locale]}
                />
                <input
                    type="text"
                    placeholder={intl.formatMessage({id: 'name'})}
                    maxLength="20"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder={intl.formatMessage({id: 'email'})}
                    value={email}
                    onChange={
                        e => {
                            setEmail(e.target.value);
                        }
                    }
                />

            </div>
            <div>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={e => setAgree(e.target.checked)}
                />
                <label className={"policy-label"}>
                    <a href={`/policy/${intl.locale}`} target="_blank" rel="noopener noreferrer">
                        {intl.formatMessage({id: 'iAgreeWithPolicies'})}
                    </a> *
                </label>
            </div>
            <button className={"submit-btn"} onClick={handleSubmit}>
                {intl.formatMessage({id: 'sentRequest'})}
            </button>
            <ModalMessage
                isOpen={isModalOpen}
                message={modalMessage}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ContactInfo;
