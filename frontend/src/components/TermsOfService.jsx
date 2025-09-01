import { useEffect, useState } from 'react';

export default function TermsOfService() {
  const [terms, setTerms] = useState(null);

  useEffect(() => {
    fetch('/terms-of-service.json')
      .then(res => res.json())
      .then(data => setTerms(data))
      .catch(() => setTerms(null));
  }, []);

  if (!terms) {
    return <div className="container-xl py-16 max-w-3xl mx-auto text-center">Carregando...</div>;
  }

  return (
    <div className="container-xl py-16 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-accent mb-6">{terms.title}</h1>
      {terms.sections.map((section, idx) => (
        <div key={idx} className="mb-6">
          <h2 className="text-xl font-semibold mt-8 mb-2">{section.heading}</h2>
          <p>{section.content}</p>
        </div>
      ))}
    </div>
  );
}
