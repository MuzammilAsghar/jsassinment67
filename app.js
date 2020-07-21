




function alertBox() {
	alert("Welcome to alert box !");
}

function alertBox2() {
	alert("Thankyou for purchasing mobile phone !");
}
function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
}

// counter start  ==========================
var min=0;
    sec=0;
    msec=0;
    milsec=document.getElementById('msec-span');
    sec_span=document.getElementById('sec-span');
    min_span=document.getElementById('min-span');
    descript=document.getElementById('desc');
  var  interval;
  var btn =document.querySelector('#start');


function timer() {
  msec++;
  milsec.innerHTML=msec;
  if (msec>=100) {
    sec++;
  sec_span.innerHTML=sec;
  msec=0;
  }
  else if (sec>=60) {
    min++;
    min_span.innerHTML=min;
    sec=0;
  }
}
function start(){
   interval=setInterval(timer,10);
   btn.disabled=true;
}

function stop(){
   clearInterval(interval);
   btn.disabled=false;
}
function reset(){
    min=0;
    sec=0;
    msec=0;
    min_span.innerHTML=min;
    sec_span.innerHTML=sec;
  milsec.innerHTML=msec;
  stop();
}       

const image1 = document.querySelector("#image1")
image1.addEventListener('mouseover', function (){
this.src = "2.png"
this.style.transition='1s ease all';
})
image1.addEventListener('mouseout' , function (){
this.src= "1.png"
this.style.transition='1s ease all';
})


// =================Chapter 49-52=================

var nam=document.getElementById('name').value;
    email=document.getElementById('mail').value;
    password=document.getElementById('pass').value;

function form_submission(){
   document.getElementById('form_para').innerHTML=nam+email+password;
}
var btn=document.getElementById('read_more_btn');
function content(){
  document.getElementById('more').style.display='block';
  // btn.style.visibility='hidden';
  
}

var row=1;
var entry=document.getElementById('entry');
entry.addEventListener("click",displayDetails);



function displayDetails(){
    var name=document.getElementById('stu_name').value;
    var stLastName=document.getElementById('stu_last_name').value;
    var stClass=document.getElementById('stu_class').value;
    var stDepartment=document.getElementById('stu_department').value;

    if (!name || !stLastName || !stClass || !stDepartment) {
  alert('Please Fill out all the fields');
   } 

   var dataTable=document.getElementById('dataTable');
   var newRow=dataTable.insertRow(row);

   var cell0=newRow.insertCell(0);
   var cell1=newRow.insertCell(1);
   var cell2=newRow.insertCell(2);
   var cell3=newRow.insertCell(3);

   cell0.innerHTML=name;
   cell1.innerHTML=stLastName;
   cell2.innerHTML=stClass;
   cell3.innerHTML=stDepartment;

   row++;
}

function myFunction() {
  var c = document.getElementById('main-content').children;
  var txt = "";
  var i;
  for (i = 0; i < c.length; i++) {
    txt = txt + c[i].tagName + "<br>";
  }

  document.getElementById("demo").innerHTML = txt;
}

// var dispData=document.getElementById("renders");
// var classData =document.getElementsByClass('render');
// for (var i = 0; i < classData.length; i++) {
//   dispData=dispData+classData[i]+ "<br>";
// }


function setVal(){
document.getElementById('first-name').value="Muzammil";
document.getElementById('last-name').value="Asghar";
document.getElementById('email').value="Muzammilasghar@gmail.com";
}

function node_Type(){
  var x = document.getElementById("main-content").nodeType;
  document.getElementById("n_type").innerHTML="node type of first name is : "+x;
}
function l_node_Type(){
  var x = document.getElementById("main-content").nodeType;
  document.getElementById("l_type").innerHTML="node type of last name is : " +x;
}

function first_child() {
  var list = document.getElementById("main-content").fisrtChild.innerHTML;
  document.getElementById("first_ch").innerHTML = list;
}

function last_child() {
  var list = document.getElementById("main-content").lastChild.innerHTML;
  document.getElementById("last_ch").innerHTML = list;
}
function previous() {
  var x = document.getElementById("lastName").previousSibling.innerHTML; 
  document.getElementById("previous_sibling").innerHTML = x;
}

function power_cal() {
  var num1=prompt("Enter a number");
  var pow=prompt("Enter power you want to calculate");
}