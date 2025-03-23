const ethers = require("ethers");
const prompts = require("prompts");

const availableScripts = [
  { title: "1. Rubics (Swap)", value: "rubic" },
  { title: "2. Izumi (Swap)", value: "izumi" },
  { title: "3. Beanswap (Swap)", value: "beanswap" },
  { title: "4. Magma (Stake)", value: "magma" },
  { title: "5. Apriori (Stake)", value: "apriori" },
  { title: "6. Monorail (Swap)", value: "monorail" },
  { title: "7. Ambient (Swap) (noauto)", value: "ambient" },
  { title: "8. Deploy Contract (noauto)", value: "deployct" },
  { title: "9. Kintsu (Stake)", value: "kintsu" },
  { title: "10. Shmonad (Stake)", value: "shmonad" },
  { title: "11. Octoswap (Swap)", value: "octoswap" },
  { title: "Run auto in turn 1-6", value: "all" },
  { title: "Run auto in turn 1-6, 9, 10 and 11", value: "all-with-kintsu-shmonad" },
  { title: "Exit", value: "exit" },
];

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const scriptConfigs = {
  rubic: { cycles: 1, intervalHours: null },
  magma: { cycles: 1, intervalHours: null },
  izumi: { cycles: 1, intervalHours: null },
  apriori: { cycles: 1, intervalHours: null },
  beanswap: { cycles: 1, intervalHours: null },
  monorail: { cycles: 1, intervalHours: null },
  ambient: { cycles: 1, intervalHours: null },
  kintsu: { cycles: 1, intervalHours: null, tokenId: 1 },
  shmonad: { cycles: 1, intervalHours: null },
  octoswap: { cycles: 1, intervalHours: null }
};

(function () {
    const colors = {
        reset: "\x1b[0m",
        bright: "\x1b[1m",
        dim: "\x1b[2m",
        underscore: "\x1b[4m",
        blink: "\x1b[5m",
        reverse: "\x1b[7m",
        hidden: "\x1b[8m",
        black: "\x1b[30m",
        red: "\x1b[31m",
        green: "\x1b[32m",
        yellow: "\x1b[33m",
        blue: "\x1b[34m",
        magenta: "\x1b[35m",
        cyan: "\x1b[36m",
        white: "\x1b[37m",
        bgBlack: "\x1b[40m",
        bgRed: "\x1b[41m",
        bgGreen: "\x1b[42m",
        bgYellow: "\x1b[43m",
        bgBlue: "\x1b[44m",
        bgMagenta: "\x1b[45m",
        bgCyan: "\x1b[46m",
        bgWhite: "\x1b[47m"
    };

const bannerLines = [
    `${colors.bright}${colors.green}░▀▀█░█▀█░▀█▀░█▀█${colors.reset}\n` +
    `${colors.bright}${colors.cyan}░▄▀░░█▀█░░█░░█░█${colors.reset}\n` +
    `${colors.bright}${colors.yellow}░▀▀▀░▀░▀░▀▀▀░▀░▀${colors.reset}`,
        `${colors.bright}${colors.bgBlue}╔══════════════════════════════════╗${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║                                  ║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.magenta}ZAIN ARAIN                      ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.cyan}AUTO SCRIPT MASTER              ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║                                  ║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.yellow}JOIN TELEGRAM CHANNEL NOW!      ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.green}https://t.me/AirdropScript6     ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.red}@AirdropScript6 - OFFICIAL      ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.cyan}CHANNEL                         ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║                                  ║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.green}FAST - RELIABLE - SECURE        ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║  ${colors.yellow}SCRIPTS EXPERT                  ${colors.bgBlue}║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}║                                  ║${colors.reset}`,
        `${colors.bright}${colors.bgBlue}╚══════════════════════════════════╝${colors.reset}`
    ];

    // Print each line separately
    bannerLines.forEach(line => console.log(line));
})();

async function runScript(scriptName, automated = false) {
  try {
    let scriptModule;
    
    switch (scriptName) {
      case "rubic":
        console.log("Run Rubics (Swap)...");
        scriptModule = require("./scripts/rubic");
        break;

      case "magma":
        console.log("Run Magma (Stake)...");
        scriptModule = require("./scripts/magma");
        break;

      case "izumi":
        console.log("Run Izumi (Swap)...");
        scriptModule = require("./scripts/izumi");
        break;

      case "apriori":
        console.log("Run Apriori (Stake)...");
        scriptModule = require("./scripts/apriori");
        break;
        
      case "beanswap":
        console.log("Run Beanswap (Swap)...");
        scriptModule = require("./scripts/beanswap");
        break;
        
      case "monorail":
        console.log("Run Monorail (Swap)...");
        scriptModule = require("./scripts/monorail");
        break;
        
      case "ambient":
        console.log("Run Ambient (Swap)...");
        scriptModule = require("./scripts/ambient");
        break;
        
      case "deployct":
        console.log("Run Deploy Contract...");
        scriptModule = require("./scripts/deployct");
        break;
        
      case "kintsu":
        console.log("Run Kintsu (Stake)...");
        scriptModule = require("./scripts/kintsu");
        break;
        
      case "shmonad":
        console.log(" Shmonad (Stake)...");
        scriptModule = require("./scripts/shmonad");
        break;
        
      case "octoswap":
        console.log("Run Octoswap (Swap)...");
        scriptModule = require("./scripts/octoswap");
        break;

      default:
        console.log(`Unknown script: ${scriptName}`);
        return;
    }
    
    if (scriptName === "ambient" || scriptName === "deployct") {
      automated = false;
    }
    
    if (automated && scriptModule.runAutomated) {
      if (scriptName === "kintsu") {
        await scriptModule.runAutomated(
          scriptConfigs[scriptName].cycles, 
          scriptConfigs[scriptName].tokenId,
          scriptConfigs[scriptName].intervalHours
        );
      } else {
        await scriptModule.runAutomated(
          scriptConfigs[scriptName].cycles, 
          scriptConfigs[scriptName].intervalHours
        );
      }
    } else if (automated) {
      console.log(`Warning: ${scriptName} script does not support auto mode.`);
      await scriptModule.run();
    } else {
      await scriptModule.run();
    }
  } catch (error) {
    console.error(`Cannot run ${scriptName} script:`, error.message);
  }
}

async function runAllScriptsSequentially(includeKintsu = false, includeShmonad = false) {
  let scriptOrder = ["rubic", "izumi", "beanswap", "magma", "apriori", "monorail"];
  
  if (includeKintsu) {
    scriptOrder.push("kintsu");
  }
  
  if (includeShmonad) {
    scriptOrder.push("shmonad");
    scriptOrder.push("octoswap");
  }
  
  console.log("-".repeat(60));
  let automationMessage = "Currently in auto-run mode ";
  
  if (includeKintsu && includeShmonad) {
    automationMessage += "từ 1-6, 9, 10 và 11";
  } else {
    automationMessage += "từ 1-6";
  }
  
  console.log(automationMessage);
  console.log("-".repeat(60));
  
  const response = await prompts([
    {
      type: 'number',
      name: 'cycles',
      message: 'How many cycles do you want to run per instruction?',
      initial: 1
    },
    {
      type: 'number',
      name: 'intervalHours',
      message: 'Run time in hours (0 if not repeated):',
      initial: 0
    }
  ]);
  
  if (includeKintsu) {
    const tokenIdResponse = await prompts({
      type: 'number',
      name: 'tokenId',
      message: 'Enter token ID for kintsu (default: 1):',
      initial: 1
    });
    
    scriptConfigs.kintsu.tokenId = tokenIdResponse.tokenId || 1;
  }
  
  for (const script of scriptOrder) {
    scriptConfigs[script].cycles = response.cycles || 1;
    scriptConfigs[script].intervalHours = response.intervalHours > 0 ? response.intervalHours : null;
  }
  
  for (let i = 0; i < scriptOrder.length; i++) {
    const scriptName = scriptOrder[i];
    console.log(`\n[${i + 1}/${scriptOrder.length}] Start running ${scriptName.toUpperCase()}...`);
    
    await runScript(scriptName, true);
    
    if (i < scriptOrder.length - 1) {
      console.log(`\nDone running ${scriptName.toUpperCase()}. Wait 5 seconds before continuing...`);
      await delay(5000);
    } else {
      console.log(`\nDone running ${scriptName.toUpperCase()}.`);
    }
  }
  
  console.log("-".repeat(60));
  console.log("Done running everything, follow Dân Cào Airdrop guys!");
  console.log("-".repeat(60));
}

async function run() {
  const response = await prompts({
    type: "select",
    name: "script",
    message: "Select any to start running:",
    choices: availableScripts,
  });

  const selectedScript = response.script;

  if (!selectedScript) {
    console.log("No script selected. Stop bot...");
    return;
  }

  if (selectedScript === "all") {
    await runAllScriptsSequentially(false, false);
  } else if (selectedScript === "all-with-kintsu-shmonad") {
    await runAllScriptsSequentially(true, true);
  } else if (selectedScript === "exit") {
    console.log("Stop bot...");
    process.exit(0);
  } else {
    await runScript(selectedScript);
  }
}

run().catch((error) => {
  console.error("Error occurred:", error);
});

module.exports = { runScript, runAllScriptsSequentially };