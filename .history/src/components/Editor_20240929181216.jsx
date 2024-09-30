
export default function Editor(){
    return(
        <form className="editor">
            <fieldset>
                <legend>Add a heading</legend>
                <input type="text" name="heading"/>
                <button type="button" className="save">Save</button>
            </fieldset>

            <fieldset>
                <legend>Add a paragraph</legend>
                <textarea rows="5" cols="50" name="para" placeholder="type here..."/>
                <button type="button" className="save">Save</button>
            </fieldset>
        </form>
    )

}