import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { turtle, commonActions } from '../lib/css-value';

class Spiral extends DomObject {

    async spiral() {

        console.log('Start test spiral()');

        await this.click(turtle.spiral, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        try {
            let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
            assert.equal(headerTitle, 'Turtle Spiral');
            console.debug(`The header of the sidedocs is "${headerTitle}"`);
        } catch (error) {
            console.error(error);
        }

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the "Turtle Spiral"', async () => {
            return await this.spiral();
        });
    }

}
export let spiral = new Spiral();