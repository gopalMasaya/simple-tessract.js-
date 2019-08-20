
var inputImg;
var inputText="";
var working = false;

function setup() {
	createCanvas(windowWidth, windowHeight);
background(25);
inputImg = select('#in')

var n = createP("Image To text")
 n.style('font-family','Comic Sans MS','cursive','san-serif')
 n.style('font-size','40px')
 n.style('position','absolute')
 n.style('left','40%');
 n.style('top','1%')
 n.style('color','rgb(190,90,10)')

document.querySelector('#in').addEventListener('change', file);


function file(e){
working = true;
	console.log(e)
	const worker = new Tesseract.TesseractWorker();
text("please wait....",20,250)
	//document.querySelector('#langsel').value
	worker.recognize(e.target.files[0],document.querySelector('#langsel').value)
			.progress(progress => console.log('progress', progress.progress))
			.then(result =>{ console.log('result', result)
			inputText= result.text;
		//	console.log(inputText)
			var userFile = createDiv("")
			userFile = createDiv(inputText)
			userFile.position(width/3,height/3);
      userFile.style('font-size','22px')
      working = false;
		})
			.finally(() => worker.terminate());
	const detectWorker = new Tesseract.TesseractWorker();
	detectWorker.detect(e.target.files[0],'eng+heb')
			.progress(progress => console.log('progress', progress))
			.then(result =>{ console.log('result', result)
inputText= result.text;
//console.log(inputText)

		})
			.finally(() => detectWorker.terminate());
}
var name= createInput('file_name')
name.position(340,130);
name.style('background-color','rgb(255,255,150)')
name.style('width','11%')
name.style('height','6%')
name.style('font-size','18px')

var save = createButton('save file')
save.position(500,130)
save.style('width','10%')
save.style('height','7%')
save.style('background-color','rgb(155,155,250)')
save.mousePressed(saveFile);

function saveFile(){
	let filename = name.value();
	if(filename.length > 0){
saveStrings("inputText",filename+'.txt');}
}

}

function draw() {
background(205);
fill(0,0,151);rect(0,0,width,100)
if(working == true){
textSize(18)
text("please wait....",20,170)
}
}
