function main() {
  $("#overview-button").parent().addClass("active");
  $("#whoweare-content").hide();
  $("#background-content").hide();
  $("#implementeddesign-content").hide();
  $("#results-content").hide();
  $("#futuredirections-content").hide();
  $('.button').on('click', function() {
    $(".button").removeClass("active");
    $(this).addClass("active");
    $(".content").children().hide();
    $("#logos").show();
    if ($(this).children().attr("id") == "overview-button") {
      $("#overview-content").show();
    } else if ($(this).children().attr("id") == "whoweare-button") {
      $("#whoweare-content").show();
    } else if ($(this).children().attr("id") == "background-button") {
      $("#background-content").show();
    } else if ($(this).children().attr("id") == "implementeddesign-button") {
      $("#implementeddesign-content").show();
    } else if ($(this).children().attr("id") == "results-button") {
      $("#results-content").show();
    } else if ($(this).children().attr("id") == "futuredirections-button") {
      $("#futuredirections-content").show();
    }
  });

}

$(document).ready(main);
