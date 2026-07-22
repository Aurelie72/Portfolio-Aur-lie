import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FloatingInput from "../components/FloatingInput.jsx";

const SERVICE_ID = "service_q8vx4km";
const TEMPLATE_ID = "template_c8bwsi6";
const PUBLIC_KEY = "R4bdwIYEM1Lp7bftR";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
    website: ""
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  }

  function validate() {
    const newErrors = {};

    if (!formData.nom.trim()) {
      newErrors.nom = "Le nom est obligatoire.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "L'email est obligatoire.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "L'adresse email n'est pas valide.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Le message est obligatoire.";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }

    return newErrors;
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.website !== "") {
      console.warn("Spam détecté — formulaire bloqué");
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus("sending");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, {
        from_name: formData.nom,
        from_email: formData.email,
        phone: formData.telephone,
        message: formData.message,
      }, PUBLIC_KEY)
      .then(() => {
        setStatus("success");
        setFormData({ nom: "", email: "", telephone: "", message: "", website: "" });
        setErrors({});
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setStatus("error");
      });
  }

  return (
    <div className="w-full bg-black">
      <section className="max-w-xl mx-auto px-8 py-14 text-white">
        <h2 className="text-5xl font-bold text-emerald-500 mb-8">Contact</h2>

        <form onSubmit={handleSubmit} noValidate className="space-y-6">

<label htmlFor="website" className="sr-only">Ne pas remplir ce champ</label>
<input
  type="text"
  id="website"
  name="website"
  value={formData.website}
  onChange={handleChange}
  className="hidden"
  tabIndex="-1"
  autoComplete="off"
/>

          <div>
            <FloatingInput
              id="nom" name="nom" label="Nom"
              value={formData.nom} onChange={handleChange}
              required aria-describedby="nom-error"
            />
            {errors.nom && (
              <p id="nom-error" role="alert" className="text-red-400 text-sm mt-1 mx-[30px]">
                {errors.nom}
              </p>
            )}
          </div>

          <div>
            <FloatingInput
              id="email" name="email" label="Email" type="email"
              value={formData.email} onChange={handleChange}
              required aria-describedby="email-error"
            />
            {errors.email && (
              <p id="email-error" role="alert" className="text-red-400 text-sm mt-1 mx-[30px]">
                {errors.email}
              </p>
            )}
          </div>

<div>
  <FloatingInput
    id="telephone"
    name="telephone"
    label="Téléphone"
    type="tel"
    value={formData.telephone}
    onChange={handleChange}
  />
</div>

          <div>
            <FloatingInput
              id="message" name="message" label="Message"
              value={formData.message} onChange={handleChange}
              required textarea aria-describedby="message-error"
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-red-400 text-sm mt-1 mx-[30px]">
                {errors.message}
              </p>
            )}
          </div>

          <div className="mx-[30px]">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg text-gray-300"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {status === "success" && (
            <p role="alert" className="text-emerald-400 text-sm text-center">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-red-400 text-sm text-center">
              Une erreur est survenue, merci de réessayer.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/Aurelie72" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub d'Aurélie Beaufils" className="p-3 hover:text-emerald-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/aurelie-beaufils-8026b6309" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn d'Aurélie Beaufils" className="p-3 hover:text-emerald-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:lapaille17@hotmail.fr" aria-label="Envoyer un email à Aurélie Beaufils" className="p-3 hover:text-emerald-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}