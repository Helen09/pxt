import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { radioGames, commonActions }from '../lib/css-value';

class HotOrCold extends DomObject {

    async hotOrCold() {

        console.log('Start test hotOrCold()');

        await this.click(radioGames.hotOrCold, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Hot or Cold');
        console.debug(`The title of the current page is "${headerTitle}"`);

        await this.click(commonActions.playButton);

        await this.switchToIframe('.embed iframe');

        await this.click(commonActions.videoPlay);

        let videoTitle = await this.getText(commonActions.videoTitle);
        assert.equal(videoTitle, 'micro:bit hot or cold');
        console.debug(`The video title is "${videoTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Hot or Cold"', async () => {
            return await this.hotOrCold();
        });
    }

}
export let hotOrCold = new HotOrCold();