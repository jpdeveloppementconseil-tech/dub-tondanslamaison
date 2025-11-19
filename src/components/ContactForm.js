import React, { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzjobao", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        setStatus("Message envoyé avec succès !");
        form.reset();
      } else {
        setStatus("Erreur lors de l’envoi. Veuillez réessayer.");
      }
    } catch (err) {
      setStatus("Erreur réseau. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
      <input type="text" name="name" placeholder="Votre nom" required />
      <input type="email" name="email" placeholder="Votre email" required />
      <textarea name="message" placeholder="Votre message" required></textarea>

      <button type="submit">Envoyer</button>

      {status && <p>{status}</p>}
    </form>
  );
}

export default ContactForm;