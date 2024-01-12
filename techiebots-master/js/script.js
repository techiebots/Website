var firebaseConfig = {
    apiKey: "AIzaSyCjU2RM5mLR3F-LnCrukck4t0SgzDhnslw",
    authDomain: "iitigymkhana-bca4a.firebaseapp.com",
    databaseURL: "https://iitigymkhana-bca4a.firebaseio.com",
    projectId: "iitigymkhana-bca4a",
    storageBucket: "",
    messagingSenderId: "715756540512",
    appId: "1:715756540512:web:8883cd0cc5885947"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.firestore();

db.collection("news").orderBy("date").get().then((querySnapshot) => {
    var count = 1;

    querySnapshot.forEach((doc) => {

        console.log(doc.data().date.toDate());
        var timestamp = doc.data().date.toDate();
        var date = timestamp.getDate();
        var month = timestamp.getMonth();
        var year = timestamp.getFullYear();
        var dateString = date + "/" + (month + 1) + "/" + year;
        console.log(dateString);
        if (doc.data().images != null) {
            var img = doc.data().images;
            var len = img.length;
            var str1 = "";
            var str2 = "";

            for (var i = 1; i <= len; i++) {
                if (i == 1) {
                    str1 = str1 + '<li class="slider-nav__item"><label class="slider-nav__label" for="' + count + '">' + i + '</label></li>';
                    str2 = str2 + '<input type="radio" class="trigger" name="' + doc.id + '" checked="checked" id="' + count + '" /><div class="slide"><figure class="slide-figure"><img class="slide-img" src="' + img[i - 1] + '"/></figure></div>';
                    count = count + 1;
                } else {
                    str1 = str1 + '<li class="slider-nav__item"><label class="slider-nav__label" for="' + count + '">' + i + '</label></li>';
                    str2 = str2 + '<input type="radio" class="trigger" name="' + doc.id + '" id="' + count + '" /><div class="slide"><figure class="slide-figure"><img class="slide-img"src="' + img[i - 1] + '"/></figure></div>';
                    count = count + 1;
                }
            }

            $(".data").prepend('<details open><summary>' + doc.data().title + '&nbsp|| &nbsp<span style="color:#ad1d45;font-family: Arial, Helvetica, sans-serif;">' + dateString + '</span></summary><div class="parent"><div class="child1"><p>' + doc.data().content + '</p></div><div class="child2"><div class="slider-wrapper"><div class="slider">' + str2 + '</div><ul class="slider-nav">' + str1 + '</ul></div></div></div></details>')
        } else {
            $(".data").prepend("<details open><summary>" + doc.data().title + '&nbsp|| &nbsp<span style="color:#ad1d45;font-family: Arial, Helvetica, sans-serif;">' + dateString + '</span></summary><div class="parent"><div class="child1"><p>' + doc.data().content + '</p></div></div></details>')
        }

    });
    console.log(count);
});