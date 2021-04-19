import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { radioGames, commonActions }from '../lib/css-value';

class Infection extends DomObject {

    async infection() {

        console.log('Start test infection()');

        await this.click(radioGames.infection, commonActions.showInstructions);

        await this.switchToNewWindow();

        try {

            let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
            assert.equal(headerTitle, 'Infection');
            console.debug(`The title of the current page is "${headerTitle}"`);

            await this.click(commonActions.playButton);

            await this.switchToIframe('.embed iframe');

            await this.click(commonActions.videoPlay);

            let videoTitle = await this.getText(commonActions.videoTitle);
            assert.equal(videoTitle, 'Behind the MakeCode Hardware - Radio in micro:bit');
            console.debug(`The video title is "${videoTitle}"`);

        } catch (error) {

            console.error(error);

        }

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Infection"', async () => {
            return await this.infection();
        });
    }

}
export let infection = new Infection();