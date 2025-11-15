import { Helmet } from "react-helmet-async";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact – JP Développement Conseil</title>
        <meta
          name="description"
          content="Contactez JP Développement Conseil pour obtenir un devis ou des informations sur nos prestations en béton ciré en Bourgogne et Rhône-Alpes."
        />
      </Helmet>

      <div className="max-w-xl mx-auto px-6 py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Contactez-nous
        </h1>

        <p className="text-lg text-gray-700 mb-4">
          Pour toute demande de devis ou d'information, remplissez le formulaire
          ou contactez-nous directement :
        </p>

        <p className="text-lg text-gray-700 mb-2">
          📞 <strong>06 00 00 00 00</strong>
        </p>

        <p className="text-lg text-gray-700 mb-6">
          📧 <strong>contact@dubetondanslamaison.com</strong>
        </p>

        {/* Tu gardes ton formulaire tel qu’il est si tu en as un */}
      </div>
    </>
  );
}

export default Contact;
