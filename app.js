const $ = id => document.getElementById(id);

const seedLeaves = [];

function loadLeaves(){
  try { return JSON.parse(localStorage.getItem("hostelLeaves")) || []; }
  catch(e){ return []; }
}
function saveLeaves(leaves){ localStorage.setItem("hostelLeaves", JSON.stringify(leaves)); }

function renderTable(){
  const tbody=$("leaveTable"); tbody.innerHTML="";
  loadLeaves().forEach(x=>{
    const tr=document.createElement("tr");
    tr.innerHTML=`<td>${x.date}</td><td>${x.name}</td><td>${x.type}</td><td>${x.purpose}</td><td class="${x.cls||"remark-approved"}">${x.remarks}</td><td></td>`;
    tbody.appendChild(tr);
  });
}
function updateDays(){
  const a=$("fromDate").value,b=$("toDate").value;
  if(!a||!b){$("totalDays").value="";return}
  const start=new Date(a+"T00:00:00"),end=new Date(b+"T00:00:00");
  const d=Math.round((end-start)/86400000)+1;
  $("totalDays").value=d>0?d:"";
}
function toast(msg){
  const t=$("toast");t.textContent=msg;t.style.display="block";
  clearTimeout(window.__toast);window.__toast=setTimeout(()=>t.style.display="none",2600);
}
$("fromDate").addEventListener("change",updateDays);
$("toDate").addEventListener("change",updateDays);

$("cancelBtn").addEventListener("click",()=>{
  $("leaveType").value="";$("fromDate").value="";$("toDate").value="";
  $("fromTime").value="";$("toTime").value="";$("totalDays").value="";
  $("purpose").value="";$("confirm").checked=false;toast("Form cleared");
});

$("submitBtn").addEventListener("click",()=>{
  const type=$("leaveType").value, from=$("fromDate").value, to=$("toDate").value;
  const purpose=$("purpose").value.trim();
  if(!type||!from||!to||!$("fromTime").value||!$("toTime").value||!purpose||!$("confirm").checked){
    toast("Please complete all fields and confirm the declaration.");return;
  }
  const start=new Date(from+"T00:00:00"),end=new Date(to+"T00:00:00");
  if(end<start){toast("To Date cannot be before From Date.");return}
  const dateLabel=new Date(from+"T00:00:00").toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});
  const leaves=loadLeaves();
  leaves.unshift({date:dateLabel,name:"SAGAR AGRAWAL(26BAI70053)",type,purpose,remarks:"Check-out is done, but check-in is pending",cls:"remark-pending"});
  saveLeaves(leaves);renderTable();toast("Leave application submitted successfully.");
});
renderTable();
