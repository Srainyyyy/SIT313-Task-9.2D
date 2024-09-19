import React, { useState } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import ReactMarkdown from 'react-markdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript'; // 支持 JavaScript 语法

const PostPage = () => {
  const [code, setCode] = useState('');

  return (
    <div>
      <h2>Write Your Post</h2>
      <CodeMirror
        value={code}
        options={{
          mode: 'javascript',
          theme: 'default',
          lineNumbers: true,
        }}
        onBeforeChange={(editor, data, value) => setCode(value)}
      />
      <h3>Preview</h3>
      <ReactMarkdown>{code}</ReactMarkdown>
    </div>
  );
};

export default PostPage;
