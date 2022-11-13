//Switch

// a switch can replace multiple if checks

/* 
syntax

switch(x) {

    case value1:  //if(x == 'value1')
        ......
  
  case value2:
  
  ........
 	
  default:
  
        .....
}



*/


/* let browser = 'Safari'
 */
/* 
switch(browser) {
    
    case 'Edge':
       console.log('You have selected edge browser')
      break;
    case 'Chrome':
      console.log('You have selected chrome browser')
      break;
    case 'Opera':
      console.log('You have selected opera browser')
      break;
    default:
      console.log('We do not support this browser. please select again')

     
}

 */
/* 
let arrowSelected = 'down'
switch(arrowSelected) {
    
    case 'up':
       console.log('move up')
      break;
    case 'down':
      console.log('move down')
      break;
    case 'left':
      console.log('move left')
      break;
    default:
      console.log('Right')

     
} */


let browser = 'Opera'

switch (browser) {

    case 'Edge':
    case 'Chrome':
    case 'Opera':
        console.log('We support these browsers')
        break;
    default:
        console.log('We do not support this browser. please select again')


}

// Assignment => Convert all the switchcase statements into if else conditions