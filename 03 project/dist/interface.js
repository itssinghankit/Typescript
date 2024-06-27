"use strict";
//class implements interface
class Instagram {
    constructor(burst, cameraMode, filter) {
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
//can add more features along with this
class Youtube {
    constructor(burst, cameraMode, filter, additionalFeatuure //additional feature
    ) {
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.additionalFeatuure = additionalFeatuure;
    }
}
//class implements interfaces and overrides methods
class Facebook {
    constructor(burst, cameraMode, filter) {
        this.burst = burst;
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
    //method overriding
    click() {
        console.log("tu khich meri photo!!");
    }
}
