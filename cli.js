const yargs = require("yargs");
const replace = require("replace-in-file");
const rulesConverters = require("tslint-to-eslint-config/src/rules/rulesConverters").rulesConverters;

function replaceComments(fileGlob) {
    const nameMapping = new Map();
    for (let [tsName, converter] of rulesConverters) {
        const config = converter({ruleArguments: []});
        const esName = config.rules[0].ruleName;
        nameMapping[tsName] = esName;
    }

    const results = replace.sync({
        files: fileGlob,
        from: /tslint:(disable|enable)(-next-line|)([: ])?(.*)?/g,
        to: (match, p1, p2, p3, p4) => {
            const prefix = `eslint-${p1}${p2}`;
            if (!p4) {
                return prefix;
            }

            const tsNames = p4.split(/\s+/);
            const esNames = tsNames.map((x) => nameMapping[x]);
            if (esNames.some((x) => !x)) {
                console.error(`ERROR: "${match}" is not mapped.`);
                return match;
            }

            return `${prefix} ${esNames.join(" ")}`;
        }
    });

    console.error(results);
}

const argv = yargs
    .usage("Usage: $0 'src/**/*.ts'")
    .demandCommand(1)
    .argv;

const fileGlob = argv._;
if (!fileGlob) {
    console.error(argv);
}

replaceComments(fileGlob);
