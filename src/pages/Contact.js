
import React from "react";
import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <Helmet>
        <title>Contact – JP Développement Conseil</title>
        <meta
          name="description"
          content="Contactez-nous pour un devis béton ciré ou toute demande d'information. Réponse rapide garantie."
        />
        <link rel="canonical" href="https://dubetondanslamaison.com/contact" />
      </Helmet>

      <h1 className="text-3xl font-bold mb-6">Contactez-nous</h1>
      <p className="mb-6">
        Pour toute demande d'information ou de devis, utilisez le formulaire ci-dessous.
      </p>

      {/* Formulaire connecté à Formspree */}
      <form
        action="https://formspree.io/f/mzzjobao"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Votre nom"
          className="w-full p-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Votre email"
          className="w-full p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Votre message"
          className="w-full p-3 border rounded h-32"
          required
        ></textarea>

        {/* champ caché optionnel pour le sujet */}
        <input type="hidden" name="_subject" value="Nouveau message du site" />

        <button
          type="submit"
          className="bg-black text-white px-6 py-3 rounded-lg"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
}

export default Contact;
