import { useState } from 'react';
import { sendMessage } from '../api/api.js';
import Toast from './Toast.jsx';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [toast, setToast] = useState(null); // { message, type } | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendMessage(form);
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setToast({ message: 'Message sent successfully!', type: 'success' });
    } catch {
      setStatus('error');
      setToast({ message: 'Something went wrong. Please try again.', type: 'error' });
    }
  };

  return (
    <section id="contact">
      <div className="wrap">
        <div className="contact">
          <h2>Let's build something.</h2>
          <p>Open to full-time roles, freelance projects, and interesting problems. Reach out any time.</p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Say hello…"
              rows={4}
              value={form.message}
              onChange={handleChange}
              required
            />
            <button className="btn btn-solid" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>
          </form>

          <a className="direct-email" href="mailto:you@example.com">you@example.com</a>
        </div>
      </div>

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </section>
  );
}