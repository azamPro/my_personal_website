function redirectUser() {
    var inputNumber = document.getElementById("number").value;
    inputNumber = Number(inputNumber);

    if (inputNumber == 1) {
        window.location.href = "https://azamplatform.com/loen/";
    } else if (inputNumber == 2) {
        window.location.href = "https://azamplatform.com/dashboard/website/dashboard.html";
    } else if (inputNumber == 3) {
        window.location.href = "https://azamplatform.com/amazon-shop/website/";
    } 
    else if (inputNumber == 4) {
        window.location.href = "https://azamplatform.com";
    }
    else if (inputNumber == 5) {
        window.location.href = "https://azamplatform.com/calculator/";
    } else {
        alert("Invalid input. Please enter 1, 2, or 3.");
        return false;
    }
}

function navigateToPage( x ) {
    if (x == 1) {
        window.location.href = "../loen";
    }else if(x == 2){
        window.location.href = "../dashboard/website/";
    }
    else if(x == 3){
        window.location.href = "../amazon-shop/website/";
    }
    else if(x == 4){
        window.location.href = "../index.html";
    }
    else{
        return 0;
    }

    
}