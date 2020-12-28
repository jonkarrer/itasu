let projectArr = [];
let dayListArr = [];
let checkListArr = [];
let newDayArr = [];
let subCheckListArr = [];
let textAreaArr = [];
let play = this;
let idCounterMain = 100;
let loadFirstRule, loadSecondRule, loadThirdRule, 
    loadFourthRule, loadFifthRule, loadSixthRule;
//localStorage.clear();
class Day {
    constructor(projectTitle, idCounter, header) {
        this.header = header;
        this.projectTitle = projectTitle; 
        this.idCounter = idCounter; 
    };
    init() {
        this.header = prompt('What Day?');
        this.cacheDom();
        this.addADay();
        this.removeMe();
        this.addOneCheckbox();
    };
    initForRemake() {
        this.cacheDom();
        this.addADay();
        this.removeMe();
        this.addOneCheckbox();
    };
    cacheDom(){
        this.dayTabPlus = document.getElementById(this.projectTitle);
        this.daySuperPlus = this.dayTabPlus.firstChild;
        this.xtitle = document.createElement('div');
        this.xtitle.id = "title";
        this.heading = document.createElement('h1');
        this.heading.innerText = this.header;
        this.addDelete = document.createElement('div');
        this.addDelete.id = "addDelete";
        this.delete = document.createElement('div');
        this.delete.id = "delete";
        this.delete.innerText = "x";       
        this.checkBoxParent = document.createElement('div');
        this.checkBoxParent.id = this.idCounter;
        this.addToListButt = document.createElement('div');
        this.addToListButt.id = "addToListButton";
        this.plus = document.createElement('p7');
        this.plus.innerText = '+';
    };
    addADay(){
        this.addDelete.appendChild(this.delete);
        this.xtitle.appendChild(this.heading);
        this.xtitle.appendChild(this.addDelete);
        this.addToListButt.appendChild(this.plus);
        this.daySuperPlus.appendChild(this.xtitle);
        this.daySuperPlus.appendChild(this.checkBoxParent);
        this.daySuperPlus.appendChild(this.addToListButt);
    };
    removeMe(){
        this.delete.addEventListener('click', () => {
            this.xtitle.remove();
            this.checkBoxParent.remove();
            this.addToListButt.remove();
            newDayArr = newDayArr.filter(item => item.idCounter != this.idCounter);
            subCheckListArr = subCheckListArr.filter(item => item[0] != this.idCounter);
            console.log(subCheckListArr);
            localStorage.setItem('ruleFour', JSON.stringify(newDayArr));
            localStorage.setItem('ruleFive', JSON.stringify(subCheckListArr));
        }); 
    };
    addOneCheckbox(){
        this.addToListButt.addEventListener('click', () => {
            this.checkBox = document.createElement('div');
            this.checkBox.id = 'checkBox';
            this.input = document.createElement('input');
            this.input.type = "checkbox";
            this.p = document.createElement('p');
            this.p.innerText = prompt('Name of item?');
            this.newDiv = document.createElement('div');
            this.newDiv.className = 'gg-trash';
            this.newDiv.id = 'removeThisCheckbox';
            this.newDiv.addEventListener('click', deleteDayChecklist);
            this.checkBox.appendChild(this.input);
            this.checkBox.appendChild(this.p);
            this.checkBox.appendChild(this.newDiv);
            this.checkBoxParent.appendChild(this.checkBox);
            let miniCheckArr = [];
            miniCheckArr.push(this.idCounter);
            miniCheckArr.push(this.p.innerText);
            miniCheckArr.push(this.projectTitle);
            subCheckListArr.push(miniCheckArr);
            localStorage.setItem('ruleFive', JSON.stringify(subCheckListArr));
        });
    };
};
//Daytab builder with custom parent
class Daylist {
    constructor(title){
        this.id = dayListArr.length;
        this.projectTitle = title;
        this.rightPanel = document.getElementById('rightPanel');
        this.parentContainer = document.createElement('div');
        this.parentContainer.id = this.projectTitle;
        this.parentContainer.style.display ='none';
        this.parentContainer.style.justifyContent = 'space-evenly';
        this.parentContainer.style.height = '100%';
    };
    startNewProject() {
        this.titleCacheDom();
        this.buildTitleForList();
        this.rightSideCacheDom();
        this.buildSideBox();
        this.addOneCheckbox();
        this.addNewDay();
        this.saveNotesButton();
    };
    titleCacheDom() {
        this.dayTab = document.createElement('div');
        this.dayTab.id = 'dayTab';
        this.title = document.createElement('div');
        this.title.id = "title";
        this.heading = document.createElement('h1');
        this.heading.innerText = 'Today';
        this.addDelete = document.createElement('div');
        this.addDelete.id = "addDelete";
        this.add = document.createElement('div');
        this.add.id = "add";
        this.checkBoxParent = document.createElement('div');
        this.checkBoxParent.className = this.projectTitle;
        this.addToListButt = document.createElement('div');
        this.addToListButt.id = "addToListButton";
        this.p7 = document.createElement('p7');
        this.p7.innerText = '+';
        this.plus = document.createElement('p7');
        this.plus.innerText = '+';
    };
    buildTitleForList() {
        this.add.appendChild(this.p7);
        this.addDelete.appendChild(this.add);
        this.title.appendChild(this.heading);
        this.title.appendChild(this.addDelete);
        this.addToListButt.appendChild(this.plus);
        this.dayTab.appendChild(this.title);
        this.dayTab.appendChild(this.checkBoxParent);
        this.dayTab.appendChild(this.addToListButt);
        this.parentContainer.appendChild(this.dayTab);
        this.rightPanel.appendChild(this.parentContainer);
    };
    rightSideCacheDom() {
        this.sideBar = document.createElement('div');
        this.sideBar.id = 'rightSideBar';
        this.deadLineBox = document.createElement('div');
        this.deadLineBox.id = 'deadlineBox';
        this.h1 = document.createElement('h1');
        this.date = new Date();
        this.month = this.date.getMonth();
        this.day = this.date.getDate();
        this.notes = document.createElement('div');
        this.notes.id = 'notes';
        this.textArea = document.createElement('textarea');
        this.textArea.id = this.projectTitle + 'zzzy';
        this.textArea.placeholder = 'Notes....'
        this.remove = document.createElement('div');
        this.remove.id = 'remove';
        this.remove.innerText = 'Save Notes';
    };
    buildSideBox() {
        let monthsArr = [
            'Jan', 'Feb', 'March', 'April', 'May','June', 
            'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
        ]
        this.h1.innerText = `${monthsArr[this.month]}. ${this.day}`
        this.deadLineBox.appendChild(this.h1);
        this.notes.appendChild(this.textArea);
        this.sideBar.appendChild(this.deadLineBox);
        this.sideBar.appendChild(this.notes);
        this.sideBar.appendChild(this.remove);
        this.parentContainer.appendChild(this.sideBar);
        this.rightPanel.appendChild(this.parentContainer);
    };
    saveNotesButton() {
        this.remove.addEventListener('click', () => 
        {
            let miniTextArr = [];
            textAreaArr = textAreaArr.filter(item => item[0] != this.textArea.id);
            miniTextArr.push(this.textArea.id);
            miniTextArr.push(this.textArea.value);
            textAreaArr.push(miniTextArr);
            console.log(textAreaArr);
            localStorage.setItem('ruleSix', JSON.stringify(textAreaArr));
        })
    };
    addNewDay() {
        this.add.addEventListener('click', () => {
            let newDay = new Day(this.projectTitle, idCounterMain);
            newDay.init();
            newDayArr.push(newDay);
            console.log(newDayArr);
            idCounterMain +=1;
            localStorage.setItem('ruleFour', JSON.stringify(newDayArr));
        });
    };
    addOneCheckbox(){
        this.addToListButt.addEventListener('click', () => {
            this.checkBox = document.createElement('div');
            this.checkBox.id = 'checkBox';
            this.input = document.createElement('input');
            this.input.type = "checkbox";
            this.p = document.createElement('p');
            this.p.innerText = prompt('Name of item?');
            this.newDiv = document.createElement('div');
            this.newDiv.className = 'gg-trash';
            this.newDiv.id = 'removeThisCheckbox';
            this.newDiv.addEventListener('click', deleteTodayChecklist);
            this.checkBox.appendChild(this.input);
            this.checkBox.appendChild(this.p);
            this.checkBox.appendChild(this.newDiv);
            this.checkBoxParent.appendChild(this.checkBox);
            let miniCheckArr = [];
            miniCheckArr.push(this.projectTitle);
            miniCheckArr.push(this.p.innerText);
            checkListArr.push(miniCheckArr);  
            localStorage.setItem('ruleThree', JSON.stringify(checkListArr));
        })
    }
};
//Project builder
class Project {
    constructor (projectTitle) {
        this.projectTitle = projectTitle;
        this.id = projectArr.length;
        this.textAreaId = this.projectTitle + 'zzzy';
        this.inText = projectTitle;
    };
    init() {
        this.cacheDom();
        this.buildProjectRectangle();
        this.deleteMe();
        this.reLoadMe();
        this.editMe();
    };
    cacheDom() {
        this.projectPanel = document.getElementById('projectTabs');
        this.blankDiv = document.createElement('div');
        this.blankDiv.id = this.id;
        this.titleDiv = document.createElement('div');
        this.editDiv = document.createElement('div');
        this.editDiv.className = 'gg-pen';
        this.editDiv.id = 'editIcon';
        this.iconDiv = document.createElement('div');
        this.iconDiv.className = 'gg-trash';
        this.titleParaElement = document.createElement('p1');   
    };
    buildProjectRectangle() {
        this.titleParaElement.innerText = this.inText;
        this.titleDiv.appendChild(this.titleParaElement);
        this.blankDiv.appendChild(this.titleDiv);
        this.blankDiv.appendChild(this.editDiv);
        this.blankDiv.appendChild(this.iconDiv);
        this.projectPanel.appendChild(this.blankDiv);  
    };
    deleteMe() {
       let targetElement = document.getElementById(this.id);
       this.iconDiv.addEventListener('click', () => 
        {
            projectArr.splice(this.id, 1);
            dayListArr.splice(this.id, 1);
            checkListArr = checkListArr.filter(item => item[0] != this.projectTitle);
            newDayArr = newDayArr.filter(item => item.projectTitle != this.projectTitle);
            subCheckListArr = subCheckListArr.filter(item => item[2] != this.projectTitle);
            textAreaArr = textAreaArr.filter(item => item[0] != this.textAreaId);
            localStorage.setItem('ruleOne', JSON.stringify(projectArr));
            localStorage.setItem('ruleTwo', JSON.stringify(dayListArr));
            localStorage.setItem('ruleThree', JSON.stringify(checkListArr));
            localStorage.setItem('ruleFour', JSON.stringify(newDayArr));
            localStorage.setItem('ruleFive', JSON.stringify(subCheckListArr));
            localStorage.setItem('ruleSix', JSON.stringify(textAreaArr));
            targetElement.remove();
            let targetDayList = document.getElementById(this.projectTitle);
            targetDayList.remove();  
        })
    };
    editMe() {
        this.editDiv.addEventListener('click', () => 
        {
            this.inText = prompt('New Name');
            this.titleParaElement.innerText = this.inText;
            projectArr[this.id].inText = this.inText;
            localStorage.setItem('ruleOne', JSON.stringify(projectArr));
            console.log(projectArr);
            console.log(localStorage.ruleOne);
        })
    };
    reLoadMe(){
        this.blankDiv.addEventListener('click', () => 
        {
            let matchDayList = document.getElementById(this.projectTitle);
            matchDayList.style.display = 'flex';
            for(let i = 0; i < dayListArr.length; i++) {
                if(dayListArr[i].projectTitle != this.projectTitle){
                   dayListArr[i].parentContainer.style.display = 'none';
                };
            };
        })
    };
};
(function checkLocal(){
    if(localStorage.length != 0) {
        loadFirstRule = JSON.parse(localStorage.getItem("ruleOne"));
        loadSecondRule = JSON.parse(localStorage.getItem("ruleTwo"));
        for(let i=0; i < loadFirstRule.length; i++) {
            var elTitle = loadFirstRule[i].projectTitle;
            var createNewProject = new Project(elTitle);
            createNewProject.inText = loadFirstRule[i].inText;
            createNewProject.init();
            projectArr.push(createNewProject);
            var laTitle = loadSecondRule[i].projectTitle;
            var createNewDay = new Daylist(laTitle);
            createNewDay.startNewProject();
            dayListArr.push(createNewDay);
        };
        remakeCheckList();
        rebuildDayCheckList();
        remakeSubCheckList();
        remakeTextAreas();
    }else {
        console.log('Empty');
    };
})();
function createNewProject() {
    var title = prompt('Project Name');
    const newProject = new Project(title);
    newProject.init();
    projectArr.push(newProject);
    localStorage.setItem('ruleOne', JSON.stringify(projectArr));
    makeNewDayList(title);
};
function makeNewDayList(title) {
    const newDay = new Daylist(title);
    newDay.startNewProject();
    dayListArr.push(newDay);
    localStorage.setItem('ruleTwo', JSON.stringify(dayListArr));
};
function remakeCheckList() {
    loadThirdRule = JSON.parse(localStorage.getItem("ruleThree"));
    if(localStorage.ruleThree != null) {
        for(let i = 0; i < loadThirdRule.length; i++) {
            let classSelectName = loadThirdRule[i][0];
            let getParentElement = document.querySelector(`.${classSelectName}`);
            let checkBox = document.createElement('div');
            checkBox.id = 'checkBox';
            let input = document.createElement('input');
            input.type = "checkbox";
            let p = document.createElement('p');
            p.innerText = loadThirdRule[i][1];
            let newDiv = document.createElement('div');
            newDiv.className = 'gg-trash';
            newDiv.id = 'removeThisCheckbox';
            newDiv.addEventListener('click', deleteTodayChecklist)
            checkBox.appendChild(input);
            checkBox.appendChild(p);
            checkBox.appendChild(newDiv);
            getParentElement.appendChild(checkBox);
            let miniCheckArr = [];
            miniCheckArr.push(loadThirdRule[i][0]);
            miniCheckArr.push(loadThirdRule[i][1]);
            checkListArr.push(miniCheckArr);
            };
    };
};
function deleteTodayChecklist(evt) {
    let target = evt.currentTarget || evt.srcElement;
    target.parentElement.style.display = 'none';
    let arrayTarget = target.parentElement.innerText;
    checkListArr = checkListArr.filter(item => item[1] != arrayTarget);
    localStorage.setItem('ruleThree', JSON.stringify(checkListArr));
}
function rebuildDayCheckList() {
    loadFourthRule = JSON.parse(localStorage.getItem('ruleFour'));
    if(localStorage.ruleFour != null) {
        for(var x = 0; x < loadFourthRule.length; x++) {
            let dayTitle = loadFourthRule[x].projectTitle;
            let header = loadFourthRule[x].header;
            let counter = loadFourthRule[x].idCounter;
            let newDay = new Day(dayTitle, counter, header);
            newDay.initForRemake();
            newDayArr.push(newDay);
            idCounterMain +=5;
        };
        }else{
            console.log('dead');
        };   
};
function deleteDayChecklist(evt) {
    let target = evt.currentTarget || evt.srcElement;
    target.parentElement.style.display = 'none';
    let arrayTarget = target.parentElement.innerText;
    subCheckListArr = subCheckListArr.filter(item => item[1] != arrayTarget);
    localStorage.setItem('ruleFive', JSON.stringify(subCheckListArr));
};
function remakeSubCheckList() {
    loadFifthRule = JSON.parse(localStorage.getItem("ruleFive"));
    if(localStorage.ruleFive != null) {
        for(let i = 0; i < loadFifthRule.length; i++) {
            let idSelector = loadFifthRule[i][0];
            let parentElement = document.getElementById(idSelector);
            let checkBilly = document.createElement('div');
            checkBilly.id = 'checkBox';
            let input = document.createElement('input');
            input.type = "checkbox";
            let p = document.createElement('p');
            p.innerText = loadFifthRule[i][1];
            let newDiv = document.createElement('div');
            newDiv.className = 'gg-trash';
            newDiv.id = 'removeThisCheckbox';
            newDiv.addEventListener('click', deleteDayChecklist)
            checkBilly.appendChild(input);
            checkBilly.appendChild(p);
            checkBilly.appendChild(newDiv);
            parentElement.appendChild(checkBilly);
            let miniCheckArr = [];
            miniCheckArr.push(loadFifthRule[i][0]);
            miniCheckArr.push(loadFifthRule[i][1]);
            miniCheckArr.push(loadFifthRule[i][2])
            subCheckListArr.push(miniCheckArr);
            };
    };
};
function remakeTextAreas() {
    loadSixthRule = JSON.parse(localStorage.getItem('ruleSix'));
    if(localStorage.ruleSix != null) {
        for(let i = 0; i < loadSixthRule.length; i++) {
            let idSelector = loadSixthRule[i][0];
            let parentElement = document.getElementById(idSelector);
            parentElement.value = loadSixthRule[i][1];
            let miniTextArr = [];
            miniTextArr.push(loadSixthRule[i][0]);
            miniTextArr.push(loadSixthRule[i][1]);
            textAreaArr.push(miniTextArr);
            localStorage.setItem('ruleSix', JSON.stringify(textAreaArr));
        };
    };
}
//Time sandbar and animation controls
function growSandBar(){
    let sandBar = document.getElementById('sandBar');
    let clock = new Date();
    let thisMinute = clock.getMinutes();
    let thisHour = clock.getHours();
    let hourHeightChange = (thisHour * 4.1667); //100% / 24 parts 
    let minuteHeightChange = (thisMinute * .069445); //100% / (24 hours * 60 min)
    sandBar.style.height = `${hourHeightChange+minuteHeightChange}%`;
};
growSandBar();
setInterval(growSandBar, 1000);
(function makePixelGrid(){
    const pixelBoard = document.getElementById('pixelBoard');
    for(let i = 0; i < 1100; i++){
        const span = document.createElement('span');
        span.id = 'sandPixel';
        pixelBoard.appendChild(span);
    }
})();
class Pixel {
    constructor(pixelSpeed) {
        this.pixelStart = Math.floor(Math.random() * 8) + 7;;
        this.intervalSpeed = pixelSpeed;
    };
    dropPixel() {
        const psuedoThis = this;
        //Back to start of animation
        this.pixelStart > 1100 ? this.pixelStart = Math.floor(Math.random() * 8) + 7 :
        //Turn pixel on
        $(document).ready(function(){
            $(`span:nth-child(${psuedoThis.pixelStart})`).css("background-color", "lightsalmon"); 
            });
            //Turn pixel off 7 spots back
        $(document).ready(function(){
            $(`span:nth-child(${psuedoThis.pixelStart - 7})`).css("background-color", "black"); 
            });
        this.pixelStart += 7;   
    };
    runAnimation() {
        const psuedoThis = this;
        setInterval(() => {psuedoThis.dropPixel();}, psuedoThis.intervalSpeed);
    };
};
(function createPixels(){
    const pixelArr = [
        new Pixel(100),
        new Pixel(110),
        new Pixel(120),
        new Pixel(130),
        new Pixel(140),
        new Pixel(160),
        new Pixel(170),
        new Pixel(180),
        new Pixel(190),
        new Pixel(200),
        new Pixel(240),
        new Pixel(260),
        new Pixel(300)
    ]
    for (let i = 0; i < pixelArr.length; i++) {
        pixelArr[i].runAnimation();
    }
})();