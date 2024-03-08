(function(){

    const template = document.createElement("template");
    template.id = "customer-review-template";
    template.innerHTML= `
    <style>
    #review_img>img{
        width:10vh;
        height:10vh;
    }  
    </style>
    <div id="review_box">
    <picture id="review_img" >
        <img src="">
    </picture>
    <h1 id="review_name"></h1>
    <h2 id="review_job"></h2>
    <p id="review_content"></p>
    <button type="button" onclick="prev()">Prev. Review</button>
    <button type="button" onclick="next()">Next Review</button>
    </div>

    `;
    document.body.appendChild(template);
  
  
  
    customElements.define("customer-review",
       class CustomerReview extends HTMLElement{
      constructor() {
            super();
            this.attachShadow({ mode: "open" });
                 }
  
      connectedCallback() {
              const tmpl = document.getElementById ("customer-review-template");
              const node = document.importNode(tmpl.content, true);
              this.shadowRoot.appendChild(node);
            }
               });
  
  
  })();


  const reviewList= [
    {
        id:0,
        name:"John",
        img:"/images/FromMyPicture.png",
        job:"Developer",
        review:"You will soon achieve perfection... \
                 in your ability to make mistakes."
    }
        ,
    {
        id:1,
        name:"John",
        img:"/images/HardAtWork.png",
        job:"Developer",
        review:"Courage is not simply one of the virtues, \
                    but the form of every virtue at the testing point."
    
    }
    ,
    {
        id:2,
        name:"John",
        img:"/images/prof1.png",
        job:"Developer",
        review:"Patience is your alley at the moment. Don’t worry!"
    
    }
   
    ];
  function loadReview(reviewNumber){
         
    let myReview = reviewList[reviewNumber];
    window.reviewShowing = reviewNumber; // caching off which review is showing

    let custom = document.querySelector("customer-review");

    //Get document areas
    let reviewPicture = document.querySelector("customer-review").shadowRoot.querySelector("#review_img>img"),
        reviewName = document.querySelector("customer-review").shadowRoot.querySelector("#review_name"),
        reviewJob = document.querySelector("customer-review").shadowRoot.querySelector("#review_job"),
        reviewContent = document.querySelector("customer-review").shadowRoot.querySelector("#review_content");

    reviewPicture.src = myReview.img;
    reviewName.textContent = myReview.name;
    reviewJob.textContent = myReview.job;
    reviewContent.textContent = myReview.review;
}

function next(){
    if(window.reviewShowing == undefined){
        window.reviewShowing = 0;
    }

    window.reviewShowing = (window.reviewShowing < reviewList.length-1)? window.reviewShowing +1: 0;
    loadReview(window.reviewShowing);
}

function prev(){
    if(window.reviewShowing == undefined){
        window.reviewShowing = 0;
    }

    window.reviewShowing = (window.reviewShowing > 0)? window.reviewShowing - 1: reviewList.length - 1;
    loadReview(window.reviewShowing);
}

// Calling it to display initially
loadReview(0);