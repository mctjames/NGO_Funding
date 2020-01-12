function updateAmount() {
    //divides the numerator input box by the denominator one
    var donationAmount = parseFloat(document.getElementById("donation").value);
    var currentAmount = parseFloat(document.getElementById("amount").innerHTML);
    document.getElementById("amount").innerHTML = donationAmount + currentAmount;
}

document.getElementById("donate").addEventListener("click", updateAmount);