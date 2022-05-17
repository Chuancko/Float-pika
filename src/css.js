const string = `
body{
  background-color: #fcf7c5;
}
.pikachu {
  position: relative;
  animation: floaty 5s ease-in-out infinite;
}
.head {
  z-index: 10;
  height: 9rem;
  width: 10rem;
  position: relative;
}
.head > .face {
  width: 100%;
  height: 100%;
  position: absolute;
  border-top-left-radius: 50% 4.75rem;
  border-top-right-radius: 50% 4.75rem;
  border-bottom-left-radius: 50% 3rem;
  border-bottom-right-radius: 50% 3rem;
  overflow: hidden;
  background-color: #f9ed7c;
  will-change: transform, opacity;
}
.face::before,
.face::after {
  content: "";
  bottom: 1.125rem;
  height: 1.5rem;
  width: 1.75rem;
  border-radius: 50%;
  background-color: #e65a41;
  position: absolute;
}
.face::before {
  left: -0.2rem;
}
.face::after {
  right: -0.2rem;
}
.head > .face > .eyes {
  width: 20px;
  height: 20px;
  bottom: 2.5rem;
  background: #444;
  border-radius: 45% 50% 45% 50%;
  transform-origin: center 70%;
  animation: blinky 7s infinite;
  position: absolute;
}
.eyes::before {
  content: "";
  top: 15%;
  left: 20%;
  width: 30%;
  height: 30%;
  background: white;
  border-radius: 50%;
  position: absolute;
}
.eyeL {
  left: 1.25rem;
}
.eyeR {
  right: 1.25rem;
}
.nose {
  width: 0.25rem;
  height: 0.125rem;
  bottom: 2.5rem;
  left: calc(50%);
  border-radius: 50%;
  background-color: #444;
  position: absolute;
}
.head > .ears {
  top: -1rem;
  width: 2rem;
  height: 3.75rem;
  overflow: hidden;
  background-color: #f9ed7c;
  border-top-left-radius: 50% 3rem;    border-top-right-radius: 50% 3rem;
  transform-origin: bottom center;
  position: absolute;
  }
.ears::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 40%;
  content: "";
  background-color: #444;
  position: absolute;
}
.earL {
  left: 0;
  transform: rotate(-40deg);
  animation: rotateEarL 5s infinite;
}
.earL::before {
  transform-origin: bottom left;
  transform: rotate(-15deg);
}
.earR {
  right: 0;
  transform: rotate(40deg);
  animation: rotateEarR 5s infinite;
}
.body {
  width: 9rem;
  height: 8rem;
  right: -2rem;
  position: absolute;
  top: 45%;
  z-index: 9;
}
.mainBody {
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  background: #f9ed7c;
  transform: skew(15deg);
  border-top-left-radius: 50% 5.5rem;
  border-top-right-radius: 50% 5.5rem;
  border-bottom-left-radius: 40% 2.5rem;
  border-bottom-right-radius: 40% 2.5rem;
}
.mainBody::before,
.mainBody::after {
  content: "";
  right: 0;
  bottom: 65%;
  width: 2rem;
  height: 0.75rem;
  position: absolute;
  background-color: #9c5200;
  border-top-left-radius: 2rem 50%;
  border-bottom-left-radius: 2rem 50%;
  transform: rotate(-25deg);
  transform-origin: right center;
}
.mainBody::before {
  right: -1rem;
  top: 40%;
}
.mainBody::after {
  right: -0.5rem;
}
.arms {
  z-index: 9;
  width: 1.5rem;
  height: 1.5rem;
  position: absolute;
  background-color: #f7e64b;
  border: top left radius 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 3rem 5.5rem;
  border-bottom-right-radius: 3rem 5.5rem;
  transform-origin: top center;
}
.armL {
  top: 50%;
  left: -1.125rem;
  animation: rotateArmL 5s infinite;
}
.armR {
  top: 50%;
  left: 4.25rem;
  animation: rotateArmR 5s infinite;
}
.legs {
  z-index: 1;
  width: 1.25rem;
  height: 1.75rem;
  position: absolute;
  background-color: #f7e64b;
  border: top left radius 0.25rem;
  border-top-right-radius: 0.25rem;
  border-bottom-left-radius: 3rem 5.5rem;
  border-bottom-right-radius: 3rem 5.5rem;
  transform-origin: top center;
}
.legL {
  bottom: 0;
  left: 1rem;
  animation: rotateLegL 2s infinite;
}
.legR {
  top: 90%;
  right: 0.75rem;
  animation: rotateLegR 2s infinite;
}
.tail {
  width: 1rem;
  height: 1.5rem;
  top: 40%;
  right: -0.5rem;
  position: absolute;
  transform: rotate(45deg);
  background-color: #9c5200;
  transform-origin: bottom center;
  animation: rotateTail 5s infinite;
}
.tail::before,
.tail::after {
  content: "";
  position: absolute;
  background-color: #f9ed7c;
}
.tail::before {
  top: -1.5rem;
  right: 0.36rem;
  height: 2rem;
  width: 1.25rem;
  transform: rotate(-90deg);
  border-top-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
}
.tail::after {
  height: 2rem;
  width: 1.25rem;
  top: -2.75rem;
  right: 0.72rem;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
}
@keyframes rotateEarL {
  0%, 100% {
    transform: rotate(-35deg);
  }
  50% {
    transform: rotate(-40deg);
  }
}
@keyframes rotateEarR {
  0%, 100% {
    transform: rotate(35deg);
  }
  50% {
    transform: rotate(45deg);
  }
}
@keyframes rotateArmL {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(25deg);
  }
}
@keyframes rotateArmR {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-25deg);
  }
}
@keyframes rotateLegL {
  0%, 100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(20deg);
  }
}
@keyframes rotateLegR {
  0%,100% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(-25deg);
  }
}
@keyframes rotateTail {
  0%, 100% {
    transform: rotate(45deg);
  }
  50% {
    transform: rotate(55deg);
  }
}
@keyframes floaty {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(1rem);
  }
}
@keyframes blinky {
  0%, 9%, 11%, 19%, 21%, 69%, 71%, 100% {
    transform: scaleY(1);
  }
  10%, 20%, 70% {
    transform: scaleY(0.1);
  }
}
`;

export default string;
