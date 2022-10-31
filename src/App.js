import "./App.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import SegmentForm from "./components/SegmentForm";
import DialogBox from "./components/DialogBox";

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="App">
      <Button
        className="btnSave"
        onClick={() => setShowPopup(!showPopup)}
        variant="outline-info"
      >
        Save Segment
      </Button>
      <DialogBox
        showPopup={showPopup}
        handleClose={() => setShowPopup(false)}
        title="Saving Segment"
      >
        <SegmentForm />
      </DialogBox>
    </div>
  );
}

export default App;
