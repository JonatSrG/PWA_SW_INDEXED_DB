
// indexedDB: Reforzamiento
let request = window.indexedDB.open('mi-database', 1);

//Se actualiza cuando se crea o se sube de version de la BD
request.onupgradeneeded = event => {

    console.log('Actualizacion de BD');

    let db = event.target.result;

    db.createObjectStore('heroes', {

        keyPath: 'id'
        
    });
}



