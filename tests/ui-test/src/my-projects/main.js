import { website } from "../lib/website";
import { newProjectPage } from '../my-projects/new-project'
import { shareProject } from "../my-projects/share-project";
import { toggleDisplayForm } from "../my-projects/toggle-editor";
import { getHelpList } from "../my-projects/help-list";
import { getMoreList } from "../my-projects/more-list";
import { editorToolBar } from "../my-projects/editor-toolbar";
import { blocklyToolBox } from "../my-projects/drag-blocks";
import { flashingHeart } from "../tutorials/flash-heart";
import { nameTag } from "../tutorials/name-tag";
import { smileyButtons } from "../tutorials/smiley-buttons";
import { dice } from "../tutorials/dice";
import { microChat } from "../tutorials/micro-chat";
import { rockPaperScissors } from "../games/rock-paper-scissors";
import { coinFlipper } from "../games/coin-flipper";
import { reactionTime } from "../games/reaction-time";
import { magicButtonTrick } from "../games/magic-button-trick";
import { snapTheDot } from "../games/snap-the-dot";
import { salute } from "../games/salute";
import { karelTheLed } from "../games/karel-the-led";
import { crashyBird } from "../games/crashy-bird";
import { multiDice } from "../radio-games/multi-dice";
import { moodRadio } from "../radio-games/mood-radio";
import { telePotato } from "../radio-games/tele-potato";
import { fireFlies } from "../radio-games/fire-flies";
import { hotOrCold } from "../radio-games/hot-or-cold";
import { redLightGreenLight } from "../radio-games/red-light-green-light";
import { votingMachine } from "../radio-games/voting-machine";
import { rockPaperScissorsTeams } from "../radio-games/rock-paper-scissors-teams";
import { microCoin } from "../radio-games/micro-coin";
import { infection } from "../radio-games/infection";
import { bestFriends } from "../radio-games/best-friends";
import { ductTapeWallet } from "../fashion/duct-tape-wallet";
import { watch } from "../fashion/watch";
import { stopWatch } from "../fashion/stop-watch";
import { stepCounter } from "../fashion/step-counter";
import { ductTapeWatch } from "../fashion/duct-tape-watch";
import { nameBadge } from "../fashion/name-badge";
import { hackYourHeadphones } from "../music/hack-your-headphones";
import { bananaKeyboard } from "../music/banana-keyboard";
import { guitar } from "../music/guitar";
import { inchworm } from "../toys/inchworm";
import { milkCartonRobot } from "../toys/milk-carton-robot";
import { robotUnicorn } from "../toys/robot-unicorn";
import { milkMonster } from "../toys/milky-monster";
import { railwayCrossing } from "../toys/railway-crossing";
import { kitronikRCCarHack } from "../toys/kitronik-rc-car-hack";
import { rotaryDialRadio } from "../toys/rotary-dial-radio";
import { timingGates } from "../science/timing-gates";
import { soilMoisture } from "../science/soil-moisture";
import { plantWatering } from "../science/plant-watering";
import { statesOfMatter } from "../science/states-of-matter";
import { plotAcceleration } from "../tools/plot-acceleration";
import { lightLevelMeter } from "../tools/light-level-meter";
import { analogPinTester } from "../tools/analog-pin-tester";
import { servoCalibrator } from "../tools/servo-calibrator";
import { radioBridge } from "../tools/radio-bridge";
import { square } from "../turtle/square";
import { spiral } from "../turtle/spiral";
import { scanner } from "../turtle/scanner";

describe('Micro:bit Test', function () {
    before(async () => {
        return await website.open("beta");
    });
    after(function () {
        website.close();
    });

    newProjectPage.test();
    shareProject.test();
    toggleDisplayForm.test();
    getHelpList.test();
    getMoreList.test();
    editorToolBar.test();
    blocklyToolBox.test();
    flashingHeart.test();
    nameTag.test();
    smileyButtons.test();
    dice.test();
    microChat.test();
    rockPaperScissors.test();
    coinFlipper.test();
    reactionTime.test();
    magicButtonTrick.test();
    snapTheDot.test();
    salute.test();
    karelTheLed.test();
    crashyBird.test();
    multiDice.test();
    moodRadio.test();
    telePotato.test();
    fireFlies.test();
    hotOrCold.test();
    redLightGreenLight.test();
    votingMachine.test();
    rockPaperScissorsTeams.test();
    microCoin.test();
    infection.test();
    bestFriends.test();
    ductTapeWallet.test();
    watch.test();
    stopWatch.test();
    stepCounter.test();
    ductTapeWatch.test();
    nameBadge.test();
    hackYourHeadphones.test();
    bananaKeyboard.test();
    guitar.test();
    inchworm.test();
    milkCartonRobot.test();
    robotUnicorn.test();
    milkMonster.test();
    railwayCrossing.test();
    kitronikRCCarHack.test();
    rotaryDialRadio.test();
    timingGates.test();
    soilMoisture.test();
    plantWatering.test();
    statesOfMatter.test();
    plotAcceleration.test();
    lightLevelMeter.test();
    analogPinTester.test();
    servoCalibrator.test();
    radioBridge.test();
    square.test();
    spiral.test();
    scanner.test();
});