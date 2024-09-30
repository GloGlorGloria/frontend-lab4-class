function addContent(type, content, parent){
    const element = document.createElement(type);
    //create an h1/ p element
    element.textContent = content;
    parent.appendChild(element);
}

export default function Editor(){

    function handleNewHeading(e){
        const form = document.querySelector('.editor'); //get a ref to the form
        const output = document.querySelector('.output');// get a ref to the output div
        const data = new FormData(form); //get the form data
        const heading = data.get('heading'); //retrieve the content of the input named 'heading'
        addContent('h2', heading, output); //add the text of the heading to the output area'
        e.target.previousSibling.value = '';
        console.log('Heading created')
    }

    function handleNewParagraph(e){ //e is important here
        const form = document.querySelector('.editor'); //get a ref to the form
        const output = document.querySelector('.output');// get a ref to the output div
        const data = new FormData(form); //get the form data
        const paragraph = data.get('para'); //retrieve the content of the input named 'paragraph'
        addContent('p', paragraph, output); //add the text of the paragraph to the output area'
        e.target.previousSibling.value = ''; //the word in input area will be deleted
        // console.log('Paragraph created');
      
    }

    function handleSubmit(e){
        e.preventDefault();
        const form = document.querySelector('.editor');
        const data = new FormData(form);

        console.log(data.getAll);
    }

    return(
        <form className="editor" onSubmit={handleSubmit}>
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
            <button>Submit</button>
        </form>
    )
}