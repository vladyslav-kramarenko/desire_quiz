import questionsTranslations from '../data/questionsTranslation';

const otherTranslations  = {
    en: {
        // home page
        homeTitle: 'Profitable Real Estate Investments in Antalya',
        homeSubtitle: 'Take the survey and find out the value of the real estate object',
        startQuizButton: 'Start the Survey',
        // thank you page
        thankYouTitle: 'Thank You for Your Application',
        thankYouSubtitle: 'A manager will contact you soon',
        visitSiteButton: 'Visit the Site',
        // question page
        answerNotChosenModal: 'Choose an answer before continuing.',
        // contact info page
        pleaseFillAllFields: 'Please fill in all fields.',
        youShouldAgreeToPolicy: 'You should agree to the terms of use and privacy policy.',
        pleaseInputCorrectPhone: 'Please enter a valid phone number.',
        pleaseInputCorrectEmail: 'Please enter a valid email address.',
        enterContactData: 'Enter contact information',
        phone: 'Phone',
        name: 'Name',
        email: 'E-mail',
        iAgreeWithPolicies: 'I agree to the terms of use and privacy policy',
        sentRequest: 'Submit an application',
        //modal
        closeModal: 'Close',
        //404
        goHomeButton: 'Go to Home Page',
        pageNotFoundDescription:'The page you are looking for does not exist or has been moved.',
        pageNotFound: '404 - Page Not Found',
    },
    ua: {
        // home page
        homeTitle: 'Вигідні інвестиції у нерухомість в Анталії',
        homeSubtitle: 'Пройдіть опитування та дізнайтесь вартість об\'єкту нерухомості.',
        startQuizButton: 'Почати опитування',
        // thank you page
        thankYouTitle: 'Дякуємо за заявку',
        thankYouSubtitle: 'Менеджер зв\'яжеться з вами найближчим часом',
        visitSiteButton: 'Відвідати сайт',
        // question page

        answerNotChosenModal: 'Виберіть відповідь, перш ніж продовжити.',
        // contact info page
        pleaseFillAllFields: 'Будь ласка, заповніть всі поля.',
        youShouldAgreeToPolicy: 'Ви повинні погодитися з умовами використання та політикою конфіденційності.',
        pleaseInputCorrectPhone: 'Будь ласка, введіть дійсний телефонний номер.',
        pleaseInputCorrectEmail: 'Будь ласка, введіть дійсну електронну адресу.',
        enterContactData: 'Введіть контактну інформацію',
        phone: 'Телефон',
        name: 'Ім\'я',
        email: 'E-mail',
        iAgreeWithPolicies: 'Я згоден з умовами використання та політикою конфіденційності',
        sentRequest: 'Залишити заявку',
        //modal
        closeModal: 'Закрити',
        //404
        goHomeButton: 'Перейти на домашню сторінку',
        pageNotFoundDescription:'Сторінка, яку ви шукаєте, не існує або була переміщена.',
        pageNotFound: '404 - Сторінка не знайдена',
    },
    ru: {
        // home page
        homeTitle: 'Выгодные инвестиции в недвижимость в Анталии',
        homeSubtitle: 'Пройдите опрос и узнайте стоимость объекта недвижимости.',
        startQuizButton: 'Начать опрос',
        // thank you page
        thankYouTitle: 'Спасибо за вашу заявку',
        thankYouSubtitle: 'Менеджер свяжется с вами в ближайшее время',
        visitSiteButton: 'Посетить сайт',
        // question page

        answerNotChosenModal: 'Выберите ответ, прежде чем продолжить.',
        // contact info page
        pleaseFillAllFields: 'Пожалуйста, заполните все поля.',
        youShouldAgreeToPolicy: 'Вы должны согласиться с условиями использования и политикой конфиденциальности.',
        pleaseInputCorrectPhone: 'Введите действительный телефонный номер.',
        pleaseInputCorrectEmail: 'Введите действительный адрес электронной почты.',
        enterContactData: 'Введите контактную информацию',
        phone: 'Телефон',
        name: 'Имя',
        email: 'E-mail',
        iAgreeWithPolicies: 'Я согласен c условиями использования и политикой конфиденциальности',
        sentRequest: 'Оставить заявку',
        //modal
        closeModal: 'Закрыть',
        //404
        goHomeButton: 'Вернуться на домашнюю страницу',
        pageNotFoundDescription:'Страница, которую вы ищете, не существует или была перемещена.',
        pageNotFound: '404 Страница не найдена',
    },
    tr: {
        // home page
        homeTitle: 'ANTALYA\'DA GAYRİMENKULDE KAZANÇLI YATIRIMLAR',
        homeSubtitle: 'Anketi doldurun ve gayrimenkulün maliyetini öğrenin.',
        startQuizButton: 'ANKETE BAŞLA',
        // thank you page
        thankYouTitle: 'BAŞVURUNUZ İÇİN TEŞEKKÜRLER',
        thankYouSubtitle: 'Yönetici en kısa sürede sizinle iletişime geçecektir.',
        visitSiteButton: 'WEBSİTEYE GİT',
        // question page
        answerNotChosenModal: 'Devam etmeden önce bir seçenek belirleyin.',
        // contact info page
        pleaseFillAllFields: 'Nazik olun, tüm alanları doldurun.',
        youShouldAgreeToPolicy: 'KULLANIM KOŞULLARI VE GİZLİLİK POLİTİKASI ŞARTLARINI KABUL ETMENİZ GEREKİR.',
        pleaseInputCorrectPhone: 'LÜTFEN GEÇERLİ BİR TELEFON NUMARASI GİRİNİZ.',
        pleaseInputCorrectEmail: 'LÜTFEN GEÇERLİ BİR E-POSTA ADRESİ GİRİNİZ.',
        enterContactData: 'İLETİŞİM BİLGİLERİNİZİ GİRİN',
        phone: 'Телефон',
        name: 'İsim',
        email: 'E-posta',
        iAgreeWithPolicies: 'Kullanım koşullarını ve gizlilik politikasını kabul ediyorum',
        sentRequest: 'Başvuru yap',
        //modal
        closeModal: 'Kapat',
        //404
        goHomeButton: 'Ana sayfaya git',
        pageNotFoundDescription:'Aradığınız sayfa mevcut değil veya taşınmış.',
        pageNotFound: '404 Sayfa Bulunamadı',
    },
};

// Merge translations for each language
const messages = Object.keys(questionsTranslations).reduce((acc, lang) => {
    acc[lang] = {
        ...otherTranslations[lang],
        ...questionsTranslations[lang],
    };
    return acc;
}, {});

export default messages;
