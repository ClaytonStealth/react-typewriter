import { useState, useRef, useEffect } from "react";
import "./App.css";

const deepClone = (object) => {
  /* This function will create a "deep-clone" of an object which is necessary
	when creating a copy an object with multiple nested layers of objects or arrays. */
  return JSON.parse(JSON.stringify(object));
};

const App = () => {
  return (
    <div className='App-header'>
      <KeyboardGrid />
    </div>
  );
};

const KeyboardGrid = (props) => {
  const keyBoardArr = [
    [
      { letter: "`", isPressed: false },
      { letter: "1", isPressed: false },
      { letter: "2", isPressed: false },
      { letter: "3", isPressed: false },
      { letter: "4", isPressed: false },
      { letter: "5", isPressed: false },
      { letter: "6", isPressed: false },
      { letter: "7", isPressed: false },
      { letter: "8", isPressed: false },
      { letter: "9", isPressed: false },
      { letter: "0", isPressed: false },
      { letter: "-", isPressed: false },
      { letter: "=", isPressed: false },
      { letter: "Backspace", isPressed: false },
    ],
    [
      { letter: "Tab", isPressed: false },
      { letter: "Q", isPressed: false },
      { letter: "W", isPressed: false },
      { letter: "E", isPressed: false },
      { letter: "R", isPressed: false },
      { letter: "T", isPressed: false },
      { letter: "Y", isPressed: false },
      { letter: "U", isPressed: false },
      { letter: "I", isPressed: false },
      { letter: "O", isPressed: false },
      { letter: "P", isPressed: false },
      { letter: "[", isPressed: false },
      { letter: "]", isPressed: false },
      { letter: "\\", isPressed: false },
    ],
    [
      { letter: "CapsLock", isPressed: false },
      { letter: "A", isPressed: false },
      { letter: "S", isPressed: false },
      { letter: "D", isPressed: false },
      { letter: "F", isPressed: false },
      { letter: "G", isPressed: false },
      { letter: "H", isPressed: false },
      { letter: "J", isPressed: false },
      { letter: "K", isPressed: false },
      { letter: "L", isPressed: false },
      { letter: ";", isPressed: false },
      { letter: "'", isPressed: false },
      { letter: "Enter", isPressed: false },
    ],
    [
      { letter: "Shift", isPressed: false },
      { letter: "Z", isPressed: false },
      { letter: "X", isPressed: false },
      { letter: "C", isPressed: false },
      { letter: "V", isPressed: false },
      { letter: "B", isPressed: false },
      { letter: "N", isPressed: false },
      { letter: "M", isPressed: false },
      { letter: ",", isPressed: false },
      { letter: ".", isPressed: false },
      { letter: "/", isPressed: false },
      { letter: "Shift", isPressed: false },
    ],
    [{ letter: " ", isPressed: false }],
  ];

  const [keyRows, setKeyRows] = useState(keyBoardArr);

  const handleKeyDown = (event) => {
    console.log(event.key);

    const keyRowsCopy = [...keyRows];
    const keyMapping = keyRowsCopy.map((keyRow) => {
      return keyRow.map((key) => {
        if (key.letter === event.key.toUpperCase()) {
          key.isPressed = true;
          return key;
        } else {
          return key;
        }
      });
    });
    setKeyRows(keyMapping);
    // console.log(keyMapping);
    // console.log(keyRowsCopy.flat());
    // const keyRow = keyRowsCopy.flat().find((keyRow) => {
    //   return keyRow.letter === event.key.toUpperCase();
    // });
    // console.log(keyRow);
  };

  const handleKeyUp = (event) => {
    // console.log(event.key);
    const keyRowsCopy = [...keyRows];
    const keyMapping = keyRowsCopy.map((keyRow) => {
      return keyRow.map((key) => {
        if (key.letter === event.key.toUpperCase()) {
          key.isPressed = false;
          return key;
        } else {
          return key;
        }
      });
    });
    setKeyRows(keyMapping);
  };

  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <div
      className='Keyboard-grid'
      ref={ref}
      tabIndex={-1}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
    >
      {keyRows.map((keyRow, index) => {
        return <KeyboardRow keyRow={keyRow} key={index} />;
      })}
    </div>
  );
};

const KeyboardRow = (props) => {
  return (
    <div className='Keyboard-row'>
      {props.keyRow.map((keyObject, index) => {
        return <KeyboardKey keyObject={keyObject} key={index} />;
      })}
    </div>
  );
};
const KeyboardKey = (props) => {
  return (
    <div
      className='Keyboard-key'
      style={props.keyObject.isPressed ? { color: "green" } : { color: "red" }}
    >
      {props.keyObject.letter}
    </div>
  );
};

export default App;
