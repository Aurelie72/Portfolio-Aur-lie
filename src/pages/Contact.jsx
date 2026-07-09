import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FloatingInput from "../components/FloatingInput.jsx";

// Remplace ces 3 valeurs par celles de ton compte EmailJS
const SERVICE_ID = "service_q8vx4km";
const TEMPLATE_ID = "template_c8bwsi6";
const PUBLIC_KEY = "R4bdwIYEM1Lp7bftR";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.nom,
          from_email: formData.email,
          phone: formData.telephone,
          message: formData.message,
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setFormData({ nom: "", email: "", telephone: "", message: "" });
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

        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingInput id="nom" name="nom" label="Nom" value={formData.nom} onChange={handleChange} required />
          <FloatingInput id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
          <FloatingInput id="telephone" name="telephone" label="Téléphone" type="tel" value={formData.telephone} onChange={handleChange} />

          <div className="mb-4">
            <FloatingInput id="message" name="message" label="Message" value={formData.message} onChange={handleChange} required textarea />
          </div>

          <div className="mx-[30px]">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-lg text-gray-200"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-emerald-400 text-sm text-center">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-sm text-center">
              Une erreur est survenue, merci de réessayer.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/Aurelie72" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub d’Aurélie Beaufils" className="hover:text-emerald-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/aurelie-beaufils-8026b6309?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn d’Aurélie Beaufils" className="hover:text-emerald-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:lapaille17@hotmail.fr" aria-label="Envoyer un email à Aurélie Beaufils" className="hover:text-emerald-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
