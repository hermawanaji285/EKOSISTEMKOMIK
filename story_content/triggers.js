function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5cqxMKSmfKI":
        Script1();
        break;
      case "6bgWORpR9YF":
        Script2();
        break;
      case "66DtbWYx9wg":
        Script3();
        break;
      case "5jg7yDVaH1K":
        Script4();
        break;
      case "64JeyuQo4dj":
        Script5();
        break;
      case "6rPV0BTSN42":
        Script6();
        break;
      case "6STSvgLevrN":
        Script7();
        break;
      case "5ZyoI9rBBmI":
        Script8();
        break;
      case "5narB01dSrD":
        Script9();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
window.Script1 = function()
{
  player.once(() => {
const target = object('6dB9KKR0Tac');
const duration = 3000;
const easing = 'ease-out';
const id = '5vaggvqcUyi';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('6dB9KKR0Tac');
const duration = 3000;
const easing = 'ease-out';
const id = '5vaggvqcUyi';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6crNGVWBroi');
const duration = 3000;
const easing = 'ease-out';
const id = '5vaggvqcUyi';
const teeterAmount = 4;
const delay = 0;
addToTimeline(
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6crNGVWBroi');
const duration = 3000;
const easing = 'ease-out';
const id = '5vaggvqcUyi';
const teeterAmount = 4;
player.addForTriggers(
id,
target.animate(
[ {rotate: '0deg' }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: `${teeterAmount}deg` }, 
{rotate: `-${teeterAmount}deg` }, 
{rotate: '0deg' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

window.Script5 = function()
{
  player.once(() => {
const target = object('6PTXFfge0Nn');
const duration = 750;
const easing = 'ease-out';
const id = '5yvjnRLEeRM';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script6 = function()
{
  const target = object('6PTXFfge0Nn');
const duration = 750;
const easing = 'ease-out';
const id = '5yvjnRLEeRM';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate(
[ {scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' }, 
{scale: `${1 + pulseAmount}` }, 
{scale: '1' } ]
,
  { fill: 'forwards', duration, easing }
)
);
}

};
