import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FloatingInput from "../components/FloatingInput.jsx";

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Formulaire envoyé :", formData);
  }

  return (
    <div className="w-full bg-black">
      <section className="max-w-xl mx-auto px-8 py-14 text-white">
        <h1 className="text-5xl font-bold text-emerald-500 mb-8">Contact</h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <FloatingInput id="nom" name="nom" label="Nom" value={formData.nom} onChange={handleChange} required />
          <FloatingInput id="email" name="email" label="Email" type="email" value={formData.email} onChange={handleChange} required />
          <FloatingInput id="telephone" name="telephone" label="Téléphone" type="tel" value={formData.telephone} onChange={handleChange} />

          <div className="mb-4">
            <FloatingInput id="message" name="message" label="Message" value={formData.message} onChange={handleChange} required textarea />
          </div>
<div className="mx-[30px]">
          <button type="submit" className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors font-semibold text-lg">
            Envoyer
          </button></div>
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/Aurelie72" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://www.linkedin.com/in/aurelie-beaufils-8026b6309?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:lapaille17@hotmail.fr" aria-label="Email" className="hover:text-emerald-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
