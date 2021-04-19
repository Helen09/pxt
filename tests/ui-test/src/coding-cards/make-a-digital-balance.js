import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { codingCards,commonActions} from '../lib/css-value';

class MakeADigitalBalance extends DomObject {

    async makeADigitalBalance() {

        console.log('Start test makeADigitalBalance()');

        await this.click(codingCards.makeADigitalBalance,commonActions.showInstructions);

        await this.switchToNewWindow();
        
        await this.catchScreenShot('makeADigitalBalance');

        await this.closeCurrentWindow();
    }

    test() {
        it('Start learning the "MakeADigitalBalance"', async () => {
            return await this.makeADigitalBalance();
        });
    }

}
export let makeADigitalBalance = new MakeADigitalBalance();