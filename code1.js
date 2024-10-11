gdjs.duckpondCode = {};
gdjs.duckpondCode.localVariables = [];
gdjs.duckpondCode.GDduck1Objects1= [];
gdjs.duckpondCode.GDduck1Objects2= [];
gdjs.duckpondCode.GDbread1Objects1= [];
gdjs.duckpondCode.GDbread1Objects2= [];
gdjs.duckpondCode.GDhomepageObjects1= [];
gdjs.duckpondCode.GDhomepageObjects2= [];
gdjs.duckpondCode.GDsky1Objects1= [];
gdjs.duckpondCode.GDsky1Objects2= [];
gdjs.duckpondCode.GDsailboatObjects1= [];
gdjs.duckpondCode.GDsailboatObjects2= [];
gdjs.duckpondCode.GDbullrushObjects1= [];
gdjs.duckpondCode.GDbullrushObjects2= [];


gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDduck1Objects1Objects = Hashtable.newFrom({"duck1": gdjs.duckpondCode.GDduck1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects = Hashtable.newFrom({"bread1": gdjs.duckpondCode.GDbread1Objects1});
gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDsky1Objects1Objects = Hashtable.newFrom({"sky1": gdjs.duckpondCode.GDsky1Objects1});
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
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(0), false, false);
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.duckpondCode.GDbread1Objects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "");
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
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
}{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
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


{

gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.duckpondCode.GDduck1Objects1.length;i<l;++i) {
    if ( gdjs.duckpondCode.GDduck1Objects1[i].getY() < 200 ) {
        isConditionTrue_0 = true;
        gdjs.duckpondCode.GDduck1Objects1[k] = gdjs.duckpondCode.GDduck1Objects1[i];
        ++k;
    }
}
gdjs.duckpondCode.GDduck1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.duckpondCode.GDduck1Objects1 */
{for(var i = 0, len = gdjs.duckpondCode.GDduck1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDduck1Objects1[i].setY(200);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("duck1"), gdjs.duckpondCode.GDduck1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.duckpondCode.GDduck1Objects1.length;i<l;++i) {
    if ( gdjs.duckpondCode.GDduck1Objects1[i].getY() > 700 ) {
        isConditionTrue_0 = true;
        gdjs.duckpondCode.GDduck1Objects1[k] = gdjs.duckpondCode.GDduck1Objects1[i];
        ++k;
    }
}
gdjs.duckpondCode.GDduck1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.duckpondCode.GDduck1Objects1 */
{for(var i = 0, len = gdjs.duckpondCode.GDduck1Objects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDduck1Objects1[i].setY(700);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("bread1"), gdjs.duckpondCode.GDbread1Objects1);
gdjs.copyArray(runtimeScene.getObjects("sky1"), gdjs.duckpondCode.GDsky1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDbread1Objects1Objects, gdjs.duckpondCode.mapOfGDgdjs_9546duckpondCode_9546GDsky1Objects1Objects, false, runtimeScene, false);
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
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("sailboat"), gdjs.duckpondCode.GDsailboatObjects1);
{for(var i = 0, len = gdjs.duckpondCode.GDsailboatObjects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDsailboatObjects1[i].setX(gdjs.duckpondCode.GDsailboatObjects1[i].getX() + (0.1));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("bullrush"), gdjs.duckpondCode.GDbullrushObjects1);
{for(var i = 0, len = gdjs.duckpondCode.GDbullrushObjects1.length ;i < len;++i) {
    gdjs.duckpondCode.GDbullrushObjects1[i].setY(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) - 100);
}
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
gdjs.duckpondCode.GDsky1Objects1.length = 0;
gdjs.duckpondCode.GDsky1Objects2.length = 0;
gdjs.duckpondCode.GDsailboatObjects1.length = 0;
gdjs.duckpondCode.GDsailboatObjects2.length = 0;
gdjs.duckpondCode.GDbullrushObjects1.length = 0;
gdjs.duckpondCode.GDbullrushObjects2.length = 0;

gdjs.duckpondCode.eventsList0(runtimeScene);
gdjs.duckpondCode.GDduck1Objects1.length = 0;
gdjs.duckpondCode.GDduck1Objects2.length = 0;
gdjs.duckpondCode.GDbread1Objects1.length = 0;
gdjs.duckpondCode.GDbread1Objects2.length = 0;
gdjs.duckpondCode.GDhomepageObjects1.length = 0;
gdjs.duckpondCode.GDhomepageObjects2.length = 0;
gdjs.duckpondCode.GDsky1Objects1.length = 0;
gdjs.duckpondCode.GDsky1Objects2.length = 0;
gdjs.duckpondCode.GDsailboatObjects1.length = 0;
gdjs.duckpondCode.GDsailboatObjects2.length = 0;
gdjs.duckpondCode.GDbullrushObjects1.length = 0;
gdjs.duckpondCode.GDbullrushObjects2.length = 0;


return;

}

gdjs['duckpondCode'] = gdjs.duckpondCode;
