import './SeccionCasos.css';

export function SeccionCasos() {
  const casos = [
    {
      id: 1,
      categoria: "Derecho de Familia",
      titulo: "Resolución de Tenencia Compartida",
      extracto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sutil legalis secura, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      id: 2,
      categoria: "Derecho Penal",
      titulo: "Sobreseimiento por Falsa Denuncia",
      extracto: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit."
    },
    {
      id: 3,
      categoria: "Derecho Laboral",
      titulo: "Indemnización por Despido Injustificado",
      extracto: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus."
    }
  ];

  return (
    <section className="casos-section">
      <div className="casos-header">
        <span className="casos-subtitle">Jurisprudencia Propia</span>
        <h2 className="casos-title">Casos de Éxito</h2>
        <div className="casos-divider"></div>
      </div>

      <div className="casos-container">
        {casos.map((caso) => (
          <article key={caso.id} className="caso-card">
            <span className="caso-tag">{caso.categoria}</span>
            <h3 className="caso-item-title">{caso.titulo}</h3>
            <p className="caso-description">{caso.extracto}</p>
            <div className="caso-footer-line"></div>
          </article>
        ))}
      </div>
    </section>
  );
}