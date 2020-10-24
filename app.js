console.log("hola")





fetch("https://my-json-server.typicode.com/KumanEnrique/paginas-web/db")
    .then(rwsolve =>rwsolve.json())
    .then(datos =>console.log(datos))