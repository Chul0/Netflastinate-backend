'use strict';
const models = require('../models')

module.exports = {
  up: async (queryInterface, Sequelize) => {
   const childrenFamilyMovies = [
     {
       title: "Despicable Me",
       image: "https://images-na.ssl-images-amazon.com/images/I/7186nuZR9GL._RI_.jpg",
       plot: "When a criminal mastermind uses a trio of orphan girls as pawns for a grand scheme, he finds their love is profoundly changing him for the better.",
       videoUrl: "https://www.youtube.com/embed/zzCZ1W_CUoI"
     },
     {
       title: "My Octopus Teacher",
       image: "https://live.staticflickr.com/65535/50822862058_8b765b8a35_b.jpg",
       plot: "A diver swims with an octopus that lives in a kelp forest off the coast of South Africa.",
       videoUrl: "https://www.youtube.com/embed/3s0LTDhqe5A"
     },
     {
       title: "We Can Be Heroes",
       image: "https://i.pinimg.com/originals/ab/0b/61/ab0b613de1100d7e6281ec593f86b05e.png",
       plot: "When alien invaders capture the Earth's superheroes, their kids must learn to work together to save their parents- and the planet.",
       videoUrl: "https://www.youtube.com/embed/g9O2YTtdaZA"
     },
     {
       title: "Frozen",
       image: "https://images-na.ssl-images-amazon.com/images/I/81zbSEXnDOL.jpg",
       plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
       videoUrl: "https://www.youtube.com/embed/TbQm5doF_Uc"
     },
   ]

   const horrorMovies = [
    {
      title: "Zombie Land",
      image: "https://flxt.tmsimg.com/assets/p3532040_p_v10_al.jpg",
      plot: "A shy student trying to reach his family in Ohio, a gun-toting bruiser in search or the last Twinkie and a pair of sisters striving to get to an amusement park join forces in a trek across a zombie-filled America.",
      videoUrl: "https://www.youtube.com/embed/8m9EVP8X7N8"
    },
    {
      title: "The Conjuring",
      image: "https://images.moviesanywhere.com/64428a3af2258a8186ca97896f1fb060/de21bfe7-e298-4210-bdef-bfac8b2c53d0.jpg",
      plot: "Paranormal investigators Ed and Lorraine Warren work to help a family terrorized by a dark presence in their farmhouse.",
      videoUrl: "https://www.youtube.com/embed/h9Q4zZS2v1k"
    },
    {
      title: "The Possession",
      image: "https://resizing.flixster.com/W1EUg39FrWevQ5advWyQTkk42Ww=/206x305/v2/https://flxt.tmsimg.com/assets/p8640390_p_v10_aa.jpg",
      plot: "A young girl buys an antique box at a yard sale, unaware that inside the collectible lives a malicious ancient spirit. The girl's father teams with his ex-wife to find a way to end the curse upon their child.",
      videoUrl: "https://www.youtube.com/embed/WVjggWQRlQQ"
    },
    {
      title: "Insidious",
      image: "https://upload.wikimedia.org/wikipedia/en/2/2d/Insidious_poster.jpg",
      plot: "A family looks to prevent evil spirits from trapping their comatose child in a realm called The Further.",
      videoUrl: "https://www.youtube.com/embed/zuZnRUcoWos"
    },
   ]
   const romanceMovies = [
    {
      title: "Friends with Benefits",
      image: "https://upload.wikimedia.org/wikipedia/en/4/4e/Friends_with_benefits_poster.jpg",
      plot: "A young man and woman decide to take their friendship to the next level without becoming a couple, but soon discover that adding sex only leads to complications.",
      videoUrl: "https://www.youtube.com/embed/jHRvz_fLD5w"
    },
    {
      title: "Brokeback Mountain",
      image: "https://upload.wikimedia.org/wikipedia/en/a/a1/Brokeback_mountain.jpg",
      plot: "Ennis and Jack are two shepherds who develop a sexual and emotional relationship. Their relationship becomes complicated when both of them get married to their respective girlfriends.",
      videoUrl: "https://www.youtube.com/embed/U5D1iU5KnqQ"
    },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      image: "https://images-na.ssl-images-amazon.com/images/I/71G7AybM3qL._SL1500_.jpg",
      plot: "When their relationship turns sour, a couple undergoes a medical procedure to have each other erased from their memories.",
      videoUrl: "https://www.youtube.com/embed/yE-f1alkq9I"
    },
    {
      title: "The Holiday ",
      image: "https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg",
      plot: "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
      videoUrl: "https://www.youtube.com/embed/BDi5zH18vxU"
    },
   ]
   // 1. Create an array that contains movies
   // 2. find a genre
   // 3. Loop through to create/add movies, Association will fill the genreId.
   const childrenFamily = await models.genre.findOne({
     where:{
       name: "Children & Family"
     }
   })
   for(let i=0; i < childrenFamilyMovies.length; i++){
     await childrenFamily.createMovie(childrenFamilyMovies[i])
   }

   const horror = await models.genre.findOne({
     where:{
       name: "Horror"
     }
   })
   for(let i=0; i < horrorMovies.length; i++){
     await horror.createMovie(horrorMovies[i])
   }
   
   const romance = await models.genre.findOne({
     where:{
       name: "Romance"
     }
   })
   for(let i=0; i < romanceMovies.length; i++){
     await romance.createMovie(romanceMovies[i])
   }

  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
