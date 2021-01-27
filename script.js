var element= document.createElement("div");
element.setAttribute("class","container-fluid")

var column = document.createElement("div");
column.setAttribute("class", "offset-4 col-4 border p-4");

var sname= document.createElement("div");
sname.setAttribute("class","form-group");

var lsname= document.createElement("label");
lsname.setAttribute("for","name");
lsname.innerHTML="Name";
var isname= document.createElement("input");
isname.setAttribute("type","text")
isname.setAttribute("id","name")
isname.setAttribute("name","name")
isname.setAttribute("class","form-control");
column.append(sname);
sname.append(lsname,isname);

var secondDiv=document.createElement("div")
secondDiv.setAttribute("class","row ")

var divemail= document.createElement("div");
divemail.setAttribute("class","col-6 ");
var semail= document.createElement("div");
semail.setAttribute("class","form-group ");

var lsemail= document.createElement("label");
lsemail.setAttribute("for","email");
lsemail.innerHTML="Email";
var isemail= document.createElement("input");
isemail.setAttribute("type","text")
isemail.setAttribute("id","email")
isemail.setAttribute("name","email")
isemail.setAttribute("class","form-control");


var divmobile= document.createElement("div");
divmobile.setAttribute("class","col-6 ");
var smobile= document.createElement("div");
smobile.setAttribute("class","form-group");

var lsmobile= document.createElement("label");
lsmobile.setAttribute("for","mobile");
lsmobile.innerHTML="Mobile";
var ismobile= document.createElement("input");
ismobile.setAttribute("type","text")
ismobile.setAttribute("id","mobile")
ismobile.setAttribute("name","mobile")
ismobile.setAttribute("class","form-control");

column.append(secondDiv);
secondDiv.append(divemail,divmobile)
divemail.append(semail);
semail.append(lsemail,isemail);
divmobile.append(smobile);
smobile.append(lsmobile,ismobile);

var thirdDiv=document.createElement("div")
thirdDiv.setAttribute("class","form-group")
var lsubject=document.createElement("label");
lsubject.innerHTML="Subject";
var isubject = document.createElement("input");
isubject.setAttribute("type","text");
isubject.setAttribute("class","form-control");
column.append(thirdDiv);
thirdDiv.append(lsubject,isubject);

var forthDiv=document.createElement("div")
forthDiv.setAttribute("class","form-group")
var lmessage=document.createElement("label");
lmessage.innerHTML="Message";
var imessage = document.createElement("textarea");
imessage.setAttribute("rows","6");
imessage.setAttribute("class","form-control");
column.append(forthDiv);
thirdDiv.append(lmessage,imessage);

var fifthDiv= document.createElement("div");
fifthDiv.setAttribute("class","form-group");
var buton = document.createElement("button");
buton.setAttribute("class","btn btn-primary form-control");
buton.setAttribute("type","submit");
buton.innerHTML="Submit"
column.append(fifthDiv);
fifthDiv.append(buton);

document.body.append(element);
element.append(column);
