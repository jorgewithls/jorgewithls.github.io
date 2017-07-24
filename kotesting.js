function AppViewModel() {
  var self = this;
  var birthday = "";
  var sign = "";
  var points = 0;

  self.age = ko.observable();
  self.games = ko.observable(false);
  self.gamesF = function() {return true;}
  self.cook = ko.observable(false);
  self.cookF = function() {return true;}
  self.bday = ko.observable();
  self.visibility = function(value) {
    var filled = ko.utils.unwrapObservable(value);
    var test = filled != null ? true : false;
    return test;
  };
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
    if (ko.utils.unwrapObservable(self.games)) {points++;};
    if (ko.utils.unwrapObservable(self.cook)) {points++;};
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
  };
  self.result = ko.computed(function () {
    var result = ""; 
  }, self);
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
}

function check() {
    alert("Please make sure that you've entered your birthday correctly. \nUse the format 12/21");
}

ko.applyBindings(new AppViewModel());
