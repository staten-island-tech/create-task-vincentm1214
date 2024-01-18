const DOMSelectors={
    body:document.querySelector(".body"),
    card:document.querySelector('#card'),
    app:document.querySelector('.container'),
    org:document.querySelector('#name'),
    ger:document.querySelector('#legs'),
    heh:document.querySelector('#diet'),
    lol:document.querySelector('#native'),
    man:document.querySelector('#pet'),
    wom:document.querySelector('#hostile'),
    zee:document.querySelector('#image'),
    button:document.querySelectorAll('.button')
  }


import '../style/style.css'
const animals=[
    {
    name:"Koala",
    legs:4,
    diet:"Herbivore",
    native:"Australia",
    pet:false,
    hostile:false,
    image:'https://i.pinimg.com/736x/61/64/fc/6164fc2a6b55a6b8ed662280a073459c.jpg',
    },    
    {
    name:"Cat",
    legs:4,
    diet:"Carnivore",
    native:"Africa",
    pet:true,
    hostile:true,
    image:'https://preview.redd.it/funniest-cat-pictures-you-have-v0-cvk0vuc0hj5a1.jpg?width=640&crop=smart&auto=webp&s=15b35fec711a4ad3fa71dad7d7850d0299c59367',
    },    
    {
    name:"Orangutan",
    legs:2,
    diet:"Omnivore",
    native:"Asia",
    pet:false,
    hostile:false,
    image:'https://media.istockphoto.com/id/1044930024/photo/portrait-smiling-orangutans-sit-for-the-photographer-take-a-picture.jpg?s=612x612&w=0&k=20&c=vFPMKvra9HcUd41alaOEd6bstR4S4tPOrZyuDXaEtrc=',
    },
    {
    name:"Bunny",
    legs:4,
    diet:"Herbivore",
    native:"Europe",
    pet:"Legal",
    hostile:false,
    image:'https://static.vecteezy.com/system/resources/previews/027/121/847/non_2x/funny-rabbits-portrait-free-photo.jpg',
    },    
    {
    name:"Bird",
    legs:2,
    diet:"Omnivore",
    native:"Africa",
    pet:"Legal",
    hostile:false,
    image:'https://i.pinimg.com/originals/7f/a3/8d/7fa38d40f6534d104e7b63b2d9d63e7b.jpg',
    },    
    {
    name:"Panda",
    legs:4,
    diet:"Herbivore",
    native:"Asia",
    pet:"Illegal",
    hostile:false,
    image:'https://i.pinimg.com/736x/6d/0f/f0/6d0ff08bfabffe7cb7b71612d2f4b04d.jpg',
    },
        {
    name:"Hamster",
    legs:2,
    diet:"Herbivore",
    native:"Australia",
    pet:"Legal",
    hostile:false,
    image:'https://i.kym-cdn.com/news_feeds/icons/mobile/000/035/914/6d3.jpg',
    },    
    {
    name:"Platypus",
    legs:4,
    diet:"Carnivore",
    native:"Australia",
    pet:"Illegal",
    hostile:false,
    image:'https://i.pinimg.com/736x/c3/fb/2b/c3fb2b4136334c8fff20ece855a30d0a.jpg',
    },    
    {
    name:"Otter",
    legs:4,
    diet:"Carnivore",
    native:"North America",
    pet:"Illegal",
    hostile:true,
    image:'https://www.somepets.com/wp-content/uploads/2013/08/sea-otter.jpg',
    },
    {
    name:"Raccoon",
    legs:4,
    diet:"Omnivore",
    native:"North America",
    pet:"Illegal",
    hostile:false,
    image:'https://i.redd.it/npp5keyp0e881.jpg',
    },    
    {
    name:"Capybara",
    legs:4,
    diet:"Herbivore",
    native:"South America",
    pet:"Legal",
    hostile:false,
    image:'https://preview.redd.it/what-the-handsome-face-v0-85zx1e5m1aja1.jpg?width=640&crop=smart&auto=webp&s=caea1329730048e677695040ac102b76dfd16bf5',
    },    
    {
    name:"Penguin",
    legs:2,
    diet:"Carnivore",
    native:"Antartica",
    pet:"Illegal",
    hostile:false,
    image:'https://media.istockphoto.com/id/472999850/photo/cute-closeup-of-chinstrap-penguin.jpg?s=612x612&w=0&k=20&c=kTEGYV5kBnon5MQbuwgVrFzI8UbT4NCbqU03LxmeS48=',
    },
    {
    name:"Dog",
    legs:4,
    diet:"Carnivore",
    native:"North America",
    pet:"Legal",
    hostile:false,
    image:'https://i.pinimg.com/564x/7f/26/e7/7f26e71b2c84e6b16d4f6d3fd8a58bca.jpg',
    },
    {
    name:"Red Panda",
    legs:4,
    diet:"Omnivore",
    native:"Asia",
    pet:"Illegal",
    hostile:false,
    image:'https://i.pinimg.com/originals/ce/4b/a2/ce4ba2c0951482656df469b2eaf1ae00.jpg',
    },
    {
    name:"Blobfish",
    legs:0,
    diet:"Carnivore",
    native:"Australia",
    pet:"Illegal",
    hostile:false,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQveWkO3USLMQQIe8zpR0lMHYs1FWoKwgPLiFRPlC2UkCOFUj2f-DAHSuOjFLAvM_VAP8M&usqp=CAU',
    }
    ]

    function makecard(animals) {
        document.querySelector(".container").insertAdjacentHTML(
            "beforeend",
        `<div class="laquestion">
             <h2 class="name">${animals.name}</h2>
             <h3 class="diet">Diet: ${animals.diet}</h3>
             <h3 class="diet">Can you own it: ${animals.pet}</h3>
             <h3 class="diet">Diet: ${animals.hostile}</h3>
             <h3 class="diet">Diet: ${animals.legs}</h3>
             <img src="${animals.image}" class="image">`
           )
        };  
         
animals.forEach(makecard);