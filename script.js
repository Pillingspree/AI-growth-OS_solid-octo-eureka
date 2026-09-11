
const pipelineData = [
    {
        number: "01",
        title: "Attract qualified attention",
        description:
            "Build targeted acquisition campaigns that bring the right prospects into the growth system.",
        output: "Qualified traffic"
    },
    {
        number: "02",
        title: "Capture the prospect",
        description:
            "Turn anonymous visitors into identifiable leads through landing pages, forms, lead magnets and clear offers.",
        output: "New lead"
    },
    {
        number: "03",
        title: "Qualify with intelligence",
        description:
            "Use lead scoring, segmentation and behavioral signals to identify prospects with stronger buying intent.",
        output: "Qualified lead"
    },
    {
        number: "04",
        title: "Nurture automatically",
        description:
            "Trigger personalized email sequences and follow-up workflows based on customer behavior and lifecycle stage.",
        output: "Engaged prospect"
    },
    {
        number: "05",
        title: "Convert and optimize",
        description:
            "Move qualified opportunities toward conversion while measuring the funnel and identifying optimization opportunities.",
        output: "Revenue"
    }
];

const nodes = document.querySelectorAll(".pipeline-node");

const numberElement = document.querySelector(".pipeline-number");
const titleElement = document.querySelector("#pipeline-title");
const descriptionElement = document.querySelector("#pipeline-description");
const outputElement = document.querySelector("#pipeline-output");

function updatePipeline(step) {

    const data = pipelineData[step];

    if (!data) return;

    nodes.forEach((node, index) => {
        node.classList.toggle("active", index === step);
    });

    numberElement.textContent = data.number;
    titleElement.textContent = data.title;
    descriptionElement.textContent = data.description;
    outputElement.textContent = data.output;
}

nodes.forEach((node) => {

    node.addEventListener("click", () => {

        const step = Number(node.dataset.step);

        updatePipeline(step);

    });

});


/* Reveal elements when scrolling */

const revealElements = document.querySelectorAll(
    ".system-card, .project-card, .method-step, .pipeline-detail"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* Dynamic year */

const year = new Date().getFullYear();

document.querySelectorAll("footer").forEach((footer) => {

    footer.innerHTML = footer.innerHTML.replace(
        "© 2026",
        `© ${year}`
    );

});


/* Tiny terminal typing effect */

const terminalLines = document.querySelectorAll(".terminal p");

terminalLines.forEach((line, index) => {

    line.style.opacity = "0";

    setTimeout(() => {

        line.style.transition = "opacity .5s ease";
        line.style.opacity = "1";

    }, 500 + index * 350);

});
