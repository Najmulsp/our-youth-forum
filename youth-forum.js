const allPosts = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await res.json();
    const info = data.posts;
    displayInfo(info);
}
const displayInfo = (info) =>{
      console.log(info);
      info.forEach(post => {
        const discussContainer =document.getElementById('discuss-container');
        const infoCard = document.createElement('div');
        infoCard.classList = 'bg-[#797DFC1A] rounded-3xl mb-10';
    
        console.log(post);
        if(post.isActive){
            infoCard.innerHTML=`
            <div class="bg-orange-200  flex flex-col lg:flex-row justify-between  rounded-2xl ">
            <div class="w-16 mx-auto m-6 lg:ml-6"> <img class="mx-auto rounded-xl" src="${post.image}" alt=""></div>
            <div class="flex-1 p-10 space-y-4">
                <h2 class="font-semibold"># ${post.category} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<span>Authore: &nbsp ${post?.author?.name}</span></h2> 
                <h1 class="text-xl font-bold">${post.title}</h1>
                <p>${post.description}
                </p>
                <div class="divider"></div>

      <!-- this is icon section -->
            <div class="flex items-center gap-6">
                <div class="flex-1 flex gap-6">
                    <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                        <img class="w-10" src="images/message1.svg" alt="">
                        <span class="lg:mr-8">${post.comment_count}</span>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                        <img class="w-10" src="images/eye.svg" alt="">
                        <span class="lg:mr-8">${post.view_count}</span>
                    </div>
                    <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                        <img class="w-10" src="images/clock.png" alt="">
                        <span class="lg:mr-8"> ${post.posted_time} min</span>
                    </div>
                </div>
              <div class=" w-10">
                    <img id="message" onclick="showName(&#34 ${post.title} &#34, '${post.view_count}')" class="w-10" src="images/message.svg" alt="">
              </div>
            </div>
            `
        }
        else{
            infoCard.innerHTML=`
                <div class="bg-orange-200  flex flex-col lg:flex-row justify-between  rounded-2xl ">
                <div class="w-16 mx-auto m-6 lg:ml-6"> <img class="mx-auto rounded-lg" src="${post.image}" alt=""></div>
                <div class="flex-1 p-10 space-y-4">
                    <h2 class="font-semibold"># ${post.category} &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp<span>Authore: &nbsp ${post?.author?.name}</span></h2> 
                    <h1 class="text-xl font-bold">${post.title}</h1>
                    <p>${post.description}
                    </p>
                    <div class="divider"></div>
    
          <!-- this is icon section -->
                <div class="flex items-center gap-6">
                    <div class="flex-1 flex gap-6">
                        <div class="flex flex-col lg:flex-row items-center gap-2 lg:gap-4">
                            <img class="w-10" src="images/message1.svg" alt="">
                            <span class="lg:mr-8">${post.comment_count}</span>
                        </div>
                        <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                            <img class="w-10" src="images/eye.svg" alt="">
                            <span class="lg:mr-8">${post.view_count}</span>
                        </div>
                        <div class="flex flex-col lg:flex-row gap-2 lg:gap-4 items-center">
                            <img class="w-10" src="images/clock.png" alt="">
                            <span class="lg:mr-8"> ${post.posted_time} min</span>
                        </div>
                    </div>
                  <div class=" w-10">
                        <img id="message" onclick="showName(&#34 ${post.title} &#34, '${post.view_count}')" class="w-10" src="images/message.svg" alt="">
                  </div>
                </div>
                `
          }
          discussContainer.appendChild(infoCard);
      })
     
  }


    //   mark as read section
    const showName =(title,view) =>{
    const markContainer =document.getElementById('mark-post');
    const mark = document.createElement('div');
         mark.classList = ''
             mark.innerHTML = `
        <div class="flex my-4 px-6 mx-auto rounded-xl pl-2 py-2 justify-between bg-white">
                <div class=" my-3 text-left font-bold text-xl">${title}</div>
                    <div class="flex items-center gap-2 pr-2">
                    <img class="w-10" src="images/eye.svg" alt="">
                    <span>${view}</span>
                </div>
         </div>
        `
  markContainer.appendChild(mark);
  getCount();
}

let count = 0;
const getCount = () => {
  count++;
  const readCount = document.getElementById('read-count');
  readCount.innerText = count;
}



 // letest post section

const letestPosts = async () => {
    const res = await fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts");
    const data = await res.json();
    console.log(data)
    displaydata(data);
  }

  const displaydata = (data) => {
    // console.log(data)
    // step-1: get the container
  const latestPostContainer =document.getElementById('latest-post-container');
  
    data.forEach(post => {
       // console.log(post)
      // step-2: create a div as post container
      const postCard = document.createElement('div');
      postCard.classList = 'card w-full bg-base-100 shadow-xl';
  
      // step-3: set the inner html
      postCard.innerHTML = `
        <figure><img src="${post.cover_image}" alt="Shoes" /></figure>
            <div class="card-body">
                <div class="flex gap-6">
                    <img src="images/Frame.svg" alt="">
                    <p>${post.author?.posted_date || 'No Publish Date'}</p>
                </div>
                    <h1 class="font-semibold">${post.title}</h1>
                    <p>${post.description}</p>
  
                    <div class="flex gap-6">
                      <img class="w-12 rounded-full" src="${post.profile_image}" alt="">
                      <div>
                          <h3>${post.author.name}</h3>
  
                          <p>${post.author?.designation || 'Unknown'}</p>
                    </div>
                </div>
             </div>
       `;
      //  step-4: append child
      latestPostContainer.appendChild(postCard);
  
    })
  }
  
  letestPosts();

  allPosts();