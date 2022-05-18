import styled from 'styled-components/macro';
import * as MathJS from 'mathjs';
import { useState, useEffect } from 'react';

const StyledDiv = styled.div`
  .grid {
    display: flex;
  }

  .expressions textarea {
    min-height: 400px;
  }

  .result {
    margin-left: 20px;
    min-width: 100px;
    background: #e7e7e7;
    display: flex;
    flex-direction: column;

    textarea {
      background: none;
      border: 0;
      height: 100%;
    }
  }
`;

const mathJsScope = {};

export default function App() {
  const [textArea, setTextArea] = useState('');
  const [resultArray, setResultArray] = useState([]);
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

    setResultArray(evaluatedLines);
    setResultTextArea(evaluatedLines.join('\n'));
  }, [textArea, setResultArray]);

  return (
    <StyledDiv>
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
