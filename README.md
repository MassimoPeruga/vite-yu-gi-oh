# Vite Yu-Gi-Oh

Secondo progetto utilizzando Vite e Vue 3, struttato in due macro componenti a loro volta suddivisi in ulteriori componenti.
Al caricamento della pagina, viene effettuata una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php, fintantoché i risultati non sono pronti viene visualizzato un loader con un messaggio di caricamento, successivamente con i dati restituiti, viene stampata una card per ogni carta. Le option della select sono popolate dinamicamente (chiamando l'api: https://db.ygoprodeck.com/api/v7/archetypes.php).
Quando l'utente seleziona un valore dalla lista, viene effettuata una chiamata all' API con l'archetipo selezionato e vengono mostrate le carte corrispondenti.