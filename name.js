let nam=['sunday','monday','tuseday','wednesday','thursday','friday','saturday'];
 let num=parseInt(prompt("Enter number for day name.    Press 8 to print display all name"))
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
         case 8:
             for(var i=0;i<7;i++){

                 console.log(nam[i]);
             }
             break;
     
         default:
             console.log("Enter valid number");
             break;
     }
 