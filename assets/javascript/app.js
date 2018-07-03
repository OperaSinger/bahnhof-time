$(document).ready(function () {

// initialize Firebase database

    var config = {
        apiKey: "AIzaSyA5eYKsB8T2q6rMGdKSvac6eQsWTzsZEjE",
        authDomain: "fir-recent-user.firebaseapp.com",
        databaseURL: "https://fir-recent-user.firebaseio.com",
        storageBucket: "fir-recent-user.appspot.com"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    var trainName = "";
    var destination = "";
    var frequency = 0;
    var firstTrain = "";

    var nextTrain = 0;
    var minToNext = 0;

    //object list of Train arrays:

    var trainList = [

        {
            trainName: "Midnight Special",
            destination: "Hotel California",
            frequency: ":60",
            firstTrain: "6:23 AM"
        },
        {
            trainName: "Logan's Run",
            destination: "The Future",
            frequency: ":23",
            firstTrain: "5:00 AM"
        },
        {
            trainName: "Hogan's Hero",
            destination: "Timbuk Two",
            frequency: ":15",
            firstTrain: "6:23 AM"
        }

    ]

    // for each function to populate trains and info in DOM

    trainList.forEach(function (element) {

            $("#train-schedule").append(`<tr><td>${element.trainName}</td><td>${element.destination}</td><td>${element.frequency}</td><td>${element.firstTrain}</td><td>${nextTrain}</td><td>${minToNext}</td></tr>`);

        console.log(element.trainName);
        
    });

    $("#enter").on("click", function (event) {
        event.preventDefault();
        var expressEnt = $("#expressEnt").val().trim();
        expressions.push(expressEnt);
        makeButtons();
    });

    // to append the HTML table (#train-schedule) with user inputs - and moment js math:
    // }

    // var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
    // console.log(firstTimeConverted);

    // // Current Time
    // var currentTime = moment();
    // console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

    // // Difference between the times
    // var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
    // console.log("DIFFERENCE IN TIME: " + diffTime);

    // // Time apart (remainder)
    // var tRemainder = diffTime % tFrequency;
    // console.log(tRemainder);

    // // Minute Until Train
    // var tMinutesTillTrain = tFrequency - tRemainder;
    // console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // // Next Train
    // var nextTrain = moment().add(tMinutesTillTrain, "minutes");
    // console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

    // var datetime = null,
    //     date = null;

    // var update = function () {
    //     date = moment(new Date())
    //     datetime.html(date.format('dddd, MMMM Do YYYY, h:mm:ss a'));
    // };

    // $(document).ready(function () {
    //     datetime = $('#datetime')
    //     update();
    //     setInterval(update, 1000);
    // });

    // {


    //   // Capture Button Click
    //   $("#add-user").on("click", function(event) {
    //     // Don't refresh the page!
    //     event.preventDefault();

    //     // YOUR TASK!!!
    //     // Code in the logic for storing and retrieving the most recent user.
    //     // Don't forget to provide initial data to your Firebase database.
    //     name = $("#name-input").val().trim();
    //     email = $("#email-input").val().trim();
    //     age = $("#age-input").val().trim();
    //     comment = $("#comment-input").val().trim();

    //     database.ref().set({
    //       name: name,
    //       email: email,
    //       age: age,
    //       comment: comment
    //     });

    //   });

    //   // Firebase watcher + initial loader HINT: .on("value")
    //   database.ref().on("value", function(snapshot) {

    //     // Log everything that's coming out of snapshot
    //     console.log(snapshot.val());
    //     console.log(snapshot.val().name);
    //     console.log(snapshot.val().email);
    //     console.log(snapshot.val().age);
    //     console.log(snapshot.val().comment);

    //     // Change the HTML to reflect
    //     $("#name-display").text(snapshot.val().name);
    //     $("#email-display").text(snapshot.val().email);
    //     $("#age-display").text(snapshot.val().age);
    //     $("#comment-display").text(snapshot.val().comment);

    //     // Handle the errors
    //   }, function(errorObject) {
    //     console.log("Errors handled: " + errorObject.code);
    //   }); */}

})