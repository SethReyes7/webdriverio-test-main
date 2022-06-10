import ScorePage from '../pageobjects/score.page';
import data from '../../data';

describe('Should add points to a player', () => {
    
    before("Main page should be opened before validations", () => {
        ScorePage.open(data.mainURL);
    });

    it('Should add points to a player', () => {
        ScorePage.addOnePoint();
        expect(ScorePage.validateFirstPlacePlayer()).toEqual("Player 3");
    });

    before("Main page should be opened before validations", () => {
        ScorePage.open(data.mainURL);
    });


});