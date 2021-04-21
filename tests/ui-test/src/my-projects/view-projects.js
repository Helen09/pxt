import { DomObject } from '../lib/dom-object';
import assert from "assert";
import { newProject } from '../lib/css-value';
import { commonclass } from '../lib/common-class';
class ViewProjects extends DomObject {
    async viewProjects() {

        console.log("Start test viewProjects()");
        await this.click(newProject.viewAllButton);

        let tips = await this.getText(newProject.emptyTips);
        assert.equal(tips, "Go back to create a new project");
        console.log(`Nothing in My Projects : ${tips}`);

        await this.click(newProject.goBackButton);

        await commonclass.createProject('Project1');
        await commonclass.createProject('Project2');
        await commonclass.createProject('Project3');
        

        await this.click(newProject.viewAllButton, newProject.turnToListView);

        await this.catchScreenShot('ListViewOfMyProject');

        await this.click(newProject.sortByName);
        
        let firstProjectName = await this.getText(newProject.firstProjectName);
        assert.equal(firstProjectName, 'Project1');
        console.log(`The first project name is :${firstProjectName}`);

        await this.click(newProject.sortByModify);

        let firstProjectNameAfterSort = await this.getText(newProject.firstProjectName);
        assert.equal(firstProjectNameAfterSort, 'Project3');
        console.log(`The first project name after sort is :${firstProjectNameAfterSort}`);

        await this.sendKeys(newProject.searchBox, '1');
        await this.click(newProject.searchButton);

        let firstProjectNameAfterSearch = await this.getText(newProject.firstProjectName);
        assert.equal(firstProjectNameAfterSearch, 'Project1');
        console.log(`The search result is :${firstProjectNameAfterSearch}`);

        await this.click(newProject.ifSelect);

        let radioClassValue = await this.getAttribute(newProject.ifSelect, 'class');
        assert.equal(radioClassValue, 'positive');
        console.log(`The current radio's status is :${radioClassValue}`);

        await this.click(newProject.openProject);

        let currentUrl = await this.getCurrentUrl();
        assert.equal(currentUrl, newProject.editorUrl);
        console.log(`The current url is :${currentUrl}`);

        await this.click(newProject.homeOfProject, newProject.viewAllButton);
        await this.sendKeys(newProject.searchBox, '1');

        await this.click(newProject.turnToListView, newProject.ifSelect, newProject.dropdownButton, newProject.openNewTab);
        await this.switchToNewWindow();

        await this.catchScreenShot('OpenInNewTab');

        await this.closeCurrentWindow();

        await this.click(newProject.duplicateSelectedProject, newProject.saveButtonOfHomePage);

        await driver.sleep(1000);
        let dupProName = await this.getText(newProject.firstProjectName);
        assert.equal(dupProName, 'Project1 #2');
        console.log(`The duplicate project name is :${dupProName}`);

        await this.click(newProject.ifSelect);

        await this.click(newProject.deleteSelectedProject);
        
        await this.getText(newProject.deleteContent).then(delInfo=>{
            assert.equal(delInfo, 'It will be deleted for good. No undo.');
            console.log(`The content of delete dialog is :${delInfo}`);
        })

        await this.click(newProject.deleteButton);

       
        await this.waitforElementLocated(newProject.searchBox).then(element=>{
            element.clear();
        })

        await this.getText(newProject.searchBox).then(text =>{
            assert.equal(text, '');
        })

        await this.click(newProject.goBackButton);
    }
    test() {
        it('View All Projects', async () => {
            return await this.viewProjects();
        });
    }

}

export let viewProjects = new ViewProjects();