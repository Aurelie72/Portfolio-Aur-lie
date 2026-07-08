import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function FloatingInput({ id, name, label, type = "text", value, onChange, required, textarea }) {
  const [focused, setFocused] = useState(false);
  const floated = focused || value.length > 0;
  const Component = textarea ? "textarea" : "input";

  return (
    <fieldset
      className={`m-0 rounded-lg border-2 px-4 pb-3 transition-colors duration-200
              ${textarea ? "" : "flex items-center"}
              ${focused ? "border-emerald-300" : "border-emerald-600"}`}
    >
      <legend
        className={`overflow-hidden whitespace-nowrap transition-all duration-200 text-emerald-400 ${
          floated ? "max-w-[200px] px-2 text-base" : "max-w-0 px-0 text-base"
        }`}
      >
        {label}
      </legend>

      <Component
        type={!textarea ? type : undefined}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        required={required}
        placeholder={!floated ? label : ""}
        rows={textarea ? 4 : undefined}
        className="w-full bg-black text-white text-lg placeholder-emerald-500 focus:outline-none resize-none py-2"
      />
    </fieldset>
  );
}

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

          <button type="submit" className="w-full py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 transition-colors font-semibold text-lg">
            Envoyer
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-10">
          <a href="https://github.com/TON-PSEUDO" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-emerald-400 transition-colors">
            <FaGithub size={32} />
          </a>
          <a href="https://linkedin.com/in/TON-PROFIL" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-emerald-400 transition-colors">
            <FaLinkedin size={32} />
          </a>
          <a href="mailto:aureliebeaufils@hotmail.com" aria-label="Email" className="hover:text-emerald-400 transition-colors">
            <FaEnvelope size={32} />
          </a>
        </div>
      </section>
    </div>
  );
}
