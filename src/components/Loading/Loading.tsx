import styled from 'styled-components';

export interface LoadingProps {
  open: boolean;
}

const Container = styled.div`
  position: absolute;
  inset: 0;
  margin: auto;
  z-index: 100;
  display: grid;
  place-content: center;
  background: #1d355d;
`;

const CircleSpinnerBox = styled.div`
  position: relative;
  width: 80px;
  height: 80px;

  div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 64px;
    height: 64px;
    margin: 8px;
    border: 8px solid #fff;
    border-radius: 50%;
    animation: spinner-kf 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #fff transparent transparent transparent;
  }
  div:nth-child(1) {
    animation-delay: -0.45s;
  }
  div:nth-child(2) {
    animation-delay: -0.3s;
  }
  div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes spinner-kf {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Loading: React.FC<LoadingProps> = ({ open }) => {
  return open ? (
    <Container>
      <CircleSpinnerBox>
        <div></div>
        <div></div>
        <div></div>
      </CircleSpinnerBox>
    </Container>
  ) : (
    <></>
  );
};

export default Loading;
