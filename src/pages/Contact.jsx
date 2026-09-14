import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import FloatingInput from "../components/FloatingInput.jsx";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    message: "",
    website: "",
    consent: false
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const nomRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const fieldRefs = { nom: nomRef, email: emailRef, message: messageRef };

  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => setStatus("idle"), 6000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });

    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
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

    if (!formData.consent) {
      newErrors.consent = "Merci d'accepter l'utilisation de vos données pour être recontacté(e).";
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

      const firstErrorField = ["nom", "email", "message"].find((f) => newErrors[f]);
      if (firstErrorField && fieldRefs[firstErrorField].current) {
        fieldRefs[firstErrorField].current.focus();
      }
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
        setFormData({ nom: "", email: "", telephone: "", message: "", website: "", consent: false });
        setErrors({});
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        setStatus("error");
      });
  }

  return (
    <div className="w-full bg-ink border-t border-hairline">
      <section className="max-w-xl mx-auto px-8 py-20 text-ivory">
        <h2 className="font-serif text-3xl sm:text-4xl mb-2">Contact</h2>
        <p className="text-muted text-sm mb-10">
          Devis gratuits, réponses sous 24 à 48h.
        </p>

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
              required describedBy={errors.nom ? "nom-error" : undefined}
              error={!!errors.nom}
              inputRef={nomRef}
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
              required describedBy={errors.email ? "email-error" : undefined}
              error={!!errors.email}
              inputRef={emailRef}
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
              required textarea describedBy={errors.message ? "message-error" : undefined}
              error={!!errors.message}
              inputRef={messageRef}
            />
            {errors.message && (
              <p id="message-error" role="alert" className="text-red-400 text-sm mt-1 mx-[30px]">
                {errors.message}
              </p>
            )}
          </div>

          <div className="mx-[30px]">
            <label className="flex items-start gap-2 text-sm text-muted">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                className="mt-1 accent-brass"
              />
              <span>
                J'accepte que mes données soient utilisées pour être recontacté(e) au sujet de ma demande.
              </span>
            </label>
            {errors.consent && (
              <p id="consent-error" role="alert" className="text-red-400 text-sm mt-1">
                {errors.consent}
              </p>
            )}
          </div>

          <div className="mx-[30px]">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3 bg-brass hover:bg-brass-deep disabled:opacity-50 disabled:cursor-not-allowed transition-colors font-semibold text-ink"
            >
              {status === "sending" ? "Envoi en cours..." : "Envoyer"}
            </button>
          </div>

          {status === "success" && (
            <p role="alert" className="text-brass text-sm text-center">
              Message envoyé avec succès !
            </p>
          )}
          {status === "error" && (
            <p role="alert" className="text-red-400 text-sm text-center">
              Une erreur est survenue, merci de réessayer.
            </p>
          )}
        </form>

        <div className="flex justify-center gap-6 mt-12">
          <a href="https://github.com/Aurelie72" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil GitHub d'Aurélie Beaufils" className="p-3 text-muted hover:text-brass transition-colors">
            <FaGithub size={28} />
          </a>
          <a href="https://www.linkedin.com/in/aurelie-beaufils-8026b6309" target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn d'Aurélie Beaufils" className="p-3 text-muted hover:text-brass transition-colors">
            <FaLinkedin size={28} />
          </a>
          <a href="mailto:aurelie72beaufils@gmail.com" aria-label="Envoyer un email à Aurélie Beaufils" className="p-3 text-muted hover:text-brass transition-colors">
            <FaEnvelope size={28} />
          </a>
        </div>
      </section>
    </div>
  );
}
