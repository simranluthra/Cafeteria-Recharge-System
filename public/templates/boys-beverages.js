$(document).ready(function(){
  var rootRef = firebase.database().ref('/venue/Boys Pantry/Bevarages');
  // ye ref ke andar ka link tere database se liya h agar na mile toh bta dena
  rootRef.on('value', snap => {
    let itemid = 0;
    let did = 0;
    let qid = 0;
    let tid=0;
    let pid = 0;
    snap.forEach(function(childsnap){

      $('.items').append("<div class='item' id=" + itemid + "></div>");

      $('#'+ itemid +'.item').append("<div class='description' id="+did+"></div>");
      $('#'+ itemid +'.item').append("<div class='quantity' id="+qid+"></div>");

      $('#'+ itemid +'.item').append("<div class='type' id="+tid+">" + childsnap.val().mtype + "</div><br><br>&nbsp;&nbsp;&nbsp;");
      $('#'+ itemid +'.item').append("<div class='subprice' id="+pid+">Base Price = " + childsnap.val().mprice + "</div>");


      $('#'+ did +'.description').append("<span>" + childsnap.val().mName + "</span>");
      $('#'+ did +'.description').append("<span>" + childsnap.val().mDEsc + "</span>");


  //    $('#' + qid + '.quantity').append("<button class='plus-btn btn btn-primary' id='plus"+ qid +"' type='button' name='button' min='1'>+</button>");
      $('#' + qid + '.quantity').append("<input type='number' name='name' value='1' min='1' id='val"+ qid +"'>");
  //    $('#' + qid + '.quantity').append("<button class='plus-btn btn btn-primary' id='less"+ qid +"' type='button' name='button' min='1'>-</button>");

      itemid=itemid+1;
      did = did +1;
      qid = qid+1;
      tid = tid+1;
      pid = pid+1;
    });
    // var name = snap.child("Cheezo Garlic Sticks").val();
    // console.log(name.mName);
  });
});

// var ref = firebase.database().ref();
//
// ref.on("value", function(snapshot) {
//    console.log(snapshot.val());
// }, function (error) {
//    console.log("Error: " + error.code);
// });
