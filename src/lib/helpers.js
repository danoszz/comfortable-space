// Toggle classes easier
export function toggleClass(listener, name) {
  return listener ? null : name
}

// Send email
export function sendEmail(email, subject, message) {
  window.location.href = `mailto: ${email}?subject=${subject}&body=${message}`
}

export function openURL(url) {
  window.location.href = url
}
