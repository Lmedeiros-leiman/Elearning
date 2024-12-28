

//import MDEditor from '@uiw/react-md-editor';
//import rehypeSanitize from "rehype-sanitize";



import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it'
import 'react-markdown-editor-lite/lib/index.css';


const NewPostForm = () => {
    //const [value, setValue] = React.useState("**Hello world!!!**");


    function handleEditorChange({ html, text } : any) {
        console.log('handleEditorChange', html, text);
    }

    const mdParser = new MarkdownIt

    return (
        <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />
    )
}
export default NewPostForm


