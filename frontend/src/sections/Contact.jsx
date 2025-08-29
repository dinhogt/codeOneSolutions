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
    <section id="contato" className="py-20">
      <div className="container-xl">
        <h2 className="text-3xl font-bold">Fale com a gente</h2>
        <p className="text-slate-600 mt-2">Conte um pouco sobre seu projeto.</p>

        <form onSubmit={handleSubmit} className="card p-6 mt-8 grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm">Nome</label>
            <input name="name" required className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div>
            <label className="text-sm">E-mail</label>
            <input type="email" name="email" required className="w-full mt-1 border rounded-xl px-3 py-2" />
          </div>
          <div className="md:col-span-2">
            <label className="text-sm">Telefone/WhatsApp</label>
            <input name="phone" className="w-full mt-1 border rounded-xl px-3 py-2" />
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
    </section>
  )
}
