import React from "react";
import SkillButton from "./skillbutton";
import SkillText from "./skilltext";

const SkillTreeRogueListen = props => {
  return (
    <table className="table w-auto">
      <tbody>
        <tr>
          <td className="table-dark">LV1</td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="listen"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("listen")}
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
        </tr>
        <tr>
          <td className="table-dark">LV3</td>
          <td></td>
          <td></td>
          <td>
            <SkillText
              skillname="search"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("search")}
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
        </tr>
        <tr>
          <td className="table-dark">LV5</td>
          <td>
            <SkillText
              skillname="unlock"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("unlock")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="appraise"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("appraise")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="seduce"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("seduce")}
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
        </tr>
        <tr>
          <td className="table-dark">LV10</td>
          <td>
            <SkillText
              skillname="trap"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("trap")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="bluff"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("bluff")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td style={{ backgroundColor: "#EE82EE" }}>
            <SkillText
              skillname="sing"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("sing")}
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
        </tr>
        <tr>
          <td className="table-dark">LV15</td>
          <td>
            <SkillText
              skillname="forgery"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("forgery")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td>
            <SkillText
              skillname="bargain"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("bargain")}
              checkAllSkillDeps={props.checkAllSkillDeps}
              checkPrestigeSkill={props.checkPrestigeSkill}
              handleSkillPoint={props.handleSkillPoint}
            />
          </td>
          <td style={{ backgroundColor: "#EE82EE" }}>
            <SkillText
              skillname="music"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("music")}
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
        </tr>
        <tr>
          <td className="table-dark">LV20</td>
          <td className="table-primary">
            <SkillText
              skillname="craft"
              skilltree={props.skilltree}
              getSkillModText={props.getSkillModText}
              getSkillPoints={props.getSkillPoints}
              getSkillId={props.getSkillId}
            />
          </td>
          <td>
            <SkillButton
              skilltreeindex={props.getSkillIndex("craft")}
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
        </tr>
      </tbody>
    </table>
  );
};

export default SkillTreeRogueListen;
