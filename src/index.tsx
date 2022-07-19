import React from 'react';
import { createRoot } from 'react-dom/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        header: { mail: 'E-Mail', phone: 'Phone' },
        headings: {
          education: 'Education',
          experience: 'Professional experience',
          further_education: 'Further education',
          hobbies_and_interests: 'Hobbies an interests',
          knowledge: 'Special knowledge',
        },
        misc: {
          address: 'Address',
          date_birth_place: 'Date / place of birth',
          hobbies: 'Hobbies',
          interests: 'Interests',
          nationality: 'Nationality',
          today: 'Today',
        },
      },
    },
    de: {
      translation: {
        header: { mail: 'E-Mail', phone: 'Mobiltelefon' },
        headings: {
          education: 'Ausbildung',
          experience: 'Beruflicher Werdegang',
          further_education: 'Weiterbildung',
          hobbies_and_interests: 'Hobbys und Interessen',
          knowledge: 'Besondere Kenntnisse',
        },
        misc: {
          address: 'Adresse',
          date_birth_place: 'Geburtsdatum / -ort',
          hobbies: 'Hobbys',
          interests: 'Interessen',
          nationality: 'Nationalität',
          today: 'Today',
        },
      },
    },
  },
  lng: 'en',
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

const container = document.getElementById('root');
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
