
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
 })  



//task 2 - getting name, handle, postdata

function hasUsernameTestId(element) {
  const testId = element.getAttribute('data-testid')
  if (testId && testId === 'User-Name') {
    return true
  } else {
    return false
  }
}


let xarrvik = []
document.querySelectorAll("article").forEach(eachArt => {
    eachArt.querySelectorAll("*").forEach(u => {//get all nested, and check if it ahs aria
       if(hasUsernameTestId(u)){
            //after finding that elem, i thought i have to locate nested elems again but..
            //but thankully, innerText simply clubs all inner texts anywhere within by newline
            //so just have to parse it
            const [name, twitterHandle, , postDate] = u.innerText.split(/\n/);
           xarrvik.push({name, twitterHandle, postDate}) //can also push [name, handle, date] i.e in arr format, but obj{} format is nice
            
         //TODO: panilopani, get post's URL also. there are 3 a tags. 1 is our post url. other 2 useless userAccountURL
         u.querySelectorAll('a').forEach(xx => console.log(xx.href)) //ToDO: u can seperate that url by "check for substr : 'status' "

       
       }
    })
 })


