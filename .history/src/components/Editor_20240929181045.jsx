
export default function Editor(){
    return(
        <form className="editor">
            <fieldset>
                <legend>Add a heading</legend>
                <input type="text" name="heading"/>
                <button type="button" className="save">Save</button>
            </fieldset>
        </form>
    )

}