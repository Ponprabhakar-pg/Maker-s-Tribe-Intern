var com_name=["Maker'sTribe","Chennai Freelancers Club","Trekking Community","IoT Community(IFA)","Cycling","Kafka","Art & Crafts","Dev Community","3-D Printing","Job Scanner","Skill Development","Readers community","Tamil Mandram","Startup Community","Writers community","Lifestyle","Elastic Search","Open Source Community","Story Telling","AI & ML","Digital Marketing","Cyber Security","Networking","Graphic Designing","Musical Jam","Travel Diaries"]
var com_details=["A community platform for Creators and Innovators.","Come meet fellow Freelancers, network and share the opportunities and stories. Aspiring Freelancers are also Welcome!","Rock your trek, with Right people.","A community that can make any device smart!","Let's fall in love with the chains that sets us free!","","Create and Innovate with us!","Meet the Digital Gods here!","Let's Bring it Real!","A perfect place to scan the perfect Candidate and to be scanned by employer.","You are not born with Skills, but you can acquire it!","Read like breathing air, to Fill up and Live.","Ulagathin Mudhan mozhiyai Uyirena kapom!","Kick-off your entrepreneurial journey!","","Let's not compromise in making our life a masterpiece!","","Contribute, Collaborate and Create","We have all got a story, what's yours?","Welcome to the era of brainy machines!","","Be a part of making the internet world safer!","A community of networking professionals and enthusiasts!","Community that makes communication easier with visual designs!","Music is Magic to the ears! Come spend the evening and enjoy the performance of the band.","Listen to exciting Travel stories and share your experience as well. Inspire and get inspired to pack your bags!"]
var chck=false
console.log(com_name.length)
console.log(com_details[0])
var com_cont=document.getElementById("community")

if(com_name.length%3==0){
    var i=0
    for(i=0;i<com_name.length;i++){
        com_cont.innerHTML+=`<div class="row"><div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i]+`</h5>
        <p class="card-text txt">`+com_details[i]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+1]+`</h5>
        <p class="card-text txt">`+com_details[i+1]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+2]+`</h5>
        <p class="card-text txt">`+com_details[i+2]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
    </div>`
        i=i+3
    }
}
else if(com_name.length%3==2){
    var i=0
    for(i=0;i<com_name.length-2;i++){
        com_cont.innerHTML+=`<div class="row"><div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i]+`</h5>
        <p class="card-text txt">`+com_details[i]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+1]+`</h5>
        <p class="card-text txt">`+com_details[i+1]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+2]+`</h5>
        <p class="card-text txt">`+com_details[i+2]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
    </div>`
        i=i+3
    }
    com_cont.innerHTML+=`<div class="row"><div class="col-md">
    <div class="card bg-dark" style="width: 18rem;">
    <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title txt">`+com_name[i]+`</h5>
    <p class="card-text txt">`+com_details[i]+`</p>
    <button class="btn btn-success pull-right">< < Join > ></button>
  </div></div><br></div>
  <div class="col-md">
    <div class="card bg-dark" style="width: 18rem;">
    <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title txt">`+com_name[i+1]+`</h5>
    <p class="card-text txt">`+com_details[i+1]+`</p>
    <button class="btn btn-success pull-right">< < Join > ></button>
  </div></div><br></div>`

}
else{
    var i=0
    for(i=0;i<com_name.length-2;i++){
        com_cont.innerHTML+=`<div class="row"><div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i]+`</h5>
        <p class="card-text txt">`+com_details[i]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+1]+`</h5>
        <p class="card-text txt">`+com_details[i+1]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
      <div class="col-md">
        <div class="card bg-dark" style="width: 18rem;">
        <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title txt">`+com_name[i+2]+`</h5>
        <p class="card-text txt">`+com_details[i+2]+`</p>
        <button class="btn btn-success pull-right">< < Join > ></button>
      </div></div><br></div>
    </div>`
        i=i+3
    }
    com_cont.innerHTML+=`<div class="row"><div class="col-md">
    <div class="card bg-dark" style="width: 18rem;">
    <img src="images/makers tribe/mtj.png" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title txt">`+com_name[i]+`</h5>
    <p class="card-text txt">`+com_details[i]+`</p>
    <button class="btn btn-success pull-right">< < Join > ></button>
  </div></div><br></div>`
}
