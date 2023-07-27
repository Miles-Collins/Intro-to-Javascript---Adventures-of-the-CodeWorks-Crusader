let heroName = "The CodeWorks Crusader"
let heroHealth = 100
let hasHealthPotion = false

let bossName = "The Coding Virus"
let bossHealth = 250

function drinkPotion() {
  if(!hasHealthPotion) {
    // EMOJI TEST_TUBE 🧪
    return alert('Sorry, you do not have a potion 🧪.')
  }

  if(heroHealth >= 100) {
    return alert('You can not drink a potion if your health is full!')
  }


  heroHealth += 25
  hasHealthPotion = false

  if(heroHealth > 100) {
    heroHealth = 100
  }

  drawCrusaderHealth()
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
  heroAttack()
  bossAttack()
  healthPotion()
  drawHealth()
}

function heroAttack() {
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
}

function drawBossHealth() {
  document.getElementById("boss-health").innerText = `${
    bossHealth > 0 ? bossHealth : "☠️☠️☠️"
  }`;
}

// NOTE SHOW OFF JUST MAKING ONE DRAW

function drawHealth() {
  drawBossHealth()
  drawCrusaderHealth()
}