import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { courses, commonActions } from '../lib/css-value';

class AZRobotics extends DomObject {

    async azRobotics() {

        console.log('Start test azRobotics()');

        await this.click(courses.azRobotics, commonActions.showInstructions);

        await this.switchToNewWindow();

        let headerTitle = await this.getText(courses.courseTitle);
        assert.equal(headerTitle, "A-Z Robotics: Learn coding & electronics on MicroBit through fun projects");
        console.debug(`The header of the new page is "${headerTitle}"`);

        await this.closeCurrentWindow();

        await this.click(commonActions.closeButton);

    }

    test() {
        it('Start learning the "A-Z Robotics"', async () => {
            return await this.azRobotics();
        });
    }

}
export let azRobotics = new AZRobotics();