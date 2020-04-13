import { DomObject } from '../lib/dom-object';
import assert from "assert";
let { newProject } = require('../lib/css-value');

class NewProjectPage extends DomObject {

    async getCodeSource() {

        console.log("Start test getCodeSource()");
        for (let i = 1; i < 4; i++) {
            await this.click(newProject.newProjectButton);

            if (i == 1) {
                await this.click(newProject.codeOptions, newProject.selectBox, newProject.pythonOnly);

                let selectOption = await this.getAttribute(newProject.pythonOnly, newProject.isSelect);
                assert.equal(selectOption, 'true');
                console.log(`The select status is:${selectOption}`);

                await this.click(newProject.saveButtonOfHomePage);

                let pythonLabel = await this.getAttribute(newProject.centerItem, newProject.itemLabel);
                assert.equal(pythonLabel, 'Python');
                console.log(`The current label is :${pythonLabel}`);
                
                await this.click(newProject.homeOfProject, newProject.skipButton);

            }
            if (i == 2) {
                await this.click(newProject.codeOptions, newProject.selectBox, newProject.javaScriptOnly);

                let selectOption = await this.getAttribute(newProject.javaScriptOnly, newProject.isSelect);
                assert.equal(selectOption, 'true');
                console.log(`The select status is:${selectOption}`);

                await this.click(newProject.saveButtonOfHomePage);

                let javascriptLabel = await this.getAttribute(newProject.centerItem, newProject.itemLabel);
                assert.equal(javascriptLabel, 'JavaScript');
                console.log(`The current label is :${javascriptLabel}`);

                await this.click(newProject.homeOfProject, newProject.skipButton);

            }
            if (i == 3) {
                await this.click(newProject.saveButtonOfHomePage, newProject.homeOfProject, newProject.closeButtonOfHomePage);

                await this.click(newProject.homeOfProject);

                await this.sendKeys(newProject.inputProjectName, 'Project1');

                await this.click(newProject.saveButtonOfHomePage);

                let text = await this.getText(newProject.projectTitle);

                assert.equal(text, "Project1");

                console.debug(`The header text in the first DIV of 'My Projects' is: ${text}"`);
            }
        }

    }

    test() {
        it('Get the code source', async () => {
            return await this.getCodeSource();
        });
    }
}

export let newProjectPage = new NewProjectPage();
