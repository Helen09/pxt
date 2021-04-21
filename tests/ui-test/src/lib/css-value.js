exports.newProject = {
    newProjectButton: '.newprojectcard',
    projectName:'#projectNameInput',
    homeOfProject: '.openproject',
    closeButtonOfHomePage: '.closeIcon',
    inputProjectName: 'input#projectNameInput',
    saveButtonOfHomePage: '.button.positive',
    skipButton:'.actions button:nth-child(2)',
    projectTitle: "[aria-label='My Projects'] .carouselitem:nth-child(2) .header",
    codeOptions:'.expandable-menu a',
    selectBox:'select.ui.dropdown',
    pythonOnly:'select [value="python-only"]',
    javaScriptOnly:'select [value="javascript-only"]',
    isSelect:'aria-selected',
    itemLabel:'aria-label',
    centerItem:'div.item.centered',
    viewAllButton:'.view-all-button',
    emptyTips:'.sub.header',
    goBackButton:'.header-close [title="Go back"]',
    UntitledProject:'.ui.cards [aria-label="Untitled"]',
    openProject:'[title="Open Project"]',
    dropdownButton:'[role="combobox"]',
    openNewTab:'[title="Open Project in a new tab"]',
    duplicateSelectedProject:'[title="Duplicate Project"]',
    deleteSelectedProject:'[title="Delete Project"]',
    turnToListView:'[title="List view"]',
    turnToGridView:'[title="Grid view"]',
    sortByName:'[title="Sort by Name descending"]',
    sortByModify:'[title="Sort by Last Modified ascending"]',
    selectAllProjects:'th[title="Select all projects"]',
    selectProjects:'.collapsing',
    firstProjectName:'tr:nth-child(1) td:nth-child(2)',
    ifSelect:'tbody tr:nth-child(1)',
    searchBox:'input[role="search"]',
    searchButton:'[title="Search"]',
    editorUrl:'https://makecode.microbit.org/beta#',
    project1:'.ui.cards [aria-label="Project1"]',
    dupProject1:'.ui.cards [aria-label="Project1 #2"]',
    deleteButton:'.actions .red',
    deleteContent:'.content p'
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
    switchToBlocks: '[title="Convert code to Blocks"]',
    dropDownMenu:'[title="Select code editor language"]',
    switchToPython:'[aria-label="Convert code to Python"]',
    pythonSrc1:'.view-lines .view-line:nth-child(1) .mtk6',
    textArea:'.view-lines'
}

exports.helpOfProject = {
    helpButton: '[title="Help"]',
    support: '[aria-label="Dropdown menu Help"] [title="Support"]',
    reference: '[aria-label="Dropdown menu Help"] [title="Reference"]',
    blocks: '[aria-label="Dropdown menu Help"] [title="Blocks"]',
    hardware: '[aria-label="Dropdown menu Help"] [title="Hardware"]',
    buy: '[aria-label="Dropdown menu Help"] [title="Buy"]',
    collapseButton: '#sidedocstoggle',
    goBackButton: '#sidedocs-back-button',
    openLinkButton: '#sidedocsbar',
    headerTitleOfSupport:'h2.hide-in-mobile',
    headerTitleOfBuy:'//div/h1[contains(@class,"Typography")]',
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
    foreverBlock: '.blocklySvg g:nth-child(4)',
    showStringBlock: 'svg:nth-child(6) .blocklyBlockCanvas g:nth-child(10) >path',
    basicItem: '[aria-label="Toggle category Basic"]',
    trashArea: 'div.blocklyToolboxDiv',
    insertBlock1: '.blocklySvg g:nth-child(4) .blocklyDraggable > path',
    insertBlock2:'.blocklyBlockCanvas g:nth-child(4) .blocklyDraggable > path',
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
    flashingHeart: '[aria-label="Tutorials"] [aria-label="Flashing Heart"]',
    nameTag: '[aria-label="Tutorials"] [aria-label="Name Tag"]',
    smileyButtons: '[aria-label="Tutorials"] [aria-label="Smiley Buttons"]',
    dice: '[aria-label="Tutorials"] [aria-label="Dice"]',
    loveMeter: '[aria-label="Tutorials"] [aria-label="Love Meter"]',
    microChat: '[aria-label="Tutorials"] [aria-label="Micro Chat"]',
    tutorialHint:'.hintbutton',
    showHint:'.tutorialhint',
    hiddenHint:'.tutorialhint.hidden',
    basicBlocks:'div.blocklyTreeRow',
    showLeds:'svg:nth-child(7) g:nth-child(4) path',
    foreverBlock:'svg.blocklySvg g:nth-child(4) path',
    seeMoreButton: '[aria-label="Tutorials"] [aria-label="See more"]',
}

exports.games = {
    rockPaperScissors: '[aria-label="Games"] [aria-label="Rock Paper Scissors"]',
    coinFlipper: '[aria-label="Games"] [aria-label="Coin Flipper"]',
    sevenSecounds:'[aria-label="Games"] [aria-label="7 seconds"]',
    hotPotato:'[aria-label="Games"] [aria-label="Hot Potato"]',
    headsGuess:'[aria-label="Games"] [aria-label="Heads Guess!"]',
    reactionTime: '[aria-label="Games"] [aria-label="Reaction Time"]',
    tugOfLed:'[aria-label="Games"] [aria-label="Tug-Of-LED"]',
    magicButtonTrick: '[aria-label="Games"] [aria-label="Magic Button Trick"]',
    snapTheDot: '[aria-label="Games"] [aria-label="Snap the dot"]',
    salute: '[aria-label="Games"] [aria-label="Salute!"]',
    karelTheLed: '[aria-label="Games"] [aria-label="Karel the LED"]',
    crashyBird: '[aria-label="Games"] [aria-label="Crashy bird"]',
    seeMoreButton: '[aria-label="Games"] [aria-label="See more"]',

}

exports.radioGames = {
    multiDice:'[aria-label="Radio Games"] [aria-label="Multi Dice"]',
    moodRadio:'[aria-label="Radio Games"] [aria-label="Mood Radio"]',
    telePotato:'[aria-label="Radio Games"] [aria-label="Tele-potato"]',
    fireFlies:'[aria-label="Radio Games"] [aria-label="Fireflies"]',
    hotOrCold:'[aria-label="Radio Games"] [aria-label="Hot or Cold"]',
    redLightGreenLight:'[aria-label="Radio Games"] [aria-label="Red Light Green Light"]',
    votingMachine:'[aria-label="Radio Games"] [aria-label="Voting Machine"]',
    rockPaperScissorsTeams:'[aria-label="Radio Games"] [aria-label="Rock Paper Scissors Teams"]',
    microCoin:'[aria-label="Radio Games"] [aria-label="Micro:Coin"]',
    infection:'[aria-label="Radio Games"] [aria-label="Infection"]',
    bestFriends:'[aria-label="Radio Games"] [aria-label="Best Friends"]',
}
    
exports.fashion = {
    ductTapeWallet:'[aria-label="Fashion"] [aria-label="Duct Tape Wallet"]',
    watch: '[aria-label="Fashion"] [aria-label="Watch"]',
    stepCounter:'[aria-label="Fashion"] [aria-label="Step counter"]',
    ductTapeWatch:'[aria-label="Fashion"] [aria-label="Duct Tape Watch"]',
    nameBadge:'[aria-label="Fashion"] [aria-label="Name badge"]'
}

exports.music = {
    hackYourHeadphones:'[aria-label="Music"] [aria-label="Hack Your Headphones"]',
    bananaKeyboard:'[aria-label="Music"] [aria-label="Banana Keyboard"]',
    guitar:'[aria-label="Music"] [aria-label="Guitar"]'
}

exports.toys = {
    inchworm:'[aria-label="Toys"] [aria-label="Inchworm"]',
    milkCartonRobot:'[aria-label="Toys"] [aria-label="Milk Carton Robot"]',
    robotUnicorn:'[aria-label="Toys"] [aria-label="Robot Unicorn"]',
    milkMonster:'[aria-label="Toys"] [aria-label="Milky Monster"]',
    railwayCrossing:'[aria-label="Toys"] [aria-label="Railway Crossing"]',
    kitronikRCCarHack:'[aria-label="Toys"] [aria-label="Kitronik RC Car Hack"]',
    rotaryDialRadio:'[aria-label="Toys"] [aria-label="Rotary Dial Radio"]',
}

exports.science = {
    timingGates:'[aria-label="Science"] [aria-label="Timing Gates"]',
    soilMoisture:'[aria-label="Science"] [aria-label="Soil Moisture"]',
    plantWatering:'[aria-label="Science"] [aria-label="Plant Watering"]',
    statesOfMatter:'[aria-label="Science"] [aria-label="States of Matter"]'
}

exports.tools = {
    stopWatch:'[aria-label="Tools"] [aria-label="Stopwatch"]',
    level:'[aria-label="Tools"] [aria-label="Level"]',
    plotAcceleration:'[aria-label="Tools"] [aria-label="Plot Acceleration"]',
    lightLevelMeter:'[aria-label="Tools"] [aria-label="Light Level Meter"]',
    analogPinTester:'[aria-label="Tools"] [aria-label="Analog Pin Tester"]',
    servoCalibrator:'[aria-label="Tools"] [aria-label="Servo Calibrator"]',
    radioBridge:'[aria-label="Tools"] [aria-label="Radio Bridge"]',
    openExample:'.card-action',
    seeMoreButton:'[aria-label="Tools"] [aria-label="See more"]'

}

exports.turtle = {
    square:'[aria-label="Turtle"] [aria-label="Square"]',
    spiral:'[aria-label="Turtle"] [aria-label="Spiral"]',
    scanner:'[aria-label="Turtle"] [aria-label="Scanner"]'
}

exports.blocksToJavaScript = {
    helloJavaScript:'[aria-label="Blocks To JavaScript"] [aria-label="Hello JavaScript"]',
    starterBlocks:'[aria-label="Blocks To JavaScript"] [aria-label="Starter Blocks"]',
    writingCode:'[aria-label="Blocks To JavaScript"] [aria-label="Writing Code"]',
    complexConditionals:'[aria-label="Blocks To JavaScript"] [aria-label="Complex Conditionals"]',
    conditionalLoops:'[aria-label="Blocks To JavaScript"] [aria-label="Conditional Loops"]',
    commandResponder:'[aria-label="Blocks To JavaScript"] [aria-label="Command Responder"]',
    writingFunctions:'[aria-label="Blocks To JavaScript"] [aria-label="Writing Functions"]',
    seeMoreButton:'[aria-label="Blocks To JavaScript"] [aria-label="See more"]'
}

exports.courses = {
    introToCsOnline:'[aria-label="Courses"] [aria-label="Intro to CS Online"]',
    introToCsClassroom:'[aria-label="Courses"] [aria-label="Intro to CS Classroom"]',
    scienceExperiments:'[aria-label="Courses"] [aria-label="Science Experiments"]',
    learnAllAboutMicrobit:'[aria-label="Courses"] [aria-label="Learn All About micro:bit"]',
    codingAndInnovation:'[aria-label="Courses"] [aria-label="Coding and Innovation"]',
    discoverJavaScriptBlocks:'[aria-label="Courses"] [aria-label="Discover JavaScript Blocks"]',
    pageTitleOfDiscover:'//div/h1[contains(@class,"Typography")]',
    networkingWithTheMicrobit:'[aria-label="Courses"] [aria-label="Networking with the micro:bit"]',
    sparkFunVideos:'[aria-label="Courses"] [aria-label="SparkFun Videos"]',
    logicLab:'[aria-label="Courses"] [aria-label="Logic Lab"]',
    blocksToJavaScript:'[aria-label="Courses"] [aria-label="Blocks to JavaScript"]',
    sparkFunInventorsKit:'[aria-label="Courses"] [aria-label="SparkFun Inventor\'s Kit"]',
    kitronikInventorKit:'[aria-label="Courses"] [aria-label="Kitronik Inventor Kit"]',
    microbitOfThings:'[aria-label="Courses"] [aria-label="micro:bit of Things"]',
    azRobotics:'[aria-label="Courses"] [aria-label="A-Z Robotics"]',
    firstjpg:'.WYuW0e.GZwC2b.dPmH0b',
    goBackButton:'[role="toolbar"] [aria-label="Close"]',
    codingAndInnovationTitle:'.zfr3Q.duRjpb',
    pageTitleOfNetwork:'h1',
    maintitleOfSparkFun:'.main-title h1',
    titleOfKitronik:'.page-title h1',
    courseTitle:'.course-title',
}
exports.behindTheMakeCodeHardware ={
    leds:'[aria-label="Behind the MakeCode Hardware"] [aria-label="LEDs"]',
    buttons:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Buttons"]',
    accelerometer:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Accelerometer"]',
    lightSensor:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Light Sensor"]',
    temperatureSensor:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Temperature Sensor"]',
    pinPressed:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Pin Pressed"]',
    radio:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Radio"]',
    servoMotor:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Servo Motor"]',
    speakers:'[aria-label="Behind the MakeCode Hardware"] [aria-label="Speakers"]',
    playVideo:'[title="Open link in new window"]',
    videoTitle:'h1 .style-scope.ytd-video-primary-info-renderer',
    seeMoreButton:'[aria-label="Behind the MakeCode Hardware"] [aria-label="See more"]',

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
    makeADigitalBalance:'[aria-label="Coding Cards"] [aria-label="Make a Digital Balance"]',
    makeADigitalDice:'[aria-label="Coding Cards"] [aria-label="Make a Digital Dice"]',
    makeATrundleWheel:'[aria-label="Coding Cards"] [aria-label="Make a Trundle Wheel"]',
    nervous:'[aria-label="Coding Cards"] [aria-label="Nervous"]',
    reaction:'[aria-label="Coding Cards"] [aria-label="Reaction"]',
    shakeTheBottle:'[aria-label="Coding Cards"] [aria-label="Shake the Bottle"]',
    spriteBasedGames:'[aria-label="Coding Cards"] [aria-label="Sprite Based Games"]',
    zen:'[aria-label="Coding Cards"] [aria-label="Zen"]',
    seeMoreButton:'[aria-label="Coding Cards"] [aria-label="See more"]',

}
exports.scienceExperiments = {
    dataCollection:'[aria-label="Science Experiments"] [aria-label="Data Collection"]',
    populationTraitCounter:'[aria-label="Science Experiments"] [aria-label="Population Trait Counter"]',
    temperatureSensor:'[aria-label="Science Experiments"] [aria-label="Temperature Sensor"]',
    soilMoistureSensor:'[aria-label="Science Experiments"] [aria-label="Soil Moisture Sensor"]',
    EMGMuscleSensor:'[aria-label="Science Experiments"] [aria-label="EMG Muscle Sensor"]',
    eggDrop:'[aria-label="Science Experiments"] [aria-label="Egg Drop"]',
    batteryTester:'[aria-label="Science Experiments"] [aria-label="Battery Tester"]',
    rocketAcceleration:'[aria-label="Science Experiments"] [aria-label="Rocket Acceleration"]',
    playVideo:'[title="Open link in new window"]',
    videoTitle:'h1 .style-scope.ytd-video-primary-info-renderer',
    seeMoreButton:'[aria-label="Science Experiments"] [aria-label="See more"]',

}
exports.commonActions = {
    startTutorial: '.blocks button',
    showInstructions:'.card-action',
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
    idOfIframe: '#sidedocsframe',
    getStartButton:'.docbutton',
    openInNewTab:'#sidedocsbar',
    titleOfNewOpenedWindow:'.ui.text h1'
}

