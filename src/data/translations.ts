export type Lang = "fr" | "en" | "it";

export type Dict = {
  nav: { home: string; approach: string; services: string; about: string; contact: string; clientArea: string; contactMe: string };
  brand: { subtitle: string };
  accueil: {
    heroTitle: string; heroText: string; ctaApproach: string; ctaContact: string;
    trio1Title: string; trio1Text: string; trio2Title: string; trio2Text: string; trio3Title: string; trio3Text: string;
    strip1: string; strip2: string; strip3: string; strip4: string; strip5: string;
  };
  approche: {
    title: string; subtitle: string;
    s1t: string; s1x: string; s2t: string; s2x: string; s3t: string; s3x: string; s4t: string; s4x: string;
    bandTitle: string; bandText: string;
  };
  services: {
    title: string; subtitle: string;
    i1t: string; i1x: string; i2t: string; i2x: string; i3t: string; i3x: string;
    i4t: string; i4x: string; i5t: string; i5x: string; i6t: string; i6x: string;
  };
  apropos: { title: string; p1: string; p2: string; cta: string; v1t: string; v1x: string; v2t: string; v2x: string; v3t: string; v3x: string };
  contact: { title: string; subtitle: string; note: string; lastName: string; firstName: string; email: string; phone: string; message: string; send: string };
  footer: { tagline: string; legal: string; privacy: string; clientArea: string };
  mentions: {
    title: string; s1t: string; s1p: string; statut: string; statutV: string; siret: string; tva: string; tvaV: string;
    adresse: string; telephone: string; email: string; dirigeant: string; marque: string; tvaNote: string;
    s2t: string; s2p: string; s3t: string; s3p: string; s3host: string; s4t: string; s4p1: string; s4p2: string; s5t: string; s5p: string;
  };
  confid: {
    title: string; s1t: string; s1p: string; s2t: string; s2p1: string; s2p2: string; s3t: string; s3p: string;
    s4t: string; s4p1: string; s4p2: string; s5t: string; s5p: string;
  };
};

export const translations: Record<Lang, Dict> = {
  fr: {
    nav: { home: "Accueil", approach: "Mon Approche", services: "Services", about: "À Propos", contact: "Contact", clientArea: "Espace client", contactMe: "Contactez-moi" },
    brand: { subtitle: "Intendance de Résidences" },
    accueil: {
      heroTitle: "Rien d'important ne devrait être oublié.",
      heroText: "MIRGHANI veille à la continuité des interventions et au suivi des détails qui font la différence au quotidien.",
      ctaApproach: "Découvrir mon approche", ctaContact: "Contactez-moi",
      trio1Title: "Pour une gestion plus simple.", trio1Text: "Moins de relances, moins d'imprévus. Vous gardez une vision claire et l'esprit libre.",
      trio2Title: "Pour un responsable plus serein.", trio2Text: "Une présence attentive qui vous informe sans que vous ayez à tout contrôler.",
      trio3Title: "Pour des résidents satisfaits.", trio3Text: "Des espaces communs propres, agréables et bien entretenus, jour après jour.",
      strip1: "Des entrées soignées", strip2: "Des parties communes suivies", strip3: "Des détails corrigés",
      strip4: "Des interventions coordonnées", strip5: "Un cadre agréable à vivre",
    },
    approche: {
      title: "Mon approche", subtitle: "Une méthode simple pour assurer la continuité et la qualité du suivi.",
      s1t: "Observer", s1x: "J'identifie les besoins réels de la résidence.",
      s2t: "Organiser", s2x: "Je planifie les actions utiles avec les bons intervenants.",
      s3t: "Vérifier", s3x: "Je contrôle la qualité et anticipe les points à corriger.",
      s4t: "Informer", s4x: "Je transmets l'essentiel de manière claire et utile.",
      bandTitle: "Une présence discrète, une attention constante.",
      bandText: "MIRGHANI agit en arrière-plan pour que tout reste en ordre, sans que vous ayez à y penser.",
    },
    services: {
      title: "Services",
      subtitle: "MIRGHANI prend en charge les aspects essentiels pour le bon fonctionnement de votre résidence au quotidien.",
      i1t: "Gestion des parties communes", i1x: "Entretien régulier et suivi des espaces intérieurs et extérieurs.",
      i2t: "Relation avec les résidents", i2x: "Écoute, informations utiles et communication claire.",
      i3t: "Accueil des livraisons et gestion des accès", i3x: "Réception des livraisons, gestion des accès et présence attentive au quotidien.",
      i4t: "Coordination des prestataires", i4x: "Organisation et suivi des interventions et des actions.",
      i5t: "Suivi qualité", i5x: "Contrôles réguliers et anticipation des besoins.",
      i6t: "Reporting", i6x: "Informations essentielles transmises au bon moment.",
    },
    apropos: {
      title: "À propos",
      p1: "MIRGHANI est né d'une conviction simple : une résidence bien entretenue repose sur la continuité et le souci du détail.",
      p2: "Chaque résidence bénéficie de la même attention : régularité dans les interventions, rigueur dans le suivi et communication directe.",
      cta: "Contactez-moi",
      v1t: "Une approche humaine", v1x: "Je privilégie la proximité et la confiance.",
      v2t: "Une organisation fiable", v2x: "Des processus clairs pour des résultats durables.",
      v3t: "Une ambition simple", v3x: "Vous simplifier la vie et préserver votre cadre de vie.",
    },
    contact: {
      title: "Contact",
      subtitle: "Je suis à votre écoute pour échanger sur les besoins spécifiques de votre résidence.",
      note: "L'envoi ouvre votre messagerie avec ce message déjà rempli — rien n'est transmis automatiquement.",
      lastName: "Nom", firstName: "Prénom", email: "Email", phone: "Téléphone", message: "Votre message", send: "Envoyer",
    },
    footer: { tagline: "Je veille à ce que votre résidence reste agréable à vivre, chaque jour.", legal: "Mentions légales", privacy: "Confidentialité", clientArea: "Espace client" },
    mentions: {
      title: "Mentions légales",
      s1t: "Éditeur du site",
      s1p: "Le présent site est édité par MIRGHANI, entreprise individuelle (EI)\n(micro-entreprise), immatriculée sous le numéro SIRET [SIRET à compléter], dont l'adresse\nest [adresse complète à compléter].",
      statut: "Statut", statutV: "Auto-entrepreneur — Nettoyage et intendance de résidences",
      siret: "SIRET", tva: "TVA", tvaV: "Non applicable, art. 293 B du CGI",
      adresse: "Adresse", telephone: "Téléphone", email: "Email", dirigeant: "Dirigeant",
      marque: "Déposée INPI — logo couleur et noir & blanc",
      tvaNote: "Conformément à l'article 293 B du Code général des impôts, la TVA n'est pas applicable.",
      s2t: "Directeur de la publication", s2p: "Khalid MIRGHANI",
      s3t: "Hébergement", s3p: "Ce site est hébergé par :", s3host: "États-Unis",
      s4t: "Propriété intellectuelle",
      s4p1: "La marque MIRGHANI est déposée auprès de l'INPI. L'ensemble des contenus de ce site (textes, visuels, logo, structure) est protégé par le droit d'auteur.",
      s4p2: "Toute reproduction, représentation ou diffusion, totale ou partielle, sans autorisation écrite préalable est interdite (art. L.122-4 du Code de la propriété intellectuelle).",
      s5t: "Responsabilité",
      s5p: "MIRGHANI s'efforce d'assurer l'exactitude des informations publiées sur ce site, sans garantir qu'elles soient exemptes d'erreurs. Les liens externes ne sauraient engager la responsabilité de MIRGHANI.",
    },
    confid: {
      title: "Politique de confidentialité",
      s1t: "Responsable du traitement",
      s1p: "Khalid MIRGHANI — MIRGHANI, auto-entrepreneur, SIRET 904 079 795 00020, 33 Rue Sainte-Catherine, Lecaterina Résidence, 06110 Le Cannet.",
      s2t: "Données collectées",
      s2p1: "Le formulaire de contact de ce site ne transmet et ne stocke aucune donnée : il ouvre votre messagerie avec un message pré-rempli. Aucune information n'est enregistrée sur un serveur.",
      s2p2: "Ce site ne collecte aucune donnée personnelle de navigation et ne dépose aucun cookie de suivi ou publicitaire. Aucun compte n'est requis pour consulter les pages.",
      s3t: "Cookies et traceurs",
      s3p: "Aucun cookie de mesure d'audience, de personnalisation ou de publicité n'est utilisé. La police de caractères peut être chargée depuis Google Fonts (requête externe auprès de Google, sans cookie ni donnée personnelle transmise par ce site).",
      s4t: "Vos droits",
      s4p1: "Conformément au RGPD (art. 15 à 21) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation et d'opposition sur vos données.",
      s4p2: "Pour exercer ces droits, contactez-moi. Une réponse vous sera adressée dans un délai d'un mois.",
      s5t: "Contact", s5p: "Pour toute question relative à cette politique : contact@mirghani.fr — +33 4 22 46 05 59.",
    },
  },

  en: {
    nav: { home: "Home", approach: "My Approach", services: "Services", about: "About", contact: "Contact", clientArea: "Client Area", contactMe: "Contact me" },
    brand: { subtitle: "Intendance de Résidences" },
    accueil: {
      heroTitle: "Nothing important should be forgotten.",
      heroText: "MIRGHANI ensures continuity of interventions and follow-up on the details that make the difference every day.",
      ctaApproach: "Discover my approach", ctaContact: "Contact me",
      trio1Title: "For simpler management.", trio1Text: "Fewer reminders, fewer surprises. You keep a clear view and peace of mind.",
      trio2Title: "For a more serene manager.", trio2Text: "An attentive presence that keeps you informed without having to control everything.",
      trio3Title: "For satisfied residents.", trio3Text: "Clean, pleasant and well-maintained shared spaces, day after day.",
      strip1: "Well-kept entrances", strip2: "Maintained common areas", strip3: "Corrected details",
      strip4: "Coordinated interventions", strip5: "A pleasant living environment",
    },
    approche: {
      title: "My approach", subtitle: "A simple method to ensure continuity and quality of follow-up.",
      s1t: "Observe", s1x: "I identify the real needs of the residence.",
      s2t: "Organise", s2x: "I plan useful actions with the right service providers.",
      s3t: "Verify", s3x: "I check quality and anticipate points to correct.",
      s4t: "Inform", s4x: "I pass on the essentials clearly and usefully.",
      bandTitle: "A discreet presence, constant attention.",
      bandText: "MIRGHANI works in the background so that everything stays in order, without you having to think about it.",
    },
    services: {
      title: "Services",
      subtitle: "MIRGHANI takes care of the essential aspects for the smooth running of your residence every day.",
      i1t: "Management of common areas", i1x: "Regular maintenance and follow-up of indoor and outdoor spaces.",
      i2t: "Relations with residents", i2x: "Listening, useful information and clear communication.",
      i3t: "Receiving deliveries and managing access", i3x: "Delivery reception, access management and attentive daily presence.",
      i4t: "Coordinating service providers", i4x: "Organisation and follow-up of interventions and actions.",
      i5t: "Quality monitoring", i5x: "Regular checks and anticipation of needs.",
      i6t: "Reporting", i6x: "Essential information passed on at the right time.",
    },
    apropos: {
      title: "About",
      p1: "MIRGHANI was born from a simple conviction: a well-maintained residence relies on continuity and attention to detail.",
      p2: "Every residence receives the same care: regularity in interventions, rigour in follow-up and direct communication.",
      cta: "Contact me",
      v1t: "A human approach", v1x: "I prioritise proximity and trust.",
      v2t: "A reliable organisation", v2x: "Clear processes for lasting results.",
      v3t: "A simple ambition", v3x: "Make your life easier and preserve your living environment.",
    },
    contact: {
      title: "Contact",
      subtitle: "I am at your disposal to discuss the specific needs of your residence.",
      note: "Sending opens your email application with the message pre-filled — nothing is transmitted automatically.",
      lastName: "Last name", firstName: "First name", email: "Email", phone: "Phone", message: "Your message", send: "Send",
    },
    footer: { tagline: "I make sure your residence remains pleasant to live in, every day.", legal: "Legal notice", privacy: "Privacy policy", clientArea: "Client Area" },
    mentions: {
      title: "Legal notice",
      s1t: "Site publisher",
      s1p: "The MIRGHANI website is published by Khalid MIRGHANI, self-employed, registered under SIRET number 904 079 795 00020.",
      statut: "Status", statutV: "Self-employed — Cleaning and property management",
      siret: "SIRET", tva: "VAT", tvaV: "Not applicable, art. 293 B of the French General Tax Code",
      adresse: "Address", telephone: "Phone", email: "Email", dirigeant: "Manager",
      marque: "INPI registered — colour and black & white logo",
      tvaNote: "Pursuant to article 293 B of the French General Tax Code, VAT is not applicable.",
      s2t: "Publication director", s2p: "Khalid MIRGHANI",
      s3t: "Hosting", s3p: "This site is hosted by:", s3host: "United States",
      s4t: "Intellectual property",
      s4p1: "The MIRGHANI trademark is registered with INPI. All content on this site (texts, visuals, logo, structure) is protected by copyright.",
      s4p2: "Any reproduction, representation or distribution, in whole or in part, without prior written authorisation is prohibited (art. L.122-4 of the French Intellectual Property Code).",
      s5t: "Liability",
      s5p: "MIRGHANI strives to ensure the accuracy of the information published on this site, without guaranteeing that it is free of errors. External links do not engage the liability of MIRGHANI.",
    },
    confid: {
      title: "Privacy policy",
      s1t: "Data controller",
      s1p: "Khalid MIRGHANI — MIRGHANI, self-employed, SIRET 904 079 795 00020, 33 Rue Sainte-Catherine, Lecaterina Résidence, 06110 Le Cannet, France.",
      s2t: "Data collected",
      s2p1: "The contact form on this site does not transmit or store any data: it opens your email application with a pre-filled message. No information is recorded on a server.",
      s2p2: "This site does not collect any personal browsing data and does not place any tracking or advertising cookies. No account is required to view the pages.",
      s3t: "Cookies and trackers",
      s3p: "No audience measurement, personalisation or advertising cookie is used. Fonts may be loaded from Google Fonts (an external request to Google, without any cookie or personal data transmitted by this site).",
      s4t: "Your rights",
      s4p1: "Under the GDPR (arts. 15 to 21) and the French Data Protection Act, you have a right of access, rectification, erasure, restriction and objection regarding your data.",
      s4p2: "To exercise these rights, contact me. You will receive a reply within one month.",
      s5t: "Contact", s5p: "For any question regarding this policy: contact@mirghani.fr — +33 4 22 46 05 59.",
    },
  },

  it: {
    nav: { home: "Home", approach: "Il mio approccio", services: "Servizi", about: "Chi sono", contact: "Contatti", clientArea: "Area clienti", contactMe: "Contattami" },
    brand: { subtitle: "Intendance de Résidences" },
    accueil: {
      heroTitle: "Niente di importante dovrebbe essere dimenticato.",
      heroText: "MIRGHANI garantisce la continuità degli interventi e il controllo dei dettagli che fanno la differenza ogni giorno.",
      ctaApproach: "Scopri il mio approccio", ctaContact: "Contattami",
      trio1Title: "Per una gestione più semplice.", trio1Text: "Meno solleciti, meno imprevisti. Mantieni una visione chiara e la mente libera.",
      trio2Title: "Per un responsabile più sereno.", trio2Text: "Una presenza attenta che ti informa senza dover controllare tutto.",
      trio3Title: "Per residenti soddisfatti.", trio3Text: "Spazi comuni puliti, piacevoli e ben curati, giorno dopo giorno.",
      strip1: "Ingressi curati", strip2: "Parti comuni seguite", strip3: "Dettagli corretti",
      strip4: "Interventi coordinati", strip5: "Un ambiente piacevole",
    },
    approche: {
      title: "Il mio approccio", subtitle: "Un metodo semplice per garantire continuità e qualità del follow-up.",
      s1t: "Osservare", s1x: "Individuo i bisogni reali della residenza.",
      s2t: "Organizzare", s2x: "Pianifico le azioni utili con i giusti fornitori.",
      s3t: "Verificare", s3x: "Controllo la qualità e anticipo i punti da correggere.",
      s4t: "Informare", s4x: "Trasmetto l'essenziale in modo chiaro e utile.",
      bandTitle: "Una presenza discreta, un'attenzione costante.",
      bandText: "MIRGHANI lavora in sottofondo perché tutto resti in ordine, senza che tu debba pensarci.",
    },
    services: {
      title: "Servizi",
      subtitle: "MIRGHANI si occupa degli aspetti essenziali per il buon funzionamento della tua residenza ogni giorno.",
      i1t: "Gestione delle parti comuni", i1x: "Manutenzione regolare e controllo degli spazi interni ed esterni.",
      i2t: "Rapporto con i residenti", i2x: "Ascolto, informazioni utili e comunicazione chiara.",
      i3t: "Ricezione consegne e gestione accessi", i3x: "Ricezione delle consegne, gestione degli accessi e presenza attenta ogni giorno.",
      i4t: "Coordinamento dei fornitori", i4x: "Organizzazione e monitoraggio degli interventi e delle azioni.",
      i5t: "Controllo qualità", i5x: "Verifiche regolari e anticipazione dei bisogni.",
      i6t: "Report", i6x: "Informazioni essenziali trasmesse al momento giusto.",
    },
    apropos: {
      title: "Chi sono",
      p1: "MIRGHANI nasce da una convinzione semplice: una residenza ben curata si basa sulla continuità e sull'attenzione ai dettagli.",
      p2: "Ogni residenza riceve la stessa attenzione: regolarità negli interventi, rigore nel follow-up e comunicazione diretta.",
      cta: "Contattami",
      v1t: "Un approccio umano", v1x: "Privilegio la vicinanza e la fiducia.",
      v2t: "Un'organizzazione affidabile", v2x: "Processi chiari per risultati duraturi.",
      v3t: "Un'ambizione semplice", v3x: "Semplificarti la vita e preservare il tuo ambiente di vita.",
    },
    contact: {
      title: "Contatti",
      subtitle: "Sono a tua disposizione per parlare delle esigenze specifiche della tua residenza.",
      note: "L'invio apre il tuo programma di posta con il messaggio già compilato — nulla viene trasmesso automaticamente.",
      lastName: "Cognome", firstName: "Nome", email: "Email", phone: "Telefono", message: "Il tuo messaggio", send: "Invia",
    },
    footer: { tagline: "Faccio in modo che la tua residenza resti piacevole da vivere, ogni giorno.", legal: "Note legali", privacy: "Informativa privacy", clientArea: "Area clienti" },
    mentions: {
      title: "Note legali",
      s1t: "Editore del sito",
      s1p: "Il sito MIRGHANI è pubblicato da Khalid MIRGHANI, lavoratore autonomo, iscritto con il numero SIRET 904 079 795 00020.",
      statut: "Stato", statutV: "Lavoratore autonomo — Pulizie e intendance di residenze",
      siret: "SIRET", tva: "IVA", tvaV: "Non applicabile, art. 293 B del CGI",
      adresse: "Indirizzo", telephone: "Telefono", email: "Email", dirigeant: "Direttore",
      marque: "Registrato INPI — logo a colori e in bianco e nero",
      tvaNote: "Ai sensi dell'articolo 293 B del Codice generale delle imposte, l'IVA non è applicabile.",
      s2t: "Direttore della pubblicazione", s2p: "Khalid MIRGHANI",
      s3t: "Hosting", s3p: "Questo sito è ospitato da:", s3host: "Stati Uniti",
      s4t: "Proprietà intellettuale",
      s4p1: "Il marchio MIRGHANI è registrato presso l'INPI. Tutti i contenuti di questo sito (testi, immagini, logo, struttura) sono protetti dal diritto d'autore.",
      s4p2: "Ogni riproduzione, rappresentazione o diffusione, totale o parziale, senza previa autorizzazione scritta è vietata (art. L.122-4 del Codice della proprietà intellettuale).",
      s5t: "Responsabilità",
      s5p: "MIRGHANI si impegna a garantire l'accuratezza delle informazioni pubblicate su questo sito, senza garantire che siano esenti da errori. I link esterni non possono impegnare la responsabilità di MIRGHANI.",
    },
    confid: {
      title: "Informativa privacy",
      s1t: "Titolare del trattamento",
      s1p: "Khalid MIRGHANI — MIRGHANI, lavoratore autonomo, SIRET 904 079 795 00020, 33 Rue Sainte-Catherine, Lecaterina Résidence, 06110 Le Cannet, Francia.",
      s2t: "Dati raccolti",
      s2p1: "Il modulo di contatto di questo sito non trasmette né memorizza alcun dato: apre il tuo programma di posta con un messaggio precompilato. Nessuna informazione viene registrata su un server.",
      s2p2: "Questo sito non raccoglie dati personali di navigazione e non utilizza cookie di tracciamento o pubblicitari. Non è richiesto alcun account per consultare le pagine.",
      s3t: "Cookie e tracciatori",
      s3p: "Non viene utilizzato alcun cookie di misurazione dell'audience, personalizzazione o pubblicità. I caratteri possono essere caricati da Google Fonts (richiesta esterna a Google, senza cookie o dati personali trasmessi da questo sito).",
      s4t: "I tuoi diritti",
      s4p1: "Ai sensi del GDPR (artt. 15-21) e della legge francese sulla protezione dei dati, hai il diritto di accesso, rettifica, cancellazione, limitazione e opposizione sui tuoi dati.",
      s4p2: "Per esercitare questi diritti, contattami. Riceverai una risposta entro un mese.",
      s5t: "Contatti", s5p: "Per qualsiasi domanda relativa a questa informativa: contact@mirghani.fr — +33 4 22 46 05 59.",
    },
  },
};
