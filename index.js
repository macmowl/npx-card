#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require("boxen");

// Text + chalk definitions
const data = {
    name: chalk.white.bold("Alan Massaro"),
    work: chalk.white("Code padawan @ BeCode.org"),
    npm: chalk.gray("https://npmjs.com/") + chalk.red("~macmowl"),
    github: chalk.gray("https://github.com/") + chalk.green("macmowl"),
    linkedin: chalk.gray("https://linkedin.com/in/") + chalk.yellowBright("alan-massaro"),
    npx: chalk.red("npx") + " " + chalk.white("macmowl"),
    labelWork: chalk.white.bold("       Work:"),
    labelNpm: chalk.white.bold("        npm:"),
    labelGitHub: chalk.white.bold("     GitHub:"),
    labelLinkedIn: chalk.white.bold("   LinkedIn:"),
    labelCard: chalk.white.bold("       Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";

console.log(
    chalk.green(
        boxen(
            [
                chalk.redBright(
                    boxen(
                        data.name,
                        {
                            margin: {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 9,

                            },
                            padding: {
                                top: 1,
                                right: 8,
                                bottom: 1,
                                left: 8,

                            },
                            borderStyle: {
                                topLeft: '-',
                                topRight: '-',
                                bottomLeft: '-',
                                bottomRight: '-',
                                horizontal: '-',
                                vertical: '★'
                            }
                            
                        }
                    )
                ),
                
                EMPTYLINE,
                `${data.labelWork} ${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: "round",
            },
        ),
    ),
);