gdjs.homepageCode = {};
gdjs.homepageCode.localVariables = [];
gdjs.homepageCode.GDgotopondObjects1= [];
gdjs.homepageCode.GDgotopondObjects2= [];
gdjs.homepageCode.GDgotoshopObjects1= [];
gdjs.homepageCode.GDgotoshopObjects2= [];
gdjs.homepageCode.GDNewSpriteObjects1= [];
gdjs.homepageCode.GDNewSpriteObjects2= [];


gdjs.homepageCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("gotopond"), gdjs.homepageCode.GDgotopondObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.homepageCode.GDgotopondObjects1.length;i<l;++i) {
    if ( gdjs.homepageCode.GDgotopondObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.homepageCode.GDgotopondObjects1[k] = gdjs.homepageCode.GDgotopondObjects1[i];
        ++k;
    }
}
gdjs.homepageCode.GDgotopondObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "duckpond", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("gotoshop"), gdjs.homepageCode.GDgotoshopObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.homepageCode.GDgotoshopObjects1.length;i<l;++i) {
    if ( gdjs.homepageCode.GDgotoshopObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.homepageCode.GDgotoshopObjects1[k] = gdjs.homepageCode.GDgotoshopObjects1[i];
        ++k;
    }
}
gdjs.homepageCode.GDgotoshopObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://denzilroos.github.io/duckypondandshop/shop.html", runtimeScene);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.homepageCode.GDNewSpriteObjects1);
gdjs.copyArray(runtimeScene.getObjects("gotopond"), gdjs.homepageCode.GDgotopondObjects1);
gdjs.copyArray(runtimeScene.getObjects("gotoshop"), gdjs.homepageCode.GDgotoshopObjects1);
{for(var i = 0, len = gdjs.homepageCode.GDgotopondObjects1.length ;i < len;++i) {
    gdjs.homepageCode.GDgotopondObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.homepageCode.GDgotoshopObjects1.length ;i < len;++i) {
    gdjs.homepageCode.GDgotoshopObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.homepageCode.GDNewSpriteObjects1.length ;i < len;++i) {
    gdjs.homepageCode.GDNewSpriteObjects1[i].setCenterXInScene(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}}

}


};

gdjs.homepageCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.homepageCode.GDgotopondObjects1.length = 0;
gdjs.homepageCode.GDgotopondObjects2.length = 0;
gdjs.homepageCode.GDgotoshopObjects1.length = 0;
gdjs.homepageCode.GDgotoshopObjects2.length = 0;
gdjs.homepageCode.GDNewSpriteObjects1.length = 0;
gdjs.homepageCode.GDNewSpriteObjects2.length = 0;

gdjs.homepageCode.eventsList0(runtimeScene);
gdjs.homepageCode.GDgotopondObjects1.length = 0;
gdjs.homepageCode.GDgotopondObjects2.length = 0;
gdjs.homepageCode.GDgotoshopObjects1.length = 0;
gdjs.homepageCode.GDgotoshopObjects2.length = 0;
gdjs.homepageCode.GDNewSpriteObjects1.length = 0;
gdjs.homepageCode.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['homepageCode'] = gdjs.homepageCode;
