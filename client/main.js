

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let getQrBtn = document.querySelector(".btn");

function generateQR(){

    if(qrText.value.length > 0)
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrText.value;
    else    
        alert("Enter Valid ID");
}
getQrBtn.addEventListener("click", () => generateQR());

const btnPrint = document.querySelector(".btn-print");
btnPrint.addEventListener("click", () => print());