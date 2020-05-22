# Primer SDK para enseña.cl

# Primer paso para integración con Frameworkd REACT

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



# First SDK FOR enseña.cl
