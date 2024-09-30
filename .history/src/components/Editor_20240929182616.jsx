function addContent(type, content, parent){
    const element = document.createElement(type);
    //create an h1/ p element
    element.textContent = content;
    parent.appendChild(element);
}

export default function Editor(){

    function handleNewHeading(e){
        const from = document.querySelector('.editor'); //get a ref to the form
        const output = document.querySelector('.output');// get a ref to the output div
        const data = new FormData(form); //get the form data
        const heading = data.get('heading'); //retrieve the content of the input named 'heading'
        addContent('h2', heading, output); //add the text of the heading to the output area'
        console.log('Heading created')
    }

    function handleNewParagraph(){
        console.log('Paragraph created');
    }

    return(
        <form className="editor">
            <fieldset>
                <legend>Add a heading</legend>
                <input type="text" name="heading"/>
                <button type="button" className="save" onClick={handleNewHeading}>Save</button>
            </fieldset>

            <fieldset>
                <legend>Add a paragraph</legend>
                <textarea rows="5" cols="50" name="para" placeholder="type here..."/>
                <button type="button" className="save" onClick={handleNewParagraph}>Save</button>
            </fieldset>
        </form>
    )
}