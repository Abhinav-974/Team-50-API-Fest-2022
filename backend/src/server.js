// Require the framework and instantiate it
const fastify = require("fastify")({ logger: true });
const { nanoid } = require("nanoid");

/*----------------MOVIES-------------------- */ 

let movies = [
  {
    movie_id: 44,
    name: "Zieme Inc",
    certification: "Lorem ut",
    release_date: "non quis anim cillum dolor",
    cast: [
      {
        name: "laborum es",
        id: -80329381,
      },
      {
        name: "incididunt nostrud",
        id: -45448127,
      },
    ],
    genre: [
      {
        name: "in id",
        genre_id: 95826859,
      },
      {
        name: "mollit anim ut",
        genre_id: -91589529,
      },
    ],
    soundtrack_link: [
      {
        name: "labore",
        link: "exercitation tempor",
      },
      {
        name: "aliquip id Ut",
        link: "eu officia",
      },
    ],
    languages_available: [
      {
        name: "nostrud eiusmod eu dolor",
      },
      {
        name: "exercitation ullamco in pariatur nisi",
      },
    ],
    services_available: [
      {
        name: "dolore id deserunt esse pariatur",
      },
      {
        name: "cillum sunt id",
      },
    ],
    id: "6hel_56JLQ3bP1vfzHHf5",
  },
];
// GET /movies
fastify.get("/movies", async (req, res) => {
  res.code(200).send(movies);
});

// POST /movies
fastify.post("/movies", async (req, res) => {
  // get new movie properties
  const newMovie = req.body;
  newMovie.id = nanoid();
  // pushing new movie to db
  movies.push(newMovie);
  res.code(201).send(newMovie);
});

// GET /movies/{movie_id}
fastify.get("/movies/:movie_id", async (req, res) => {
  //getting id from params
  const id = req.params.movie_id;
  //finding the movie
  const movie = movies.find((m) => m.movie_id == id);

  if (movie) {
    res.send(movie);
  } else {
    res.code(404).send(`No movie with id ${id} found!`);
  }
});

// PUT /movies/{movie_id}
fastify.put("/movies/:movie_id", async (req, res) => {
  //getting id from params
  const id = req.params.movie_id;
  //finding the movie
  const movieIndex = movies.findIndex((m) => m.movie_id == id);
  // if movie exists
  if (movieIndex > -1) {
    //updating
    const oldMovie = movies[movieIndex];
    movies[movieIndex] = { ...oldMovie, ...req.body };
    res.code(204).send();
  } else {
    res.code(404).send(`No movie with id ${id} found!`);
  }
});

// DEL /movies/{movie_id}
fastify.delete("/movies/:movie_id", async (req, res) => {
  //getting id from params
  const id = req.params.movie_id;
  //finding the movie
  const movieIndex = movies.findIndex((m) => m.movie_id == id)
  // if movie exists
  if (movieIndex > -1) {
    //deleting
    movies.splice(movieIndex, 1);
    res.code(204).send();
  } else {
    res.code(404).send(`No movie with id ${id} found!`);
  }
});


let reviews = [{
    "review_id": 777,
    "description": "Brilliant",
    "stars_out_of_5": 5
   }]

//GET /movies/{movie_id}/reviews
fastify.get("/movies/:movie_id/reviews", async(req, res) => {
    res.send(reviews)
})

//POST /movies/{movie_id}/reviews
fastify.post("/movies/:movie_id/reviews", async(req, res) => {
    // get new review properties
  const newReview = req.body;
  newReview.id = nanoid();
  // pushing new review to db
  reviews.push(newReview);
  res.code(201).send(newReview);
})


let quotes = []
//GET /movies/{movie_id}/quotes
fastify.get("/movies/:movie_id/quotes", async(req, res) => {
    res.send(quotes)
})

//POST /movies/{movie_id}/quotes
fastify.post("/movies/:movie_id/quotes", async(req, res) => {
    // get new quote properties
  const newQuote = req.body;
  newQuote.id = nanoid();
  // pushing new quote to db
  quotes.push(newQuote);
  res.code(201).send(newQuote);
})



/*------------------------------------TV-------------------------------*/ 
let shows = [{
    "show_id": 555,
    "name": "The Office",
    "certification": "do laborum et reprehenderit",
    "pilot_air_date": "deserunt tempor",
    "num_of_seasons": 64991289,
    "cast": [
     {
      "name": "ea",
      "id": 75889980
     },
     {
      "name": "labore aliqua velit mollit",
      "id": 81553525
     }
    ],
    "genre": [
     {
      "name": "culpa Excepteur",
      "id": -52674965
     },
     {
      "name": "labore dolore",
      "id": -53254272
     }
    ],
    "soundtrack_link": [
     {
      "name": "laborum adipisicing",
      "link": "laborum non veniam"
     },
     {
      "name": "qui anim sed et aliqua",
      "link": "esse id labore veniam"
     }
    ],
    "languages_available": [
     {
      "name": "reprehenderit"
     },
     {
      "name": "culpa"
     }
    ],
    "services_available": [
     {
      "name": "mollit adipisicing nostrud"
     },
     {
      "name": "incididunt aliquip"
     }
    ]
   }]
// GET /shows
fastify.get("/shows", async (req, res) => {
    res.code(200).send(shows);
  });
  
  // POST /movies
  fastify.post("/shows", async (req, res) => {
    // get new shows properties
    const newShow = req.body;
    newShow.id = nanoid();
    // pushing new movie to db
    shows.push(newShow);
    res.code(201).send(newShow);
  });
  
  // GET /shows/{show_id}
  fastify.get("/shows/:show_id", async (req, res) => {
    //getting id from params
    const id = req.params.show_id;
    //finding the movie
    const show = shows.find((m) => m.show_id == id);
  
    if (show) {
      res.send(show);
    } else {
      res.code(404).send(`No show with id ${id} found!`);
    }
  });
  
  // PUT /show/{show_id}
  fastify.put("/shows/:show_id", async (req, res) => {
    //getting id from params
    const id = req.params.show_id;
    //finding the movie
    const showIndex = shows.findIndex((m) => m.show_id == id);
    // if movie exists
    if (showIndex > -1) {
      //updating
      const oldShow = shows[showIndex];
      shows[showIndex] = { ...oldShow, ...req.body };
      res.code(204).send();
    } else {
      res.code(404).send(`No show with id ${id} found!`);
    }
  });
  
  // DEL /shows/{show_id}
  fastify.delete("/shows/:show_id", async (req, res) => {
    //getting id from params
    const id = req.params.show_id;
    //finding the movie
    const showIndex = shows.findIndex((m) => m.show_id == id)
    // if show exists
    if (showIndex > -1) {
      //deleting
      shows.splice(showIndex, 1);
      res.code(204).send();
    } else {
      res.code(404).send(`No show with id ${id} found!`);
    }
  });

  let tvReviews = [{
    "review_id": 777,
    "description": "Brilliant",
    "stars_out_of_5": 5
   }]

//GET /show/{show_id}/reviews
fastify.get("/shows/:show_id/reviews", async(req, res) => {
    res.send(tvReviews)
})

//POST /show/{show_id}/reviews
fastify.post("/shows/:show_id/reviews", async(req, res) => {
    // get new review properties
  const newReview = req.body;
  newReview.id = nanoid();
  // pushing new review to db
  tvReviews.push(newReview);
  res.code(201).send(newReview);
})


let tvQuotes = []
//GET /show/{show_id}/quotes
fastify.get("/shows/:show_id/quotes", async(req, res) => {
    res.send(tvQuotes)
})

//POST /show/{show_id}/quotes
fastify.post("/shows/:show_id/quotes", async(req, res) => {
    // get new quote properties
  const newQuote = req.body;
  newQuote.id = nanoid();
  // pushing new quote to db
  tvQuotes.push(newQuote);
  res.code(201).send(newQuote);
})
  
  
  



// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
