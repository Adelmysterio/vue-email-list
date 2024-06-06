<!-- Descrizione:
Attraverso l'apposita API di Boolean, usando axios, con chiamata GET a questo indirizzo https://flynn.boolean.careers/exercises/api/random/mail generare 10 indirizzi email e stamparli in pagina all'interno di una lista. -->

mi creo un array emails vuoto in data 

creo un metodo getEmails
    creo un ciclo for che itera 10 volte 
        faccio una chiamata get con axios sulla api di boolean e pusho il risultato data.response nel array emails

creo un ul ed un li in html

faccio un v-for nel ul 

collego il contenuto di emails al li tramite {{}}