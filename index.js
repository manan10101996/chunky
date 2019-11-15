// Author: Manan Shah

class Chunky {
    // Constructor.
    constructor() {
        this.initTime = new Date();
        this.sessionId = Date.now();
        this.sessionLogCount = 0;
    }

    // Actions to be done after every log.
    postLog() {
        this.sessionLogCount += 1;
    }

    // Log seperator. (0 = Thin (Default), 1 = Medium, 2 = Fat)
    shootSeperator(type=0) {
        var logText = "--------------------------------------------------";
        switch(type) {
            case 0:
                break;
            case 1:
                logText = "==================================================";
                break;
            case 2:
                logText = "||||||||||||||||||||||||||||||||||||||||||||||||||";
                break;
            default:
                logText = "Invalid seperator type.";
        }
        console.log(logText);
        this.postLog();
    }
}