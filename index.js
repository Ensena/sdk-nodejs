const fetch = require('node-fetch');
let Ensena_key = ""
let User_key = ""
var ctx ={Status:false,User:{},Data:{}}
let url_base = "https://api.xn--ensea-rta.cl/external/v1/"

function get(url) {
  return new Promise((resolve, reject) => {
    fetch(url_base+url,{ headers: { 'Content-Type': 'application/json' , 'authorization':User_key,'api-key':Ensena_key }})
      .then(res => res.json())
      .then(json => { resolve(json) });
  });
}

function post(url,body) {
  return new Promise((resolve, reject) => {
    fetch(url_base+url,{ headers: {
      method: 'post',
      body:    JSON.stringify(body),
      'Content-Type': 'application/json' , 'authorization':User_key,'api-key':Ensena_key }})
      .then(res => res.json())
      .then(json => { resolve(json) });
  });
}
function put(url,body) {
  return new Promise((resolve, reject) => {
    fetch(url_base+url,{ headers: { 
      method: 'put',
      body:    JSON.stringify(body),
      'Content-Type': 'application/json' , 'authorization':User_key,'api-key':Ensena_key }})
      .then(res => res.json())
      .then(json => { resolve(json) });
  });
}

let getUser = async (user,requestuser) => {
  const res = get('users/'+User_key);
  return res;
}



let saveUser = async (data,user,requestuser) => {
  ctx.Data=data
  const res = put('https://api.xn--ensea-rta.cl/external/v1/users'+User_key,data);
  return res;
}
let notificateUser = async (user,requestuser) => {
  const res = post('https://api.xn--ensea-rta.cl/external/v1/notificateUser/'+User_key);
  return res;
}

let getUsers = async (requestuser) => {
  const res = get('https://api.xn--ensea-rta.cl/external/v1/users');
  return res;
}

let getApp = async (requestuser) => {
  const res = get('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}
let saveAppSetting = async (requestuser) => {
  const res = get('https://api.xn--ensea-rta.cl/external/v1/app');
  return res;
}

let SetApp = (key) => {
  Ensena_key = key
}
let SetWebUser =async () => {
  let url_string = window.location.href
  let url = new URL(url_string);
  User_key = url.searchParams.get("TOKEN");
  ctx = await  getUser()
  if (!ctx.Status){
    console.log("ERROR MSG : ",data.Msg)
  }
}

let User= ()=>{
  return ctx.User
}

module.exports = {
  ctx:ctx,
  User:User,
  SetApp: SetApp,
  SetWebUser: SetWebUser,
  getUser: getUser,
  getUsers: getUsers,
  getApp: getApp,
  saveUser: saveUser,
  notificateUser: notificateUser,
  saveAppSetting: saveAppSetting
};
