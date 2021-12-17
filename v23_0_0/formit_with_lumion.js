window.FormIt.LumionLiveSync = window.FormIt.LumionLiveSync || {};

window.FormIt.LumionLiveSync.Start = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Start"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.Pause = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Pause"
    };
    return callAsyncAPI(args);
};


window.FormIt.LumionLiveSync.Stop = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Stop"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.Export = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Export"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.ExportAs = function(fileName,bExportNodes, bOptimizeGeometries) {
    args = {
        TestAPI: "FormIt.LumionLiveSync.ExportAs",
        FileName:fileName,
        ExportNodes:bExportNodes,
        OptimizeGeometries:bOptimizeGeometries
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.ShowSettings = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.ShowSettings"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.ShowAbout = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.ShowAbout"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.ToggleFollowCamera = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.ToggleFollowCamera"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.FollowLumionCamera = function(bFollowLumionCamera) {
    args = {
        TestAPI: "FormIt.LumionLiveSync.FollowLumionCamera",
        bFollowLumionCamera: bFollowLumionCamera
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.SetOptions = function(oPluginOptions) {
    args = {
        TestAPI: "FormIt.LumionLiveSync.SetOptions",
        PluginOptions: oPluginOptions
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.GetOptions = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.GetOptions",
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.GetState = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.GetState",
    };
    return callAsyncAPI(args);
};

window.FormIt.PlugIn = window.FormIt.PlugIn || {};

window.FormIt.PlugIn.SetIcon = function(URL, toolBarName, buttonName, buttonPath) {
    args = {
        TestAPI: "FormIt.PlugIn.SetIcon",
        URL: URL,
        toolBarName: toolBarName,
        buttonName: buttonName,
        buttonPath: buttonPath
    };
    return callAsyncAPI(args);
};

window.FormIt.PlugIn.SetToolbarToolTip = function(toolBarName, buttonName, buttonToolTip) {
    args = {
        TestAPI: "FormIt.PlugIn.SetToolbarToolTip",
        toolBarName: toolBarName,
        buttonName: buttonName,
        buttonToolTip: buttonToolTip
    };
    return callAsyncAPI(args);
};

