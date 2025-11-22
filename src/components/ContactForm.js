import React, { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://getform.io/f/arogdkkb", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
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
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 space-y-4">
      
      <div>
        <label className="block mb-2 font-medium">Nom</label>
        <input
          type="text"
          name="name"
          required
          className="w-full p-3 border rounded"
          placeholder="Votre nom"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full p-3 border rounded"
          placeholder="Votre email"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium">Message</label>
        <textarea
          name="message"
          rows="5"
          required
          className="w-full p-3 border rounded"
          placeholder="Votre message…"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
      >
        Envoyer
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
}

export default ContactForm;
