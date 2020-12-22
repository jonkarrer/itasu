let projectArr = [];
let dayListArr = [];
let play = this;
let loadFirstRule;
let loadSecondRule;
localStorage.clear();
class Day {
    constructor(projectTitle) {
        this.header = prompt("What day?");
        this.projectTitle = projectTitle;
    }
    init() {
        this.cacheDom();
        this.addADay();
        this.removeMe();
        this.addOneCheckbox();
        console.log(this.daySuperPlus);
        console.log(this.projectTitle);
    };
    cacheDom(){
        this.dayTabPlus = document.getElementById(this.projectTitle);
        this.daySuperPlus = this.dayTabPlus.firstChild;
        
        this.dayTab = document.getElementById('dayTab');

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
        this.checkBoxParent.id = 'checkBoxParent';
        
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

            this.checkBox.appendChild(this.input);
            this.checkBox.appendChild(this.p);
            this.checkBoxParent.appendChild(this.checkBox);
        })
    };
}
//Daylist builder
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
    }
    startNewProject() {
        this.titleCacheDom();
        this.buildTitleForList();
        this.rightSideCacheDom();
        this.buildSideBox();
        this.addOneCheckbox();
        this.addNewDay();
    }
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
        this.checkBoxParent.id = 'checkBoxParent';
        
        this.addToListButt = document.createElement('div');
        this.addToListButt.id = "addToListButton";
        
        this.p7 = document.createElement('p7');
        this.p7.innerText = '+';
        
        this.plus = document.createElement('p7');
        this.plus.innerText = '+';
    }
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
    }
    rightSideCacheDom() {

        this.sideBar = document.createElement('div');
        this.sideBar.id = 'rightSideBar';
        this.deadLineDate = 'Work It';
        
        this.deadLineBox = document.createElement('div');
        this.deadLineBox.id = 'deadlineBox';

        this.h1 = document.createElement('h1');
        this.h1.innerText = "Deadline";

        this.p1 = document.createElement('p1');
        this.p1.innerText = this.deadLineDate;

        this.notes = document.createElement('div');
        this.notes.id = 'notes';

        this.textArea = document.createElement('textarea');
        

        this.remove = document.createElement('div');
        this.remove.id = 'remove';
    }
    buildSideBox() {
        this.deadLineBox.appendChild(this.h1);
        this.deadLineBox.appendChild(this.p1);
        this.notes.appendChild(this.textArea);
        this.sideBar.appendChild(this.deadLineBox);
        this.sideBar.appendChild(this.notes);
        this.sideBar.appendChild(this.remove);
        this.parentContainer.appendChild(this.sideBar);
        this.rightPanel.appendChild(this.parentContainer);

    }
    addNewDay() {
        this.add.addEventListener('click', () => {
            let newDay = new Day(this.projectTitle);
            newDay.init();
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

            this.checkBox.appendChild(this.input);
            this.checkBox.appendChild(this.p);
            this.checkBoxParent.appendChild(this.checkBox);
        })
    }
};
//Project builder
class Project {
    constructor (projectTitle) {
        this.projectTitle = projectTitle;
        this.id = projectArr.length;
    }
    init() {
        this.cacheDom();
        this.buildProjectRectangle();
        this.deleteMe();
        this.reLoadMe();
    }
    cacheDom() {
        this.projectPanel = document.getElementById('projectTabs');
        this.blankDiv = document.createElement('div');
        this.blankDiv.id = this.id;
        this.titleDiv = document.createElement('div');
        this.iconDiv = document.createElement('div');
        this.iconDiv.className = 'gg-trash';
        this.titleParaElement = document.createElement('p1');   
    }
    buildProjectRectangle() {
        this.titleParaElement.innerText = this.projectTitle;
        this.titleDiv.appendChild(this.titleParaElement);
        this.blankDiv.appendChild(this.titleDiv);
        this.blankDiv.appendChild(this.iconDiv);
        this.projectPanel.appendChild(this.blankDiv);  
    }
    deleteMe() {
       let targetElement = document.getElementById(this.id);
       this.iconDiv.addEventListener('click', () => {
            projectArr.splice(this.id, 1);
            dayListArr.splice(this.id, 1);
            localStorage.clear();
            localStorage.setItem('ruleOne', JSON.stringify(projectArr));
            localStorage.setItem('ruleTwo', JSON.stringify(dayListArr));
            targetElement.remove();
           
            let targetDayList = document.getElementById(this.projectTitle);
            targetDayList.remove();
            
       })
    }
    reLoadMe(){
        this.blankDiv.addEventListener('click', () => {
            let matchDayList = document.getElementById(this.projectTitle);
            matchDayList.style.display = 'flex';
            for(let i = 0; i < dayListArr.length; i++) {
                if(dayListArr[i].projectTitle != this.projectTitle){
                   dayListArr[i].parentContainer.style.display = 'none';
                }
            }
            console.log(dayListArr);
        })
    }
};
(function checkLocal(){
    if(localStorage.length != 0) {
        loadFirstRule = JSON.parse(localStorage.getItem("ruleOne"));
        loadSecondRule = JSON.parse(localStorage.getItem("ruleTwo"));
        
        for(let i=0; i < loadFirstRule.length; i++) {
            var elTitle = loadFirstRule[i].projectTitle;
            var createNewProject = new Project(elTitle);
            createNewProject.init();
            projectArr.push(createNewProject);

            var laTitle = loadSecondRule[i].projectTitle;
            var createNewDay = new Daylist(laTitle);
            createNewDay.startNewProject();
            dayListArr.push(createNewDay);
        }
    }else {
        console.log('Empty');
    }
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