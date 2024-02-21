function create_table(){
    var table = document.createElement("table");
    table.className = "table"
    return table;
}

function create_thead(){
 var thead = document.createElement("thead")
 thead.className = "thead-dark";

 return thead;
}


function trow_tdata(content){
    var td = document.createElement("td");
    td.innerHTML=content;
 return td;
}

function trow_th(throw_content){

    var th = document.createElement("th")
    th.setAttribute("scope","col")
    th.innerHTML = throw_content;

    return th;
}

function table_body(){
    var tbody = document.createElement("tbody");
    return tbody;
}

function trow(){
    var tabelerow = document.createElement("tr")
    return tabelerow;
}
var table1 = create_table();
var table_heading = create_thead();
var trwithhead = trow();
var trow_with_head1 = trow_th("First");
var trow_with_head2 = trow_th("Second");
var tbody = table_body();

var tr1 = trow();
var tr1d1 = trow_tdata("Mark")
var tr1d2 = trow_tdata("otto")

var tr2 = trow();
var tr2d1 = trow_tdata("Jacob")
var tr2d2 = trow_tdata("Thronton")

var tr3 = trow();
var tr3d1 = trow_tdata("Larry")
var tr3d2 = trow_tdata("the Bird")

table1.append(table_heading);
table_heading.append(trwithhead);
trwithhead.append(trow_with_head1);
trwithhead.append(trow_with_head2);
table1.append(tbody)

tbody.append(tr1)
tr1.append(tr1d1)
tr1.append(tr1d2)

tbody.append(tr2)
tr2.append(tr2d1)
tr2.append(tr2d2)

tbody.append(tr3)
tr3.append(tr3d1)
tr3.append(tr3d2)

document.body.append(table1)
