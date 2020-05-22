const fetch = require('node-fetch');
let Ensena_key = ""
let User_key = ""
let ctx ={Status:false,User:{}}}

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



let saveUser = async (data,user,requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/users'+User_key);
  return res;
}
let notificateUser = async (user,requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/notificateUser/'+User_key);
  return res;
}

let getUsers = async (requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/users');
  return res;
}

let getApp = async (requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}
let saveAppSetting = async (requestuser) => {
  const res = doRequest('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}

let SetApp = (key) => {
  Ensena_key = key
}
let SetWebUser =async () => {
  let url_string = window.location.href
  let url = new URL(url_string);
  User_key = url.searchParams.get("TOKEN");
  let data = await  getUser()
  ctx= data
  if (!data.Status){
    console.log("ERROR MSG : ",data.Msg)
  }
}
module.exports = {
  ctx:cxt,
  user:ctx.User,
  SetApp: SetApp,
  SetWebUser: SetWebUser,
  getUser: getUser,
  getUsers: getUsers,
  getApp: getApp,
  saveUser: saveUser,
  notificateUser: notificateUser,
  saveAppSetting: saveAppSetting
};
