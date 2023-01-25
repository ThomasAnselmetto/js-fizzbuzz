// come prima cosa creo un collegamento con l'html usando querySelector oppure getElementById e creo la variabile corrispondente con un nome utile

// creo una variabile per aggiungere gli elementi:ossia createElement

// costruisco il ciclo con for e all'interno inserisco il nuovo item creato

// successivamente creo un if per creare elementi che prendono una determinata classe solo a determinate condizioni

// creo variabili collegando ul con id a js

const list_el = document.getElementById("list");

console.log(list_el);

// creo il for in modo da aprire un ciclo nel quale creo un num x di variabili

for (let index = 0; index < 100; index++) {

    // creo all'interno del for l'elemento li

    const listItem = document.createElement("li");
    console.log(listItem);

    // indico che dovra' essere creato l'elemento li con classe box

    listItem.innerHTML = "sono nuovo";
    listItem.classList.add("box");

    // qui uso il method append per far visualizzare il mio listItemItem nell'html

    list_el.append(listItem);

}