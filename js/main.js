$(document).ready(function () {
  // Variables
  var carModel = $("input[name='typeOfCar']");
  var carColor = $("input[name='typeOfColor']");
  var carDisc = $("input[name='typeOfDisc']");
  var price = $("#price");
  var basePrice = 35000;
  var button = $(".price-btn");
  finalPrice = 0;
  var carModelPrice = 0;
  var carColorPrice = 0;
  var carDiscPrice = 0;
  price.text(basePrice);

  // Functions

  // Count
  function count() {
    finalPrice = +carModel + +carColor + +carDisc + basePrice;
    price.text(finalPrice);
  }

  // Car Model
  carModel.change(function (event) {
    carModel = $(this).val();

    if ($(this).val() == "sedan") {
      $("img").attr("src", "img/audiA6_red.jfif");
      carModelPrice = basePrice;
      price.text(carModelPrice);
    } else {
      $("img").attr("src", "img/audiA6_avant_red.jfif");
      carModelPrice = basePrice + 10000;
      price.text(carModelPrice);
    }

    event.preventDefault();
  });

  // Car Color
  carColor.change(function (event) {
    carColor = $(this).val();

    if (carModel == "sedan" && carColor == "red") {
      $("img").attr("src", "img/audiA6_red.jfif");
      price.text(basePrice);
    } else if (carModel == "sedan" && carColor == "blue") {
      $("img").attr("src", "img/audiA6_blue.jfif");
      price.text(basePrice + 2000);
    } else if (carModel == "avant" && carColor == "red") {
      $("img").attr("src", "img/audiA6_avant_red.jfif");
      price.text(basePrice + 10000);
    } else if (carModel == "avant" && carColor == "blue") {
      $("img").attr("src", "img/audiA6_avant_blue.jfif");
      price.text(basePrice + 10000 + 2000);
    }

    event.preventDefault();
  });

  // Car Disc
  carDisc.change(function (event) {
    carDisc = $(this).val();

    if (carModel == "sedan" && carDisc == "17inch") {
      $("img").attr("src", "img/audiA6_red.jfif");
      price.text(basePrice);
    } else if (carModel == "sedan" && carDisc == "18inch") {
      $("img").attr("src", "img/audiA6_red_18inch.jfif");
      price.text(basePrice + 3000);
    } else if (carModel == "avant" && carDisc == "17inch") {
      $("img").attr("src", "img/audiA6_avant_red.jfif");
      price.text(basePrice + 10000);
    } else if (carModel == "avant" && carDisc == "18inch") {
      $("img").attr("src", "img/audiA6_avant_red_18inch.jfif");
      price.text(basePrice + 10000 + 3000);
    } else if (
      carModel == "sedan" &&
      carColor == "red" &&
      carDisc == "17inch"
    ) {
      $("img").attr("src", "img/audiA6_red.jfif");
      price.text(basePrice);
    } else if (
      carModel == "sedan" &&
      carColor == "red" &&
      carDisc == "18inch"
    ) {
      $("img").attr("src", "img/audiA6_red_18inch.jfif");
      price.text(basePrice + 3000);
    } else if (
      carModel == "sedan" &&
      carColor == "blue" &&
      carDisc == "17inch"
    ) {
      $("img").attr("src", "img/audiA6_blue.jfif");
      price.text(basePrice + 2000);
    } else if (
      carModel == "sedan" &&
      carColor == "blue" &&
      carDisc == "18inch"
    ) {
      $("img").attr("src", "img/audiA6_blue_18inch.jfif");
      price.text(basePrice + 2000 + 3000);
    } else if (
      carModel == "avant" &&
      carColor == "red" &&
      carDisc == "17inch"
    ) {
      $("img").attr("src", "img/audiA6_avant_red.jfif");
      price.text(basePrice + 10000);
    } else if (
      carModel == "avant" &&
      carColor == "blue" &&
      carDisc == "17inch"
    ) {
      $("img").attr("src", "img/audiA6_avant_blue.jfif");
      price.text(basePrice + 10000 + 2000);
    } else if (
      carModel == "avant" &&
      carColor == "blue" &&
      carDisc == "18inch"
    ) {
      $("img").attr("src", "img/audiA6_avant_blue_18inch.jfif");
      price.text(basePrice + 10000 + 2000 + 3000);
    }

    event.preventDefault();
  });
});
