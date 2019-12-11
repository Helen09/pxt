import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { courses, commonActions } = require('../lib/css-value');

class LearnAllAboutMicrobit extends DomObject {

    async learnAllAboutMicrobit() {

        await this.click(courses.learnAllAboutMicrobit, commonActions.showInstructions);

        await this.switchToNewWindow();

        await this.click(courses.firstjpg);

        await this.catchScreenShot('booklet_cover');

        await this.click(courses.goBackButton);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "Learn All About Microbit"', async () => {
            return await this.learnAllAboutMicrobit();
        });
    }

}
export let learnAllAboutMicrobit = new LearnAllAboutMicrobit();