import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './ContactInfo.css';
import ModalMessage from "../ModalMessage/ModalMessage";
import $ from 'jquery';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import ua from 'react-phone-number-input/locale/ua';

const ContactInfo = ({answers}) => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [agree, setAgree] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('Будь ласка, заповніть усі поля.');

    const handleSubmit = () => {
        if (name === '' || phone === '' || email === '') {
            setModalMessage('Будь ласка, заповніть усі поля.');
            setIsModalOpen(true);
            return;
        }
        if (!agree) {
            setModalMessage('Ви повинні погодитися з умовами використання та політикою конфіденційності.');
            setIsModalOpen(true);
            return;
        }

        if (!phone) {
            setModalMessage('Будь ласка, введіть дійсний телефонний номер.');
            setIsModalOpen(true);
            return;
        }

        const minPhoneLength = 8;
        const maxPhoneLength = 15;

        // Remove non-digit characters for length validation
        const digitsOnlyPhone = phone.replace(/\D/g, '');


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setModalMessage('Будь ласка, введіть дійсну електронну адресу.');
            setIsModalOpen(true);
            return;
        }

        if (digitsOnlyPhone.length < minPhoneLength || digitsOnlyPhone.length > maxPhoneLength) {
            setModalMessage('Будь ласка, введіть дійсний телефонний номер.');
            setIsModalOpen(true);
            return;
        }

        const notes = Object.entries(answers).map(([key, value]) => `${key}: ${value}`).join(" ; ");

        const data = {
            action: 'partner-custom-form',
            token: process.env.REACT_APP_CRM_API_TOKEN,
            partner_id: process.env.REACT_APP_PARTNER_ID,
            name: name,
            phone: phone,
            email: email,
            building_id: process.env.REACT_APP_BUILDING_ID,
            lang: 'ua',
            note: notes,
            adv_id: 30000010,
            utm_source: localStorage.getItem('utm_source'),
            utm_medium: localStorage.getItem('utm_medium'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_term: localStorage.getItem('utm_term'),
            utm_content: localStorage.getItem('utm_content')
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
            <h1>Введіть контактну інформацію</h1>
            <div className={"name-and-phone"}>
                <PhoneInput
                    className={"phone-input"}
                    international
                    defaultCountry="US"
                    value={phone}
                    onChange={setPhone}
                    placeholder="Телефон"
                    labels={ua}
                />
                <input
                    type="text"
                    placeholder="Ім'я"
                    maxLength="20"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />

                <input
                    type="email"
                    placeholder="e-mail"
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
                    Я згоден з <a href="/policy" target="_blank" rel="noopener noreferrer">умовами використання та
                    політикою конфіденційності</a> *
                </label>
            </div>
            <button className={"submit-btn"} onClick={handleSubmit}>Залишити заявку</button>
            <ModalMessage
                isOpen={isModalOpen}
                message={modalMessage}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
};

export default ContactInfo;
