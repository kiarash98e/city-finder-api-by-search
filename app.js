_GetCityFinder()
.then((country)=>{
    for (const key in country) {
        appCity({
            city:`${country[key]["city"]}`,
            state:`${country[key]["state"]}`,
        })
    }

})
.catch(err=>{
    console.log(err)
})

function changValue() {
    let input, filter, ul, li, a, i, txtValue
    input = document.getElementById('search-city')
    filter = input.value.toUpperCase()
    ul = document.getElementById("content")
    li = ul.getElementsByTagName('li')
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("span")[0]
      txtValue = a.innerHTML || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = ""
        a.style.background = "#70f"
      } else {
        li[i].style.display = "none";
        a.style.background = "#fff";
      }
    }
  }