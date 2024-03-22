import React, { useContext } from 'react';
import Select from 'react-select';
import { LocaleContext } from '../contexts/LocaleContext';

const LocaleSwitcher = () => {
    const { locale, setLocale } = useContext(LocaleContext);
    const options = [
        { value: 'en', label: 'English' },
        { value: 'ua', label: 'Українська' },
        { value: 'ru', label: 'Русский' },
        { value: 'tr', label: 'Türkçe' }
    ];

    const customStyles = {
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            borderColor: '#E1886C',
            color: '#fff',
            outline: 'none',
            boxShadow: 'none',
            '&:hover': {
                borderColor: '#3A8A63',
            },
        }),
        singleValue: (provided) => ({
            ...provided,
            color: '#fff',
        }),
        option: (provided, state) => ({
            ...provided,
            color: state.isSelected ? '#fff' : '#333',
            backgroundColor: state.isSelected ? '#E1886C' : 'transparent',
            '&:hover': {
                backgroundColor: '#3A8A63',
                color: '#fff',
            },
        }),
    };

    return (
        <Select
            options={options}
            value={options.find(option => option.value === locale)}
            onChange={(option) => setLocale(option.value)}
            styles={customStyles}
        />
    );
};

export default LocaleSwitcher;
