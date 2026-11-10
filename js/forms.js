/* ════════════════════════════════════
   FORMS — sends Formspree forms in the background so visitors stay on the site
════════════════════════════════════ */
async function submitForm(event, successText) {
  event.preventDefault();
  const form = event.target;
  const btn = form.querySelector('button[type="submit"]');
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending…';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!res.ok) throw new Error('Formspree rejected the submission');
    form.reset();
    btn.textContent = successText;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; }, 4000);
  } catch (err) {
    btn.textContent = 'Something went wrong — please try again';
    btn.disabled = false;
    setTimeout(() => { btn.textContent = original; }, 4000);
  }
}