function search() 
{
    var x = document.getElementById('searchbar').value
    if(x.length == 0)
    {
        x += "main";
    }
    window.location.href = '../pages/' + x + '.html';
    return false;
}