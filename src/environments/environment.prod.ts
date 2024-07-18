const loginUrl = 'https://reefer.social/login';
const logoutUrl = 'https://reefer.social/logout';
const frontendUrl = 'https://tube.reefer.social/';
const backendUrl =  'https://api.reefer.social/';

// const frontendUrl = 'http://localhost:4200/';
// const backendUrl = 'http://localhost:8080/';
// const loginUrl = 'http://localhost:4200/login';
const wasabiUrl = 'https://s3.us-east-1.wasabisys.com/reefer-social/'


export const environment = {
  production: false,
  frontendUrl: frontendUrl,
  backendUrl: backendUrl,
  loginUrl: loginUrl,
  apiUrl: `${backendUrl}api/v1/`,
  domain: '.reefer.social',
  wasabiUrl: wasabiUrl,
  socketUrl: `${backendUrl}`,
  conferenceUrl: 'https://meet,facetime.tube/',
  logoutUrl: logoutUrl

};

