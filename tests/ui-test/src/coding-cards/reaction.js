import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards, commonActions} = require('../lib/css-value');

class Reaction extends DomObject {

    async reaction() {

        console.log('Start test reaction()');

        await this.click(codingCards.reaction,commonActions.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('reaction');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "Reaction"', async () => {
            return await this.reaction();
        });
    }

}
export let reaction = new Reaction();