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
       image: "https://m.media-amazon.com/images/M/MV5BYmU3OGFhZDItMjhlZi00YjQwLWJlOTItYzlhOGEwNGU3NjIwXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
       plot: "When alien invaders capture the Earth's superheroes, their kids must learn to work together to save their parents- and the planet.",
       videoUrl: "https://www.youtube.com/embed/g9O2YTtdaZA"
     },
     {
       title: "Frozen",
       image: "https://images-na.ssl-images-amazon.com/images/I/81zbSEXnDOL.jpg",
       plot: "When the newly crowned Queen Elsa accidentally uses her power to turn things into ice to curse her home in infinite winter, her sister Anna teams up with a mountain man, his playful reindeer, and a snowman to change the weather condition.",
       videoUrl: "https://www.youtube.com/embed/TbQm5doF_Uc"
     },
     {
      title: "Enola Holmes",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e6/Enola_Holmes_poster.jpeg",
      plot: "When Enola Holmes-Sherlock's teen sister-discovers her mother missing, she sets off to find her, becoming a super-sleuth in her own right as she outwits her famous brother and unravels a dangerous conspiracy around a mysterious young Lord.",
      videoUrl: "https://www.youtube.com/embed/1d0Zf9sXlHk"
    },
    {
      title: "Soul",
      image: "https://thereelbits.com/wp-content/uploads/2020/12/disney-pixar_soul_movie-poster.jpg",
      plot: "After landing the gig of a lifetime, a New York jazz pianist suddenly finds himself trapped in a strange land between Earth and the afterlife.",
      videoUrl: "https://www.youtube.com/embed/xOsLIiBStEs"
    }
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
    {
      title: "#Alive",
      image: "https://i.redd.it/oljcxviktpz41.jpg",
      plot: "The rapid spread of an unknown infection has left an entire city in ungovernable chaos, but one survivor remains alive in isolation. It is his story.",
      videoUrl: "https://www.youtube.com/embed/jQ8CCg1tOqc"
    },
    {
      title: "Hush",
      image: "https://upload.wikimedia.org/wikipedia/en/e/e3/Hush_2016_poster.jpg",
      plot: "A deaf and mute writer who retreated into the woods to live a solitary life must fight for her life in silence when a masked killer appears at her window.",
      videoUrl: "https://www.youtube.com/embed/Q_P8WCbhC6s"
    }
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
      title: "The Holiday",
      image: "https://upload.wikimedia.org/wikipedia/en/6/60/Theholidayposter.jpg",
      plot: "Two women troubled with guy-problems swap homes in each other's countries, where they each meet a local guy and fall in love.",
      videoUrl: "https://www.youtube.com/embed/BDi5zH18vxU"
    },
    {
      title: "Legally Blonde",
      image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559675714-51V4tNgK5LL.jpg?crop=1xw:1xh;center,top",
      plot: "Elle Woods, a fashionable sorority queen, is dumped by her boyfriend. She decides to follow him to law school. While she is there, she figures out that there is more to her than just looks.",
      videoUrl: "https://www.youtube.com/embed/Phm3lpdR3_g"
    },
    {
      title: "About Time",
      image: "https://m.media-amazon.com/images/M/MV5BMTA1ODUzMDA3NzFeQTJeQWpwZ15BbWU3MDgxMTYxNTk@._V1_.jpg",
      plot: "At the age of 21, Tim discovers he can travel in time and change what happens and has happened in his own life. His decision to make his world a better place by getting a girlfriend turns out not to be as easy as you might think.",
      videoUrl: "https://www.youtube.com/embed/T7A810duHvw"
    },
   ]

   const thrillerMovies = [
    {
      title: "Fractured",
      image: "https://m.media-amazon.com/images/M/MV5BZTE0MWE4NzMtMzc4Ny00NWE4LTg2OTQtZmIyNDdhZjdiZmJhXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_.jpg",
      plot: "A couple stops at a gas station, where their 6 y.o. daughter's arm is fractured. They hurry to a hospital. Something strange is going on there. The wife and daughter go missing.",
      videoUrl: "https://www.youtube.com/embed/S8obCz5NSog"
    },
    {
      title: "Sleep Tight",
      image: "https://c8.alamy.com/zooms/6/c988c531a2824d7e8690812c42d05f5b/dt5fe8.jpg",
      plot: "You wake day after day to the comfort and security of your home. But how safe is it really?",
      videoUrl: "https://www.youtube.com/embed/hYAPKHQtdmU"
    },
    {
      title: "Parasite",
      image: "https://i.pinimg.com/474x/16/ba/14/16ba14524e59bfcefc45ed37c751d727.jpg",
      plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      videoUrl: "https://www.youtube.com/embed/5xH0HfJHsaY"
    },
    {
      title: "The Body",
      image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCRLqgdpwCQ6yhuJ8bsIKA0qbvJQyoXOtUyVwR1NOL5IlFZX3u",
      plot: "When the body of a powerful businesswoman disappears from the morgue, the inspector in charge hunts for the truth. But when he questions her husband he realizes that there is much more to the case than meets the eye.",
      videoUrl: "https://www.youtube.com/embed/4f9jIdg4rTQ"
    },
    {
      title: "The Little Things",
      image: "https://m.media-amazon.com/images/M/MV5BOGFlNTdmYWQtM2IzMi00YTY3LTlmMDQtZDI5NGQ5MjYzZmEwXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
      plot: "Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.",
      videoUrl: "https://www.youtube.com/embed/1HZAnkxdYuA"
    },
    {
      title: "Fight Club",
      image: "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR85,0,630,1200_AL_.jpg",
      plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
      videoUrl: "https://www.youtube.com/embed/qtRKdVHc-cE"
    }
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

   const thriller = await models.genre.findOne({
     where:{
       name: "Thriller"
     }
   })
   for(let i=0; i < thrillerMovies.length; i++){
     await thriller.createMovie(thrillerMovies[i])
   }

  },


  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('movies', null, {})
  }
};
