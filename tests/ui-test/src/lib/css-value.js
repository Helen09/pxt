exports.newProject = {
    newProjectButton: '.newprojectcard',
    homeOfProject: '.openproject',
    closeButtonOfHomePage: '.closeIcon',
    inputProjectName: 'input#projectNameInput',
    saveButtonOfHomePage: '.button.positive',
    projectTitle: "[aria-label='My Projects'] .carouselitem:nth-child(2) .header",
}

exports.shareTheProject = {
    openProject: "[aria-label='My Projects'] .carouselitem:nth-child(2)",
    shareButton: '.shareproject',
    titleOfPublishButton: '.sharedialog .actions .ui.text',
    shareName: '#projectNameInput',
    publishButton: '.labeled.primary',
    copyButton: '.field i.icon',
    projectUrl: '#projectUri',
    closeButtonOfSharePage: '.closeIcon'
}

exports.switchButton = {
    switchToJavaScript: '[title="Convert code to JavaScript"]',
    titleOfExplorer: '[aria-label="File explorer toolbar"]',
    switchToBlocks: '[title="Convert code to Blocks"]'
}

exports.helpOfProject = {
    helpButton: '[title="Help"]',
    support: '[aria-label="Dropdown menu Help"] [title="Support"]',
    reference: '[aria-label="Dropdown menu Help"] [title="Reference"]',
    blocks: '[aria-label="Dropdown menu Help"] [title="Blocks"]',
    javascript: '[aria-label="Dropdown menu Help"] [title="JavaScript"]',
    hardware: '[aria-label="Dropdown menu Help"] [title="Hardware"]',
    buy: '[aria-label="Dropdown menu Help"] [title="Buy"]',
    collapseButton: '#sidedocstoggle',
    goBackButton: '#sidedocs-back-button',
    openLinkButton: '#sidedocsbar',
    headerTitleOfSupport:'h2.hide-in-mobile',
    headerTitleOfBuy:'.alpha'
}

exports.moreOfProject = {
    moreButton: '[title="More..."]',
    projectSettings: '[title="Project Settings"]',
    goBackButtonInSettings: '[title="Go back"]',
    nameInputBoxInSettings: '#fileNameInput',
    saveButtonInSettings: '.ui.button.green',
    editSettingsAsTextButton: '.field .ui.button:nth-child(2)',
    extensionsOption: '[title="Extensions"]',
    firstExtensionTitle: '.ui.card.link:nth-child(1) .header',
    goBackButtonInExtensions: '.header-close [title="Go back"]',
    deleteOption: '[title="Delete Project"]',
    cancelButton: 'button.cancel',
    reportAbuse: '[title="Report Abuse..."]',
    languageOption: '[title="Language"]',
    closeButton: '.closeIcon',
    turnOnTheHighContrast: '[title="More..."] .ui:nth-child(8)',
    turnOnTheGreenScreen: '[title="Green Screen On"]',
    nameOfCamera: '.ui.card.link .header',
    chooseTheGreenBackGround: '.massive',
    pairDevice: '[title="Pair device"]',
    aboutOption: '[title="About..."]',
    okButtonOfAbout: '.positive',
    resetOption: '[title="Reset"]',
    textOfReset: '.dimmed .content p',
    resetButton: '.actions .red'
}

exports.editorTools = {
    toggleCategoryAdvanced: '[role="treeitem"]:nth-child(11) .blocklyTreeRow',
    collapseButton: '.collapse-button:nth-child(1)',
    downloadButton: '#downloadArea .download-button',
    headerTitle: '.header-title',
    closeButton: '.closeIcon',
    nameOfInputBox: 'input#fileNameInput2',
    saveInputName: '#projectNameArea [title="Save"]'
}

exports.dragBlocks = {
    searchBox: '.blocklySearchInputField',
    searchLabel: '[id="blocklySearchLabel"]',
    foreverBlock: 'g.blocklyDraggable:nth-child(2)',
    sayHelloBlock: 'g.blocklyDraggable:nth-child(4)',
    basicItem: '[aria-label="Toggle category Basic"]',
    showStringBlock: 'g.blocklyDraggable:nth-child(8)[data-shapes="stack"]',
    trashArea: 'div.blocklyToolboxDiv',
    insertBlock: 'g.blocklyDraggable:nth-child(2)',
    duplicateOptionOfInsertBlock: '.goog-menuitem:nth-child(1)',
    duplicateBlock: '.blocklySelected.blocklyDisabled',
    deleteDuplicateBlock: '.goog-menuitem:nth-child(3)',
    addComment: '.goog-menuitem:nth-child(2)',
    textBox: 'body textarea',
    commentDeleteButton: 'g.blocklyCommentDeleteIcon',
    helpOptionOfInsertBlock: '.goog-menuitem:nth-child(4)',
    collapseButton: '[id="sidedocstoggle"]',
    deleteInsertBlock: '.goog-menuitem:nth-child(3)',
    fullScreenButton: '.fullscreen-button',
    exitFullScreen: '[title="Exit fullscreen mode"]',
    microbitLogo:'[aria-label="micro:bit Logo"]'
}

exports.tutorials = {
    flashingHeart: '[aria-label="Flashing Heart"]',
    nameTag: '[aria-label="Name Tag"]',
    smileyButtons: '[aria-label="Smiley Buttons"]',
    dice: '[aria-label="Dice"]',
    loveMeter: '[aria-label="Love Meter"]',
    microChat: '[aria-label="Micro Chat"]',
    tutorialHint:'.avatar-image',
    showHint:'.tutorialhint',
    hiddenHint:'.tutorialhint.hidden',
    basicBlocks:'div.blocklyTreeRow',
    showLeds:'.blocklyFlyout g.blocklyDraggable:nth-child(2)',
    foreverBlock:'g.blocklyDraggable:nth-child(2)'
}

exports.games = {
    rockPaperScissors: '[aria-label="Rock Paper Scissors"]',
    coinFlipper: '[aria-label="Coin Flipper"]',
    reactionTime: '[aria-label="Reaction Time"]',
    magicButtonTrick: '[aria-label="Magic Button Trick"]',
    snapTheDot: '[aria-label="Snap the dot"]',
    salute: '[aria-label="Salute!"]',
    karelTheLed: '[aria-label="Karel the LED"]',
    crashyBird: '[aria-label="Crashy bird"]'
}

exports.radioGames = {
    multiDice:'[aria-label="Multi Dice"]',
    moodRadio:'[aria-label="Mood Radio"]',
    telePotato:'[aria-label="Tele-potato"]',
    fireFlies:'[aria-label="Fireflies"]',
    hotOrCold:'[aria-label="Hot or Cold"]',
    redLightGreenLight:'[aria-label="Red Light Green Light"]',
    votingMachine:'[aria-label="Voting Machine"]',
    rockPaperScissorsTeams:'[aria-label="Rock Paper Scissors Teams"]',
    microCoin:'[aria-label="Micro:Coin"]',
    infection:'[aria-label="Infection"]',
    bestFriends:'[aria-label="Best Friends"]'
}
    
exports.fashion = {
    ductTapeWallet:'[aria-label="Duct Tape Wallet"]',
    watch: '[aria-label="Watch"]',
    stopWatch:'[aria-label="Stopwatch"]',
    stepCounter:'[aria-label="Step counter"]',
    ductTapeWatch:'[aria-label="Duct Tape Watch"]',
    nameBadge:'[aria-label="Name badge"]'
}

exports.music = {
    hackYourHeadphones:'[aria-label="Hack Your Headphones"]',
    bananaKeyboard:'[aria-label="Banana Keyboard"]',
    guitar:'[aria-label="Guitar"]'
}

exports.toys = {
    inchworm:'[aria-label="Inchworm"]',
    milkCartonRobot:'[aria-label="Milk Carton Robot"]',
    robotUnicorn:'[aria-label="Robot Unicorn"]',
    milkMonster:'[aria-label="Milky Monster"]',
    railwayCrossing:'[aria-label="Railway Crossing"]',
    kitronikRCCarHack:'[aria-label="Kitronik RC Car Hack"]',
    rotaryDialRadio:'[aria-label="Rotary Dial Radio"]'
}

exports.science = {
    timingGates:'[aria-label="Timing Gates"]',
    soilMoisture:'[aria-label="Soil Moisture"]',
    plantWatering:'[aria-label="Plant Watering"]',
    statesOfMatter:'[aria-label="States of Matter"]'
}

exports.tools = {
    plotAcceleration:'[aria-label="Plot Acceleration"]',
    lightLevelMeter:'[aria-label="Light Level Meter"]',
    analogPinTester:'[aria-label="Analog Pin Tester"]',
    servoCalibrator:'[aria-label="Servo Calibrator"]',
    radioBridge:'[aria-label="Radio Bridge"]',
    openExample:'.actions .positive'
}

exports.turtle = {
    square:'[aria-label="Square"]',
    spiral:'[aria-label="Spiral"]',
    scanner:'[aria-label="Scanner"]'
}

exports.blocksToJavaScript = {
    helloJavaScript:'[aria-label="Hello JavaScript"]',
    starterBlocks:'[aria-label="Starter Blocks"]',
    writingCode:'[aria-label="Writing Code"]',
    complexConditionals:'[aria-label="Complex Conditionals"]',
    conditionalLoops:'[aria-label="Conditional Loops"]',
    commandResponder:'[aria-label="Command Responder"]',
    writingFunctions:'[aria-label="Writing Functions"]',
    seeMoreButton:'[aria-label="Blocks To JavaScript"] [aria-label="See more"]'
}

exports.courses = {
    introToCsOnline:'[aria-label="Intro to CS Online"]',
    introToCsClassroom:'[aria-label="Intro to CS Classroom"]',
    scienceExperiments:'[aria-label="Science Experiments"]',
    learnAllAboutMicrobit:'[aria-label="Learn All About micro:bit"]',
    codingAndInnovation:'[aria-label="Coding and Innovation"]',
    discoverJavaScriptBlocks:'[aria-label="Discover JavaScript Blocks"]',
    pageTitleOfDiscover:'.page_title:nth-child(2) .alpha',
    networkingWithTheMicrobit:'[aria-label="Networking with the micro:bit"]',
    sparkFunVideos:'[aria-label="SparkFun Videos"]',
    logicLab:'[aria-label="Logic Lab"]',
    blocksToJavaScript:'[aria-label="Blocks to JavaScript"]',
    sparkFunInventorsKit:'[aria-label="SparkFun Inventor\'s Kit"]',
    kitronikInventorKit:'[aria-label="Kitronik Inventor Kit"]',
    microbitOfThings:'[aria-label="micro:bit of Things"]',
    azRobotics:'[aria-label="A-Z Robotics"]',
    firstjpg:'.WYuW0e.GZwC2b.dPmH0b',
    goBackButton:'[role="toolbar"] [aria-label="Close"]',
    codingAndInnovationTitle:'.zfr3Q.duRjpb',
    pageTitleOfNetwork:'h1',
    maintitleOfSparkFun:'.main-title h1',
    titleOfKitronik:'.page-title h1',
    courseTitle:'.course-title'
}
exports.behindTheMakeCodeHardware ={
    leds:'[aria-label="LEDs"]',
    buttons:'[aria-label="Buttons"]',
    accelerometer:'[aria-label="Accelerometer"]',
    lightSensor:'[aria-label="Light Sensor"]',
    temperatureSensor:'[aria-label="Temperature Sensor"]',
    pinPressed:'[aria-label="Pin Pressed"]',
    radio:'[aria-label="Radio"]',
    servoMotor:'[aria-label="Servo Motor"]',
    speakers:'[aria-label="Speakers"]',
    playVideo:'[title="Open link in new window"]',
    videoTitle:'h1 .style-scope.ytd-video-primary-info-renderer'
}
exports.importProject = {
    importButton: '[title="Import a project"]',
    importFile: '[aria-label="Open files from your computer"]',
    importURL:'[aria-label="Open a shared project URL or GitHub repo"]',
    yourGitHubRepo:'[aria-label="Clone or create your own GitHub repository"]',
    goaheadButton:'.actions .positive',
    inputName:'#login_field',
    inputPwd:'#password',
    signInButton:'[type="submit"]'
}
exports.codingCards={
    makeADigitalBalance:'[aria-label="Make a Digital Balance"]',
    makeADigitalDice:'[aria-label="Make a Digital Dice"]',
    makeATrundleWheel:'[aria-label="Make a Trundle Wheel"]',
    nervous:'[aria-label="Nervous"]',
    reaction:'[aria-label="Reaction"]',
    shakeTheBottle:'[aria-label="Shake the Bottle"]',
    spriteBasedGames:'[aria-label="Sprite Based Games"]',
    zen:'[aria-label="Zen"]',
    showInstructions:'.card-action'
}
exports.commonActions = {
    startTutorial: '.actions button',
    showInstructions: '.actions .positive',
    playButton: '.video',
    videoPlay: '[aria-label="Play"]',
    videoTitle: '.yt-uix-sessionlink',
    closeButton: '.closeIcon',
    alertContent: '.scrolling.content p:nth-child(1)',
    headerTitle: '.header-title',
    okButton: '.actions button.green',
    goBackButton: '.prevbutton',
    goNextButton: '.buttons .nextbutton',
    selectedLabel: 'a.blue.selected',
    finishButton: '[aria-label="Finish the tutorial."]',
    microbitLogo: '[aria-label="micro:bit Logo"]',
    prograss: '[aria-label="My Projects"] .carouselitem:nth-child(2)',
    projectName: '#fileNameInput2',
    seeMoreOfTutorials: '[aria-label="Tutorials"] [aria-label="See more"]',
    seeMoreOfGames: '[aria-label="Games"] [aria-label="See more"]',
    idOfIframe: '#sidedocsframe',
    getStartButton:'.docbutton',
    openInNewTab:'#sidedocsbar',
    titleOfNewOpenedWindow:'.ui.text h1'
}

