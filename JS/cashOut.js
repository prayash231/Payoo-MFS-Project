document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    console.log("cash out button clicked");

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;
    console.log(cashOut, pinNumber);

    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText
        console.log(balance);
        const balanceNumber = parseFloat(balance);

        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;

        // update the ui or dom
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('failed to cash out. please try again later');
    }
});