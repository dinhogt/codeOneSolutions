import { useState, useRef } from 'react'

export default function Contact() {
  const [status, setStatus] = useState(null)
  const formRef = useRef(null)
  const [showNotification, setShowNotification] = useState(false)
  const [notificationType, setNotificationType] = useState('success')
  const [notificationMsg, setNotificationMsg] = useState('')

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
      setNotificationType('success')
      setNotificationMsg('Mensagem enviada com sucesso!')
      setShowNotification(true)
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      console.error(err)
      setStatus('error')
      setNotificationType('error')
      setNotificationMsg('Falha ao enviar. Tente novamente.')
      setShowNotification(true)
    }
    setTimeout(() => setShowNotification(false), 3500)
  }

  return (
    <section id="contact" className="py-10">
      <div className="container-xl">
        <h2 className="text-3xl font-bold text-center text-accent">Fale com a gente</h2>
        <p className="text-center mt-2">Conte um pouco sobre seu projeto.</p>
        <div className="max-w-3xl mx-auto mt-10">
        <form ref={formRef} onSubmit={handleSubmit} className="card p-8 mt-8 grid md:grid-cols-2 gap-6">
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
          </div>
        </form>
        {/* Notification animada */}
        <div
          className={`fixed top-8 left-1/2 z-50 -translate-x-1/2 px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 text-white min-w-[280px] transition-all duration-500 ${showNotification ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'} ${notificationType==='success' ? 'bg-green-600' : 'bg-red-600'}`}
          style={{transform: showNotification ? 'translate(-50%, 0)' : 'translate(-50%, -20px)'}}
        >
          {notificationType==='success' ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
          )}
          <span className="font-semibold">{notificationMsg}</span>
        </div>
      </div>
      </div>
    </section>
  )
}
