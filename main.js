function story() {
    var adj = '<span class="word-style">' + document.getElementById('adj').value + '</span> ';
    var clothing = '<span class="word-style">' + document.getElementById('clothing').value + '</span> ';
    var location = '<span class="word-style">' + document.getElementById('location').value + '</span> ';
    var animal = '<span class="word-style">' + document.getElementById('animal').value + '</span> ';
    var noun = '<span class="word-style">' + document.getElementById('noun').value + '</span> ';
    var bodyPart = '<span class="word-style">' + document.getElementById('body-part').value + '</span> ';
    var verb = '<span class="word-style">' + document.getElementById('verb').value + 'ed</span> ';
    
    var story1 = 'Little ' + adj + ' ' + clothing + ' wanted to go to her Grandmother\’s house. To get there, she had to walk through the scary ' + location + '. On the way there, a Big Bad ' + animal + ' tried to catch her, but she got away. So the Big Bad ' + animal + ' went to Grandmother’s house instead, ate her, put on her clothes, and got into her ' + noun + '.';


    
    var story2 = '\'My Grandmother, what a big ' + bodyPart + ' you have!\' Little ' + adj + clothing +  ' said. She figured out Grandmother was actually the wolf and ' + verb + ' him. She then mourned the loss of her beloved Grandmother, went home, and spent years in therapy.';
    
    var storyTeller1 = document.getElementById('story1');
    var storyTeller2 = document.getElementById('story2');    
    
    storyTeller1.innerHTML = 'Little ' + adj + clothing + ' wanted to go to her Grandmother\’s house. To get there, she had to walk through the scary ' + location + '. On the way there, a Big Bad ' + animal + ' tried to catch her, but she got away. So the Big Bad ' + animal + ' went to Grandmother’s house instead, ate her, put on her clothes, and got into her ' + noun + '.';

    storyTeller2.innerHTML = '\'My Grandmother, what a big ' + bodyPart + ' you have!\' Little ' + adj + clothing +  ' said. She figured out Grandmother was actually the wolf and ' + verb + ' him. She then mourned the loss of her beloved Grandmother, went home, and spent years in therapy.';

    //Below is the original way 
    
    // storyTeller1.textContent = story1;
    // storyTeller2.textContent = story2; 
    
    //the above is taking the content of that id=greeting p element and replacing it with the new variable value


}