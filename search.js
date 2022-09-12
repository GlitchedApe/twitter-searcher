function Search()
{
    const searchbutton = document.getElementById("searchbutton");
    const usernamefield = document.getElementById("searchfield");
    var usernamevalue = usernamefield.value;
    const yearselect_from = document.getElementById("yearselect_from");
    const yearselect_to = document.getElementById("yearselect_to");
    var selectedyear_from = yearselect_from.options[yearselect_from.selectedIndex].text;
    var selectedyear_to = yearselect_to.options[yearselect_to.selectedIndex].text;

    if (selectedyear_from != selectedyear_to && usernamevalue != "" && selectedyear_from < selectedyear_to)
    {
        var finallink = "https://twitter.com/search?q=(from%3A" + usernamevalue + ")%20until%3A" + selectedyear_to + "-01-01%20since%3A" + selectedyear_from + "-01-01&src=typed_query&f=top"
        window.open(finallink);

        if (document.getElementById("errormsg").style.display == "block")
        {
            document.getElementById("errormsg").style.display = "none";
        }
    }
    else
    {
        document.getElementById("errormsg").style.display = "block";
    }
}