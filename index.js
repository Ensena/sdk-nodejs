const fetch = require('node-fetch');

function doRequest(url) {
  return new Promise( (resolve, reject) => {
    fetch(url)
    .then(res => res.json())
    .then(json => {resolve(json) } );
  });
}

let getUser = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/getUser');
  return res;
}

let saveUser = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/saveUser');
  return res;
}
let notificateUser = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/saveUser');
  return res;
}

let getUsers = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/getUsers');
  return res;
}

let getApp = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/getApp');
  return res;
}
let saveAppSetting = async ()=> {
  const res =  doRequest('https://api.xn--ensea-rta.cl/external/v1/getApp');
  return res;
}


module.exports = {getUser:getUser,
                  getUsers:getUsers,
                  getApp:getApp,
                  saveUser:saveUser,
                  NotificateUser:NotificateUser,
                  saveAppSetting:saveAppSetting};
