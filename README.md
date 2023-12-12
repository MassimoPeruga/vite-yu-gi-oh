# Vite Yu-Gi-Oh

Secondo progetto utilizzando Vite e Vue 3, struttato in due macro componenti a loro volta suddivisi in ulteriori componenti.
Al caricamento della pagina, viene effettuata una chiama ajax all'API di Yu Gi Oh: https://db.ygoprodeck.com/api/v7/cardinfo.php, fintantoché i risultati non sono pronti viene visualizzato un loader con un messaggio di caricamento, successivamente con i dati restituiti, viene stampata una card per ogni carta. 