$(document).ready(function () {

    // initialize Firebase database

    var config = {
        apiKey: "AIzaSyD-sqqIXbEgXa07sEa-zKLrPzkrhLW73To",
        authDomain: "my-first-project-4f270.firebaseapp.com",
        databaseURL: "https://my-first-project-4f270.firebaseio.com",
        projectId: "my-first-project-4f270",
        storageBucket: "my-first-project-4f270.appspot.com",
        messagingSenderId: "14142996073"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    // Firebase watcher + initial loader ("value")
    database.ref().on("value", function (snapshot) {
        console.log(snapshot.val());
    })


    // //object list of Train arrays:

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

    // listener for entering new object for train list array:

    $("#add-train-btn").on("click", function (event) {
        event.preventDefault();
        var trainEnter = {
            trainName: $("#trainName").val().trim(),
            destination: $("#destination").val().trim(),
            frequency: $("#frequency").val().trim(),
            firstTrain: $("#firstTrain").val().trim()

        };

        console.log("#add-train-btn");

        trainList.push(trainEnter);

        database.ref().push(trainEnter);

        console.log(trainEnter)
    })

    // Firebase watcher + initial loader ("value")
    database.ref().on("child_added", function (snapshot) {

        // Log everything that's coming out of snapshot
        console.log("Train Name is: " + snapshot.val().trainName);
        console.log("Destination is: " + snapshot.val().destination);
        console.log("Frequency in minutes is: " + snapshot.val().frequency);
        console.log("First Train Arrives: " + snapshot.val().firstTrain);

        // to append the HTML table (#train-schedule) with user inputs - and moment js math: // }

        var currentTime = moment();

        var frequency = parseInt(snapshot.val().frequency);
        console.log(frequency);

        console.log("Current time is: " + moment().format("HH:mm"));

        var dateConverted = moment(snapshot.val().firstTrain, "HH:mm").subtract(1, "years");
        console.log("Date converted is: " + dateConverted);

        var trainTime = moment(dateConverted).format("HH:mm");
        console.log("Train Time is: " + trainTime);
    
        // // Difference between the times
        var timeConverted = moment(trainTime, "HH:mm").subtract(1, "years");
        var diffTime = moment().diff(moment(timeConverted), "minutes");
        console.log("DIFFERENCE IN TIME: " + diffTime);

        // // Time apart (remainder)
        var tRemainder = diffTime % frequency;
        console.log("Time Remaining: " + tRemainder);

        // // Minute Until Train
        var tMinutesTillTrain = snapshot.val().frequency - tRemainder;
        console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

        // // Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));

        $("#train-schedule").append(`<tr><td>${snapshot.val().trainName}</td><td>${snapshot.val().destination}</td><td>${snapshot.val().frequency}</td><td>${snapshot.val().firstTrain}</td><td>${trainTime}</td><td>${tRemainder}</td></tr>`);


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



    })

    })