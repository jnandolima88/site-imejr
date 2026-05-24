"use client";

import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Reveal from "@/components/Reveal";

const contactInfo = [
  { icon: Mail, label: "E-mail", value: "contato@imejr.com", href: "mailto:contato@imejr.com" },
  { icon: Phone, label: "Telefone", value: "+55 11 3091-6241", href: "tel:+551130916241" },
  { icon: MapPin, label: "Endereço", value: "R. do Matão, 1010 — Cidade Universitária, São Paulo/SP", href: "#" },
];

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", area: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputStyle = {
    background: "#1A1A1A",
    border: "1px solid #2E2E2E",
    color: "#FFFFFF",
    borderRadius: "10px",
    padding: "12px 16px",
    fontSize: "14px",
    width: "100%",
    outline: "none",
    transition: "border-color 0.15s",
  } as React.CSSProperties;

  return (
    <section id="contato" className="py-24" style={{ background: "#000000" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left */}
          <Reveal className="lg:col-span-2">
            <p className="section-label mb-4">Fale conosco</p>
            <h2 className="section-title mb-8">Entre em Contato</h2>

            <div className="space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: "#1A1A1A", border: "1px solid #2E2E2E" }}
                  >
                    <Icon size={16} style={{ color: "#FFDA33" }} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest mb-1" style={{ color: "#3E3E3E" }}>
                      {label}
                    </p>
                    <a
                      href={href}
                      className="text-sm transition-colors"
                      style={{ color: "#A0A0A0" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#A0A0A0")}
                    >
                      {value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8" style={{ borderTop: "1px solid #2E2E2E" }}>
              <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#3E3E3E" }}>
                CNPJ
              </p>
              <p className="text-sm" style={{ color: "#5E5E5E" }}>
                26.531.013/0001-80
              </p>
            </div>
          </Reveal>

          {/* Right: form */}
          <Reveal className="lg:col-span-3" delay={120}>
            {status === "sent" ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center py-20 rounded-2xl"
                style={{ background: "#1A1A1A", border: "1px solid #2E2E2E" }}
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{ background: "#FFDA33" }}
                >
                  <Send size={20} style={{ color: "#101010" }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mensagem enviada!</h3>
                <p style={{ color: "#5E5E5E" }} className="text-sm">
                  Retornaremos em até 48h úteis.
                </p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", area: "", message: "" }); }}
                  className="mt-6 text-sm font-medium transition-colors"
                  style={{ color: "#5E5E5E" }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                  onMouseLeave={e => (e.currentTarget.style.color = "#5E5E5E")}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 space-y-5"
                style={{ background: "#1A1A1A", border: "1px solid #2E2E2E" }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E5E5E" }}>
                      Nome *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#FFDA33")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E5E5E" }}>
                      E-mail *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "#FFDA33")}
                      onBlur={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E5E5E" }}>
                    Área de interesse *
                  </label>
                  <select
                    name="area"
                    required
                    value={form.area}
                    onChange={handleChange}
                    style={{ ...inputStyle, appearance: "none" } as React.CSSProperties}
                    onFocus={e => (e.currentTarget.style.borderColor = "#FFDA33")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
                  >
                    <option value="">Selecione uma área</option>
                    <option value="computacao">Computação</option>
                    <option value="dados">Análise de Dados</option>
                    <option value="educacao">Educação</option>
                    <option value="ps">Processo Seletivo</option>
                    <option value="outro">Outro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#5E5E5E" }}>
                    Mensagem *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Descreva seu projeto ou dúvida..."
                    style={{ ...inputStyle, resize: "none" } as React.CSSProperties}
                    onFocus={e => (e.currentTarget.style.borderColor = "#FFDA33")}
                    onBlur={e => (e.currentTarget.style.borderColor = "#2E2E2E")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar mensagem
                      <Send size={15} />
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
