// Require
const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) =>{

  

  for( let i = 1; i <= limite; i++){
    console.log(`${base} * ${i} = ${ base * i}`);
  }

}


crearArchivo = ( base, limite )=>{
  return new Promise( (resolve, reject)=>{

    let data = "";

    for( let i = 1; i <= 10; i++){
      data += `${base} * ${i} = ${ base * i}\n`;
    }

    fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {

      if (err)
        reject(err)
      else
        resolve(`tabla-del-${base}-al-${limite}.txt`)

    });

  });
}

module.exports = {
  crearArchivo,
  listarTabla
}
