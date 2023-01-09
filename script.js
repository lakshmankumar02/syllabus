function selectCollegeName() {
  let e = document.querySelector("#college");
  let val = e.value;
  let text = e.options[e.selectedIndex].text;
  document.querySelector("#selected_college").innerHTML = text;
  document.querySelector("#selected_college_value").innerHTML = val;
  console.log(val);
}

selectCollegeName();

document.querySelector("#college").addEventListener("click", function () {
  selectCollegeName();
});

// When the user scrolls the page, execute myFunction
window.onscroll = function () {
  myFunction();
};

// Get the navbar
let navbar = document.getElementById("navbar");

// Get the offset position of the navbar
let sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// for length of 4 for branch
let numberOfBranch = document.querySelectorAll(".branch_box").length;

// for length of 8 for syllabus
let numberOfSyllabus = document.querySelectorAll(".bbd_column").length;

// for length of 8 for share button
let numberOfShare = document.querySelectorAll(".bbd_share").length;

// input value change
let inputSelect = document.querySelector(".share_copy input");

// select all share button
const sharebtn = document.querySelectorAll(".bbd_share");

// set localhost 
let localHost = "http://127.0.0.1:5501/";

// syllabus time for select which year or which class syllabus is
let syllabusTime = [
  "year_1st",
  "semester_3rd",
  "semester_4th",
  "semester_5th",
  "semester_6th",
  "semester_7th",
  "semester_8th",
];

let colName = document.querySelector("#college").value;

for (let i = 0; i < numberOfBranch; i++) {
  let branchBox = ["civil", "computer", "electronics", "mechanical"];
  let branchBoxName = branchBox[i];
  console.log("branchboxname is : " + branchBoxName);
  let syllabusBranchName =
    branchBoxName.slice(0, 1).toUpperCase() +
    branchBoxName.slice(1, branchBoxName.length).toLowerCase();
  console.log("uppercase syllabusbranch name is: " + syllabusBranchName);

  let idBBN = "#" + branchBoxName;
  let classBBN = "#syllabus_card";
  console.log(idBBN);
  console.log(classBBN);

  // jab kisi branch par click hoga tab ke liye
  document.querySelector(idBBN).addEventListener("click", function () {
    console.log("syllabus branch name is: " + syllabusBranchName);
    document.querySelector("#syllabus_branch").innerHTML =
      syllabusBranchName + " Branch Syllabus";

    // select which syllabus year
    for (let i = 0; i < numberOfSyllabus; i++) {
      let syllabusTimeName = syllabusTime[i];
      console.log("syllabus time name is:" + syllabusTimeName);

      // select downloads anchor tag
      let syllabusDownloads = document.querySelectorAll(".bbd_downloads a");
      let syllabusDownloadsName = syllabusDownloads[i];
      console.log("syllabus downloads name is :" + syllabusDownloadsName);

      // select preview anchor tag
      let syllabusPreview = document.querySelectorAll(".bbd_preview a");
      let syllabusPreviewName = syllabusPreview[i];
      console.log("syllabus preview name is :" + syllabusPreviewName);

      let pdfSelect =
        "pdf/" +
        colName +
        "/" +
        syllabusBranchName +
        "/" +
        syllabusTimeName +
        ".pdf";
      console.log(pdfSelect);

      let downloadNameSelect =
        colName + "/" + syllabusBranchName + "_" + syllabusTimeName;
      console.log(downloadNameSelect);

      syllabusDownloadsName.setAttribute("href", pdfSelect);
      syllabusDownloadsName.setAttribute("download", downloadNameSelect);
      syllabusPreviewName.setAttribute("href", pdfSelect);

      let inputValue = localHost + pdfSelect;

      sharebtn[i].addEventListener("click", function () {
        inputSelect.setAttribute("value", inputValue);
      });
    }
  });
}

// const sharebtn = document.querySelectorAll('.bbd_share');

for (let i = 0; i < numberOfShare; i++) {
  let syllabusTimeName = syllabusTime[i];
  console.log("syllabus time name is:" + syllabusTimeName);

  // syllabusTime();
  let pdfSelect = "pdf/" + colName + "/" + "Civil/" + syllabusTimeName + ".pdf";
  console.log(pdfSelect);

  let inputValue = localHost + pdfSelect;

  sharebtn[i].addEventListener("click", function () {
    inputSelect.setAttribute("value", inputValue);
    copyFunction();
    document.querySelector(".share_popup").classList.toggle("hidden");
  });

  document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".share_popup").classList.toggle("hidden");
  });
}

// copy function for copy paste
function copyFunction() {
  let copyText = document.getElementById("myInput");
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);
}

// my copy function for copy paste and also text change from copy to copied
function myCopyFunction() {
  copyFunction();
  let myCopyText = document.querySelector(".copy_btn");
  myCopyText.innerHTML = "Copied";
  setTimeout(() => {
    myCopyText.innerHTML = "Copy";
  }, 2000);
}

// contact

function clearErrors() {
  errors = document.getElementsByClassName("form-error");
  for (let item of errors) {
    item.innerHTML = "";
  }
}
function seterror(id, error) {
  // sets error inside tag of id
  element = document.getElementById(id);
  element.getElementsByClassName("form-error")[0].innerHTML = error;
}

function validateForm() {
  let returnval = true;
  clearErrors();

  // Perform validation and if validation fails, set the value of returnval to false
  let name = document.forms["myForm"]["name"].value;
  if (name.length < 3) {
    seterror("fname", "*Length of name is too short!");
    returnval = false;
  }

  let email = document.forms["myForm"]["email"].value;
  if (email.length < 12) {
    seterror("femail", "*Length of email is too short!");
    returnval = false;
  } else if (email.length > 50) {
    seterror("femail", "*Length of Email is too long!");
    returnval = false;
  }

  return returnval;
}
