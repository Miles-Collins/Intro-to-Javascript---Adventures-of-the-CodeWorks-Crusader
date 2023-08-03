let heroName = "The CodeWorks Crusader"
let heroHealth = 100
let hasHealthPotion = false

let bossName = "The Coding Virus"
let bossHealth = 250

function pageLoad() {
  window.alert(`In the bustling city of Technopolis, where cutting-edge technology is the heartbeat of daily life, a hero known as The CodeWorks Crusader emerges to protect its digital utopia. Gifted with unparalleled coding skills and armed with a suit embedded with the latest technological advancements, The CodeWorks Crusader dedicates his life to safeguarding the city from any digital threats that may arise.\n
  One day, Technopolis faces an unprecedented danger as a malevolent and elusive entity called The Coding Virus starts infiltrating the city's digital infrastructure. The virus, a sentient and adaptive being, swiftly evades conventional defenses and poses a grave risk to the very core of the metropolis. Panic spreads among the city's inhabitants as their digital lives hang in the balance.\n
  Determined to quell the rising storm, The CodeWorks Crusader dives headfirst into the virtual world, unraveling the intricate patterns and evolving tactics of The Coding Virus. Each encounter presents a new challenge, pushing him to the limits of his coding prowess. `);
  window.confirm("Will you have what it takes to vanquish The Coding Virus!?")
}

pageLoad()
function healthUp() {
  heroHealth += 25

   hasHealthPotion = false;

   if (heroHealth > 100) {
     heroHealth = 100;
   }

   drawCrusaderHealth();
}
function drinkPotion() {
  if(!hasHealthPotion) {
    // EMOJI TEST_TUBE 🧪
    return alert('Sorry, you do not have a potion 🧪.')
  }

  if(heroHealth >= 100) {
    return alert('You can not drink a potion if your health is full!')
  }

  if(heroHealth <= 0) {
    return alert("You can't drink, if you're dead!")
  }

setTimeout(healthUp, 3000);
  // heroHealth += 25
 
}

// SECTION ATTACK

function attack() {
  // console.log('ATTACK!!!!')
  // MOVE TO HERO ATTACK
  // let heroAttack = Math.floor(Math.random() * 10)
  // console.log('[HERO ATTACK]', heroAttack)

  // MOVE TO BOSS ATTACK
  // let bossAttack = Math.floor(Math.random() * 15)
  // console.log('[BOSS ATTACK]', bossAttack)

  // MOVE TO HERO ATTACK
  //  if(heroAttack == 0) {
  //   EMOJI ANGRY 💢
  //   alert("💢 The CodeWorks Crusader missed! 💢");
  //  }
  //  bossHealth -= heroAttack

clear
  // MOVE TO BOSS ATTACK
  //  if(bossAttack == 0) {
  //    // EMOJI DASH 💨
  //    alert("💨 Whoosh, you successfully dodged The Coding Bugs attack. 💨");
  //  }

  //  if(bossAttack >= 10) {
  //   alert(`😵‍💫 The Coding Bug hit you for ${bossAttack} a critical attack!!! 😵‍💫`);
  //  }
  //  heroHealth -= bossAttack

  //  drawCrusaderHealth()
  //  drawBossHealth()

// TODO AFTER ALL THE FUNCTIONS ARE ADDED SHOW OFF THE DEBUGGER
// debugger

  heroAttack()
  bossAttack()
  healthPotion()
  drawHealth()
}

function heroAttack() {
  // TODO ADD AT END TO SHOW MORE FUNCTIONALITY
  if(heroHealth <= 0) {
    return alert("The CodeWorks Crusader is dead.")
  }

  if(bossHealth <= 0) {
    alert("The CodeWorks Crusader vanquished The Coding Virus, no reason to beat a dead horse.")
    return
  }
    let heroAttack = Math.floor(Math.random() * 10);
    console.log("[HERO ATTACK]", heroAttack);

    if (heroAttack == 0) {
      // EMOJI ANGRY 💢
      // alert("💢 The CodeWorks Crusader missed! 💢");
    }

    bossHealth -= heroAttack;

    if(bossHealth <= 0) {
      // EMOJI TADA 🎉
      alert("🎉 THE CODEWORKS CRUSADER VANQUISHED THE CODING BUG!!! YOU WON 🎉");
    }
}

function bossAttack() {
  if(bossHealth <= 0 || heroHealth <= 0) {
    return
  }
   let bossAttack = Math.floor(Math.random() * 15);
   console.log("[BOSS ATTACK]", bossAttack);

    if (bossAttack == 0) {
      // EMOJI DASH 💨
      //  alert("💨 Whoosh, you successfully dodged The Coding Bugs attack. 💨");
    }

    if (bossAttack >= 10) {
      // alert(`😵‍💫 The Coding Bug hit you for ${bossAttack} a critical attack!!! 😵‍💫`);
    }

    heroHealth -= bossAttack;

    if(heroHealth <= 0) {
      alert('Oh no, The CodeWorks Crusader was slain by The Coding Bug. RIP...')
    }
}

// ROLL FOR HEALTH POTION
function healthPotion() {
  let rollForHealth = Math.floor(Math.random() * 10)
  if(rollForHealth > 7) {
    hasHealthPotion = true
    alert("You found a health potion!");
  }
}



// SECTION DRAW FUNCTIONS

function drawCrusaderHealth() {
  document.getElementById(
    "crusader-health"
  ).innerText = `${heroHealth > 0 ? heroHealth : '☠️☠️☠️'}`;

if(heroHealth <= 0) {
  debugger
  document.getElementById("codeworksCrusader").classList.add("deadCrusader");
}
}

function drawBossHealth() {
  document.getElementById("boss-health").innerText = `${
    bossHealth > 0 ? bossHealth : "☠️☠️☠️"
  }`;

  if(bossHealth <= 0) {
    document.getElementById("codingVirus").classList.add("deadVirus")
  }
}

// NOTE SHOW OFF JUST MAKING ONE DRAW

function drawHealth() {
  drawBossHealth()
  drawCrusaderHealth()
}