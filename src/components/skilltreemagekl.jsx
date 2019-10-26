import React from "react";
import SkillButton from "./skillbutton";
import ReactTooltip from "react-tooltip";

const SkillTreeMageKnowledge = props => {
  return (
    <table className="table table-sm">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <span data-tip={props.getSkillItemModText("knowledge")}>
              <ReactTooltip effect="solid" />
              Knowledge ({props.getSkillPoints("knowledge")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("knowledge")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV3</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td> </td>
          <td>
            {" "}
            <span data-tip={props.getSkillItemModText("research")}>
              <ReactTooltip effect="solid" />
              Research ({props.getSkillPoints("research")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("research")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV5</td>
          <td></td>
          <td>
            {" "}
            <span data-tip={props.getSkillItemModText("sharp_mind")}>
              <ReactTooltip effect="solid" />
              Sharp Mind ({props.getSkillPoints("sharp_mind")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("sharp_mind")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>

          <td></td>
          <td></td>
          <td></td>
          <td>
            {" "}
            <span data-tip={props.getSkillItemModText("herbalism")}>
              <ReactTooltip effect="solid" />
              Herbalism ({props.getSkillPoints("herbalism")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("herbalism")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            {" "}
            <span data-tip={props.getSkillItemModText("decipher")}>
              <ReactTooltip effect="solid" />
              Decipher ({props.getSkillPoints("decipher")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("decipher")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
        <tr>
          <td className="table-dark">LV10</td>
          <td className="table-info">
            {" "}
            <span data-tip={props.getSkillItemModText("energy")}>
              <ReactTooltip effect="solid" />
              Energy ({props.getSkillPoints("energy")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("energy")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-info">
            {" "}
            <span data-tip={props.getSkillItemModText("elemental")}>
              <ReactTooltip effect="solid" />
              Elemental ({props.getSkillPoints("elemental")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("elemental")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            {" "}
            <span data-tip={props.getSkillItemModText("identify")}>
              <ReactTooltip effect="solid" />
              Identify ({props.getSkillPoints("identify")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("identify")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
        <tr>
          <td className="table-dark">LV15</td>
          <td className="table-info">
            {" "}
            <span data-tip={props.getSkillItemModText("osmose")}>
              <ReactTooltip effect="solid" />
              Osmose ({props.getSkillPoints("osmose")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("osmose")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-info">
            {" "}
            <span data-tip={props.getSkillItemModText("blood")}>
              <ReactTooltip effect="solid" />
              Blood ({props.getSkillPoints("blood")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("blood")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td style={{ backgroundColor: "#EE82EE" }}>
            {" "}
            <span data-tip={props.getSkillItemModText("alchemy")}>
              <ReactTooltip effect="solid" />
              Alchemy ({props.getSkillPoints("alchemy")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("alchemy")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-danger">
            {" "}
            <span data-tip={props.getSkillItemModText("enchant")}>
              <ReactTooltip effect="solid" />
              Enchant ({props.getSkillPoints("enchant")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("enchant")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
        <tr>
          <td className="table-dark">LV20</td>
          <td className="table-info">
            {" "}
            <span data-tip={props.getSkillItemModText("forcefield")}>
              <ReactTooltip effect="solid" />
              Forcefield ({props.getSkillPoints("forcefield")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("forcefield")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="table-danger">
            {" "}
            <span data-tip={props.getSkillItemModText("disenchant")}>
              <ReactTooltip effect="solid" />
              Disenchant ({props.getSkillPoints("disenchant")})
            </span>
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("disenchant")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SkillTreeMageKnowledge;
