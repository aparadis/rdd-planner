import React from "react";
import SkillButton from "./skillbutton";
import ReactTooltip from "react-tooltip";
import SkillText from "./skilltext";

const SkillTreeMageCast = props => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="cast"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("cast")}
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
              skillname="wand"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("wand")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV3</td>
          <td>
            <SkillText
              skillname="fire"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("fire")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="lightning"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("lightning")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="ice"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("ice")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV5</td>
          <td>
            <SkillText
              skillname="fireball"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("fireball")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="levitate"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("levitate")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="ice_armor"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("ice_armor")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV10</td>
          <td>
            <SkillText
              skillname="burn"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("burn")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="storm"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("storm")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="teleport"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("teleport")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="ice_shield"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("ice_shield")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV15</td>
          <td>
            <SkillText
              skillname="lava_blood"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("lava_blood")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="counter"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("counter")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="portal"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("portal")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="freeze"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("freeze")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV20</td>
          <td className="table-danger">
            <SkillText
              skillname="demon"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("demon")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="illusion"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("illusion")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="blizzard"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("blizzard")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SkillTreeMageCast;
