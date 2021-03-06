/**
 * Created by Zoho on 16/9/5.
 */
import RectangleButton from 'src/components/assets/button/RectangleButton';

import { BTN_COLOR, BTN_WIDTH, BTN_HEIGHT } from 'src/lib/style';

/** ****************** Component ****************** */
const GitHubDetail = () =>
  (<div className="github-detail">
    <div className="github-name">GitHub: zohoFrank</div>
    <RectangleButton
      btnColor={BTN_COLOR}
      btnWidth={BTN_WIDTH}
      btnHeight={BTN_HEIGHT}
      text="Visit"
      clickHandler={() => {
                             // setTimeout just for visual effect
                             setTimeout(() => {
                                 window.open('https://github.com/zohoFrank');
                             }, 300);
                         }}
    />
  </div>);

/** ****************** Exports ****************** */
export default GitHubDetail;
