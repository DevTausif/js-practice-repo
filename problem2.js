// subjects
 var math=75.25;
 console.log(math);


 var bio=65;
 console.log(bio);
 

 var chem=80;
 console.log(chem);

 var phy=35.45;
 console.log(phy);

 var bang=99.50;
 console.log(bang);

 var subjects=5;


 var totalMarks= math + bio + chem +phy +bang;
 console.log(totalMarks);

 var avgMarks = totalMarks / subjects;
 console.log(avgMarks);

// 2 decimal
avgMarks=avgMarks.toFixed(2);
avgMarks=parseFloat(avgMarks);
console.log(avgMarks);