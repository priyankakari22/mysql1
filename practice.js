// Write a function called isUser that accepts an object, and returns true if it is
// a valid user object, false otherwise. A valid user object will contain a
// property called `name` which is a string, and a property called `screen_name`
// which is also a string. It should contain no other properties.
//
//     isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> true
//
//     isUser({ "name":"Firstname Lastname", "screen_name":"user" });
//     //=> true
//
//     isUser("semmypurewal");
//     //=> false
//
//     isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" });
//     //=> false
//
var isUser = function (obj) {
	
		  if(typeof(obj)=="object")
		  {
		  	var key=Object.keys(obj);
		  	var a=key.every(function(ele){
		  		
		  		return (((ele=="name")||(ele=="screen_name"))&&(typeof(ele)=="string"));
		  	});
		  	console.log(a);
		  }
		  else
		  	console.log(false);
          
          
    
};
isUser({ "name":"Semmy Purewal", "screen_name":"semmypurewal" });
isUser({ "age": 37, "name":"Semmy Purewal", "screen_name":"semmypurewal" });


// Often when working with HTML, we'll want to take data stored in an object and
// display it as an HTML `div` element. For example, suppose we have a person
// object which contains a name and a screen_name. We'd like to produce a `div`
// that contains an `h1` element with the name, and an `h2` element with
// screen_name. For example:
//
//     var user = { "name":"Semmy Purewal", "screen_name":"semmypurewal" };
//
//     userToDiv(user);
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2></div>"
//
// Write this function. It should throw an error if the user is not a valid
// user. It might be helpful to use some functions from previous sections.
//
var userToDiv = function (object) {
	var value=Object.keys(object);
	
		return "<div><h1>"+object[value[0]]+"</h1><h2>"+object[value[1]]+"</h2></div>";
};
console.log(userToDiv ({ "name":"Semmy Purewal", "screen_name":"semmypurewal" }));


// Now suppose we have a user object that contains a list of tweets. In HTML, we
// may want to represent that as a list element with a set of list items. That
// looks something like this:
//
//     <ul>
//       <li>this is a tweet.</li>
//       <li>this is another tweet.</li>
//     </ul>
//
// Write a function that converts a user object containing tweets into an HTML
// `div` element representing that user.
//
//     userWithTweetsToDiv({
//         "name": "Semmy Purewal",
//         "screen_name":"semmypurewal",
//         "tweets": [
//             "this is a tweet.",
//             "this is another tweet!"
//         ]
//     });
//     //=> "<div><h1>Semmy Purewal</h1><h2>semmypurewal</h2><ul><li>this is a tweet.</li><li>this is another tweet</li></ul></div>"
//
var userWithTweetsToDiv = function (array) {
var str="";
var a=Object.keys(array)


for(var i=0;i<a.length;i++){

		
	if(a[i]=="name")
	
		str=str+"<div><h1>"+array[a[i]]+"</h1>";
			
	
	else if(a[i]=="screen_name")

	
		str=str+"<h2>"+array[a[i]]+"</h2>";
	else if(a[i]=="tweets")
	{
		str+="<ul>";
		for(let j=0;j<array['tweets'].length;j++)
		
			str+="<li>"+array.tweets[j]+"</li>";
		
		str+="</ul></div>"
	}
	else
		return error;

	
	}
	return str;
}
 console.log(userWithTweetsToDiv({
         "name": "Semmy Purewal",
         "screen_name":"semmypurewal",
        "tweets": ["this is a tweet.",
          "this is another tweet!"]
    }));


// Write a function that accepts an array of strings, and returns an object that
// represents the number of times that each string appears in the array. This might
// sound confusing, but this is what we'd like to have happen.
//
//     frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]);
//     //=> { "hello" : 3, "world" : 2, "goodbye": 1, "thing" : 1 }
//
//     frequencies([]);
//     //=> {}
//
//     frequencies([ "hello", "world" ]);
//     //=> { "hello" : 1, "world" : 1 }
//
// There are several ways you can do it, but it might be interesting to try it with
// the `reduce` method that starts with an empty object.
	var frequencies = function (array) {
	obj={};
	var a=[];
	for(var i=0;i<array.length;i++)
	{
		if(a.indexOf(array[i])==-1)
		{
			a.push(array[i])
		}
		
	}
	for(var i=0;i<a.length;i++)
	{
		var c=0;
		for(var j=0;j<array.length;j++)
		{
			if(array[j]==a[i])
			{
				c++;
			}
		}
		obj[a[i]]=c;
	}

	//console.log(a);
	return obj;
	


	

};
console.log(frequencies([ "hello", "world", "hello", "goodbye", "hello", "world", "thing" ]));

