import styled from 'styled-components/macro';
import * as MathJS from 'mathjs';
import { useState, useEffect } from 'react';

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;

  .grid {
    display: flex;
  }

  textarea {
    font-size: 18px;
    line-height: 2;
  }

  .expressions textarea {
    min-height: 400px;
    min-width: 400px;
  }

  .result {
    margin-left: 20px;
    min-width: 100px;
    display: flex;
    flex-direction: column;

    textarea {
      background: #e7e7e7;
      resize: none;
      border: 0;
      height: 100%;
    }
  }

  p {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const mathJsScope = {};

export default function App() {
  const [textArea, setTextArea] = useState(
    'wage = 12 \nhours = 40 \nwage * hours',
  );
  const [resultTextArea, setResultTextArea] = useState('');

  function onTextAreaChange(event) {
    setTextArea(event.target.value);
  }

  useEffect(() => {
    const newLines = textArea.split('\n');
    const evaluatedLines = newLines.map((line) => {
      if (line === '') {
        return '';
      }
      let result;
      try {
        result = MathJS.evaluate(line, mathJsScope);
      } catch (err) {
        result = '...';
      }
      return result;
    });

    setResultTextArea(evaluatedLines.join('\n'));
  }, [textArea, setResultTextArea]);

  return (
    <StyledDiv>
      <p>
        Enter your expressions on the left and your results will display on the
        right. Powered by{' '}
        <a
          href="https://mathjs.org/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Math.js
        </a>
      </p>

      <div className="grid">
        <div className="expressions">
          Expressions: <br />
          <textarea value={textArea} onChange={onTextAreaChange} />
        </div>

        <div className="result">
          Result:
          <textarea value={resultTextArea} readOnly />
        </div>
      </div>
    </StyledDiv>
  );
}
