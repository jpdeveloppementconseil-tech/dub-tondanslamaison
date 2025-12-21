import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mzzjobao", {
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
    } catch (error) {
      setStatus("Erreur réseau. Veuillez réessayer plus tard.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-1/2 mx-auto">
      <div className="mb-4">
        <label className="block mb-2 font-medium">Votre nom</label>
        <input
          type="text"
          name="name"
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Votre email</label>
        <input
          type="email"
          name="email"
          required
          className="w-full border p-2 rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">Votre message</label>
        <textarea
          name="message"
          required
          className="w-full border p-2 rounded h-32"
        ></textarea>
      </div>

      <button
        type="submit"
        className="bg-black text-white px-6 py-2 rounded"
      >
        Envoyer
      </button>

      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
};

export default ContactForm;
