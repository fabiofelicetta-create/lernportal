// ═══════════════════════════════════════════════════════════════════════
// data.js – Alle Inhalte der Website
// ► Hier kannst du ALLES anpassen – kein Code-Wissen nötig.
// ═══════════════════════════════════════════════════════════════════════
const DATA = {
  ankuendigung: {
    titel: "Prüfung nächste Woche!",
    text:  "NMG Abschlussprüfung Mittelalter am Mittwoch, 13. Mai 2026. Lernziele jetzt durcharbeiten!"
  },
  lehrperson: {
    name: "Herr Felicetta",
    email: "f.felicetta@schule-stapfer.ch",
    sprechstunde: "Sprechstunde: Dienstag 11:30–12:00 Uhr",
    schule: "Schulhaus Stapfer, Brugg"
  },
  faecher: {
    "NMG": {
      farbe: "#1B3A5C",
      themaFarben: ["#1B6B8A","#2B8C7E","#3B6EA8","#6B5EA8","#C4782A","#C45E78","#2E7D4E"],
      themen: [
        { num:"1", titel:"Zeitliche Einordnung",
          lernziele:[
            {id:"nmg-1-1", text:"Ich kann das Mittelalter zeitlich einordnen und von anderen Epochen auf einem Zeitstrahl unterscheiden."},
            {id:"nmg-1-2", text:"Ich kann wichtige historische Ereignisse (z. B. Gründung der Eidgenossenschaft) grob zeitlich einordnen."},
          ],
          tipps:["Zeichne deinen eigenen Zeitstrahl mit bunten Farben.","Merke dir 2–3 wichtige Jahreszahlen und verortete sie auf dem Zeitstrahl."]
        },
        { num:"2", titel:"Leben im Mittelalter",
          lernziele:[
            {id:"nmg-2-1", text:"Ich kann erklären, wie Menschen im Mittelalter lebten – was sie assen, wie sie wohnten und arbeiteten."},
            {id:"nmg-2-2", text:"Ich kann Gemeinsamkeiten und Unterschiede zwischen dem Leben im Mittelalter und heute beschreiben."},
          ],
          tipps:["Denke an den Film – welche Szenen zeigten den Alltag am besten?","Schreibe 5 Dinge auf, die sich seit dem Mittelalter verändert haben."]
        },
        { num:"3", titel:"Gesellschaft & Ständeordnung",
          lernziele:[
            {id:"nmg-3-1", text:"Ich kann die Stände nennen (Bauern, Klerus, Adel, König) und erklären, welche Rechte und Pflichten sie hatten."},
            {id:"nmg-3-2", text:"Ich kann erklären, ob die Machtverteilung im Mittelalter gerecht war, und meine Meinung begründen."},
          ],
          tipps:["Zeichne eine Pyramide mit den Ständen.","Stelle dir vor, in welchem Stand du im Mittelalter gelebt hättest."]
        },
        { num:"4", titel:"Arbeit & Versorgung",
          lernziele:[
            {id:"nmg-4-1", text:"Ich kann wichtige Berufe des Mittelalters nennen und erklären, wie die Menschen ihre Grundbedürfnisse deckten."},
            {id:"nmg-4-2", text:"Ich kann erklären, was sich in der Arbeitswelt seit dem Mittelalter verändert hat."},
          ],
          tipps:["Schau in deinem NMG-Heft die Notizen zu Berufen an.","Welcher Beruf aus dem Mittelalter gibt es heute noch?"]
        },
        { num:"5", titel:"Stadt & Land",
          lernziele:[
            {id:"nmg-5-1", text:"Ich kann mindestens drei Merkmale einer mittelalterlichen Stadt nennen und erklären, welche Funktion sie hatte."},
            {id:"nmg-5-2", text:"Ich kann erklären, warum Menschen im Mittelalter in Städten zusammenlebten, und ein Beispiel aus Brugg nennen."},
          ],
          tipps:["Erinnerst du dich an den Ausflug in Brugg? Welche Spuren habt ihr entdeckt?","Was sind die Vorteile des Zusammenlebens in einer Stadt – damals und heute?"]
        },
        { num:"6", titel:"Religion & Weltbild",
          lernziele:[
            {id:"nmg-6-1", text:"Ich kann erklären, warum die Kirche im Mittelalter so mächtig war, und mindestens zwei Lebensbereiche nennen, die sie beeinflusste."},
            {id:"nmg-6-2", text:"Ich kann einen wichtigen Unterschied zwischen dem mittelalterlichen und dem heutigen Weltbild beschreiben."},
          ],
          tipps:["Was hätten Menschen im Mittelalter gesagt, wenn man ihnen ein Smartphone gezeigt hätte?","In welchen Bereichen spielt Glaube heute noch eine Rolle?"]
        },
        { num:"7", titel:"Technik & Erfindungen",
          lernziele:[
            {id:"nmg-7-1", text:"Ich kann mindestens zwei Erfindungen des Mittelalters nennen und erklären, was sie für die Menschen verändert haben."},
            {id:"nmg-7-2", text:"Ich kann erklären, was technischer Fortschritt bedeutet, und ein Beispiel aus dem Mittelalter beschreiben."},
          ],
          tipps:["Vergleiche den Buchdruck mit dem Internet – was haben sie gemeinsam?","Welche Erfindung aus dem Mittelalter findest du am wichtigsten? Begründe!"]
        },
      ]
    },
    "Mathematik": {
      farbe: "#2B8C7E",
      themaFarben: ["#2B8C7E","#3B6EA8"],
      themen: [
        { num:"1", titel:"Geometrie – Flächen",
          lernziele:[
            {id:"ma-1-1", text:"Ich kann die Fläche eines Rechtecks und eines Dreiecks berechnen und die Formel erklären."},
            {id:"ma-1-2", text:"Ich kann den Umfang und den Flächeninhalt eines Kreises berechnen."},
          ],
          tipps:["Lerne die Formeln auswendig – schreibe sie 3× auf.","Berechne die Fläche deines Schreibtisches oder Zimmers."]
        },
        { num:"2", titel:"Volumen",
          lernziele:[
            {id:"ma-2-1", text:"Ich kann das Volumen eines Quaders berechnen und in Alltagssituationen anwenden."},
            {id:"ma-2-2", text:"Ich kann Volumen verschiedener Körper schätzen und vergleichen."},
          ],
          tipps:["Nimm eine Schachtel und berechne ihr Volumen – dann miss nach!","Schätze zuerst, dann rechne – trainiere dein Gefühl für Grössen."]
        },
      ]
    },
    "Deutsch": {
      farbe: "#6B5EA8",
      themaFarben: ["#6B5EA8"],
      themen: [
        { num:"1", titel:"Aufsatz schreiben",
          lernziele:[
            {id:"de-1-1", text:"Ich kann eine Geschichte mit einem klaren Anfang, Mittelteil und Schluss schreiben."},
            {id:"de-1-2", text:"Ich verwende abwechslungsreiche Satzanfänge und treffende Adjektive."},
          ],
          tipps:["Lies deinen Aufsatz laut vor – so hörst du Fehler.","Notiere 10 interessante Adjektive und baue sie in deinen Text ein."]
        },
      ]
    },
  },
  materialien: [
    {titel:"Lernziele NMG Mittelalter", fach:"NMG", beschreibung:"Alle Lernziele als PDF zum Ausdrucken.", icon:"fa-file-pdf", iconBg:"#E8F4FB", iconFarbe:"#1B6B8A", neu:true,  url:""},
    {titel:"NMG-Heft Notizen",          fach:"NMG", beschreibung:"Zusammenfassung der Notizen aus dem NMG-Heft.", icon:"fa-book", iconBg:"#DFF4F2", iconFarbe:"#2B8C7E", neu:false, url:""},
    {titel:"Fragebogen Film",           fach:"NMG", beschreibung:"Arbeitsblatt zum Film über das Mittelalter.", icon:"fa-film", iconBg:"#E8F0FA", iconFarbe:"#3B6EA8", neu:false, url:""},
    {titel:"Go-Out Ticket Brugg",       fach:"NMG", beschreibung:"Auftrag für den Ausflug in die Altstadt.", icon:"fa-map-pin", iconBg:"#F0EEF9", iconFarbe:"#6B5EA8", neu:true,  url:""},
    {titel:"Formelblatt Geometrie",     fach:"Mathematik", beschreibung:"Alle wichtigen Formeln auf einen Blick.", icon:"fa-square-root-variable", iconBg:"#DFF4F2", iconFarbe:"#2B8C7E", neu:false, url:""},
    {titel:"Schreibtipps Aufsatz",      fach:"Deutsch", beschreibung:"Hilfreiche Tipps für einen guten Aufsatz.", icon:"fa-pen-nib", iconBg:"#F0EEF9", iconFarbe:"#6B5EA8", neu:false, url:""},
  ],
  hausaufgaben: [
    {fach:"Mathematik", text:"Aufgaben Seite 48, Nr. 1–6",       datum:"2026-05-11", farbe:"#2B8C7E"},
    {fach:"Deutsch",    text:"Aufsatz-Entwurf fertigstellen",     datum:"2026-05-12", farbe:"#6B5EA8"},
    {fach:"NMG",        text:"Lernziele Mittelalter durchgehen",  datum:"2026-05-13", farbe:"#1B3A5C"},
  ],
  pruefungen: [
    {fach:"NMG",        thema:"Abschlussprüfung Mittelalter",          datum:"2026-05-13", farbe:"#C45E78"},
    {fach:"Mathematik", thema:"Geometrie – Flächen & Volumen",         datum:"2026-05-20", farbe:"#2B8C7E"},
  ],
  stundenplan: [
    {lektion:"1. (07:55)", tage:["Deutsch","NMG","Mathematik","Deutsch","NMG"]},
    {lektion:"2. (08:40)", tage:["Deutsch","NMG","Mathematik","Deutsch","NMG"]},
    {lektion:"3. (09:35)", tage:["Mathematik","Deutsch","Sport","Mathematik","Musik"]},
    {lektion:"4. (10:20)", tage:["Mathematik","Deutsch","Sport","Mathematik","Musik"]},
    {lektion:"5. (11:15)", tage:["Bildnerisch","Mathematik","NMG","Bildnerisch","Mathematik"]},
    {lektion:"6. (12:00)", tage:["Bildnerisch","Mathematik",null,"Bildnerisch",null]},
  ],
  fachFarben:     {Deutsch:"#F0EEF9",Mathematik:"#DFF4F2",NMG:"#E8F0FA",Sport:"#FFF5E0",Musik:"#E8F4FB",Bildnerisch:"#F5E8F5"},
  fachFarbenText: {Deutsch:"#4A3A7A",Mathematik:"#1A5A4E",NMG:"#1B3A5C",Sport:"#7A5000",Musik:"#1A3A6A",Bildnerisch:"#5A1A5A"},
  links: [
    {label:"Microsoft Teams", icon:"fa-users",       farbe:"#1B3A5C", url:"https://teams.microsoft.com"},
    {label:"Schulwebsite",    icon:"fa-school",      farbe:"#2B8C7E", url:"https://www.schule-stapfer.ch"},
    {label:"Bibliothek",      icon:"fa-book-open",   farbe:"#6B5EA8", url:""},
    {label:"Mein Konto",      icon:"fa-circle-user", farbe:"#C4782A", url:""},
  ],
};
