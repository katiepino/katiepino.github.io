$(document).ready(function() {
  $(".navbar-brand").html("{design . develop . deliver}");
  $("#name").html("Katie Nordman")
  $("#title").html("Analyst & Developer")
  $("#coverPhoto").attr("style", "background-image: url('https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/about.png')");
  $("#profilePic").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/sml_katie_two.jpg");
  $("#profilePicSml").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/sml_katie_two.jpg");
  $(".portimgone").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/courtcounter.png");
  $(".portonetitle").html("Android App: Court Counter");
  $(".portsumone").html("Court Counter is an Android app built to keep score during basketball games. Keep track of points scored for two teams and reset the scores for a new match.")
  $(".portimgtwo").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/jargongenerator.png");
  $(".porttwotitle").html("Android App: Jargon Generator");
  $(".portsumtwo").html("Jargon Generator is an Android app built to help you out during those tough business meetings when you just can't think of the appropriate meaningless phrase to use. We all know that a corporate meeting isn't complete without a few '30,000 foot', 'leveraged', 'synergy' words tossed randomly into the mix. Just add coffee and you have a recipe for success. Go get 'em.")
  $(".portimgthree").attr("src","https://raw.githubusercontent.com/katiepino/data-analysis/master/text/firstusprezdebate2016/clinton_wordcloud_final.png");
  $(".portthreetitle").html("Word Clouds: Presidential Debate 2016 - Clinton");
  $(".portsumthree").html("This word cloud visualizing Clinton's most frequently used words by size was created using the R programming language. Transcript from <a href = 'http://www.nytimes.com/2016/09/27/us/politics/transcript-debate.html'>NYTimes</a>.")
  $(".portimgfour").attr("src","https://raw.githubusercontent.com/katiepino/data-analysis/master/text/firstusprezdebate2016/trump_wordcloud_final.png");
  $(".portfourtitle").html("Word Clouds: Presidential Debate 2016 - Trump");
  $(".portsumfour").html("This word cloud visualizing Trump's most frequently used words by size was created using the R programming language. Transcript from <a href = 'http://www.nytimes.com/2016/09/27/us/politics/transcript-debate.html'>NYTimes</a>.")
  $("#aboutText").html("I am an accountant turned developer. At the moment my focus is on data analysis but I also like to dabble in front-end web development and Android app development. Finding solutions and seeing the product of my efforts is what I enjoy. A special thanks to freeCodeCamp, Udacity, edX and all the other online resources that make it possible for me to pursue my interests.");
  $("#contactText").html("You have questions, I have answers. Maybe. Feel free to connect with me around the web via social media. I would love to meet you and hear what you have to say.");
  $(".wordpressLink").attr("href","https://parsemybrain.wordpress.com/");
  $(".twitterLink").attr("href","https://twitter.com/katie_nordman");
  $(".facebookLink").attr("href","https://www.facebook.com/katherine.pino.31");
  $(".githubLink").attr("href","https://github.com/katiepino");
  $(".linkedinLink").attr("href","https://www.linkedin.com/in/katienordman");
});
$(document).on('click','.navbar-collapse.in',function(hideMenu) {
    if( $(hideMenu.target).is('a') && $(hideMenu.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
