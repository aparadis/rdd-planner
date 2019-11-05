import React from "react";
import SkillButton from "./skillbutton";
import ReactTooltip from "react-tooltip";
import SkillText from "./skilltext";

const SkillTreeMageKnowledge = props => {
  return (
    <table className="table w-auto">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="knowledge"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
          <td></td>
          <td>
            <SkillText
              skillname="research"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="sharp_mind"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="herbalism"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="decipher"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
          <td className="table-primary">
            <SkillText
              skillname="energy"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("energy")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-primary">
            <SkillText
              skillname="elemental"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="identify"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
          <td className="table-primary">
            <SkillText
              skillname="osmose"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("osmose")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-primary">
            <SkillText
              skillname="blood"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="alchemy"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="enchant"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
          <td className="table-primary">
            <SkillText
              skillname="forcefield"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
            <SkillText
              skillname="disenchant"
              skilltree={props.skilltree}
              getSkillItemModText={props.getSkillItemModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
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
