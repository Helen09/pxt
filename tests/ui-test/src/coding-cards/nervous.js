import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { codingCards, commonActions} from '../lib/css-value';
class Nervous extends DomObject {

    async nervous() {

        console.log('Start test nervous()');

        await this.click(codingCards.nervous,commonActions.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('nervous');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Nervous"', async () => {
            return await this.nervous();
        });
    }

}
export let nervous = new Nervous();