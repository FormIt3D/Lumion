window.FormIt.LumionLiveSync = window.FormIt.LumionLiveSync || {};

window.FormIt.LumionLiveSync.Start = function(cameraSync) {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Start",
        cameraSync: cameraSync
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.Pause = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.Pause"
    };
    return callAsyncAPI(args);
};


window.FormIt.LumionLiveSync.End = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.End"
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.SyncLumionCamera = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.SyncLumionCamera"
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

window.FormIt.LumionLiveSync.SetOptions = function(CameraSyncOnStart) {
    args = {
        TestAPI: "FormIt.LumionLiveSync.SetOptions",
        CameraSyncOnStart: CameraSyncOnStart
    };
    return callAsyncAPI(args);
};

window.FormIt.LumionLiveSync.GetOptions = function() {
    args = {
        TestAPI: "FormIt.LumionLiveSync.GetOptions",
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
