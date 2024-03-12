import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './ContactInfo.css';
import ModalMessage from "../ModalMessage/ModalMessage";
import $ from 'jquery';

const ContactInfo = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agree, setAgree] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMessage, setModalMessage] = useState('Будь ласка, заповніть усі поля.');

    const handleSubmit = () => {
        if (name === '' || phone === '') {
            setModalMessage('Будь ласка, заповніть усі поля.');
            setIsModalOpen(true);
            return;
        }
        if (!agree) {
            setModalMessage('Ви повинні погодитися з умовами використання та політикою конфіденційності.');
            setIsModalOpen(true);
            return;
        }

        const data = {
            action: 'partner-custom-form',
            token: process.env.CRM_API_TOKEN,
            partner_id: process.env.PARTNER_ID,
            name: name,
            phone: phone,
            building_id: process.env.BUILDING_ID,
            lang: 'ua',
            note: 'all the answers',
            adv_id: 30000010,
            utm_source: localStorage.getItem('utm_source'),
            utm_medium: localStorage.getItem('utm_medium'),
            utm_campaign: localStorage.getItem('utm_campaign'),
            utm_term: localStorage.getItem('utm_term'),
            utm_content: localStorage.getItem('utm_content')
        };

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
                <input
                    type="text"
                    placeholder="Ім'я"
                    maxLength="20"
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
                <input
                    type="tel"
                    pattern="[0-9]*"
                    placeholder="Телефон"
                    value={phone}
                    onChange={
                        e => {
                            if (/^[0-9]*$/.test(e.target.value) && e.target.value.length <= 20) {
                                setPhone(e.target.value);
                            }
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
                    Я згоден з <Link to="/policy">умовами використання та політикою конфіденційності</Link> *
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
