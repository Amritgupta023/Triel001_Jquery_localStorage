if(localStorage.getItem('added-items') == null){
          console.log("This is empty");
}
else
{
    console.log("This is not empty");
var retrievedObject = localStorage.getItem('added-items');
   
        var parsedObject = JSON.parse(retrievedObject);
        //console.log(typeof(parsedObject));
            

        var text;
        for(var i=0;i<parsedObject.length;i++){
              text+= "<tr><td>"+(i+1)+"</td><td>"+parsedObject[i].email+"</td><td>"+parsedObject[i].password+"</td><td>"+parsedObject[i].telephone+"</td></tr>";
        }    
        //console.log(text);
        if(text != ""){ 

                        $("#table_body").append(text);
                       // console.log(text);
                        //text="";
                       console.log("This is inside the append...");
                    }
}

/*console.log("hello");
console.log(localStorage.getItem('added-items'));
console.log("hello");*/

jsonObject = [];
var temp=0;
$(document).ready(function() {
    $("#btn").click(function() {
        var email = $("#email").val();
        var password = $("#pwd").val();

        var telephone = $("#tel").val();

        item = {};
        //console.log(typeof(item));

        item["email"] = email;
        item["password"] = password;
        item["telephone"] = telephone;
        // console.log(item);

        jsonObject.push(item);


        //console.log(jsonObject);

        localStorage.setItem('added-items', JSON.stringify(jsonObject));
        //console.log('after set Items');
        // console.log(jsonObject);
        var retrievedObject = localStorage.getItem('added-items');

        var parsedObject = JSON.parse(retrievedObject);
        /*console.log(typeof(parsedObject));
        console.log(parsedObject);*/	

        var text;
        for(var i=temp;i<parsedObject.length;i++){
              text+= "<tr><td>"+(i+1)+"</td><td>"+parsedObject[i].email+"</td><td>"+parsedObject[i].password+"</td><td>"+parsedObject[i].telephone+"</td></tr>";
        }        
        if(text != ""){ 

                        $("#table_body").append(text);
                       // console.log(text);
                        text="";
                        temp++;
                        
                    }




    });
});
