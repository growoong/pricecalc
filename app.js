function calculateHandler() {
    var loan = $('#loan').val();
    var interest = $('#interest').val();
    var period = $('#period').val();

    loan = parseFloat(loan);
    interest = parseFloat(interest);
    period = parseFloat(period);

    var interestMonth = interest / 12 / 100;

    var div1 = loan * interestMonth * (1 + interestMonth) ** period;
    var div2 = (1 + interestMonth) ** period - 1;

    var result = div1 / div2;

    result = Math.round(result);

    var resultText = ` ${result}원 입니다.`;

    $('#result').text(resultText);
}

$(document).ready(function() {
    $('#calculate').click(calculateHandler);
});