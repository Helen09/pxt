import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { games, commonActions } from '../lib/css-value';

class CrashyBird extends DomObject {

    async crashyBird() {

        console.log('Start test crashyBird()');

        await this.click(games.crashyBird, commonActions.showInstructions);

        await this.switchToNewWindow();
        
        let headerTitle = await this.getText(commonActions.titleOfNewOpenedWindow);
        assert.equal(headerTitle, 'Crashy Bird');
        console.debug(`The title of the current page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the Crashy Bird', async () => {
            return await this.crashyBird();
        });
    }

}
export let crashyBird = new CrashyBird();