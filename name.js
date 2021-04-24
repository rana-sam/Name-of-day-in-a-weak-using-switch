let nam=['sunday','monday','tuseday','wednesday','thursday','friday','saturday'];
 let num=parseInt(prompt("enter number for day name"))
     switch (num) {
         case 1:
             console.log(nam[0]);
             break;
         case 2:
             console.log(nam[1]);
             break;
         case 3:
             console.log(nam[2]);
             break;
         case 4:
             console.log(nam[3]);
             break;
         case 5:
             console.log(nam[4]);
             break;
         case 6:
             console.log(nam[5]);
             break;
         case 7:
             console.log(nam[6]);
             break;
     
         default:
             console.log("Enter valid number");
             break;
     }
 