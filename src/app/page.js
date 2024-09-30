import styles from "./globals.scss";

export default function Home() {
  return (
    <div className="mainHero">
      <div className="folio">Folio 2024</div>
      <div className="lang">Esp</div>
      <div className="inner">
        <div className="name">
          <span>Andrés</span>
          <span> González</span> 
        </div>
        <div className="charge">Front end / ui developer</div>
        <nav>
          <button>Work</button>
          <button>Expertise</button>
          <button>Contact</button>
        </nav>
      </div>
    </div>
  );
}
