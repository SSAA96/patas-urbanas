import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer__brand">Patas Urbanas</p>
      <p className="site-footer__description">Todo para perros y gatos.</p>
      <p className="site-footer__copyright">© {currentYear} Patas Urbanas</p>
    </footer>
  )
}

export default Footer
