let url="https://kontests.net/api/v1/all"
let response=fetch(url)
response.then((contest)=>{
  return contest.json()
}).then((contest)=>{
  console.log(contest)
  ihtml=" "
  for(let item in contest){
    console.log(contest[item])
    ihtml+=`<div class="card" style="width: 22rem; margin-top:20px; height:auto">
      <img src="https://assets.website-files.com/5b3dd54182ecae4d1602962f/609e33e18c5000af6211f094_HR%20Hackathon%20-%20Section%202.jpg" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${contest[item].name}</h5>
        <p class="card-text">Status is ${contest[item].status} </p>
        <p class="card-text">Site is<a href="${contest[item].site}">${contest[item].site}</a></p>
         <p class="card-text">Duration is ${contest[item].duration} sec</p>
        <p class="card-text">In 24 hours  ${contest[item].in_24_hours}</p>
        <p>Starts at: ${contest[item].start_time}
        <p>Ends at: ${contest[item].end_time}
        <a href="${contest[item].url}"  target="_blank"  class="btn btn-primary" style="background-color:black;
        border:2px solid black">Visit Contest</a>
      </div>
    </div>`
  }
  cardContainer.innerHTML=ihtml
})
