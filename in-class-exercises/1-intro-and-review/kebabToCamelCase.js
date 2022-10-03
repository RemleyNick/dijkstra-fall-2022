//change-this-word gets converted to changeThisWord
//day-month-year gets converted to dayMonthYear
//ALL-Caps get converted to allCaps

function kebabToCamel(kebabString) { 

    let camel = false;
    let camelString = ''
    
    for(let i = 0; i < kebabString.length; i++){
      if(kebabString.charAt(i) === '-'){
        camel = true;
      } else if(camel) {
        camelString += kebabString.charAt(i).toUpperCase();
        camel = false;
      } else {
        camelString += kebabString.charAt(i).toLowerCase();
      }
    } 
    return camelString;
  }

console.log(kebabToCamel('ALL-CAP'));
