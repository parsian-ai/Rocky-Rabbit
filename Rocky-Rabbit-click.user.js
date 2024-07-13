// ==UserScript==
// @name         Rocky Rabbit Click
// @namespace    http://www.google.com/
// @version      1.1
// @description  Launch Rocky Rabbit on Telegram Web
// @author       Reza
// @match        *://*.rockyrabbit.io/*
// @grant        none
// @icon         https://rockyrabbit.io/images/about1.png
// @downloadURL  https://github.com/parsian-ai/Rocky-Rabbit/raw/main/Rocky-Rabbit-click.user.js
// @updateURL    https://github.com/parsian-ai/Rocky-Rabbit/raw/main/Rocky-Rabbit-click.user.js
// @homepage     https://github.com/parsian-ai/Rocky-Rabbit
// ==/UserScript==

console.clear();
console.log("Game started");

const getRandomInteger = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const getRandomPointInCircle = (radius) => {
    let coordinateX, coordinateY;
    do {
        coordinateX = Math.random() * 2 - 1;
        coordinateY = Math.random() * 2 - 1;
    } while (coordinateX * coordinateY + coordinateY * coordinateY > 1);
    return {
        x: Math.round(coordinateX * radius),
        y: Math.round(coordinateY * radius)
    };
};

const dispatchEvent = (element, eventType, properties) => {
    const event = new MouseEvent(eventType, properties);
    element.dispatchEvent(event);
};

const simulateClick = (element) => {
    const rect = element.getBoundingClientRect();
    const radius = Math.min(rect.width, rect.height) / 2;
    const { x, y } = getRandomPointInCircle(radius);

    const clientX = rect.left + radius + x;
    const clientY = rect.top + radius + y;

    const eventProps = {
        bubbles: true,
        cancelable: true,
        view: window,
        clientX,
        clientY,
        screenX: clientX,
        screenY: clientY,
        pageX: clientX,
        pageY: clientY,
        pointerId: 1,
        pointerType: "touch",
        isPrimary: true,
        width: 1,
        height: 1,
        pressure: 0.5,
        button: 0,
        buttons: 1
    };

    dispatchEvent(element, 'pointerdown', eventProps);
    dispatchEvent(element, 'mousedown', eventProps);
    dispatchEvent(element, 'pointerup', { ...eventProps, pressure: 0 });
    dispatchEvent(element, 'mouseup', eventProps);
    dispatchEvent(element, 'click', eventProps);
};

const getCurrentEnergy = () => {
    const energyDiv = document.querySelector('.font-chivo-mono.text-sm.text-ltr');

    if (energyDiv) {
        const energySpan = energyDiv.querySelector('span');

        if (energySpan) {
            const energyValue = energySpan.textContent;
            return parseInt(energyValue, 10);
        } else {
            console.log('Energy span not found');
            return null;
        }
    } else {
        console.log('Energy div not found');
        return null;
    }
};

const autoClick = () => {
    const targetElement = document.querySelector('.px-2.flex.items-center.justify-center.relative.z-0.cursor-pointer.touch-none.w-full.my-auto');
    if (targetElement) {
        simulateClick(targetElement);
    } else {
        console.log('Target element not found');
    }
};

const startAutoClicker = () => {
    try {
        const energyLevel = getCurrentEnergy();

        if (energyLevel === null) {
            console.log('Energy level not found, retrying...');
            setTimeout(startAutoClicker, 1000);
        } else if (energyLevel <= 25) {
            const pauseDuration = getRandomInteger(30000, 60000);
            console.log(`Energy low (${energyLevel}), pausing for ${pauseDuration} ms`);
            setTimeout(startAutoClicker, pauseDuration);
        } else {
            autoClick();
            const clickInterval = getRandomInteger(30, 120);
            setTimeout(startAutoClicker, clickInterval);
        }
    } catch (error) {
        console.log('Error in autoClicker:', error.message);
        setTimeout(startAutoClicker, 1000);
    }
};

setTimeout(startAutoClicker, 3000);
