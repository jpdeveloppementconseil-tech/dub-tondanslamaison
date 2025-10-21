import React from 'react';
import ContactForm from '../components/ContactForm';

function Contact() {
  return (
    <section className="p-12">
      <h2 className="text-3xl font-bold text-center mb-8">Contact / Devis</h2>
      <ContactForm />
      <div className="text-center mt-8">
        <p>📍 Bourgogne</p>
        <p>📞 06 98 55 66 48 | ✉️ jpdeveloppementconseil@gmail.com</p>
        <p>
          Instagram: <a href="https://www.instagram.com/dbdlm71" className="text-cuivre hover:underline" target="_blank" rel="noreferrer">dbdlm71</a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
