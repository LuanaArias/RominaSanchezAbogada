const IconFamilia = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
    <polyline points="9 22 9 12 15 12 15 22"/>
    <path d="M12 22V12" strokeOpacity="0.5"/> 
  </svg>
);

const IconVinculos = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
  </svg>
);

const IconDenuncias = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v4"/><path d="M12 16h.01"/>
  </svg>
);

const IconLaboral = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
  </svg>
);

const IconPenal = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v17"/><path d="M3 21h18"/>
    <path d="M6 8h12"/>
    <path d="M6 8v3a3 3 0 0 0 3 3h0"/><path d="M18 8v3a3 3 0 0 1-3 3h0"/>
    <circle cx="12" cy="8" r="1"/>
  </svg>
);

export const areasEstudio = [
  { id: 1, Icon: IconFamilia, title: "Derecho de Familia", desc: "Conflictos familiares de alta sensibilidad." },
  { id: 2, Icon: IconVinculos, title: "Obstrucción de Vínculos", desc: "Defensa del derecho de comunicación familiar." },
  { id: 3, Icon: IconDenuncias, title: "Falsas Denuncias", desc: "Protección ante acusaciones infundadas." },
  { id: 4, Icon: IconLaboral, title: "Derecho Laboral", desc: "Asesoría integral para trabajadores y empresas." },
  { id: 5, Icon: IconPenal, title: "Derecho Penal", desc: "Defensa técnica en procesos complejos." },
];