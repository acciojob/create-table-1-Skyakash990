function insert_Row() {
    //Write your code here
  let sampleTable=document.getElementById("sampleTable");
	let tr=document.createElement("tr");
	let td1=document.createElement("td");
	let td2=document.createElement("td");
	td1.innerText="New Cell1";
	td2.innerText="New Cell2";
	
	tr.append(td1,td2);
	// sampleTable.tBodies[0].insertBefore(tr, sampleTable.rows[0]);
  
}
