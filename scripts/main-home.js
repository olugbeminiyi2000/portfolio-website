function homeSectionDisplay()
{
    const homeSection = document.querySelector(".all-home-section");
    const divHeading = document.querySelector("div.home-heading");
    const divParagraph = document.querySelector("div.home-paragraph");

    // Get homeSection classlist.
    const sectionList = homeSection.classList;
    if (sectionList.contains("home-section"))
    {
        sectionList.remove("home-section");
        sectionList.add("home-section-1");
        // Get the child of div heading and div paragraphs
        const divHeadingChild = document.querySelector("div.home-heading > h1");
        const divParagraphChild = document.querySelector("div.home-paragraph > p");

        // Now remove those child from their respective parent
        divHeading.removeChild(divHeadingChild);
        divParagraph.removeChild(divParagraphChild);

        // Now create new heading and paragraph for those parent
        // heading element creation
        const newHeading = document.createElement("h1");
        const textNode1 = document.createTextNode("I am");
        const textNode2 = document.createTextNode("a Software Engineer");
        // append text nodes and break to heading
        newHeading.appendChild(textNode1);
        newHeading.appendChild(document.createElement("br"));
        newHeading.appendChild(textNode2);
        divHeading.appendChild(newHeading);
        // paragraph element creation
        const newParagraph = document.createElement("p");
        // strong element creation
        const newStrong = document.createElement("strong");
        // insert text to strong
        newStrong.textContent = "Emmanuel here ";
        //append strong element to paragraph
        newParagraph.appendChild(newStrong);
        // add remaining text to new paragraph
        const textNode3 = document.createTextNode("I love using cutting-edge solutions to tackle real challenges.");
        const textNode4 = document.createTextNode("In tech, I'm all about learning, collaborating, and making a positive impact.");
        const textNode5 = document.createTextNode("Curiosity is my compass in the ever-evolving digital world.");
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode3);
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode4);
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode5);
        // append paragraph to div paragraph
        divParagraph.appendChild(newParagraph);
    }
    else if (sectionList.contains("home-section-1"))
    {
        sectionList.remove("home-section-1");
        sectionList.add("home-section-2");
        // Get the child of div heading and div paragraphs
        const divHeadingChild = document.querySelector("div.home-heading > h1");
        const divParagraphChild = document.querySelector("div.home-paragraph > p");

        // Now remove those child from their respective parent
        divHeading.removeChild(divHeadingChild);
        divParagraph.removeChild(divParagraphChild);

        // Now create new heading and paragraph for those parent
        // heading element creation
        const newHeading = document.createElement("h1");
        const textNode1 = document.createTextNode("Beyond Algorithms:");
        const textNode2 = document.createTextNode("I have a Passion for Sports");
        // append text nodes and break to heading
        newHeading.appendChild(textNode1);
        newHeading.appendChild(document.createElement("br"));
        newHeading.appendChild(textNode2);
        divHeading.appendChild(newHeading);
        // paragraph element creation
        const newParagraph = document.createElement("p");
        // strong element creation
        const newStrong = document.createElement("strong");
        // insert text to strong
        newStrong.textContent = "Beyond the realm of code and algorithms, ";
        //append strong element to paragraph
        newParagraph.appendChild(newStrong);
        // add remaining text to new paragraph
        const textNode3 = document.createTextNode("My joy lies in books, outdoor adventures, and culinary experiments.");
        const textNode4 = document.createTextNode("Join me in the intersection of technology and passion,");
        const textNode5 = document.createTextNode("crafting something extraordinary together.");
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode3);
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode4);
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode5);
        // append paragraph to div paragraph
        divParagraph.appendChild(newParagraph);
    }

    else
    {
        sectionList.remove("home-section-2");
        sectionList.add("home-section");
        // Get the child of div heading and div paragraphs
        const divHeadingChild = document.querySelector("div.home-heading > h1");
        const divParagraphChild = document.querySelector("div.home-paragraph > p");

        // Now remove those child from their respective parent
        divHeading.removeChild(divHeadingChild);
        divParagraph.removeChild(divParagraphChild);

        // Now create new heading and paragraph for those parent
        // heading element creation
        const newHeading = document.createElement("h1");
        const textNode1 = document.createTextNode("Hi!");
        const textNode2 = document.createTextNode("I'm Emmanuel");
        // append text nodes and break to heading
        newHeading.appendChild(textNode1);
        newHeading.appendChild(document.createElement("br"));
        newHeading.appendChild(textNode2);
        divHeading.appendChild(newHeading);
        // paragraph element creation
        const newParagraph = document.createElement("p");
        // strong element creation
        const newStrong = document.createElement("strong");
        // insert text to strong
        newStrong.textContent = "A Passionate Code Craftsman ";
        //append strong element to paragraph
        newParagraph.appendChild(newStrong);
        // add remaining text to new paragraph
        const textNode3 = document.createTextNode("Building Tomorrow's Solutions Today.");
        newParagraph.appendChild(document.createElement("br"));
        newParagraph.appendChild(textNode3);
        // append paragraph to div paragraph
        divParagraph.appendChild(newParagraph);
    }
}
function switchContent()
{
    setInterval(homeSectionDisplay, 8000);
}
window.addEventListener('load', switchContent);
