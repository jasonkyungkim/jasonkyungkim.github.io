var linkedin = $('<a href = "https://www.linkedin.com/in/jasonkyungkim">@linkedin</a>')
    var github = $('<a href = "https://github.com/jasonkyungkim">@github</a>')
    var projects = $('<a href = "https://jasonkyungkim.github.io/projects.html">@my projects</a>')
    var plots = $('<a href = "https://jasonkyungkim.github.io/plots.html">@my plots</a>')

    var spotify = $('<a href = "https://open.spotify.com/playlist/3MY1LQ6JaJBe2T8b1XMAWx">@my playlist</a>')
    var resume = $('<a href = "https://jasonkyungkim.github.io/resume.nb.html">@my resume</a>')

    $('body').terminal({
     help: function () {
                this.echo('example commands:\n\n'
                + '  resume\n\n'
                + '  linkedin\n\n' 
                + '  github\n\n' 
                + '  projects\n\n'
                + '  viz (for a random plot/graph I made over the years)\n\n'
                + '  ------------------\n\n'
                + '  (meme-related prompts... like "hello there")\n\n'
                + '  favorite {var}: replace {var} with food, movie, team, school, singer, etc...\n\n'
                + '  ------------------\n\n'
                + '  use \'clear\' to get a blank screen\n\n'
                + '  get creative! there are secret commands\n\n');},
                
    linkedin: function(){
        this.echo(linkedin);
    },
    resume: function(){
        this.echo(resume);
    },
    github: function(){
        this.echo(github);
    },     
    plots: function(){
      random_file = Math.floor(Math.random() * 19) + 1;
      this.echo($('<img src="img/plots/' +random_file +'.png">'));
    }, 
   
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
          this.echo("hello " + name)
        }
    },
    favorite: function(name) {
        if (name == "food"){
            this.echo("chicken");
        } 

        if (name == "team"){
          this.echo("manchester united");
        }
        
        if (name == "movie"){
          this.echo("Ex Machina (2014)");
        }
        
        if (name == "singer"){
          this.echo("Lady Gaga, the Weeknd, Partynextdoor, Drake... and more tbh");
        }
        if (name == "school"){
          this.echo("swarthmore college :)");
        }
    }
}, {
    greetings: 'hello, this is Jason :)' + '\n type \'help\' for help'
});