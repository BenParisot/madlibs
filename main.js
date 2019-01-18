function story() {
    var adj = document.getElementById('adj').value;
    var clothing = document.getElementById('clothing').value;
    var location = document.getElementById('location').value;
    var animal = document.getElementById('animal').value;
    var noun = document.getElementById('noun').value;
    var bodyPart = document.getElementById('body-part').value;
    var verb = document.getElementById('verb').value;
    
    var story1 = 'Little ' + adj + ' ' + clothing + ' wanted to go to her Grandmother\’s house. To get there, she had to walk through the scary ' + location + '. On the way there, a Big Bad ' + animal + ' tried to catch her, but she got away. So the Big Bad ' + animal + 'went to Grandmother’s house instead, ate her, put on her clothes, and got into her ' + noun + '.';
    
    var story2 = '\'My Grandmother, what a big ' + bodyPart + ' you have!\' Little ' + clothing +  ' said. She figured out Grandmother was actually the wolf and ' + verb + 'ed him. She then mourned the loss of her beloved Grandmother, went home, and spent years in therapy.';
    
    var storyTeller1 = document.getElementById('story1');
    var storyTeller2 = document.getElementById('story2');    
    storyTeller1.textContent = story1;
    storyTeller2.textContent = story2; //this is taking the content of that id=greeting p element and replacing it with the new variable value


}