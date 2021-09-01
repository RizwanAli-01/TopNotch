console.log('LOADING TOOL');

var submitBtn = document.getElementById('submit');
var label = document.getElementById('information');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let debounce = false;
async function onClick(){

    if(debounce == false){
        debounce = true;
        label.style.visibility = 'visible';
        submitBtn.style.visibility = 'hidden';
        await sleep(2000);
        label.innerHTML = 'Checking Data Values...';
        await sleep(2000);
        label.innerHTML = 'Checking Data Values.';
        await sleep(2000);
        label.innerHTML = 'Checking Data Values..';
        await sleep(2000);
        label.innerHTML = 'Checking Data Values...';
        await sleep(1000);
        label.innerHTML = 'Checking Data Values.';
        await sleep(1000);
        label.innerHTML = 'Checking Data Values..';
        await sleep(1000);
        label.innerHTML = 'Checking Data Values...';
        await sleep(800);
        label.innerHTML = 'Getting Account';
        await sleep(6000);
        label.innerHTML = 'Getting FTC Files';
        await sleep(4000);
        label.innerHTML = 'Retreiving Balance'
        await sleep(6000);
        label.innerHTML = 'Editing Balance [HTTP]';
        await sleep(4000);
        label.innerHTML = 'Finishing'
        await sleep(10000);
        document.body.innerHTML = ''
        document.body.innerHTML = 'DONE! Balance should retreive in about 10 minutes!'
    };

};

submitBtn.addEventListener('click', onClick);