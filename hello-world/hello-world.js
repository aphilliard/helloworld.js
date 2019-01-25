var hello = true;

do {
    alert("Hello, world!");
    var bye = prompt("Goodbye, world?");
    if (bye === 'yes' || bye === 'y') {
        alert("Bye!");
        hello = false;
    }

   }
while (hello === true);