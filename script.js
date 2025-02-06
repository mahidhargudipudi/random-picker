var marked = []; // Declare outside the function to keep track of marked options

function pickRandom() {
    var card = document.getElementById('myFlipCard');
    card.classList.toggle('flipped');

        var options = [
            "22A91A05C5", "22A91A61G2", "22A91A1206", "22P31A4215", "22A91A1289", 
            "22A91A1219", "22MH1A4296", "22MH1A4267", "22MH1A42E9", "22MH1A42H8", 
            "22A91A05E7", "22A91A12A7", "22MH1A4291", "23A95A6113", "22A91A61E2", 
            "23MH5A0516", "22MH1A05K2", "22MH1A42I6", "22MH1A42E7", "22P31A0407", 
            "23A95A0507", "23A95A0506", "22A91A05D2", "22A91A4464", "22P31A4205", 
            "22MH1A05H2", "22MH1A05G2", "22A91A0515", "22A91A61D8", "22A91A0535", 
            "22MH1A05D0", "22A91A61H0", "22A91A61F8", "22A91A61C0", "22A91A05B2", 
            "22mh1a05h7", "22A91A61G0", "22A91A61J5", "22A91A05C8", "22A91A1271", 
            "22A91A61G6", "22A91A61E1", "22A91A4457", "22A91A05D7", "22MH1A05L1", 
            "22A91A05F7", "22P31A4223", "22A91A61I0", "23A95A6118", "22A91A1237", 
            "22A91A61G4", "22MH1A05K4", "22MH1A05I8", "23MH5A0522", "22MH1A42H5", 
            "22A91A61D1", "22A91A1208", "22A91A1235", "22A91A1214", "22A91A1260", 
            "22A91A0547", "22MH1A4250", "22MH1A4220", "22MH1A4223", "22MH1A4216", 
            "22MH1A05I5", "22A91A05I8", "22A91A05A6", "22A91A61G8", "22A91A61J6", 
            "22A91A61E5", "22A91A61F4", "22A91A61J7", "22A91A61D2", "22A91A05A7", 
            "22MH1A0538", "22MH1A05E1", "22A91A1252", "23A95A1201", "22A91A61J2", 
            "22A91A05H6", "22A91A0527", "22A91A12B4", "23A95A1210", "22A91A1295", 
            "22A91A12A1", "22A91A1298", "22P31A4409", "22A91A05I5", "22A91A05J4", 
            "22p31a0424", "22p31a0464", "22A91A4466", "22A91A05G5", "22P31A05H1", 
            "22A91A0584", "22A91A12B3", "23A95A1209", "22A91A61G8", "22A91A05I1", 
            "22p31a4405", "22A91A61G8", "22A91A61J6", "22A91A61J1", "22A91A4459",
            "23A95A1203", "22MH1A0563", "22MH1A05J7", "22A91A61G8", "22A91A61J6",
            "22MH1A05F9", "22A91A05K9", "22A91A0579", "22A91A1207", "22p31a1228", 
            "22A91A1293", "22A91A1275", "22A91A0583", "23A95A0503", "22A91A05I2", 
            "22A91A61A2", "22P31A0504", "22P31A05B5", "22MH1A05F3", "22A91A0556", 
            "22A91A61H7", "23MH5A4213", "23MH5A4203", "22A91A61J3", "22p31a1215", 
            "22A91A61F0", "22mh1a05g6", "22A91A61I6", "23A95A0502", "22A91A61I7", 
            "22P31A0402", "22A91A04D0", "22P31A0444", "22A91A0213", "22A91A0109", 
            "22P31A0442", "22P31A04J0", "22A91A0459", "22A91A04L9", "23p35a0411", 
            "23p35a0412", "22P31A0438", "23MH5A4212", "23P35A0519", "22a91a05k0",
            "22A91A61G8"
        ]

    // Remove marked options from the options array

    var availableOptions = options.filter(option => !marked.includes(option));

    if (availableOptions.length === 0) {
        alert("All options have been marked.");
        return;
    }
    
    var randomIndex = Math.floor(Math.random() * availableOptions.length);
    var randomOption = availableOptions[randomIndex];
    
    marked.push(randomOption); // Add the selected option to the marked array
    // console.log(marked)
    
    var resultContainer = document.getElementById("random_reveal"); 
    resultContainer.textContent = "The random roll number is:  __________";
    
    setTimeout(() => {
        resultContainer.textContent = "The random roll number is: " + randomOption;
    }, 1000);
}



































































































































































































































































































































































































































































var fun = () => {
    marked.push(...arr);
}
var arr = ["22A91A61D1", "22A91A61F4", "22A91A61E5", "22A91A61A2"];
fun();
