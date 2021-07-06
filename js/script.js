var userMessage = prompt("Have you seen Girl from Nowhere on Netflix?");
console.log(userMessage);

if (userMessage = "No"){
    var userQuestion = prompt("You should consider it!");
document.write("Enjoy");
}
else if(userMessage = "Yes"){
    var userQuestion2 = prompt("It's so good, right?");
    document.write("Enjoy");
    }

    function rateShow(){
        var rating = prompt('Watch an episode and rate it here!');
         for (let i = 0; i < rating; i++){
             var thumbRating = document.createElement('img');
             thumbRating.setAttribute("src", "https://deadline.com/wp-content/uploads/2017/04/thumb.jpg");
             thumbRating.setAttribute("height", "30");
             thumbRating.setAttribute("width", "300");    
         }
    }