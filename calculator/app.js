document.getElementById('loan-form').addEventListener('submit',function(e){
    let results = document.getElementById('results');
    results.style.display = 'none';

    let loading = document.getElementById('loading');
    loading.style.display = 'block';

    e.preventDefault();
    



    setTimeout(calculateResults,2000);

});
 

function calculateResults(e){
    let amount = document.getElementById('amount');
    let interest = document.getElementById('interest');
    let years = document.getElementById('years');
    let monthlyPayment = document.getElementById('monthly-pay');
    let totalPayment = document.getElementById('total-payment');
    let totalIntrest = document.getElementById('total-intrest');

    let principal = parseFloat(amount.value);
    let calculatedIntrest = parseFloat(interest.value) /100/12;
    let calculatePatments = parseFloat(years.value) * 12;

    let x = Math.pow(1+calculatedIntrest,calculatePatments);
    let monthly = (principal*x*calculatedIntrest)/(x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = monthly.toFixed(2);
        totalPayment.value = (monthly*calculatePatments).toFixed(2);
        totalIntrest.value = ((monthly*calculatePatments)-principal).toFixed(2);
    
        let results = document.getElementById('results');
        results.style.display = 'block';

        let loading = document.getElementById('loading');
        loading.style.display = 'none';
    
        
    }else{
        console.log('check numbers');
    }

    e.preventDefault();
}