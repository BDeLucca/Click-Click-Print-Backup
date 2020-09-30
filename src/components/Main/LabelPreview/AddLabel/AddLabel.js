import React, { useContext } from "react";
import { StateContext } from "../../../../context";
import "./AddLabel.css";

function AddLabel() {
  const {
    setLabel,
    setLabelsArray,
    label,
    labelsArray,
    setSelectedId,
  } = useContext(StateContext);
  function addLabelhandle() {
    const emptylabel = labelsArray.find(({ id }) => id === "");
    if (emptylabel) {
      setSelectedId("");
      setLabel({
        id: "",
        productName: "",
        chemicalFormula: "",
        description: "",
        owner: "",
        contactInfo: "",
        date: "",
        eDate: "",
        symbols: [],
        NFPA: {
          redDiamond: "",
          blueDiamond: "",
          yellowDiamond: "",
          whiteDiamond: "",
        },
      });
    } else {
      setLabel({
        id: "",
        productName: "",
        chemicalFormula: "",
        description: "",
        owner: "",
        contactInfo: "",
        date: "",
        eDate: "",
        symbols: [],
        NFPA: {
          redDiamond: "",
          blueDiamond: "",
          yellowDiamond: "",
          whiteDiamond: "",
        },
      });
      setLabelsArray([...labelsArray, label]);
      setSelectedId("");
    }
  }

  return (
    <div className="addlabel-wrapper">
      <img
        className="addLabel"
        src={require("../../../../assets/extras/add.svg")}
        alt="addsymbol"
        onClick={addLabelhandle}
      ></img>
    </div>
  );
}

export default AddLabel;