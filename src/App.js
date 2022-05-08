import styled from 'styled-components';
import Dropper from './Dropper';

const Container = styled.div`
  overflow: auto;
  background-color: #323232;
  width: 100vw;
  height: 100vh;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {

  return (
    <Container>
      <div>
        <h2>Why Do I Suck?</h2>
        <p>Lost Ark log breakdown on why you suck</p>
        <Dropper/>
      </div>
    </Container>
  );
}

export default App;
