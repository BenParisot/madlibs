function story() {
    var adj = '<span class="word-style">' + document.getElementById('adj').value + '</span> ';
    var clothing = '<span class="word-style">' + document.getElementById('clothing').value + '</span> ';
    var location = '<span class="word-style">' + document.getElementById('location').value + '</span> ';
    var animal = '<span class="word-style">' + document.getElementById('animal').value + '</span>';
    var noun = '<span class="word-style">' + document.getElementById('noun').value + '</span>';
    var bodyPart = '<span class="word-style">' + document.getElementById('body-part').value + '</span> ';
    var verb = '<span class="word-style">' + document.getElementById('verb').value + '</span> ';
    var bodyPart2 = '<span class="word-style">' + document.getElementById('body-part2').value + '</span> ';
    
    var story1 = 'Little ' + adj + ' ' + clothing + ' wanted to go to her Grandmother\’s house. To get there, she had to walk through the scary ' + location + '. On the way there, a Big Bad ' + animal + ' tried to catch her, but she got away. So the Big Bad ' + animal + ' went to Grandmother’s house instead, ate her, put on her clothes, and got into her ' + noun + '.';
    
    var story2 = '\'My Grandmother, what a big ' + bodyPart + ' you have!\' Little ' + adj + clothing +  ' said. \'The better to ' + verb + ' you with my dear!\' Said the ' + animal + '. ' + 'Little ' + adj + clothing + ' quickly figured out Grandmother was actually the Big Bad ' + animal + ' so she punched him in the ' + bodyPart2 + ' and ran home, where she mourned the loss of her beloved Grandmother and spent years in therapy.';
    
    var storyTeller1 = document.getElementById('story1');
    var storyTeller2 = document.getElementById('story2');    
    
    storyTeller1.innerHTML = '<p class="results">' + story1 + '</p>';
    storyTeller2.innerHTML = '<p class="results">' + story2 + '</p>';
}