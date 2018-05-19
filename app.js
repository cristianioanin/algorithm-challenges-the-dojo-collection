// DOM Elements
const DOM = {
    container: document.querySelector('#challenges_list')
}

// Challenge Object
class Challenge {
    constructor(id, challengeText, functionText, params, input, output) {
        this.id = id;
        this.challengeText = challengeText;
        this.functionText = functionText;
        this.params = params;
        this.input = input;
        this.output = output;
    }

    addChallengeToHTML(element) {
        const markUp = `
        <div class="columns">
            <div class="column is-primary mt_4">
                <p class="notification is-primary has-text-dark">${this.challengeText}</p>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <input class="button is-danger mb_075" type="reset" value="Default" id="default-${this.id}">
                <input class="button is-danger mb_075 float_right" type="reset" value="Reset" id="reset-${this.id}">
                <button class="button is-warning mb_075 float_right mr_075" id="edit-${this.id}">Edit</button>
                <input class="input has-text-black" type="text" placeholder="function() {" value="function (${this.params}) {"  style="display:none" id="upper_text_area-${this.id}" disabled>
                <textarea class="textarea" autocorrect="off" rows="${this.functionText.toString().split('\n').length}"type="text" placeholder="/* Write your code here */" id="textarea-${this.id}" disabled>${this.functionText}</textarea>
                <input class="input has-text-black" type="text" placeholder="};" value="};" style="display:none" id="lower_text_area-${this.id}" disabled>
            </div>

            <div class="column is-one-quarter">
                <div class="field has-addons">
                    <div class="control is-expanded">
                        <input class="input is-primary is-fullwidth input__field" type="text" placeholder="Input" value="${this.input}" id="input-${this.id}">
                    </div>
                    <div class="control submit__pos">
                        <input class="button is-primary has-text-dark" type="submit" value="Submit" id="submit-${this.id}">
                    </div>
                </div>
                <div class="control">
                    <input class="input is-info output__pos has-text-dark" type="text" placeholder="Output" value="${this.output}" id="output-${this.id}" disabled>
                </div>
            </div>
        </div>
        `;
        element.insertAdjacentHTML('beforeend', markUp);
    }
}

// UI Object
class UI {
    constructor(id, params) {
        this.id = id;
        this.textArea = document.getElementById(`textarea-${this.id}`);
        this.inputField = document.getElementById(`input-${this.id}`);
        this.outputField = document.getElementById(`output-${this.id}`);
        this.upperArea = document.getElementById(`upper_text_area-${this.id}`);
        this.lowerArea = document.getElementById(`lower_text_area-${this.id}`);
    }

    resetTextArea() {
        this.editTextArea();
        this.textArea.value = '';
        this.textArea.removeAttribute('disabled');
    }

    defaultTextArea(functionText) {
        this.textArea.value = functionText;
        this.textArea.setAttribute('disabled', '');
        this.upperArea.style.display = 'none';
        this.lowerArea.style.display = 'none';
    }

    editTextArea() {
        this.textArea.removeAttribute('disabled');
        this.textArea.value = getFunctionBodyOnly(this.textArea.value);
        this.upperArea.style.display = 'block';
        this.lowerArea.style.display = 'block';

        function getFunctionBodyOnly(string) {
            const lines = string.split('\n');
            lines.pop();
            lines.shift();
            const functionBody = lines.join('\n');

            return functionBody;
        }
    }

    submitInput(callback, ...params) {
        if (this.textArea.disabled) {
            const args = this.inputField.value;
            if (args.includes(',')) {
                this.outputField.value = callback(...args.split(','));
            } else {
                this.outputField.value = callback(args);
            }
        } else {
            const testFunction = new Function(...params, `${this.textArea.value}`);
            const args = this.inputField.value;
            if (args.includes(',')) {
                this.outputField.value = testFunction(...this.inputField.value.split(','));
            } else {
                this.outputField.value = callback(args);
            }
        }
    }
}


// Simple id generator
const countId = function () {
    let id = -1;
    return function count() {
        id++;
        return id;
    }
}
const ID = countId();

// Array for fn texts
const algos = [];
// Array for fn parameters
const params = [];


// Controller
const postChallengeController = function (algosFnArray, challengeText, paramsFnArray, parameters, challengeFn, ...input) {
    const challengesArray = [];
    challengesArray.push(challengeText);
    algosFnArray.push(challengeFn);
    paramsFnArray.push(parameters);

    const challenge = new Challenge(
        ID(),
        challengesArray.pop(),
        challengeFn,
        parameters,
        input,
        challengeFn(...input)
    );

    challenge.addChallengeToHTML(DOM.container);
};

const generateNewUIContext = function (event) {
    function getIDfromElement(string) {
        let idName, ID;
        [idName, ID] = string.split('-');
        return ID;
    };

    const id = getIDfromElement(event.target.id);
    const UIContext = new UI(id);

    return [UIContext, id];
}

// Event handlers
DOM.container.addEventListener('click', e => {
    e.preventDefault();

    [UIContext, id] = generateNewUIContext(e);

    if (e.target.matches(`#reset-${id}`)) {
        UIContext.resetTextArea();
    }
    if (e.target.matches(`#default-${id}`)) {
        UIContext.defaultTextArea(algos[id]);
    }
    if (e.target.matches(`#edit-${id}`)) {
        UIContext.editTextArea();
    }
    if (e.target.matches(`#submit-${id}`)) {
        UIContext.submitInput(algos[id], ...params[id]);
    }

});

DOM.container.addEventListener('keyup', e => {
    e.preventDefault();

    [UIContext, id] = generateNewUIContext(e);

    if (e.keyCode === 13 && e.target.matches(`#input-${id}`)) {
        UIContext.submitInput(algos[id], ...params[id]);
    }
});


///////////////////////////////////////////////////////////////////////////////////////

const algo1 = 'Leap Year - Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.';

function leapYear(year) {
    if (year % 4 === 0 && !(year % 100 === 0)) {
        return true;
    } else if (year % 4 === 0 && year % 100 === 0) {
        if (year % 400 === 0) {
            return true;
        } else {
            return false;
        }
    } else return false;
};

postChallengeController(algos, algo1, params, 'year', leapYear, 2008);



const algo2 = 'Setting and Swapping - Set myNumber to 42 . Set myName to your name. Now swap myNumber into myName & vice versa.';

function setAndSwap() {
    let myNumber = 42;
    let myName = 'Sareth';

    const temp = myNumber;
    myNumber = myName;
    myName = temp;

    return `myNumber: ${myNumber}, myName: ${myName}`;
};

postChallengeController(algos, algo2, params, '', setAndSwap, '');


const algo3 = 'You Say It’s Your Birthday - If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log " Just another day.... "';

function myBirthDay(day, month) {
    const birthday = {
        day: 13,
        month: 1
    }

    if ((day == birthday.day && month == birthday.month) || (day == birthday.month && month == birthday.day)) {
        return 'How did you know?'
    } else {
        return 'Just another day...'
    }
};

postChallengeController(algos, algo3, params, ['day', 'month'], myBirthDay, 13, 1);


const algo4 = 'Flexible Countdown - Given lowNum, highNum, mult, return multiples of mult from highNum down to lowNum , using a FOR. For (2,9,3), return 9 6 3.'

function flexibleCountdown(lowNum, highNum, mult) {
    [lowNum, highNum, mult] = [Number(lowNum), Number(highNum), Number(mult)];
    const result = [];

    for (let i = highNum; i >= lowNum; i--) {
        if (i % mult === 0) {
            result.push(i);
        }
    }

    return result;
}

postChallengeController(algos, algo4, params, ['lowNum', 'highNum', 'mult'], flexibleCountdown, 2, 9, 3);


const algo5 = 'The Final Countdown - This is based on "Flexible Countdown". The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2, param3, param4), return the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t return) it. Do this using a WHILE. Given (3,5,17,9), return 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).'

function finalCountdown(param1, param2, param3, param4) {
    [param1, param2, param3, param4] = [Number(param1), Number(param2), Number(param3), Number(param4)];
    const result = [];

    while (param2 <= param3) {
        if (param2 % param1 === 0) {
            if (param2 === param4) {
                param2++;
                continue;
            }
            result.push(param2);
        }
        param2++;
    }

    return result;
}

postChallengeController(algos, algo5, params, ['param1', 'param2', 'param3', 'param4'], finalCountdown, 3, 5, 17, 9);