import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { codingCards, commonActions} from '../lib/css-value';
class MakeATrundleWheel extends DomObject {

    async makeATrundleWheel() {

        console.log('Start test makeATrundleWheel()');

        await this.click(codingCards.makeATrundleWheel,commonActions.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeATrundleWheel');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeATrundleWheel"', async () => {
            return await this.makeATrundleWheel();
        });
    }

}
export let makeATrundleWheel = new MakeATrundleWheel();