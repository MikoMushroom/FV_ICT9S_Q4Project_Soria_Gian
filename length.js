function ctc() {
    
    var base = document.getElementsByName('Milli')[0].value;

    var result = parseFloat(base) / 10 ;
    
    document.getElementsByName('output1')[0].value= result;

}

function ctm() {
    
    var base = document.getElementsByName('Milli')[0].value;

    var result = parseFloat(base) / 1000 ;
    
    document.getElementsByName('output2')[0].value= result;

}

function ctk() {
    
    var base = document.getElementsByName('Milli')[0].value;

    var result = parseFloat(base) / 1000000 ;
    
    document.getElementsByName('output3')[0].value= result;

}