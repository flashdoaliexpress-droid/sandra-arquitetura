import logoCabecario from "../Logo/Cabeçario/Logo principal - Cabeçario branco.png";

export default function Footer() {
  return (
    <footer
      id="rodape"
      className="w-full border-t border-outline-variant bg-surface relative z-10"
    >
      <div className="flex flex-col md:flex-row justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-12 max-w-container-max mx-auto gap-6">
        <div className="h-16 md:h-20">
          <img
            src={logoCabecario}
            alt="Logo Sandra"
            className="h-full w-auto object-contain"
          />
        </div>
        <nav className="flex flex-wrap gap-6 md:gap-8 justify-center">
          <a
            className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
            href="https://instagram.com/arqsandradarocha"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram da Sandra · @arqsandradarocha"
          >
            INSTAGRAM
          </a>
          <a
            className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
          <a
            className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
            href="https://pinterest.com"
            target="_blank"
            rel="noreferrer"
          >
            PINTEREST
          </a>
          <a
            className="font-label-caps text-label-caps tracking-[0.25em] text-on-surface-variant hover:text-primary-container transition-colors uppercase"
            href="#"
          >
            PRIVACIDADE
          </a>
        </nav>
        <div className="font-label-caps text-[10px] tracking-[0.25em] text-on-surface-variant uppercase text-center">
          © {new Date().getFullYear()} SANDRA ARQUITETURA. TODOS OS DIREITOS
          RESERVADOS.
        </div>
      </div>
    </footer>
  );
}
