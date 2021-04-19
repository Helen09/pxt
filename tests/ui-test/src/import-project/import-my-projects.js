import { DomObject } from '../lib/dom-object';
import assert from 'assert';
import {importProject, commonActions} from '../lib/css-value';


class ImportMyProject extends DomObject{
    async importMyProject(){

        console.log('Start test importProject()');
        
        await this.click(importProject.importButton, importProject.importFile);

        let importFileTitle = await this.getText(commonActions.headerTitle);
        assert.equal(importFileTitle, 'Open .mkcd or .hex file');
        console.log(`The title of import files dialog is:${importFileTitle}`);

        await this.click(importProject.goaheadButton);

        await this.click(importProject.importButton, importProject.importURL);

        let importURLTitle = await this.getText(commonActions.headerTitle);
        assert.equal(importURLTitle, 'Open project URL');
        console.log(`The title of import URL dialog is:${importURLTitle}`);

        await this.click(importProject.goaheadButton);

        await this.click(importProject.importButton, importProject.yourGitHubRepo);

        let importRepoTitle = await this.getText(commonActions.headerTitle);
        assert.equal(importRepoTitle, 'Sign in with GitHub');
        console.log(`The title of import Repo dialog is:${importRepoTitle}`);

        await this.click(commonActions.closeButton);


    }

    test(){
        it('Start test Import Project', async()=>{
            await this.importMyProject();
        });
    }
}

 export let importMyProject = new ImportMyProject();