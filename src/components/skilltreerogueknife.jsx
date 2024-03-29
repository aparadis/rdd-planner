import React from "react";
import SkillButton from "./skillbutton";
import SkillText from "./skilltext";

const SkillTreeRogueKnife = props => {
  return (
    <table className="table w-auto">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td>
            <SkillText
              skillname="climb"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("climb")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="hide"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("hide")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="knife"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("knife")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV3</td>
          <td>
            <SkillText
              skillname="jump"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("jump")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="sneak"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("sneak")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="shoot"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("shoot")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="kendo"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("kendo")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>

        <tr>
          <td className="table-dark">LV5</td>
          <td>
            <SkillText
              skillname="dodge"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("dodge")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="stab"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("stab")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td>
            <SkillText
              skillname="luck"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("luck")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>

          <td>
            <SkillText
              skillname="fish"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("fish")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="dual"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("dual")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
        <tr>
          <td className="table-dark">LV10</td>
          <td>
            <SkillText
              skillname="escape"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("escape")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="steal"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("steal")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td className="table-dark">LV15</td>
          <td className="table-danger">
            <SkillText
              skillname="ninjutsu"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("ninjutsu")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="gold"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("gold")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td className="table-success">
            <SkillText
              skillname="treasure"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("treasure")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-danger">
            <SkillText
              skillname="wushu"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("wushu")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
        <tr>
          <td className="table-dark">LV20</td>
          <td></td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="kill"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("kill")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="loot"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("loot")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td></td>
          <td></td>
          <td className="table-success">
            <SkillText
              skillname="catch"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("catch")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default SkillTreeRogueKnife;
