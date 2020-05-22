const fetch = require('node-fetch');
let Ensena_key = ""
let User_key = ""

function doRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url,{ headers: { 'Content-Type': 'application/json' , 'authorization':User_key,'api-key':Ensena_key }})
      .then(res => res.json())
      .then(json => { resolve(json) });
  });
}

let getUser = async (user,requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/users/'+User_key);
  return res;
}

let saveUser = async () => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/users');
  return res;
}
let notificateUser = async () => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/notificateUser');
  return res;
}

let getUsers = async () => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/users');
  return res;
}

let getApp = async () => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}
let saveAppSetting = async () => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}

let SetApp = (key) => {
  Ensena_key = key
}
let SetWebUser = () => {
  let url_string = window.location.href
  let url = new URL(url_string);
  User_key = url.searchParams.get("TOKEN");
  getUser().then((data)=>{ 
    if (data.Status){
      console.log("ERROR MSG : ",data.Msg)
    }

   })
}


module.exports = {
  SetApp: SetApp,
  SetWebUser: SetWebUser,
  getUser: getUser,
  getUsers: getUsers,
  getApp: getApp,
  saveUser: saveUser,
  notificateUser: notificateUser,
  saveAppSetting: saveAppSetting
};
