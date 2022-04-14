
    class Game{
        constructor( budgeting, betting){
            
            this.budgeting = budgeting;
            this.betting = betting;
        }


        check(){
            let arrUser = document.querySelectorAll('.user-Inp');
            
            for(let j = 0; j < arrUser.length; j++){
                var passValue = Math.floor(Math.random()*5)+1;
                arrUser[j].value = passValue;
            }

            let pcn =  document.querySelectorAll('.pc-Inp');
            let points = 0;
            let prize = 0;
            
            for(let i = 0; i < pcn.length; i++){
                var passValue = Math.floor(Math.random()*5)+1;
                pcn[i].value = passValue;
              
                    if(pcn[i].value == arrUser[i].value){
                        points++;
                        arrUser[i].style.backgroundColor = '#ff0000';
                        arrUser[i].style.color = '#fff';
                        pcn[i].style.backgroundColor = '#ff0000';
                        pcn[i].style.color = '#fff';
                        setTimeout(function(){
                            pcn[i].removeAttribute("style");
                            arrUser[i].removeAttribute("style");
                        },3000);  
                    }
            }   
            
            if(points == 5){
                prize = this.betting * 100;
                const noMoney5 = document.getElementById('q');
                noMoney5.style.display = 'inline-block';
            }else if(points == 4){
                prize = this.betting * 20;
                const noMoney4 = document.querySelectorAll('.mess-4');
                let randy4 = Math.floor(Math.random()*noMoney4.length);
                for(let i = 0; i < noMoney4.length; i++){
                    if(i == randy4){
                        noMoney4[i].style.display = 'inline-block';
                        setTimeout(function(){
                            noMoney4[i].style.display = 'none';
                        }, 3000);
                    }
                }
            }else if(points == 3){
                prize = this.betting * 5;
                const noMoney3 = document.querySelectorAll('.mess-3');
                let randy3 = Math.floor(Math.random()*noMoney3.length);
                for(let i = 0; i < noMoney3.length; i++){
                    if(i == randy3){
                        noMoney3[i].style.display = 'inline-block';
                        setTimeout(function(){
                            noMoney3[i].style.display = 'none';
                        }, 3000);
                    }
                }
            }else if(points == 2){
                prize = this.betting * 1;
                const noMoney2 = document.querySelectorAll('.mess-2');
                let randy2 = Math.floor(Math.random()*noMoney2.length);
                for(let i = 0; i < noMoney2.length; i++){
                    if(i == randy2){
                        noMoney2[i].style.display = 'inline-block';
                        setTimeout(function(){
                            noMoney2[i].style.display = 'none';
                        }, 3000);
                    }
                }
            }else if(points == 1){
                prize = this.betting * 0;
                const noMoney1 = document.querySelectorAll('.mess-1');
                let randy1 = Math.floor(Math.random()*noMoney1.length);
                for(let i = 0; i < noMoney1.length; i++){
                    if(i == randy1){
                        noMoney1[i].style.display = 'inline-block';
                        setTimeout(function(){
                            noMoney1[i].style.display = 'none';
                        }, 3000);
                    }
                }
            }else{
                prize = this.betting * 0;
                const noMoney = document.querySelectorAll('.mess-z');
                let randy0 = Math.floor(Math.random()* noMoney.length);
                for(let i = 0; i < noMoney.length; i++){
                    if(i == randy0){
                        noMoney[i].style.display = 'inline-block';
                        setTimeout(function(){
                            noMoney[i].style.display = 'none';
                        }, 3000);
                    }
                }
               
            }
            
            //current budget

            this.budgeting = this.budgeting - this.betting + prize;
            document.getElementById('budget').value = this.budgeting;
            document.getElementById('budget').style.display = 'none';
            document.getElementById('label-insert').style.display = 'none';
            document.getElementById('money-bag').innerHTML = this.budgeting;
            document.getElementById('money-bag').style.display = 'inline-block';
            document.getElementById('block-current-bud').style.display = 'inline-block';

            if(this.budgeting == 0){
                document.getElementById('game-over').style.display = 'inline-block';
                endTheGame.style.display = 'inline-block';
                document.getElementById('main-block').style.display = 'none';
                document.getElementById('final-earning-text').style.display = 'inline-block';
                let  moneyPrint = document.getElementById('final-earning');
                var x = document.getElementById('hidden-inp').value;
                var y = document.getElementById('budget').value;
                let moneyInOut = y - x;
                moneyPrint.innerHTML = moneyInOut;
                moneyPrint.style.display = 'inline-block';
                let up = document.getElementById('won-msg');
                let level = document.getElementById('draw-msg')
                let under = document.getElementById('lost-msg')

                if(moneyInOut == 0){
                    level.style.display = 'inline-block';
                }else if(moneyInOut > 0){
                    up.style.display = 'inline-block';
                }else{
                    under.style.display = 'inline-block';
                }
                setTimeout(function(){
                    location.reload();
                }, 5000);
            }

            //coins

            let coinsContainer = document.getElementById('graphic-money');
            for(let i = 0; i < this.budgeting; i++){
                let coins = document.createElement('div');
                coins.className = 'coins';
                coinsContainer.appendChild(coins);
            }
            
            //table

            let tableBody = document.getElementById('table-body');
            
            let row = document.createElement('tr');
            row.innerHTML = `<td>${this.betting}</td>
                            <td>${points}</td>
                            <td>${prize.toFixed(2)}</td>
                            <td>${this.budgeting.toFixed(2)}</td>`
            row.className = 'row-tBody';
            //tableBody.appendChild(row);
            tableBody.insertBefore(row, tableBody.childNodes[0]); 

            var x = document.getElementById('table-body').rows[0];
            x.style.backgroundColor = '#ccc';
            setTimeout(function(){
                x.removeAttribute('style');
            }, 5000);
        }
        
        clearFields(){
            setTimeout(function(){
            document.getElementById('un1').value = '';
            document.getElementById('un2').value = '';
            document.getElementById('un3').value = '';
            document.getElementById('un4').value = '';
            document.getElementById('un5').value = '';
            document.getElementById('cn1').value = '';
            document.getElementById('cn2').value = '';
            document.getElementById('cn3').value = '';
            document.getElementById('cn4').value = '';
            document.getElementById('cn5').value = '';
            }, 3000);
            setTimeout(function(){
                document.getElementById('bet').value = '';
            }, 1000);
        }
        
        errorSingBet(){
            document.getElementById('error-bet').style.display = 'inline-block';
            setTimeout(function(){
                document.getElementById('error-bet').style.display = 'none';
            }, 2500);
        }
        
    }
    
    //eventListeners
    document.getElementById('insert-data').addEventListener('submit', function(e){
        let budget = document.getElementById('budget').value;
        let bet = document.getElementById('bet').value;
        const userInput = new Game( budget, bet);
        
        if(parseInt(bet) > parseInt(budget) || parseInt(bet) <= 0 || bet  == ''){
            //error single bet.
            userInput.errorSingBet();
        }else{
        
            //reset coins
            document.getElementById('graphic-money').innerHTML = '';

            //calculations and table display
            userInput.check();
            userInput.clearFields();
        }
        e.preventDefault();
    });
    document.getElementById('rule').addEventListener('click', function(e){
        document.getElementById('explRule').style.display = 'inline-block';
        //missing preventDefault
    });
    document.getElementById('hide-rules').addEventListener('click', function(e){
        document.getElementById('explRule').style.display = 'none';
        //missing preventDefault
    });
    document.getElementById('budget-ini-btn').addEventListener('click', function(e){
        let initialBudget = document.getElementById('initial-budget');
        let insBudget = document.getElementById('budget').value;
        initialBudget.innerHTML =  insBudget ;
        if(insBudget.length > 3 || insBudget.length < 1 || insBudget == ''){
            document.getElementById('error-budget-length').style.display = 'inline-block';
        }else{
            document.getElementById('error-budget-length').style.display = 'none';
            document.getElementById('hidden-inp').value = insBudget;// hidden inp grabs val for final calc.
            document.getElementById('block-ini-bud').style.display = 'inline-block';
            document.getElementById('for-ins-bud').style.display = 'none';
            document.getElementById('budget-ini-btn').style.display = 'none';
            document.getElementById('budget').style.display = 'none';
            document.getElementById('inp-bud').style.display = 'none';
            document.getElementById('main-block').style.display = 'inline-block';
        }
        e.preventDefault();
    });
    let endTheGame = document.getElementById('quit');
    endTheGame.addEventListener('change', function(e){
        if(endTheGame.value == 'END/RELOAD'){
            
            endTheGame.style.display = 'inline-block';
            document.getElementById('main-block').style.display = 'none';
            document.getElementById('final-earning-text').style.display = 'inline-block';
            let  moneyPrint = document.getElementById('final-earning');
            var x = document.getElementById('hidden-inp').value;
            var y = document.getElementById('budget').value;
            let moneyInOut = y - x;
            moneyPrint.innerHTML = moneyInOut;
            moneyPrint.style.display = 'inline-block';

            let up = document.getElementById('won-msg');
            let level = document.getElementById('draw-msg')
            let under = document.getElementById('lost-msg')
            

            if(moneyInOut == 0){
                level.style.display = 'inline-block';
            }else if(moneyInOut > 0){
                up.style.display = 'inline-block';
            }else{
                under.style.display = 'inline-block';
            }

            setTimeout(function(){
               location.reload(); 
            }, 7000);
        }
        e.preventDefault();
    })
         
    
 
//--------------------------------------------------------------------------------------
