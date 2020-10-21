function  createCookie(name, value, days) {
    var now = new Date()
    now.setDate(now.getDate() + days)
    document.cookie = `${name }= ${value}; expires = ${ now } `;
}
// creatCookie('book','雷司令',10)
function getCookie(key){
    var arr1=document.cookie.split('; ')
    for (let i = 0; i < arr1.length; i++) {
      var arr2=arr1[i].split('=')
      if (arr2[0]=key) {
          return arr2[1]
      }
    }
    return null;
}
 
function deleteCookie(key){
    document.cookie=`${key}=" "; expires=${new Date(0)}`
}
