document.querySelectorAll("td[class*='table-of-contents']> a")[2]
//gives all names but subheading is lost this way



document.querySelectorAll('h2.table-of-contents__title')[1].parentElement.parentElement.nextElementSibling.querySelectorAll("td[class*='table-of-contents']> a")[2]
//found h2 subheading element
//then its grandparent
//its next sibling is subcontents
//for that we applied QSelector --- awesome!

//todo
jus write .href to get url
fetch times also
render in html liked linkdin

