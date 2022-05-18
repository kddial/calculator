import styled from 'styled-components/macro';
import * as MathJS from 'mathjs';
import { useState } from 'react';

const StyledDiv = styled.div`
  .grid {
    display: flex;
  }

  .result {
    margin-left: 20px;
    min-width: 100px;
    background: #e7e7e7;
  }
`;

export default function App() {
  const [textArea, setTextArea] = useState('');
  const [expressionArray, setExpressionArray] = useState([]);
  const [resultArray, setResultArray] = useState([]);

  function onTextAreaChange(event) {
    setTextArea(event.target.value);
  }

  return (
    <StyledDiv>
      <div className="grid">
        <div className="expressions">
          Expressions: <br />
          <textarea value={textArea} onChange={onTextAreaChange} />
        </div>
        <div className="result">Result:</div>
      </div>
    </StyledDiv>
  );
}
