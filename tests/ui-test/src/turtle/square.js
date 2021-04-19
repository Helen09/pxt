import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { turtle, commonActions } from '../lib/css-value';

class Square extends DomObject {

    async square() {

        console.log('Start test square()');

        await this.click(turtle.square, commonActions.startTutorial);

        let headerTitle = await this.getText(commonActions.headerTitle);
        assert.equal(headerTitle, 'Turtle Square');
        console.debug(`The title of the alert window is "${headerTitle}"`);
        
        await this.click(commonActions.okButton);

        for (let i = 1; i < 5; i++) {

            await this.click(commonActions.goNextButton);
            
            let cssValueOfSelectLabel = await this.getAttribute(commonActions.selectedLabel, 'class');
            assert.equal(cssValueOfSelectLabel, 'ui circular label blue selected ');

        }

        await this.click(commonActions.finishButton);
       
        let projectName = await this.getAttribute(commonActions.projectName, 'value');
        assert.equal(projectName, 'Square');
        console.debug(`The current project name is "${projectName}"`);
       
        await this.click(commonActions.microbitLogo);

    }

    test() {
        it('Start learning the "Square"', async () => {
            return await this.square();
        });
    }

}
export let square = new Square();