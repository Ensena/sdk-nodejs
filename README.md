# Primer SDK para enseña.cl

# Primer paso para integración con Libreria REACT

En tu terminal instala este paquete
``` bash
npm i -D github:Ensena/sdk-nodejs#master
```


Luego en tu archivo index.js reemplaza tu archivo desde esta forma
``` js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
```
Para que se vea de la siguiente forma esto incorpora tu proyecto con los datos enseña.cl
``` js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ensena from 'ensena'
ensena.SetApp("API KEY")
ensena.SetWebUser().then(()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
})
serviceWorker.unregister();
```

# Segundo paso de intregación
``` js 
import ensena from 'ensena'
```
## Que método necesitas 

``` js 
import React, { Component } from 'react';
import ensena from 'ensena'
class Ejemplo extends Component {
    render() {
       let user = ensena.User() // Obtiene el usuario
       let ctx = ensena.Ctx() // Obtiene el contexto del usuario dentro de este existe User que el usuario que esta en la linea anterior
       ctx.Data.id++  // Dentro del contexto existe un espacio llamado Data el cual sirve para que la aplicacion pueda guardar algo y recuperarlo posteriormente
       ensena.SaveUser(ctx.Data) // Guarda el contexto data en el usuraio correspondiente 

        return <div>
            <p></p>
            <p></p>
            <p></p>
            <p></p>


        </div>
    }
}
export default Ejemplo;
```

Ojo estas lineas las puedes llamar en en constructor si tu lo deseas pero dentro una clase.
