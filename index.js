// Author: Manan Shah

var currencies = [
    { id: 1, country: "India", notation: "Rs."}
]

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

    // Log a seperator. (type: 0 = Thin (Default), 1 = Medium, 2 = Fat)
    seperator(type=0) {
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

    // Log a message. (message: String, type: info, warning, danger)
    message(message="", type="info") {
        switch(type) {
            case "info":
                console.info(message);
                break;
            case "warning":
                console.warn(message);
                break;
            case "danger":
                console.error(message);
                break;
            default:
                console.log(message);
        }
        this.postLog();
    }

    // Log a colorful message.
    color(message="", foreground="black", background="white") {
        console.log(`%c${message}`, `background: ${background}; color: ${foreground}`);
        this.postLog();
    }

    // Log a country's currency amount.
    currency(country="USA", amount=0.00) {
        var x = currencies.find((currency) => currency.country == "India");
        var notation = x && x.notation || "--";
        console.log(`${notation} ${amount}`);
        this.postLog();
    }

    // Log an array's objects in tabular form.
    table() {
        console.table(currencies);
        this.postLog();
    }
}

window.Chunky = Chunky;