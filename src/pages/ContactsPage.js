/* ContactsPage.js */
import React from 'react';
import { ContactsContainer, ContactBox } from './ContactsPage.styles';

const ContactsPage = () => {
  return (
    <ContactsContainer>
      <ContactBox>
        <h2>Контакты</h2>
        <p>г. Новосибирск, ул. Красный проспект 323/4</p>
        <p>Тел.: 89134513996</p>
        <p>E-mail: arenat98@gmail.com</p>
      </ContactBox>
    </ContactsContainer>
  );
};

export default ContactsPage;