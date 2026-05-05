export interface FAQItem {
  q: string;
  a: string;
}

export const faqs: FAQItem[] = [
  {
    q: 'Ce plan este potrivit pentru mine?',
    a: `Depinde de volumul și tipul business-ului tău.

Planul Start (de la 150 lei/lună) este ideal dacă ești la început — o pensiune mică, un restaurant sau o atracție locală cu trafic sezonier.

Planul Standard (de la 250 lei/lună) este potrivit pentru un business activ care vrea să verifice disponibilitatea în timp real, să elimine brandul MyChatbot din widget și să gestioneze mai multe documente și surse de cunoștințe.

Planul Pro (de la 550 lei/lună) este pentru hoteluri, agenții și operatori de turism cu volum mare, care au nevoie de crawl zilnic, conversații nelimitate și rapoarte avansate.

Nu ești sigur? Începe cu trial-ul gratuit de 7 zile pe planul Standard și vezi cum funcționează pentru business-ul tău.`,
  },
  {
    q: 'Funcționează pe orice platformă?',
    a: 'Da — WordPress, Wix, Shopify, Squarespace, Hello Web sau orice HTML. Un singur rând de cod.',
  },
  {
    q: 'Ce se întâmplă după 7 zile trial?',
    a: 'Alegi un plan și continui. Datele și configurarea sunt salvate. Reactivare instantanee.',
  },
  {
    q: 'Pot anula abonamentul oricând?',
    a: 'Da, fără penalități. Abonamentul Stripe se oprește la cerere. Fără perioadă minimă.',
  },
  {
    q: 'În ce limbi răspunde chatbot-ul?',
    a: 'Detectează automat limba vizitatorului — română, engleză, germană, franceză, italiană.',
  },
  {
    q: 'Datele clienților sunt în siguranță?',
    a: 'GDPR complet. Server UE (Frankfurt). Nu stocăm textul conversațiilor. Consimțământ explicit.',
  },
  {
    q: 'Am nevoie de cunoștințe tehnice?',
    a: 'Nu. 10 minute configurare. Echipa Hello Web te asistă dacă ai nevoie de ajutor.',
  },
  {
    q: 'Cum răspunde chatbot-ul când nu știe răspunsul?',
    a: 'MyChatbot este antrenat cu standarde de comunicare de nivel concierge. Când nu deține o informație, nu inventează și nu refuză sec — recunoaște transparent ce nu știe și îndrumă vizitatorul spre contact direct. Când are informații parțiale, oferă ce știe și clarifică ce lipsește. Scopul este să ofere întotdeauna o alternativă elegantă, nu un „nu știu" fără ieșire.',
  },
];
