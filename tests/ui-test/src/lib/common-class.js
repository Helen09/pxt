import { DomObject} from "./dom-object";
import { newProject } from '../lib/css-value';

class CommonClass extends DomObject{


    async createProject(projectName){
        await this.click(newProject.newProjectButton);

        await this.sendKeys(newProject.projectName, `${projectName}`);

        await this.click(newProject.saveButtonOfHomePage, newProject.homeOfProject);
    }
}
export let commonclass = new CommonClass();