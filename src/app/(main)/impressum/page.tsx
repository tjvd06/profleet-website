export const metadata = {
  title: "Impressum | proFleet",
  description: "Impressum und Anbieterkennzeichnung der proFleet GmbH gemäß § 5 TMG.",
};

export default function ImpressumPage() {
  return (
    <div className="bg-slate-50 min-h-screen py-16 md:py-24">
      <div className="container mx-auto max-w-3xl px-4 md:px-8">
        <h1 className="text-3xl md:text-5xl font-bold text-navy-950 mb-8 tracking-tight">Impressum</h1>

        <article className="bg-white rounded-3xl border border-slate-200 shadow-sm p-8 md:p-12 space-y-10 text-slate-700 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-navy-950 mb-3">Angaben gemäß § 5 TMG</h2>
            <p className="mb-1 font-semibold text-navy-950">proFleet GmbH</p>
            <p>Hartstraße 23</p>
            <p>82110 München</p>
            <p className="mt-4">Tel. +49 (0) 89 306365-10</p>
            <p>Fax +49 (0) 89 306365-28</p>
            <p>
              Email{" "}
              <a href="mailto:contact@profleet.de" className="text-blue-600 hover:text-blue-700 underline">
                contact@profleet.de
              </a>
            </p>
          </section>

          <section>
            <p>HRB-Nr. 128 429</p>
            <p>Registergericht München</p>
            <p>USt.-ID DE205045414</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950 mb-3">Geschäftsführung</h2>
            <p>Dr. Heinz van Deelen, Tatiana van Deelen</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p>Tatiana van Deelen</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-navy-950 mb-3">Bildquellen</h2>
            <p>
              Adobe Stock:{" "}
              <a
                href="https://stock.adobe.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline"
              >
                stock.adobe.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-navy-950 mb-4 mt-4">Haftungsausschluss</h2>

            <h3 className="text-lg font-bold text-navy-950 mb-2">Haftung für Inhalte</h3>
            <p>
              Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der
              Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf
              diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf
              eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis
              einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
              umgehend entfernen.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-navy-950 mb-2">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir
              für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche
              Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
              Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>
          </section>

          <section>
            <h3 className="text-lg font-bold text-navy-950 mb-2">Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen
              der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den
              privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
              werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
              trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
              von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
