const discussContainer = document.getElementById('discuss-container');
const markContainer = document.getElementById('mark-post')
const latestPostContainer = document.getElementById('latest-post-container');


const allPosts = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
  const data = await res.json();
  const info = data.posts;
  displayInfo(info);
}

const displayInfo = (info) => {
  console.log(info);



  info.forEach(post => {

    const infoCard = document.createElement('div');
    infoCard.classList = 'bg-[#797DFC1A] rounded-3xl mb-10';

    console.log(post);

    if (post.isActive) {
      infoCard.innerHTML = `
 <div class="flex flex-col lg:flex-row p-10 gap-6">

     <div class="avatar relative">
                  <div id="status" class="w-4 h-4 bg-green-600 absolute top-[-4px] left-[70px] lg:top-[-4px] lg:right-[-4px]   rounded-full"></div>
                  <div class="w-20 h-20 rounded-xl">
                    <img src="${post.image}" />
                  </div>
                </div>
             
                
               <div class="w-full">
                  <div class="flex justify-start  gap-5 font-medium font-inter">
                    <div class="flex flex-col gap-2 lg:gap-5 lg:flex-row">
                    <div>
                      #${post.category}
                    </div>
                    <div><span>Author :</span>
                      ${post?.author?.name || 'Unknown'}
                    </div>
                    </div>
                  </div>
                  <div class="font-mulish my-3 text-left font-bold text-xl">${post.title}
                  </div>
                  <p class="font-inter">${post.description}</p>
                  <hr class="border-dashed border-[1px] border-gray-400 my-3">
                  <div class="flex mt-3 justify-between items-center">
                    <div class="flex gap-3 lg:gap-8 justify-around">
                      <div>
                        <i class="fa-regular fa-message lg:mr-2"></i> <span>${post.comment_count}</span>
                      </div>
                      <div>
                        <i class="fa-solid fa-eye lg:mr-2"></i><span>${post.view_count}</span>
                      </div>
                      <div>
                        <i class="fa-regular fa-clock lg:mr-2"></i> <span>${post.posted_time} min</span>
                      </div>
                    </div>
                    <div>
                      <button onclick="markAsRead(&#34 ${post.title} &#34, '${post.view_count}')" id="mark-as-read" class="mark-read text-white py-1 px-2 rounded-full bg-green-400"><i
                          class="fa-solid fa-envelope"></i></button>
                    </div>

                  </div>

                </div>
              </div>
      `;
    }
    else {

      infoCard.innerHTML = `
 <div class="flex flex-col lg:flex-row p-10 gap-6">

     <div class="avatar relative">
                  <div id="status" class="w-4 h-4 bg-red-600 absolute top-[-4px] left-[70px] lg:top-[-4px] lg:right-[-4px]   rounded-full"></div>
                  <div class="w-20 h-20 rounded-xl">
                    <img src="${post.image}" />
                  </div>
                </div>
             
                
               <div class="w-full">
                  <div class="flex justify-start  gap-5 font-medium font-inter">
                    <div class="flex flex-col gap-2 lg:gap-5 lg:flex-row">
                    <div>
                      #${post.category}
                    </div>
                    <div><span>Author :</span>
                      ${post?.author?.name || 'Unknown'}
                    </div>
                    </div>
                  </div>
                  <div class="font-mulish my-3 text-left font-bold text-xl">${post.title}
                  </div>
                  <p class="font-inter">${post.description}</p>
                  <hr class="border-dashed border-[1px] border-gray-400 my-3">
                  <div class="flex mt-3 justify-between items-center">
                    <div class="flex gap-3 lg:gap-8 justify-around">
                      <div>
                        <i class="fa-regular fa-message lg:mr-2"></i> <span>${post.comment_count}</span>
                      </div>
                      <div>
                        <i class="fa-solid fa-eye lg:mr-2"></i><span>${post.view_count}</span>
                      </div>
                      <div>
                        <i class="fa-regular fa-clock lg:mr-2"></i> <span>${post.posted_time} min</span>
                      </div>
                    </div>
                    <div>
                      <button onclick="markAsRead(&#34 ${post.title} &#34, '${post.view_count}')" id="mark-as-read" class="mark-read text-white py-1 px-2 rounded-full bg-green-400"><i
                          class="fa-solid fa-envelope"></i></button>
                    </div>

                  </div>

                </div>
              </div>
      `;
    }





    discussContainer.appendChild(infoCard);

  })
}


const markAsRead = (title, view) => {

  const mark = document.createElement('div');
  mark.classList = 'px-5'
  mark.innerHTML = `
  <div class="flex my-4  mx-auto rounded-xl pl-2 py-2 justify-between bg-white">
                    <div class="font-mulish my-3 text-left font-bold text-xl">${title}</div>
                    <div class="flex items-center gap-2 pr-2">
                      <i class="fa-solid fa-eye"></i><span>${view}</span>
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
  readCount.innerText = ('${count}');
}











// // letest post section

const letestPosts = async () => {
  const res = await fetch(" https://openapi.programming-hero.com/api/retro-forum/latest-posts");
  const data = await res.json();
  console.log(data)
  displaydata(data);
}

const displaydata = (data) => {
  // console.log(data)
  // step-1: get the container


  data.forEach(post => {
    // // console.log(post)
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