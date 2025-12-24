import { Link } from 'react-router-dom';
import { EVENT } from '../constants/event';

/**
 * Terms of Service page (Termeni și Condiții)
 */
export default function Terms() {
    return (
        <main className="min-h-screen bg-dark pt-24 pb-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
                    Termeni și Condiții
                </h1>

                {/* Content Card */}
                <div className="bg-dark-secondary rounded-2xl p-6 md:p-10 text-gray-300 space-y-8">
                    <p className="text-gray-400">
                        Data ultimei actualizări: 15 aprilie 2025
                    </p>

                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            1. Scopul și Acceptarea Termenilor
                        </h2>
                        <p className="leading-relaxed">
                            Site-ul https://www.businesssummit.com oferă informații despre evenimentele organizate,
                            posibilitatea de înregistrare la acestea și acces la resurse relevante pentru participanți.
                            Prin accesarea și utilizarea acestui site, sunteți de acord să respectați și să fiți obligați de
                            acești Termeni și Condiții, precum și de toate legile și reglementările aplicabile. Dacă nu
                            sunteți de acord cu oricare dintre acești termeni, vă rugăm să nu utilizați site-ul nostru.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            2. Definiții
                        </h2>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li>
                                <strong className="text-white">Utilizator:</strong> Orice persoană care accesează și utilizează site-ul
                                https://www.businesssummit.com/
                            </li>
                            <li>
                                <strong className="text-white">Date cu caracter personal:</strong> Orice informație referitoare la o persoană fizică
                                identificată sau identificabilă, conform definiției din Regulamentul General privind
                                Protecția Datelor (GDPR).
                            </li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            3. Înregistrare și Participare la Evenimente
                        </h2>
                        <p className="leading-relaxed">
                            Pentru a participa la evenimentele Business Summit, este necesară completarea
                            formularului de înregistrare disponibil pe site. Utilizatorul se obligă să furnizeze informații
                            corecte, complete și actualizate. Organizatorii își rezervă dreptul de a respinge sau anula
                            orice înregistrare care nu respectă aceste cerințe sau care este considerată frauduloasă.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            4. Prelucrarea Datelor cu Caracter Personal
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Prin înregistrarea la evenimentele noastre, consimțiți la colectarea și prelucrarea datelor
                            dumneavoastră personale, inclusiv, dar fără a se limita la: nume, prenume, adresă de e-mail,
                            număr de telefon, funcție și companie. Aceste date vor fi utilizate exclusiv în
                            scopurile menționate mai jos:
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li>
                                <strong className="text-white">Gestionarea participării la eveniment:</strong> Confirmarea înregistrării, emiterea biletelor
                                și furnizarea de informații relevante despre eveniment.
                            </li>
                            <li>
                                <strong className="text-white">Comunicări ulterioare:</strong> Trimiterea de notificări privind evenimente viitoare, noutăți
                                sau oferte speciale, doar dacă v-ați exprimat consimțământul în acest sens.
                            </li>
                            <li>
                                <strong className="text-white">Îmbunătățirea serviciilor:</strong> Analiza feedback-ului pentru a optimiza experiența
                                participanților la evenimentele noastre.
                            </li>
                            <li>
                                <strong className="text-white">Respectarea obligațiilor legale:</strong> Păstrarea evidențelor necesare conform legislației
                                aplicabile.
                            </li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Datele dumneavoastră vor fi păstrate în condiții de securitate și nu vor fi partajate cu terți
                            fără consimțământul explicit, cu excepția cazurilor în care divulgarea este necesară pentru
                            conformitatea cu obligațiile legale sau pentru protejarea drepturilor și siguranței noastre
                            sau ale altora.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            5. Drepturile Utilizatorului
                        </h2>
                        <p className="leading-relaxed mb-4">
                            Conform GDPR, beneficiați de următoarele drepturi în legătură cu datele dumneavoastră
                            personale:
                        </p>
                        <ul className="list-disc list-inside space-y-3 ml-4">
                            <li>
                                <strong className="text-white">Dreptul de acces:</strong> Aveți dreptul de a obține confirmarea că datele personale care
                                vă privesc sunt sau nu prelucrate și, dacă este cazul, acces la respectivele date.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul la rectificare:</strong> Puteți solicita corectarea datelor personale inexacte sau
                                completarea acestora.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul la ștergere:</strong> Aveți dreptul de a solicita ștergerea datelor personale în
                                anumite circumstanțe, de exemplu, dacă datele nu mai sunt necesare pentru
                                scopurile pentru care au fost colectate.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul la restricționarea prelucrării:</strong> Puteți solicita limitarea prelucrării datelor în
                                anumite condiții.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul la portabilitatea datelor:</strong> Aveți dreptul de a primi datele personale într-un
                                format structurat și de a le transmite altui operator.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul de opoziție:</strong> Vă puteți opune prelucrării datelor personale atunci când
                                aceasta este realizată în scopuri de marketing direct sau din motive legate de
                                situația particulară în care vă aflați.
                            </li>
                            <li>
                                <strong className="text-white">Dreptul de a depune o plângere:</strong> Dacă considerați că prelucrarea datelor personale
                                încalcă GDPR, aveți dreptul de a depune o plângere la Autoritatea Națională de
                                Supraveghere a Prelucrării Datelor cu Caracter Personal.
                            </li>
                        </ul>
                        <p className="leading-relaxed mt-4">
                            Pentru exercitarea acestor drepturi, vă rugăm să ne contactați la{' '}
                            <a href="mailto:business_summit@vipromania.ro" className="text-accent hover:underline">
                                business_summit@vipromania.ro
                            </a>.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            6. Securitatea Datelor
                        </h2>
                        <p className="leading-relaxed">
                            Ne angajăm să protejăm securitatea datelor dumneavoastră personale prin implementarea
                            unor măsuri tehnice și organizatorice adecvate pentru a preveni accesul neautorizat,
                            utilizarea sau divulgarea nepermisă a acestora.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl md:text-2xl font-bold text-accent mb-4">
                            7. Proprietate Intelectuală
                        </h2>
                        <p className="leading-relaxed">
                            Toate materialele disponibile pe acest site, inclusiv, dar fără a se limita la, texte, imagini,
                            logo-uri, grafică, sunt protejate de drepturile de autor și alte legi privind proprietatea
                            intelectuală.
                        </p>
                    </section>
                </div>

                {/* Back button */}
                <div className="text-center mt-10">
                    <Link
                        to="/"
                        className="inline-flex items-center justify-center gap-2 bg-accent text-white font-semibold rounded-lg px-8 py-3 hover:bg-accent-dark transition-colors"
                    >
                        Înapoi la Pagina Principală
                    </Link>
                </div>
            </div>
        </main>
    );
}
