const drawContainer = (containerSize, childSize, numberOfChildren) => {
    const ratio = parseInt(containerSize / childSize);
    let actualNumberOfChildren = (ratio * ratio) > numberOfChildren ? numberOfChildren : (ratio * ratio);
    
    /**
     * add style to element
     * @param element 
     * @param style 
     */
    const addStyle = (element, style) => {
        for (const property in style)
            element.style[property] = style[property];
    };

    /**
     * return random rgb color
     */
    const randomRgbColor = () => {
        const redValue = Math.floor(Math.random() * 256);
        const greenValue = Math.floor(Math.random() * 256);
        const blueValue = Math.floor(Math.random() * 256);
        return `rgb(${redValue},${greenValue},${blueValue})`;
    };

    // adjust container style
    const container = document.getElementById("mainSquare");
    addStyle(container, {
        width: `${containerSize}px`,
        height: `${containerSize}px`,
    });
    // show message if container cannot fit numberOfChildren
    if (actualNumberOfChildren < numberOfChildren) {
        const message = document.createElement("label");
        message.innerHTML = `Actual rendered number of children inside container: ${actualNumberOfChildren}`;
        document.body.appendChild(message);
    }
    // add child to container
    for (let i = 0; i < actualNumberOfChildren; i++) {
        const child = document.createElement("div");
        addStyle(child, {
            width: `${childSize}px`,
            height: `${childSize}px`,
            display: "inline-block",
            float: "left",
            background: randomRgbColor(),
        });
        child.onmouseover = () => {
            child.style.background = randomRgbColor();
            child.hoverTimer = setTimeout(() => {
                child.remove();
            }, 2000);
        };
        child.onmouseout = () => {
            clearTimeout(child.hoverTimer);
        };
        container.appendChild(child);
    }
};

// drawContainer(310, 200, 4);
// drawContainer(413, 42, 30);
// drawContainer(200, 300, 2);
drawContainer(200, 50, 17);
