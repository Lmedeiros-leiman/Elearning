import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css';
import React from 'react';
// https://github.com/HarryChen0506/react-markdown-editor-lite/tree/master

type newPostFormProps = {
    Group?: string
}

const NewPostForm : React.FC<newPostFormProps> = ({}) => {
    const [value, setValue] = React.useState("");


    const mdParser = new MarkdownIt

    return (<form className="p-4 bg-white shadow-md rounded-lg max-w-lg mx-auto space-y-4" >
        <input
            type="text"
            name="title"
            placeholder="Your post title"
            className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />


        <MdEditor value={value} onChange={({ text }: any) => { setValue(text) }}
            allowPasteImage={false}
            plugins={['font-bold', 'font-italic', 'font-strikethrough',
                'list-unordered', 'list-ordered',
                'block-quote', 'block-wrap', 'block-code-inline', 'block-code-block',
                'table',
                'link']} placeholder='Your post content...'
            view={{ menu: true, md: true, html: false }}
            renderHTML={text => mdParser.render(text)}
        />


        <button type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Post
        </button>


    </form>)
}
export default NewPostForm


