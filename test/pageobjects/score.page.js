import BasePage from './base.page'
import data from '../../data';

class ScorePage extends BasePage {
    get addOnePointButton ()              { return $('#inc-1-'+(data.playerNumber-1)); }
    get removeOnePointButtonFirstPlayer (){ return $('#inc-1-'+(data.playerNumber-1)); }
    get playerScore ()                    { return $('#inc-1-'+(data.playerNumber-1)); }
    get firstPlacePlayer()                { return $$('#set-score-'); }
    
    open(URL){
        super.open(URL)
    }
    
    addOnePoint(){
        this.addOnePointButton.click();
    }

    validateFirstPlacePlayer(){
        let text = this.firstPlacePlayer.getText();
        return text;
    }



}



export default new ScorePage();