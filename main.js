import './style.css'

document.querySelector('#app').innerHTML = `
  <main class="container">
    <section class="card">
      <h1>Password Strength Checker</h1>
      <p>Type a password to check its strength.</p>

      <label for="password">Password</label>
      <div class="input-row">
        <input id="password" type="password" placeholder="Enter password..." />
        <button id="togglePassword" type="button">Show</button>
      </div>

      <div class="meter">
        <div id="meterFill" class="meter-fill"></div>
      </div>

      <h2 id="strengthLabel">Strength: —</h2>

      <ul id="checks">
        <li>Length of 12+ characters: —</li>
        <li>Uppercase letter: —</li>
        <li>Lowercase letter: —</li>
        <li>Number: —</li>
        <li>Special character: —</li>
      </ul>
    </section>
  </main>
`

const passwordInput = document.querySelector('#password')
const togglePassword = document.querySelector('#togglePassword')
const meterFill = document.querySelector('#meterFill')
const strengthLabel = document.querySelector('#strengthLabel')
const checks = document.querySelector('#checks')

togglePassword.addEventListener('click', () => {
  const isHidden = passwordInput.type === 'password'
  passwordInput.type = isHidden ? 'text' : 'password'
  togglePassword.textContent = isHidden ? 'Hide' : 'Show'
})

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value

  const rules = [
    ['Length of 12+ characters', password.length >= 12],
    ['Uppercase letter', /[A-Z]/.test(password)],
    ['Lowercase letter', /[a-z]/.test(password)],
    ['Number', /\d/.test(password)],
    ['Special character', /[^A-Za-z0-9]/.test(password)],
  ]

  const score = rules.filter(([, passed]) => passed).length

  let strength = 'Very Weak'
  if (score === 2) strength = 'Weak'
  if (score === 3) strength = 'Fair'
  if (score === 4) strength = 'Strong'
  if (score === 5) strength = 'Very Strong'

  strengthLabel.textContent = password
    ? `Strength: ${strength}`
    : 'Strength: —'

  meterFill.style.width = password ? `${score * 20}%` : '0%'
  meterFill.dataset.score = String(score)

  checks.innerHTML = rules
    .map(([label, passed]) => `<li>${passed ? '✅' : '❌'} ${label}</li>`)
    .join('')
})
