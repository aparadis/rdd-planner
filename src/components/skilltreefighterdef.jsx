import React from "react";
import SkillButton from "./skillbutton";
import SkillText from "./skilltext";

const SkillTreeFighterDef = props => {
  return (
    <table className="table w-auto">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="defend"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("defend")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV3</td>
          <td>
            <SkillText
              skillname="provoke"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("provoke")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="vitality"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("vitality")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="shield"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("shield")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV5</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="iron_body"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("iron_body")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="health"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("health")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="bash"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("bash")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV10</td>
          <td>
            <SkillText
              skillname="intimidate"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("intimidate")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV15</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="table-danger">
            <SkillText
              skillname="berserk"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("berserk")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV20</td>
          <td></td>
          <td></td>
          <td></td>
          <td className="table-danger">
            <SkillText
              skillname="die_hard"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("die_hard")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
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
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default SkillTreeFighterDef;
