
export default function Editor(){

    function handleNewHeading(){
        console.log('Heading created')
    }

    function handleNewParagraph(){
        console.log('Paragraph')
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