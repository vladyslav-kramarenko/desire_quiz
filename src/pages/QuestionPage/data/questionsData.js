import hotel from './hotel.jpg';
import flat from './flat.jpg';
import penthouse from './penthouse.jpg';

const questionsData = [
    {
        id: 'purposeQuestion',
        answers: [
            {id: 'purposeAnswer1', image: ''},
            {id: 'purposeAnswer2', image: ''},
        ],
    },
    {
        id: 'investExperienceQuestion',
        answers: [
            {id: 'investExperienceAnswer1', image: ''},
            {id: 'investExperienceAnswer2', image: ''},
        ],
    },
    {
        id: 'propertyTypeQuestion',
        answers: [
            {id: 'propertyTypeAnswer1', image: hotel},
            {id: 'propertyTypeAnswer2', image: flat},
            {id: 'propertyTypeAnswer3', image: penthouse},
        ],
    },
];

export default questionsData;
