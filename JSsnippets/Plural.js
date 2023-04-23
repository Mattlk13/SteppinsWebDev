// document.querySelectorAll("td[class*='table-of-contents']> a")[2]
// //gives all anchors in one big-list but subheading-wise categoriztn is lost this way



// document.querySelectorAll('h2.table-of-contents__title')[1].parentElement.parentElement.nextElementSibling.querySelectorAll("td[class*='table-of-contents']> a")[2]
// //found h2 subheading element
// //then its grandparent
// //its next sibling is subcontents
// //for that we applied QSelector --- awesome!

// //todo
// jus write .href to get url
// fetch times also
// render in html liked linkdin
courseData = {}
document.querySelectorAll('h2.table-of-contents__title').forEach((x) => {
	anchorsInThisSection = [];
	x.parentElement.parentElement.nextElementSibling.querySelectorAll("td[class*='table-of-contents']> a").forEach((y) => {
		anchorsInThisSection.push([y.innerText, y.href])
	})

    courseData[x.innerText] = anchorsInThisSection;    
});
console.log(JSON.stringify(courseData)) //if u forget htis stringify! oh boy! had a hard time figuring out simplying logging without this.. u get all "Array" in output if u don't use it
