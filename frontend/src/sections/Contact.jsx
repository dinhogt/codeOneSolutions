import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    setStatus('sending')

    try {
      const baseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'
      const res = await fetch(baseUrl + '/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) throw new Error('Falha ao enviar')
      setStatus('success')
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-10">
      <div className="container-xl">
        <h2 className="text-3xl font-bold text-center text-accent">Fale com a gente</h2>
        <p className="text-center mt-2">Conte um pouco sobre seu projeto.</p>
        <div className="max-w-3xl mx-auto mt-10">
        <form onSubmit={handleSubmit} className="card p-8 mt-8 grid md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm">Nome</label>
            <input name="name" required className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">Telefone/WhatsApp</label>
            <input name="phone" className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">E-mail</label>
            <input type="email" name="email" required className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Mensagem</label>
            <textarea name="message" rows="5" required className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div className="md:col-span-2 flex items-center gap-4">
            <button className="btn-primary" disabled={status==='sending'}>
              {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
            </button>
            {status === 'success' && <span className="text-green-600 text-sm">Mensagem enviada com sucesso!</span>}
            {status === 'error' && <span className="text-red-600 text-sm">Falha ao enviar. Tente novamente.</span>}
          </div>
        </form>
      </div>
      </div>
    </section>
  )
}
