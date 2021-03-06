import { website } from "../lib/website";
import { importMyProject } from "../import-project/import-my-projects";
import {viewProjects} from "../my-projects/view-projects";
import { newProjectPage } from './new-project'
import { shareProject } from "./share-project";
import { toggleDisplayForm } from "./toggle-editor";
import { getHelpList } from "./help-list";
import { getMoreList } from "./more-list";
import { editorToolBar } from "./editor-toolbar";
import { blocklyToolBox } from "./drag-blocks";
import { flashingHeart } from "../tutorials/flash-heart";
import { nameTag } from "../tutorials/name-tag";
import { smileyButtons } from "../tutorials/smiley-buttons";
import { dice } from "../tutorials/dice";
import { loveMeter } from "../tutorials/love-meter";
import { microChat } from "../tutorials/micro-chat";
import { rockPaperScissors } from "../games/rock-paper-scissors";
import { coinFlipper } from "../games/coin-flipper";
import { sevenSeconds } from "../games/7seconds";
import { hotPotato } from "../games/hot-potato";
import { headsGuess } from "../games/heads-guess";
import { reactionTime } from "../games/reaction-time";
import { tugOfLED } from "../games/tug-of-led";
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
import { stopWatch } from "../tools/stop-watch";
import { level } from "../tools/level";
import { plotAcceleration } from "../tools/plot-acceleration";
import { lightLevelMeter } from "../tools/light-level-meter";
import { analogPinTester } from "../tools/analog-pin-tester";
import { servoCalibrator } from "../tools/servo-calibrator";
import { radioBridge } from "../tools/radio-bridge";
import { square } from "../turtle/square";
import { spiral } from "../turtle/spiral";
import { scanner } from "../turtle/scanner";
import { helloJavaScript } from "../blocks-to-javascript/hello-javascript";
import { starterBlocks } from "../blocks-to-javascript/starter-blocks";
import { writingCode } from "../blocks-to-javascript/writing-code";
import { complexConditionals } from "../blocks-to-javascript/complex-conditionals";
import { conditionalLoops } from "../blocks-to-javascript/conditional-loops";
import { commandResponder } from "../blocks-to-javascript/command-responder";
import { writingFunctions } from "../blocks-to-javascript/writing-functions";
import { introToCsOnline } from "../courses/intro-to-cs-online";
import { introToCsClassroom } from "../courses/intro-to-cs-classroom";
import { scienceExperiments } from "../courses/science-experiments";
import { learnAllAboutMicrobit } from "../courses/learn-all-about-microbit";
import { codingAndInnovation } from "../courses/coding-and-innovation";
import { discoverJavaScriptBlocks } from "../courses/discover-javascript-blocks";
import { networkingWithTheMicrobit } from "../courses/networking-with-the-microbit";
import { sparkFunVideos } from "../courses/sparkfun-videos";
import { logicLab } from "../courses/logic-lab";
import { blocksToJavaScript } from "../courses/blocks-to-javascript";
import { sparkFunInventorsKit } from "../courses/sparkfun-inventors-kit";
import { kitronikInventorKit } from "../courses/kitronik-inventor-kit";
import { microbitOfThings } from "../courses/microbit-of-things";
import { azRobotics } from "../courses/a-z-robotics";
import { leds } from "../behind-the-makecode-hardware/leds";
import { buttons } from "../behind-the-makecode-hardware/buttons";
import { accelerometer } from "../behind-the-makecode-hardware/accelerometer";
import { lightSensor } from "../behind-the-makecode-hardware/light-sensor";
import { temperatureSensor } from "../behind-the-makecode-hardware/temperature-sensor";
import { pinPressed } from "../behind-the-makecode-hardware/pin-pressed";
import { radio } from "../behind-the-makecode-hardware/radio";
import { servoMotor } from "../behind-the-makecode-hardware/servo-motor";
import { speakers } from "../behind-the-makecode-hardware/speakers";
import { dataCollection } from "../science-experiments/data-collection";
import { populationTraitCounter } from "../science-experiments/population-trait-counter";
import { _temperatureSensor } from "../science-experiments/Temperature-sensor";
import { soilMoistureSensor } from "../science-experiments/soil-moisture-sensor";
import { eMGMuscleSensor } from "../science-experiments/EMG-muscle-sensor";
import { eggDrop } from "../science-experiments/egg-drop";
import { batteryTester } from "../science-experiments/battery-tester";
import { rocketAcceleration } from "../science-experiments/rocket-acceleration";
import { makeADigitalBalance } from "../coding-cards/make-a-digital-balance";
import { makeADigitalDice } from "../coding-cards/make-a-digital-dice";
import { makeATrundleWheel } from "../coding-cards/make-a-trundle-wheel";
import { nervous } from "../coding-cards/nervous";
import { reaction } from "../coding-cards/reaction";
import { shakeTheBottle } from "../coding-cards/shake-the-bottle";
import { spriteBasedGames } from "../coding-cards/sprite-based-games";
import { zen } from "../coding-cards/zen";

describe('Micro:bit Test', function () {
    before(async () => {
        return await website.open("beta");
    });
    after(function () {
        website.close();
    });

    importMyProject.test();
    viewProjects.test(); //In coding...
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
    loveMeter.test();
    microChat.test();
    rockPaperScissors.test();
    coinFlipper.test();
    sevenSeconds.test();
    hotPotato.test();
    headsGuess.test();
    reactionTime.test();
    tugOfLED.test();
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
    stopWatch.test();
    level.test();
    plotAcceleration.test();
    lightLevelMeter.test();
    analogPinTester.test();
    servoCalibrator.test();
    radioBridge.test();
    square.test();
    spiral.test();
    scanner.test();
    helloJavaScript.test();
    starterBlocks.test()
    writingCode.test();
    complexConditionals.test();
    conditionalLoops.test();
    commandResponder.test();
    writingFunctions.test();
    introToCsOnline.test();
    introToCsClassroom.test();
    scienceExperiments.test();
    learnAllAboutMicrobit.test();
    codingAndInnovation.test();
    discoverJavaScriptBlocks.test();
    networkingWithTheMicrobit.test();
    sparkFunVideos.test();
    logicLab.test();
    blocksToJavaScript.test();
    sparkFunInventorsKit.test();
    kitronikInventorKit.test();
    microbitOfThings.test();
    azRobotics.test();
    leds.test();
    buttons.test();
    accelerometer.test();
    lightSensor.test();
    temperatureSensor.test();
    pinPressed.test();
    radio.test();
    servoMotor.test();
    speakers.test();
    dataCollection.test();
    populationTraitCounter.test();
    _temperatureSensor.test();
    soilMoistureSensor.test();
    eMGMuscleSensor.test();
    eggDrop.test();
    batteryTester.test();
    rocketAcceleration.test();
    makeADigitalBalance.test();
    makeADigitalDice.test();
    makeATrundleWheel.test();
    nervous.test();
    reaction.test();
    shakeTheBottle.test();
    spriteBasedGames.test();
    zen.test();
});