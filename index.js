function getFormvalue(){

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var height = document.getElementById("height").value;
    var country = document.getElementById("country").value;

    document.getElementById("info").innerHTML = "Your name is " + fname + " " + lname + ", you are" + " " + height + " feet tall, and you are from" + " " + country + ".";

}
