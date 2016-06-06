$(document).ready(function() {
  $(".navbar-brand").html("{design . develop . deliver}");
  $("#name").html("Katie Nordman")
  $("#title").html("Web Developer")
  $("#coverPhoto").attr("style", "background-image: url('https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/about.png')");
$("#profilePic").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/sml_katie_crop.jpg");
$("#profilePicSml").attr("src","https://raw.githubusercontent.com/katiepino/katiepino.github.io/master/images/sml_katie_crop.jpg");
$("#aboutText").html("I am an accountant turned developer. At the moment my focus is on front-end development but I also dabble in data analysis, android app development, and machine learning. Finding solutions and seeing the product of my efforts is what I enjoy. A special thanks to freeCodeCamp, Udacity, edX and all the other online resources that make it possible for me to pursue my interests.");
$("#contactText").html("You have questions, I have answers. Maybe. Feel free to connect with me around the web via social media. I would love to meet you and hear what you have to say.");
$(".twitterLink").attr("href","https://twitter.com/katie_nordman"); $(".facebookLink").attr("href","https://www.facebook.com/katherine.pino.31");
$(".githubLink").attr("href","https://github.com/katiepino");
$(".linkedinLink").attr("href","https://www.linkedin.com/in/katienordman");
});
$(document).on('click','.navbar-collapse.in',function(hideMenu) {
    if( $(hideMenu.target).is('a') && $(hideMenu.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});
