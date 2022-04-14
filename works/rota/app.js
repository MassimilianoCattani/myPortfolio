var entry = document.getElementById('addNameRow');
entry.addEventListener('click', displayRow);
var row=0;
function displayRow(e){
   var nameEmp = document.getElementById('nameOfEmp').value;
   if(!nameEmp){
       alert('insert name');
       return;
   }
   
   
   var display = document.getElementById('tableBody');

   var newRow = display.insertRow(row - 1);

   var cell1 = newRow.insertCell(0);
   var cell2 = newRow.insertCell(1);
   var cell3 = newRow.insertCell(2);
   var cell4 = newRow.insertCell(3);
   var cell5 = newRow.insertCell(4);
   var cell6 = newRow.insertCell(5);
   var cell7 = newRow.insertCell(6);
   var cell8 = newRow.insertCell(7);
   var cell9 = newRow.insertCell(8);
   var cell10 = newRow.insertCell(9);
   var cell11 = newRow.insertCell(10);
   var cell12 = newRow.insertCell(11);
   var cell13 = newRow.insertCell(12);
   var cell14 = newRow.insertCell(13);
   var cell15 = newRow.insertCell(14);
   var cell16 = newRow.insertCell(15);
   var cell17 = newRow.insertCell(16);
   var cell18 = newRow.insertCell(17);
   var cell19 = newRow.insertCell(18);
   var cell20= newRow.insertCell(19);
   var cell21= newRow.insertCell(20);
/*
   var nameRow = document.createElement('th');
   nameRow.classList.add('name');
   nameRow.innerText=nameEmp;
   var btnDel = document.createElement('button');
   btnDel.classList.add('delete');
   btnDel.innerText = 'x';
   nameRow.appendChild(btnDel);
*/
   cell1.innerHTML = '<th class="name" scope = "row">'+ nameEmp + '<button class = "delete">x</button></th>';
/*   
   var shiftRow = document.createElement('td');
   shiftRow.classList.add('shift');
   var shiftInp = document.createElement('input');
   shiftInp.classList.add('shift-class-inp');
   shiftRow.appendChild(shiftInp);
*/
   cell2.innerHTML = '<td class="shift"><input value = ""></td>'


   cell3.innerHTML='<td><div class="box-01 c6"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell4.innerHTML='<td><div class="box-01 c7"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell5.innerHTML='<td><div class="box-01 c8"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell6.innerHTML='<td><div class="box-01 c9"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell7.innerHTML='<td><div class="box-01 c10"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell8.innerHTML='<td><div class="box-01 c11"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell9.innerHTML='<td><div class="box-01 c12"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell10.innerHTML='<td><div class="box-01 c13"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell11.innerHTML='<td><div class="box-01 c14"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell12.innerHTML='<td><div class="box-01 c15"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell13.innerHTML='<td><div class="box-01 c16"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell14.innerHTML='<td><div class="box-01 c17"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell15.innerHTML='<td><div class="box-01 c18"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell16.innerHTML='<td><div class="box-01 c19"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell17.innerHTML='<td><div class="box-01 c20"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell18.innerHTML='<td><div class="box-01 c21"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell19.innerHTML='<td><div class="box-01 c22"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell20.innerHTML='<td><div class="box-01 c23"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';
   cell21.innerHTML='<td><div class="box-01 c24"><div class="break"></div><div class="break"></div><div class="break"></div></div></td>';

   function interaction(){
    
 
    document.getElementById('hourh').onclick = hour;    //button hour
   
    document.getElementById('breaks').onclick = breaks;    //button break
  
    function colorBox(e){
        if(e.target.className === 'box-01'){
            e.target.style.background = '#55c79a'; 
            calcTotal(e.target);
        }else if(e.target.className === 'break'){
            e.target.parentElement.style.background = '#55c79a';
            calcTotal(e.target.parentElement);
        }
    }
    
    function colorBreak(e){
        if(e.target.className === 'break'){
            e.target.style.background = '#ff0000';
            
        }
    }

    function colorOff(e){
        if(e.target.className === 'box-01'){
            e.target.style.background = 'none';	
            calcTotal(e.target);
        }else if(e.target.className === 'break'){
            e.target.parentElement.style.background ='none';
            calcTotal(e.target.parentElement);
        }
    }

    function colorOffBrk(e){
        if(e.target.className === 'break'){
            e.target.style.background = 'none';
        }
    }

        function hour(){
            //When you push the buttun hours you enable this:
            
            document.body.removeEventListener('click', colorBreak);
            document.body.removeEventListener('dblclick', colorOffBrk);

            document.body.addEventListener('click', colorBox);
            document.body.addEventListener('dblclick', colorOff);
   
        }   
    
        function breaks(){
            //When you push the buttun breaks you are enabling this:

            document.body.removeEventListener('click', colorBox);
            document.body.removeEventListener('dblclick', colorOff);

            document.body.addEventListener('click', colorBreak);
            document.body.addEventListener('dblclick', colorOffBrk);
             
        }

         //people per hours

        function calcTotal(target){
            
            var columns = document.getElementsByClassName(target.classList[1]);
            
            var total = 0;
            for (i = 0; i < columns.length; i++){
            
                if(columns[i].style.backgroundColor === 'rgb(85, 199, 154)'){
                    
                    total++;
                }
                
                
            }

            var totalEle =  document.getElementsByClassName('total ' + target.classList[1]);

            
            totalEle[0].innerHTML = total;
            
           
        }

        //remove employee name.

        document.body.addEventListener('click', removeEmployee);
        function removeEmployee(e){
            if(e.target.className === 'delete'){
                    e.target.parentElement.parentElement.remove();
                    calcTotal(e.target);
            }
        }
        
}  
        function resetName(){
            document.getElementById('nameOfEmp').value='';
        }     
    resetName();
    interaction();

    e.preventDefault();

}
