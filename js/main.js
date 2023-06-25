    var linkedin = $('<a href = "https://www.linkedin.com/in/jasonkyungkim">@linkedin</a>')
    var github = $('<a href = "https://github.com/jasonkyungkim">@github</a>')
    var projects = $('<a href = "https://jasonkyungkim.github.io/projects.html">@my projects</a>')
    var plots = $('<a href = "https://jasonkyungkim.github.io/plots.html">@my plots</a>')

    var spotify = $('<a href = "https://open.spotify.com/playlist/3MY1LQ6JaJBe2T8b1XMAWx">@my playlist</a>')
    var resume = $('<a href = "https://jasonkyungkim.github.io/resume.nb.html">@my resume</a>')
    var ddg = $('<a href = "https://jasonkyungkim.github.io/ddg_dilemma.html">@de gea analysis</a>')

    $('body').terminal({
     help: function () {
                this.echo('example commands:\n\n'
                + '  past \n\n'
                + '  current \n\n'
                + '  resume\n\n'
                + '  linkedin\n\n' 
                + '  github\n\n' 
                + '  projects\n\n'
                + '  hello there\n\n'
                // + '  viz (for a random plot/graph I made over the years)\n\n'
                + '  ------------------\n\n'
                + ' If you are a football fan, or better yet a Man United fan, type \'ddg\' to read about my\n'
                + ' analysis on David De Gea'
                // + '  (meme-related prompts... like "hello there")\n\n'
                // + '  favorite {var}: replace {var} with food, movie, team, school, singer, etc...\n\n'
                + '  ------------------\n\n'
                + '  get creative! there are secret commands\n\n');},
    
    past: function(){
          this.echo('grew up in Suwon, Korea... received my BA in Mathematics and Statistics at Swarthmore College, where I TAed for statistics classes and participated in research with professors.');
    },  
    current: function(){
      this.echo('Data Science Intern at the Hershey Company! Also pursuing my master\'s in data science at Harvard. Exploring cafes and restaurants in Los Angeles' );
  },
    linkedin: function(){
        this.echo(linkedin);
    },
    resume: function(){
        this.echo(resume);
    },
    ddg: function(){
        this.echo(ddg);
    },
    github: function(){
        this.echo(github);
    },     
    // viz: function(){
    //   random_file = Math.floor(Math.random() * 19) + 1;
    //   this.echo($('<img src="img/plots/' +random_file +'.png">'));
    // }, 
   
    projects: function(){
        this.echo(projects);
    },
    selfie: function() {
      this.echo($('<img src="img/me3.jpg">'));
    },
    spotify: function(){
        this.echo(spotify);
    },
    cat: function(){
      this.echo($('<img src="img/me3.jpg">'));
    },

    hello: function(name) {
        if (name == "there"){
            this.echo("general kenobi")
        } else{
          this.echo("hello!")
        }
    },
    favorite: function(name) {
        if (name == "food"){
            this.echo("fried chicken. spicy noodles. anything Asian, really");
        } 

        if (name == "team"){
          this.echo("Manchester United");
        }
        
        if (name == "movie"){
          this.echo("Ex Machina (2014)");
        }
        
        if (name == "singer"){
          this.echo("Lady Gaga, the Weeknd, Partynextdoor, Drake... and more tbh");
        }
        if (name == "school"){
          this.echo("Swarthmore College :)");
        }
        if (name == "K-pop group"){
          this.echo("Red Velvet");
        }
    }
}, {
    greetings: 'hello, this is Jason :)' + '\n type \'help\' '
});