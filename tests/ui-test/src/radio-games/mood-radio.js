import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { radioGames, commonActions }from '../lib/css-value';

class MoodRadio extends DomObject {

    async moodRadio() {

        console.log('Start test moodRadio()');

        await this.click(radioGames.moodRadio, commonActions.showInstructions);

        await this.switchToIframe(commonActions.idOfIframe);
        try {
            let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
            assert.equal(headerTitle, 'Mood Radio');
            console.debug(`The header of the sidedocs is "${headerTitle}"`);
        } catch (error) {
            console.error(error);
        }

        await this.switchToDefaultFrame();

        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the Mood Radio', async () => {
            return await this.moodRadio();
        });
    }

}
export let moodRadio = new MoodRadio();