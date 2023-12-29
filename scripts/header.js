const myLinks = document.querySelectorAll("div.links-container > a");
function checkUnderline(element)
{
    const boolValue = element.classList.contains("underline");
    if (boolValue)
    {
        element.classList.remove("underline");
    }
}
function checkListener(event)
{
    // event.preventDefault(); 
    myLinks.forEach(checkUnderline);
    const elementClassList = event.currentTarget.classList;
    elementClassList.add("underline");
}
function listenEvent(element)
{
    element.addEventListener("click", checkListener);
}
myLinks.forEach(listenEvent);
