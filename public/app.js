(() => {
  const form = document.getElementById('join');
  if (!form) return;
  const status = form.querySelector('.form-status');
  const button = form.querySelector('button[type="submit"]');

  const say = (text, kind) => {
    status.textContent = text;
    status.className = 'form-status ' + (kind || '');
  };

  if (new URLSearchParams(location.search).has('joined')) {
    say("You're on the list. We'll email you when the calculator opens.", 'ok');
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const email = form.email.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      say('Enter an email address like you@example.com.', 'err');
      form.email.focus();
      return;
    }
    if (!form.age13.checked) {
      say('You need to be 13 or older to join the waitlist.', 'err');
      form.age13.focus();
      return;
    }

    button.disabled = true;
    say('Adding you to the list…');
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          email,
          role: form.role.value,
          age13: true,
          website: form.website.value
        })
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        form.reset();
        say("You're on the list. We'll email you when the calculator opens.", 'ok');
      } else {
        say(data.error || "That didn't go through. Try again in a minute.", 'err');
      }
    } catch {
      say("That didn't go through. Check your connection and try again.", 'err');
    } finally {
      button.disabled = false;
    }
  });
})();
