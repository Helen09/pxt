import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { codingCards, commonActions} = require('../lib/css-value');

class MakeADigitalDice extends DomObject {

    async makeADigitalDice() {

        console.log('Start test makeADigitalDice()');

        await this.click(codingCards.makeADigitalDice,commonActions.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeADigitalDice');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeADigitalDice"', async () => {
            return await this.makeADigitalDice();
        });
    }

}
export let makeADigitalDice = new MakeADigitalDice();