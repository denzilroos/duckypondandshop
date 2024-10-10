gdjs.duckpondCode = {};
gdjs.duckpondCode.localVariables = [];
gdjs.duckpondCode.GDduck1Objects1= [];
gdjs.duckpondCode.GDduck1Objects2= [];
gdjs.duckpondCode.GDbread1Objects1= [];
gdjs.duckpondCode.GDbread1Objects2= [];
gdjs.duckpondCode.GDhomepageObjects1= [];
gdjs.duckpondCode.GDhomepageObjects2= [];


gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bread1"), gdjs.duckpondCode.GDbread1Objects1);
gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);
{for(var i = 0, len = gdjs.duckpondCode.GDduck1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDduck1Objects1[i].getBehavior("BoidsMovement").MoveToObject(gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bread1"), gdjs.duckpondCode.GDbread1Objects1);
gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.turnedTowardTest(gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects, gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, 90, false);
if (isConditionTrue_0) {
/* Reuse gdjs.duckpondCode.GDduck1Objects1 */
{for(var i = 0, len = gdjs.duckpondCode.GDduck1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDduck1Objects1[i].getBehavior("Animation").setAnimationName("faceright");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bread1"), gdjs.duckpondCode.GDbread1Objects1);
gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.turnedTowardTest(gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects, gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, 90, true);
if (isConditionTrue_0) {
/* Reuse gdjs.duckpondCode.GDduck1Objects1 */
{for(var i = 0, len = gdjs.duckpondCode.GDduck1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDduck1Objects1[i].getBehavior("Animation").setAnimationName("faceleft");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.duckpondCode.GDbread1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bread1"), gdjs.duckpondCode.GDbread1Objects1);
gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects, gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.duckpondCode.GDbread1Objects1 */
{for(var i = 0, len = gdjs.duckpondCode.GDbread1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDbread1Objects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("homepage"), gdjs.duckpondCode.GDhomepageObjects1);
{for(var i = 0, len = gdjs.duckpondCode.GDhomepageObjects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDhomepageObjects1[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("homepage"), gdjs.duckpondCode.GDhomepageObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.duckpondCode.GDhomepageObjects1.length;i<l;++i) {
    if ( gdjs.duckpondCode.GDhomepageObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.duckpondCode.GDhomepageObjects1[k] = gdjs.duckpondCode.GDhomepageObjects1[i];
        ++k;
    }
}
gdjs.duckpondCode.GDhomepageObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "homepage", false);
}}

}


};

gdjs.duckpondCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.duckpondCode.GDduck1Objects1.length = 0;
gdjs.duckpondCode.GDduck1Objects2.length = 0;
gdjs.duckpondCode.GDbread1Objects1.length = 0;
gdjs.duckpondCode.GDbread1Objects2.length = 0;
gdjs.duckpondCode.GDhomepageObjects1.length = 0;
gdjs.duckpondCode.GDhomepageObjects2.length = 0;

gdjs.duckpondCode.eventsList0(runtimeScene);
gdjs.duckpondCode.GDduck1Objects1.length = 0;
gdjs.duckpondCode.GDduck1Objects2.length = 0;
gdjs.duckpondCode.GDbread1Objects1.length = 0;
gdjs.duckpondCode.GDbread1Objects2.length = 0;
gdjs.duckpondCode.GDhomepageObjects1.length = 0;
gdjs.duckpondCode.GDhomepageObjects2.length = 0;


return;

}

gdjs['duckpondCode'] = gdjs.duckpondCode;
