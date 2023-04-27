
//takes one elem, and checks
function hasLikesLabel(element) {
  const ariaLabel = element.getAttribute('aria-label')
  if (ariaLabel && ariaLabel.includes('likes')) {
    return true
  } else {
    return false
  }
}


document.querySelectorAll("article").forEach(eachArt => {
    eachArt.querySelectorAll("*").forEach(u => {//get all nested, and check if it ahs aria
       if(hasLikesLabel(u)){
                let twitLikes = parseInt(u.ariaLabel.match(/(\d+) likes/)[1]);
                if(twitLikes > 2500) eachArt.style.backgroundColor = 'lightgreen'
        }
    })
// })  
