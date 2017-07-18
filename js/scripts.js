//Frontend
$(document).ready(function(){
  $("form#movie-selection").submit(function(event) {

    var inputtedMovie = $("select#movie").val();
    var inputtedShowtime = $("select#showtime").val();
    var inputtedAge = parseInt($("input#age").val());



    var currentTicket = new Ticket(inputtedMovie, inputtedShowtime, inputtedAge);

    function Ticket(movie, showtime, age, ticketPrice) {
      this.movie = movie;
      this.showtime= showtime;
      this.age = age;
      this.ticketPrice = 0;
      }


    Ticket.prototype.Age = function() {
      if(this.age >= 55 || this.age <= 12) {
        return 5;
      } else {
        return  9;
      }
    }


    Ticket.prototype.Showtime = function() {
      if(this.showtime !== "10:00AM" && this.showtime !== "12:30PM") {
        return  2;
      } else {
        return  0;
      }
    }

    Ticket.prototype.FinalPrice = function() {
      return 0 + this.Age() + this.Showtime();
    }



    Ticket.prototype.receipt = function() {
    return this.movie + " " + this.showtime + " " + this.age + " " + this.finalPrice();
    }


    var inputtedAge = 0;
    var inputtedMovie = "";
    var inputtedShowtime = "";
    var ticketPrice = 0;


    $("#result").text(currentTicket.FinalPrice())
  event.preventDefault();
  });
});
