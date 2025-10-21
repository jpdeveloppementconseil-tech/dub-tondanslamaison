import React, { useState } from 'react';

function ContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/mzzjobao', {
        method: 'POST',
        body: data,
        headers: { 'Accept': 'application/json' },
      });

      if (response.ok) {
        setStatus('Message envoyé avec succès !');
        form.reset();
      } else {
        setStatus("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (err) {
      setStatus("Erreur réseau. Veuillez réessayer plus tard.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4">
      <input type="text" name="name" placeholder="Nom" required className="w-full p-3 border rounded" />
      <input type="email" name="email" placeholder="Email" required className="w-full p-3 border rounded" />
      <input type="tel" name="phone" placeholder="Téléphone" className="w-full p-3 border rounded" />
      <select name="projectType" className="w-full p-3 border rounded">
        <option value="">Type de projet</option>
        <option value="sol">Sol</option>
        <option value="mur">Mur</option>
        <option value="salle-de-bain">Salle de bain</option>
        <option value="autre">Autre</option>
      </select>
      <textarea name="message" placeholder="Message" required className="w-full p-3 border rounded h-32"></textarea>
      <button type="submit" className="bg-cuivre text-white px-6 py-3 rounded font-semibold hover:bg-opacity-90">Envoyer</button>
      {status && <p className="mt-2 text-center">{status}</p>}
    </form>
  );
}

export default ContactForm;
