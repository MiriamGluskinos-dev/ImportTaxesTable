// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.


export const environment = {
  production: false,
  configFile: 'assets/settingfolder/setting.json',
  apiUrl: 'https://shaarolami-query.customs.mof.gov.il/',
  ReCaptcha: {
    jsUrl: 'https://www.google.com/recaptcha/api.js?render=explicit', // default
    siteKey: '6LcsWN4UAAAAAHsiBVkGFzwYBBOY7NPjsXP2SLAG'
  },
  baseUrls: {
    govscript: '/govscript',
    shaarolami: '/shaarolami'
  }
};
