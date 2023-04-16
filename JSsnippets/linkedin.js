const sectionElms = document.querySelectorAll(".classroom-toc-section");

sectionElms.forEach(sectionElm => {

  if ([...sectionElm.classList].some(className => className.includes('collapsed'))) {
//classList is not array type. so use spread. (can also use Array.from() but who will!)

    
  // code to click the button element inside
    const buttonElm = sectionElm.querySelector("button");
    buttonElm.click();
  }
});






// Get the section elements with class 'classroom-toc-section'
sectionElems = document.querySelectorAll('.classroom-toc-section');
const classroomToc = {};

// Iterate through each section element and get the required data
sectionElems.forEach(sectionElem => {
  // Get the inner text of child element with class 'classroom-toc-section__toggle-title'
  const sectionTitle = sectionElem.querySelector('.classroom-toc-section__toggle-title').innerText;
  
  // Get the 'ul' child element of section element
  const ulElem = sectionElem.querySelector('ul');
  const anchorsArr = [];

    
  // Iterate through each 'li' element of 'ul' and get the anchor tag and its child element's inner text
    if(ulElem) {
  const liElems = ulElem.querySelectorAll('li');
  liElems.forEach(liElem => {
    const anchorTag = liElem.querySelector('a');
      
    const cleanAnchor = anchorTag.href.split("?")[0]; //removed all query parameters
      
    const anchorTitle = anchorTag.querySelector('.classroom-toc-item__title').innerText;
    anchorsArr.push([anchorTitle, cleanAnchor]);
    

  });
    }else anchorsArr.push([]);

  classroomToc[sectionTitle] = anchorsArr;


    

    
});

console.log(JSON.stringify(classroomToc));
