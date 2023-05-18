window.jsPDF = window.jsPDF.jsPDF;

var job = document.getElementById('job');
var NameFirst = document.getElementById('NameFirst');
var NameLast = document.getElementById('NameLast');
var email = document.getElementById('email');
var number = document.getElementById('number');
var country = document.getElementById('country');
var city = document.getElementById('city');
var professionalDescription = document.getElementById('professionalDescription');
var demo = document.getElementById('demo');


var jobShow = document.getElementById('job-show');
var nameShow = document.getElementById('name-show');
var descriptionShow = document.getElementById('description-show');
var emailShow = document.getElementById('email-show');
var numberShow = document.getElementById('number-show');


var envelopIcon = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>'
var envelopIcon = '<svg width="16" height="16"><path d="M11 2H5C3.9 2 3.01 2.9 3.01 4L3 16l5-3 5 3V4c0-1.1-.89-2-1.99-2z"></path></svg>';
console.log(job);
console.log(NameFirst);
function generatePDF() {
    var doc = new jsPDF();
    doc.setFontSize(25);
    doc.text(10, 20, NameFirst.value + " " + NameLast.value);
    doc.setFontSize(14);
    doc.text(10, 25, job.value);
    doc.setFontSize(11);
    doc.text(10, 28, professionalDescription.value);
    doc.setFontSize(10);
    doc.text(140, 20, email.value, "right");
    doc.addSVG(envelopIcon, 143, 20, 16, 16);
    doc.text(140, 24, number.value, "right");
    doc.text(140, 28, city.value + "," + country.value, "right");
    // doc.setFont("FontAwesome");
    // doc.text("f0e0", 143,20); // This adds a Font Awesome arrow icon to the PDF at position (10,10)
    doc.text("f0e0", 20, 40);


    var svgCode = '<svg width="16" height="16"><path d="M11 2H5C3.9 2 3.01 2.9 3.01 4L3 16l5-3 5 3V4c0-1.1-.89-2-1.99-2z"></path></svg>'; // SVG code for your custom icon
    var dataUri = 'data:image/svg+xml,' + encodeURIComponent(svgCode);
    doc.addSVG(dataUri, 20, 40, 60, 60);

    //save the pdf
    doc.save('document.pdf');

}

function showdata() {
    jobShow.innerHTML = (job.value);
    nameShow.innerHTML = NameFirst.value + " " + NameLast.value;
    descriptionShow.innerHTML = professionalDescription.value;
}

function generatePDF1() {

    jobShow.innerHTML = (job.value);
    nameShow.innerHTML = NameFirst.value + " " + NameLast.value;
    descriptionShow.innerHTML = professionalDescription.value;
    var element = document.getElementById("show-main");
    console.log(element);
    // Use html2canvas to convert the HTML element to an image
    html2canvas(element).then(function (canvas) {
        var imgData = canvas.toDataURL("image/jpeg");

        // Create a new jsPDF instance
        var doc = new jsPDF();

        // Add the image to the PDF
        doc.addImage(imgData, "JPEG", 10, 10, 190, 0);

        // Save the PDF
        doc.save("output.pdf");
    });
}