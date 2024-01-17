const DOMSelectors={
    body:document.querySelector(".body"),
    card:document.querySelector('#card'),
    app:document.querySelector('#container'),
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
    diet:"herbivore",
    native:"Australia",
    pet:false,
    hostile:false,
    image:'https://i.pinimg.com/736x/61/64/fc/6164fc2a6b55a6b8ed662280a073459c.jpg',
    },    
    {
    name:"Cat",
    legs:4,
    diet:"carnivore",
    native:"Africa",
    pet:true,
    hostile:true,
    image:'https://preview.redd.it/funniest-cat-pictures-you-have-v0-cvk0vuc0hj5a1.jpg?width=640&crop=smart&auto=webp&s=15b35fec711a4ad3fa71dad7d7850d0299c59367',
    },    
    {
    name:"Orangutan",
    legs:2,
    diet:"omnivore",
    native:"Asia",
    pet:false,
    hostile:false,
    image:'https://i.ytimg.com/vi/ERTrOwEb5M8/maxresdefault.jpg',
    },
    {
    name:"Bunny",
    legs:4,
    diet:"herbivore",
    native:"Europe",
    pet:true,
    hostile:false,
    image:'https://static.vecteezy.com/system/resources/previews/027/121/847/non_2x/funny-rabbits-portrait-free-photo.jpg',
    },    
    {
    name:"Bird",
    legs:2,
    diet:"omnivore",
    native:"Africa",
    pet:true,
    hostile:false,
    image:'https://i.pinimg.com/originals/7f/a3/8d/7fa38d40f6534d104e7b63b2d9d63e7b.jpg',
    },    
    {
    name:"Panda",
    legs:4,
    diet:"herbivore",
    native:"Asia",
    pet:false,
    hostile:false,
    image:'https://i.pinimg.com/736x/6d/0f/f0/6d0ff08bfabffe7cb7b71612d2f4b04d.jpg',
    },
        {
    name:"Hamster",
    legs:2,
    diet:"herbivore",
    native:"Australia",
    pet:true,
    hostile:false,
    image:'https://i.kym-cdn.com/news_feeds/icons/mobile/000/035/914/6d3.jpg',
    },    
    {
    name:"Platypus",
    legs:4,
    diet:"carnivore",
    native:"Australia",
    pet:false,
    hostile:false,
    image:'https://i.pinimg.com/736x/c3/fb/2b/c3fb2b4136334c8fff20ece855a30d0a.jpg',
    },    
    {
    name:"Otter",
    legs:4,
    diet:"carnivore",
    native:"North America",
    pet:false,
    hostile:true,
    image:'https://www.somepets.com/wp-content/uploads/2013/08/sea-otter.jpg',
    },
    {
    name:"Raccoon",
    legs:4,
    diet:"omnivore",
    native:"North America",
    pet:false,
    hostile:false,
    image:'https://i.redd.it/npp5keyp0e881.jpg',
    },    
    {
    name:"Capybara",
    legs:4,
    diet:"herbivore",
    native:"South America",
    pet:true,
    hostile:false,
    image:'https://preview.redd.it/what-the-handsome-face-v0-85zx1e5m1aja1.jpg?width=640&crop=smart&auto=webp&s=caea1329730048e677695040ac102b76dfd16bf5',
    },    
    {
    name:"Penguin",
    legs:2,
    diet:"carnivore",
    native:"Antartica",
    pet:false,
    hostile:false,
    image:'https://media.istockphoto.com/id/472999850/photo/cute-closeup-of-chinstrap-penguin.jpg?s=612x612&w=0&k=20&c=kTEGYV5kBnon5MQbuwgVrFzI8UbT4NCbqU03LxmeS48=',
    }    
    ]

    function makecard(animals) {
        DOMSelectors.app.
        animals.forEach((animal)=> DOMSelectors.card.insertAdjacentHTML(
           "beforeend",
        `<div class="laquestion">
             <h2 class="name">${animal.name}</h2>
             <h3 class="diet">${animal.diet}</h3>`
           )
         )
        };

console.log(animals);