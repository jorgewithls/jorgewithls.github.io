function AppViewModel() {
  var self = this;
  var birthday = ""; // for storing user input birthday
  var sign = ""; // for zodiac message
  var message = ""; // for verdict message at the end
  var points = 0;
  self.total = ko.observable(0); // for computing verdict message
  self.submit = ko.observable(false); // for determining if visibility
  self.email = ko.observable(false); // for determining visibility of email form 

  self.age = ko.observable();
  self.games = ko.observable(false);
  self.gamesF = function() {return true;}; // toggles button click data being sent back to observable
  self.cook = ko.observable(false);
  self.cookF = function() {return true;}
  self.bday = ko.observable();

  // determines if bday has been filled out or not and controls visibility accordingly
  self.visibility = function(value) {
    var filled = ko.utils.unwrapObservable(value);
    var test = filled != null || filled != undefined ? true : false;
    return test;
  };

  // compiles scores from different answer and comes to a point total
  self.score = function() {
    if (ko.utils.unwrapObservable(self.age) == '16-20') {  // based off of age
      points += 4;
    } else if (ko.utils.unwrapObservable(self.age) == '21-25') {
      points += 3;
    } else if (ko.utils.unwrapObservable(self.age) == '0-15') {
      points += 2;
    } else if (ko.utils.unwrapObservable(self.age) == '26-30') {
      points++;
    }
    if (ko.utils.unwrapObservable(self.games)) {points++;}; // based off of games
    if (ko.utils.unwrapObservable(self.cook)) {points++;}; // based off of cooking
    // based off of sign
    if (sign == "an Aquarius") points += 4;
    if (sign == "a Pisces") points += 2;
    if (sign == "an Aries") points += 2;
    if (sign == "a Taurus") points += 2;
    if (sign == "a Gemini") points += 4;
    if (sign == "a Cancer") points += 1;
    if (sign == "a Leo") points += 3;
    if (sign == "a Virgo") points += 2;
    if (sign == "a Libra") points += 4;
    if (sign == "a Scorpio") points += 2;
    if (sign == "a Sagitarius") points += 2;
    if (sign == "a Capricorn") points += 2;
    self.total(points);
    self.submit(true);
  };

  // sorts out zodiac based on birthday
  self.zodiacFind = ko.computed(function() {
    if (ko.utils.unwrapObservable(self.bday) != null) {
      var str = ko.utils.unwrapObservable(self.bday);
      birthday = str.split("/");
      if ((birthday[0] == 1 && birthday[1] >= 20) || (birthday[0] == 2 && birthday[1] <= 18)) sign = "an Aquarius";
      if ((birthday[0] == 2 && birthday[1] > 18) || (birthday[0] == 3 && birthday[1] <= 20)) sign = "a Pisces";
      if ((birthday[0] == 3 && birthday[1] > 20) || (birthday[0] == 4 && birthday[1] <= 19)) sign = "an Aries";
      if ((birthday[0] == 4 && birthday[1] > 20) || (birthday[0] == 5 && birthday[1] <= 20)) sign = "a Taurus";
      if ((birthday[0] == 5 && birthday[1] > 20) || (birthday[0] == 6 && birthday[1] <= 20)) sign = "a Gemini";
      if ((birthday[0] == 6 && birthday[1] > 20) || (birthday[0] == 7 && birthday[1] <= 22)) sign = "a Cancer";
      if ((birthday[0] == 7 && birthday[1] > 22) || (birthday[0] == 8 && birthday[1] <= 22)) sign = "a Leo";
      if ((birthday[0] == 8 && birthday[1] > 22) || (birthday[0] == 9 && birthday[1] <= 22)) sign = "a Virgo";
      if ((birthday[0] == 9 && birthday[1] > 22) || (birthday[0] == 10 && birthday[1] <= 22)) sign = "a Libra";
      if ((birthday[0] == 10 && birthday[1] > 22) || (birthday[0] == 11 && birthday[1] <= 21)) sign = "a Scorpio";
      if ((birthday[0] == 11 && birthday[1] > 21) || (birthday[0] == 12 && birthday[1] <= 21)) sign = "a Sagitarius";
      if ((birthday[0] == 12 && birthday[1] > 21) || (birthday[0] == 1 && birthday[1] <= 19)) sign = "a Capricorn";
      return sign;
    }
  }, self);

  // determines ending message based on points
  self.verdict = ko.computed(function() {
    if (ko.utils.unwrapObservable(self.total) != 0) {
      if (points < 3) message = "Sorry, doesn't look like you're my type.";
      if (points >= 4 && points < 6) message = "Sorry, you're not exactly who I'm looking for right now.";
      if (points >= 6 && points < 8) message = "Hmm, check me out on Instagram @jorgealv.png";
      if (points >= 8) message = "Looks like we may get along. Let's grab coffee sometime; fill out the form below:";
      self.email(true);
      return message;
    }
  }, self);
}

function check() {
    alert("Please make sure that you've entered your birthday correctly. \nUse the format 12/21");
}

ko.applyBindings(new AppViewModel());
