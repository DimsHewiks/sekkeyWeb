export function onloadCheck(){
    let load = false;
    window.onload = function () {
        load = true;
      }
    return true;  
}