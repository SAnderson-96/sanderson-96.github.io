document.addEventListener('DOMContentLoaded', function (event)
{
    // array with texts to type in typewriter
    var dataText = ["Console.log(\"Welcome\");", "Console.WriteLine(\"Welcome\");", "System.out.prinln(\"Welcome\");", "std::cout << \"Welcome\";"];

    // type one text in the typewriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback)
    {
        // check if text isn't finished yet
        if (i < (text.length))
        {
            // add next character to h1
            document.querySelector("#typewriter").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

            // wait for a while and call this function again for next character
            setTimeout(function ()
            {
                typeWriter(text, i + 1, fnCallback);
            }, getRandomMsKeystrokeValue(100, 200));
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function')
        {
            // call callback after timeout
            setTimeout(fnCallback, 1000);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i)
    {
        if (typeof dataText[i] == 'undefined')
        {
            setTimeout(function ()
            {
                StartTextAnimation(0);
            }, 5000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length)
        {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function ()
            {
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});


function getRandomMsKeystrokeValue(min, max)
{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}