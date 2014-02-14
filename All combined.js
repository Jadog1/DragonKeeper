var start = confirm("Do you want to start Dragon Keeper?");
life = 3;
gold = 200;
add1 = 0;
var allAttacks = [];
var inventoryM = [];
var inventoryA = [];
var inventoryW = [];
var inventoryK = [];
var inventoryF = [];
var equippedW = [];
var equippedA = [];
var equippedM = [];

var maxWeight = 30;

var a;

mage2 = false;
rogue2 = false;
warrior2 = false;
supe = 3;
exp = 0;
lvl = 1;
nextLvl = 40;
addin = 40;
add2 = 0;
add3 = 0;
var totalHealth = 0;
stunE = 0;
var enemyHI = 0;
add4 = 0;
dontC = 0;
waterbedE1 = 0;
itemBreak = "";
we = false;
ma = false;
arm = false;
needNew = false;

kitchen = false;
hallway = false;
bathroom = false;
bedroom = true;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
sR = false;
lR = false;
daggerAttack = false;
magicStaff = false;
shield = false;
strikeAttack = false;

//Top one is how many uses, second to renew weapon, third is the weight of the weapon or armor

//Short range weapons
parlathan = 16; //DLC, whatever game that is O.o
parlathan2 = 16;
pweight = 6;

dagger = 14;
daggger2 = 14;
dweight = 2;

stoneSword = 10;
stoneSword2 = 10;
sSweight = 5;

joyeuse = 30; //changed times a day -- Charlemagne
joyeuse = 30;
jweight = 5;

//Long range weapons
woodenCrossbow = 24;
woodenCrossbow2 = 24;
wCweight = 5;

bow = 15;
bow2 = 15;
bweight = 3;

//armor
plateArmor = 30;
plateArmor2 = 30;
pAweight = 10;

chainMail = 20;
chainMail2 = 20;
cMweight = 8;

stoneShield = 10;
stoneShield = 10;
sSHIELDweight = 6;

//magic items
oldMagicStaff = 15;
oldMagicStaff2 = 15;
oMSweight = 4;

stealthBoots = 14;
stealthBoots2 = 14;
sBweight = 1;

magicalRobes = 30;
magicalRobes2 = 30;
mRweight = 1;

//Applies this if the fight is on the stairs!
function fight_stairs() {
    
}

//Just checks for equipped and tells the computer what attacks are avaible
function checkEquipped() {
    patt2 = /stone shield/g;
patt3 = /parlathan/g;
patt4 = /stone sword/g;
patt5 = /joyeuse/g;
patt6 = /plate armor/g;
patt7 = /chainmail/g;
patt8 = /old magic staff/g;
patt9 = /stealth boots/g;
patt10 = /magic robes/g;
patt11 = /bow/g;
patt12 = /dagger/g;
patt13 = /wooden crossbow/g;
patt14 = /worn stone shield/g; 

if(patt3.test(equippedW) || patt4.test(equippedW) || patt5.test(equippedW)) {
  sR = true;
  strikeAttack = true;
} 
if (patt11.test(equippedW) || patt13.test(equippedW)) {
  lR = true;
  strikeAttack = true;
} 
if (patt12.test(equippedW)) {
  daggerAttack = true;
} 
if (patt8.test(equippedM)) {
 magicStaff = true;
}
if (patt2.test(equippedA) || patt14.test(equippedA)) {
    shield = true;
}

if(lR) {
    checklr = /shoot/g;
    checklr2 = /strike/g;
if (checklr.test(allAttacks) === false) {
        allAttacks.push("shoot");
    }
    if (checklr2.test(allAttacks) === false) {
        allAttacks.push("strike");
    }
}
if (sR) {
    checksr = /strike/g;
if (checksr.test(allAttacks) === false) {
        allAttacks.push("strike");
    }
}
if (daggerAttack) {
    checkda = /stab/g;
if (checkda.test(allAttacks) === false) {
        allAttacks.push("stab");
    }
}
if (shield) {
    checks = /bash/g;
if (checks.test(allAttacks) === false) {
        allAttacks.push("bash");
    }
}
if (magicStaff) {
   checkms = /fire ball/g;
   checkms2 = /wind blast/g;
   checkms3 = /earth ball/g;
   
    if (checkms.test(allAttacks) === false) {
        allAttacks.push("fire ball");
    }
    if (checkms2.test(allAttacks) === false) {
        allAttacks.push("wind blast");
    }
    if (checkms3.test(allAttacks) === false) {
        allAttacks.push("earth ball");
    }
}

}

//Used to equip an item, to use for varieties of attacks
function equipItem() {
    var openinv = confirm("Do you want to open your inventory?");
if(openinv) {
    cont9 = true;
while(cont9) {
    var whichinv = prompt("Do you want your weapons, armor, or magic items? (For magic items just put magic) If done put done.").toLowerCase();
    if(whichinv === "weapons") {
        if(inventoryW.length === 0) {
            alert("You don't have anything!");
        } else {
            cont10 = true;
            while (cont10) {
            alert("Your weapons are: " + inventoryW);
            var equip = prompt("What do you want to equip? If none put none.").toLowerCase();
            var patt = new RegExp(equip);
            if(patt.test(inventoryW)) {
                if(equippedW.length < 2) {
                var index = inventoryW.indexOf(equip);
                var index2 = equippedW.indexOf(equip);
                if(index == index2) {
                    alert("Item already equipped!");
                } else {
                    alert(equip + " is now equipped!");
                    cont10 = false;
                    console.log(equippedW.push(equip));
                    checkEquipped();
                }
                } else {
                    alert("Enough equipped weapons already on!");
                    cont10 = false;
                }
            } else if (equip === "none") {
                cont10 = false;
            } else {
                alert("Not a choice!");
            }
        }
        }
    } else if (whichinv === "armor") {
        if(inventoryA.length === 0) {
            alert("You don't have anything!");
        } else {
              cont10 = true;
            while (cont10) {
            alert("Your inventory armor is " + inventoryA);
            var equip = prompt("What do you want to equip? If none put none.").toLowerCase();
            var patt = new RegExp(equip);
            if(patt.test(inventoryA)) {
                var patt2 = /stone shield/g;
                if (equippedA.length < 3 && patt2.test(inventoryA) || equippedA.length < 2) {
                var index = inventoryA.indexOf(equip);
                var index2 = equippedA.indexOf(equip);
                if(index == index2) {
                    alert("Item already equipped!");
                } else {
                    alert(equip + " is now equipped!");
                    cont10 = false;
                    console.log(equippedA.push(equip));
                    checkEquipped();
                }
            } else {
                  alert("Enough armor is already on!"); 
                  cont10 = false;
                }
            } else if (equip === "none") {
                cont10 = false;
            } else {
                alert("Not a choice!");
            }
        }
        }
    } else if (whichinv === "magic") {
        if(inventoryM.length === 0) {
            alert("You don't have anything!");
        } else {
             cont10 = true;
            while (cont10) {
            alert("Your magical items are: " + inventoryM);
            var equip = prompt("What do you want to equip? If none put none.").toLowerCase();
            var patt = new RegExp(equip);
            if(patt.test(inventoryM)) {
                if (equippedM.length < 2) {
                var index = inventoryM.indexOf(equip);
                var index2 = equippedM.indexOf(equip);
                if(index == index2) {
                    alert("Item already equipped!");
                } else {
                    alert(equip + " is now equipped!");
                    checkEquipped();
                    cont10 = false;
                    console.log(equippedM.push(equip));
                }
                } else {
                    
                }
            } else if (equip === "none") {
                cont10 = false;
            } else {
                alert("Not a choice!");
            }
        }
        }
    } else if (whichinv === "done") {
        cont9 = false;
    } else {
        alert("Not an option!");
    }
}
}
}

//'nuff said!
function removeItem() {
    cont11 = true;
    while(cont11) {
    alert("Your items to drop are: " + inventoryA + ", " + inventoryM + ", " + inventoryW + " your held amount of weight is at " + maxWeight);
    var dropItem = prompt("What item do you want to drop? If you're done, put done.").toLowerCase();
    var patt15 = new RegExp(dropItem);
   var patt2 = /stone shield/g;
var patt3 = /parlathan/g;
var patt4 = /stone sword/g;
var patt5 = /joyeuse/g;
var patt6 = /plate armor/g;
var patt7 = /chainmail/g;
var patt8 = /old magic staff/g;
var patt9 = /stealth boots/g;
var patt10 = /magic robes/g;
var patt11 = /bow/g;
var patt12 = /dagger/g;
var patt13 = /wooden crossbow/g;
var patt14 = /worn stone shield/g;
    if(patt15.test(inventoryA) || patt15.test(inventoryM) || patt15.test(inventoryW)) {
        confirmDrop = confirm("Are you sure you want to drop this item?");
        if(confirmDrop) {
            alert("Item dropped!");
            if(patt15.test(inventoryA)) {
                index = inventoryA.indexOf(dropItem);
                index2 = equippedA.indexOf(dropItem);
                a2 = equippedA;
                a = inventoryA;
            } else if(patt15.test(inventoryW)) {
                index = inventoryW.indexOf(dropItem);
                index2 = equippedW.indexOf(dropItem);
                a2 = equippedW;
                a = inventoryW;
            } else if(patt15.test(inventoryM)) {
                index = inventoryM.indexOf(dropItem);
                index2 = equippedM.indexOf(dropItem);
                a2 = equippedM;
                a = inventoryM;
            } else {
                alert("Malfunction!");
            }
            
            a.splice(index, 1);
            a2.splice(index2, 1);
            
            if(patt2.test(dropItem)) {
                maxWeight+=sSHIELDweight;
            } else if(patt3.test(dropItem)) {
                maxWeight+=pweight;
            } else if(patt4.test(dropItem)) {
                maxWeight+=sSweight;
            } else if(patt5.test(dropItem)) {
                maxWeight+=jweight;
            } else if(patt6.test(dropItem)) {
                maxWeight+=pAweight;
            } else if(patt7.test(dropItem)) {
                maxWeight+=cMweight;
            } else if(patt8.test(dropItem)) {
                maxWeight+=oMSweight;
            } else if(patt9.test(dropItem)) {
                maxWeight+=sBweight;
            } else if(patt10.test(dropItem)) {
                maxWeight+=mRweight;
            } else if(patt11.test(dropItem)) {
                maxWeight+=bweight;
            } else if(patt12.test(dropItem)) {
                maxWeight+=dweight;
            } else if(patt13.test(dropItem)) {
                maxWeight+=wCweight;
            } else {
                alert("Malfunction!");
            }
        }
        } else if(dropItem === "done") {
            if(maxWeight > 0) {
            cont11 = false;
            } else {
                alert("You still haven't dropped enough items!");
            }
    } else {
        alert("That wasn't an item choice from any category!");
    }
    }
}

//'nuff said!
function breakItem() {
       var patt2 = /stone shield/g;
var patt3 = /parlathan/g;
var patt4 = /stone sword/g;
var patt5 = /joyeuse/g;
var patt6 = /plate armor/g;
var patt7 = /chainmail/g;
var patt8 = /old magic staff/g;
var patt9 = /stealth boots/g;
var patt10 = /magic robes/g;
var patt11 = /bow/g;
var patt12 = /dagger/g;
var patt13 = /wooden crossbow/g;

if(patt2.test(equippedA)) {
                stoneShield-=1;
            } else if(patt3.test(equippedA)) {
               parlathan-=1;
            } else if(patt4.test(equippedW)) {
                stoneSword-=1;
            } else if(patt5.test(equippedW)) {
                joyeuse-=1;
            } else if(patt6.test(equippedA)) {
                plateArmor-=1;
            } else if(patt7.test(equippedA)) {
                chainMail-=1;
            } else if(patt8.test(equippedM)) {
                oldMagicStaff-=1;
            } else if(patt9.test(equippedM)) {
                stealthBoots-=1;
            } else if(patt10.test(equippedM)) {
                magicalRobes-=1;
            } else if(patt11.test(equippedW)) {
                bow-=1;
            } else if(patt12.test(equippedW)) {
                dagger-=1;
            } else if(patt13.test(equippedW)) {
                woodenCrossbow-=1;
            } else {
                alert("Malfunction!");
            }
            
            if (parlathan <= 0) {
                alert("Parlathan broke!");
                itemBreak = "parlathan";
    we = true;    
    ma = false;
    arm = false;
                parlathan = parlathan2;
            } else if (stoneShield <= 0) {
                alert("Stone shield broke!");
                itemBreak = "stone shield";
    we = false;    
    ma = false;
    arm = true;
                stoneShield = stoneShield2;
            } else if (stoneSword <= 0) {
                alert("Stone sword broke!");
    we = true;    
    ma = false;
    arm = false;
                itemBreak = "stone sword";
                stoneSword = stoneSword2;
            } else if (joyeuse <= 0) {
                alert("Joyeuse broke!");
                itemBreak = "joyeuse";
    we = true;    
    ma = false;
    arm = false;
                joyeuse = joyeuse2;
            } else if (plateArmor <= 0) {
                alert("Plate armor broke!");
                itemBreak = "plate armor";
    we = false;    
    ma = false;
    arm = true;
                plateArmor = plateArmor2;
            } else if (chainMail <= 0) {
                alert("Chainmail broke!");
                itemBreak = "chainmail";
    we = false;    
    ma = false;
    arm = true;
                chainMail = chainMail2;
            } else if (oldMagicStaff <= 0) {
                alert("Magic staff broke!");
                itemBreak = "old magic staff";
    we = false;    
    ma = true;
    arm = false;
                oldMagicStaff = oldMagicStaff2;
            } else if (stealthBoots <= 0) {
                alert("Stealth boots lost all of it's magic!");
                itemBreak = "stealth boots";
    we = false;    
    ma = true;
    arm = false;
                stealthBoots = stealthBoots2;
            } else if (magicalRobes <= 0) {
                alert("Magical robes lost all of it's magic!");
                itemBreak = "magical robes";
    we = false;    
    ma = true;
    arm = false;
                magicalRobes = magicalRobes2;
            } else if (bow <= 0) {
                alert("Bow ran out of uses!");
                itemBreak = "bow";
    we = true;    
    ma = false;
    arm = false;
                bow = bow2;
            } else if (dagger <= 0) {
                alert("Dagger broke!");
                itemBreak = "dagger";
    we = true;    
    ma = false;
    arm = false;
                dagger = dagger2;
            } else if (woodenCrossbow <= 0) {
                alert("Wooden crossbow became worn out!");
                itemBreak = "wooden crossbow";
    we = true;    
    ma = false;
    arm = false;
                woodenCrossbow = woodenCrossbow2;
            }
            
    if(we) {
        index3 = equippedW.indexOf(itemBreak);
        equippedW.splice(index3, 1);
        
        index4 = inventoryW.indexOf(itemBreak);
        inventoryW.splice(index3, 1);
        needNew = true;
    } else if (ma) {
        index3 = equippedM.indexOf(itemBreak);
        equippedM.splice(index3, 1);
        
        index4 = inventoryM.indexOf(itemBreak);
        inventoryM.splice(index3, 1);
        needNew = true;
    } else if (arm) {
        index3 = equippedA.indexOf(itemBreak);
        equippedA.splice(index3, 1);
        
        index4 = inventoryA.indexOf(itemBreak);
        inventoryA.splice(index3, 1);
        needNew = true;
    }
    
    if(needNew) {
    equipItem();
    needNew = false;
    }
}

//This happens if the monster is a skeleton
function monster_skeleton(location) {
    cont2 = false;
if(cont) {
cont4 = true;
while(cont4) {

cont5 = true;
while(cont5) {
var whichA = prompt("Do you want to use a potion or fight?").toLowerCase();

if(whichA === "fight") {
    if(mage2) {
attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is tidal wave.").toLowerCase();
} else if(warrior2) {
   attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is stun.");
} else if(rogue2) {
    attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is steal.");
} else {
attack = prompt("MALFUNCTION");    
}

patt2 = /stone shield/g;
patt3 = /parlathan/g;
patt4 = /stone sword/g;
patt5 = /joyeuse/g;
patt6 = /plate armor/g;
patt7 = /chainmail/g;
patt8 = /old magic staff/g;
patt9 = /stealth boots/g;
patt10 = /magic robes/g;
patt11 = /bow/g;
patt12 = /dagger/g;
patt13 = /wooden crossbow/g;
patt14 = /worn stone shield/g;

if(patt3.test(equippedW) || patt4.test(equippedW) || patt5.test(equippedW)) {
  sR = true;
  strikeAttack = true;
}
if (patt11.test(equippedW) || patt13.test(equippedW)) {
  lR = true;
  strikeAttack = true;
}
if (patt12.test(equippedW)) {
  daggerAttack = true;
}
if (patt8.test(equippedM)) {
 magicStaff = true;
}
if (patt2.test(equippedA) || patt14.test(equippedA)) {
    shield = true;
}

windB = false;
fireB = false;
earthB = false;
tidalW = false;
stabA = false;
shootA = false;
strikeA = false;
spartaK = false;
regular = true;
strikeB = false;
bashA = false;
spartaA = false;

//All damages/attacks done!
if(attack === "wind blast" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=add1;
cont5 = false;
damage+=1;
windB = true;
} else if(attack === "fire ball" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=add1;
fireB = true;
if(damage > 4) {
damage-=4;
}
cont5 = false;
} else if(attack === "earth ball" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=2;
damage+=add1;
cont5 = false;
earthB = true;
} else if(attack === "stab" && daggerAttack === true) {
damage = Math.floor(Math.random() * 12);
stabA = true;
damage+=add1;
cont5 = false;
stole = false;
} else if(attack === "shoot" && lR === true) {
    shootA = true;
damage = Math.floor(Math.random() * 12);
damage+=add1;
stole = false;
if(damage > 3) {
damage-=3;
}
cont5 = false;
} else if(attack === "strike" && lR === true && sR === false) {
    strikeA = true;
damage = Math.floor(Math.random() * 12);
damage+=5;
damage+=add1;
stole = false;
cont5 = false;
} else if(attack === "strike" && sR === true) {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 16);
strikeB = true;
} else {
    regular = false;
    strikeB = true;
    damage = Math.floor(Math.random() * 16);
}
damage+=add1;
cont5 = false;
damage+=1;
} else if(attack === "bash" && shield === true) {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 16);
bashA = true;
} else {
    regular = false;
    strikeA = true;
    damage = Math.floor(Math.random() * 16);
}
damage+=add1;
if(damage > 2) {
damage-=2;
}
cont5 = false;
} else if(attack === "sparta") {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 10);
spartaA = true;
} else {
    regular = false;
    spartaA = true;
    damage = Math.floor(Math.random() * 10);
}
damage+=3;
damage+=add1;
cont5 = false;
var spartaC = Math.floor(Math.random() * 100);
if(spartaC >= 60) {
var spartaK = true;
}
} else if(attack === "stun" && warrior2 === true) {
if (supe >= 1) {
regular = false;
stunE+=2;
supe-=1;
alert(supe + " superpowers left");
} else if(stun > 0) {
alert("Can't use stun again! You have to attack once after the stun!");
} else {
var refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
} else {
cont5 = true;
}
}
} else if(attack === "steal" && rogue2 === true) {
if (supe >= 1) {
stole = true;
stoleA = Math.floor(Math.random() * 75);
gold+=stoleA;
supe-=1;
alert(supe + " superpowers left");
damage = 0;
cont5 = false;
} else {
refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
stole = true;
supe-=1;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
stole = false;
} else {
cont5 = true;
}
}
} else if(attack === "tidal wave" && mage2 === true) {
if (supe >= 1) {
tidalW = true;
damage = 30;
damage+=add1;
supe-=1;
alert(supe + " superpowers left");
cont5 = false;
} else {
refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
} else {
cont5 = true;
}
}
} else if (attack === "stab" && daggerAttack === false) {
    alert("You don't have a dagger!");
} else if (attack === "strike" && strikeAttack === false) {
    alert("You don't have any weapons you can hit the enemy with!");
} else if (attack === "shoot" && lR === false) {
    alert("You don't have any long range weapons!");
} else if (attack === "bash" && shield === false) {
    alert("You don't have a shield!");
} else if (attack === "fire ball" || attack === "wind blast" || attack === "earth ball" && magicStaff === false) {
    alert("You don't have a staff!");
} else {
alert("Not a choice!");
}

damage+=add5;

} else if(whichA === "potion") {
cont7 = true;
while(cont7) {
var whichPotion = prompt("Do you want a health potion, *You have " + playerH + " health, costs 75, you have " + gold + " gold* or a strength potion *Cost 110, adds 5 damage for whole fight* ? Put none if you don't want anything.").toLowerCase(); 

if(whichPotion === "health potion") {
if(gold >= 75) {
alert("Health restored to " + totalHealth);
gold-=75;
playerH = totalHealth;
cont7 = false;
damage = 0;
} else if (gold < 75 && whichPotion === "health potion") { 
alert("Insufficient funds!");
} else {
cont7 = true;
}
} else if (whichPotion === "none") {
cont7 = false;
} else if(whichPotion === "strength potion") {
    if(gold >= 80) {
        gold-=110;
        add5+=5;
        alert("5 damage added!");
        cont7 = false;
    } else {
        alert("Insufficient funds!");
    }
} else {
alert("Not an option!");
}
}
} else {
alert("Wasn't an option!");
}

}
var enemyD = Math.floor(Math.random() *8);
enemyD+=add4;
if(playerH > 0 && skeleton3 > 0) {
    if(magicStaff && mage2){ 
        damage += 5;
    } else if (dagger || lR && rogue2) {
        damage += 3;
    } else if (sR || shield && warrior2) {
        damage += 3;
    }
    
var yH = playerH-=enemyD;
var eH = skeleton3-=damage;

var enemytypeD = Math.floor(Math.random() * 3);
if(enemytypeD === 1) {
    if(enemyD < 2) {
    whatED = " Enemy grabbed his own bone, hit you in the foot, and did";
    } else if(enemyD < 6) {
        whatED = " Enemy grabbed his bone, hit you in the chest, and did";
    } else {
        whatED = " Enemy grabbed his bone, hit you in the head, and did";
    }
} else if(enemytypeD === 2) {
    if(enemyD < 2) {
    whatED = " Enemy used his foot to hit you in the foot, and did";
    } else if(enemyD < 6) {
        whatED = " Enemy used his foot to hit you in the chest, and did";
    } else {
        whatED = " Enemy used his foot to hit you in the head, and did";
    }
} else if(enemytypeD === 0) {
     if(enemyD < 2) {
     whatED = " Enemy used his head to bash you in the foot, and did";
    } else if(enemyD < 6) {
     whatED = " Enemy used his head to bash you in the chest, and did";
    } else {
         whatED = " Enemy used his head to bash you in the head, and did";
    }
} else {
    whatED = "Enemy did a malfunction in telling what it did!";
}

    if(damage < 8 && magicStaff) {
        if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's foot, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's foot, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 15 && magicStaff) {
        if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's chest, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's chest, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's chest, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 21 && magicStaff){
         if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's head, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's head, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's head, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 5 && strikeA || shootA || stabA) {
        if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's foot, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's foot, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 9 && strikeA || shootA || stabA) {
        if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's chest, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's chest, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's chest, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 20 && strikeA || shootA || stabA){
         if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's head, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's head, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's head, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 6 && strikeB || bashA || spartaA) {
       if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's foot, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, slipped, hit the enemy's foot, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 12 && strikeB || bashA || spartaA) {
        if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's chest, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, hit the enemy's chest, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's chest, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 20 && strikeB || bashA || spartaA){
         if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's head, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, jumped, hit the enemy's head, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's head, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    }

if(regular) {
if(damage > 0 && tidalW === false) {
alert(whatPA + " " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
} else if(tidalW) {
    if(waterbedE1 === 1) {
    alert("You acquired the power from within, and used water pipes and created a small tsunami and did " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
    } else {
        damage+=10;
        alert("You acquired the power from within, and used water pipes and the water bed, and created a small tsunami and did " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
        waterbedE1 = 1;
    }
} else if(stunE >= 1 && regular === false) {
alert(whatPA + " " + damage + " damage! Enemy has " + eH + " health! Enemy was stuned and couldn't do any damage.");
playerH+=enemyD;
stunE-=1;
} else if (spartaK && stairs) {
    alert("The skeleton fell down the stairs!");
    alert("You win and earn 10exp, and 10 gold!");
exp+=10;
gold+=10;
if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
var addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if (bedroom && spartaK && waterbedE1 === 0) {
    alert("The skeleton fell on the bed, and it exploded!The skeleton died, but you also lost 10 health!");
    playerH-=10;
    waterbedE1 = 1;
    alert("You win and earn 10exp, and 10 gold!");
exp+=10;
gold+=10;
if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if(stole) {
alert("You stole " + stoleA + " gold! You now have " + gold + " gold!" + whatED + " " + enemyD + " damage! You have " + playerH + " health!");
} else {
    alert("Your attack missed the enemy by inches!" + whatED + " " + enemyD + " damage! You have " + yH + " health!");
}
}

breakItem();

}
if(playerH <= 0) {
alert("You lose! You lost 5exp!");
exp-=5;
life-=1;
if(life > 1) {
alert(life + " lives remaining.");
} else if(life === 1) {
alert("Last life!");
} else {
alert("You ran out of lives!");
cont = false;
cont2 = false;
cont3 = false;
cont4 = false;
cont5 = false;
cont6 = false;
}
cont4 = false;
cont5 = false;
} else if(skeleton3 <= 0) {
alert("You win and earn 10exp, and 10 gold!");
exp+=10;
gold+=10;

var monsterDrop = Math.floor(Math.random() * 167);
if(monsterDrop < 80) {
    alert("You didn't find anything from the body!");
} else if (monsterDrop < 150) {
    var whichweapon = Math.floor(Math.random() * 300);
    if(whichweapon < 126) {
        alert("You found a stone sword!");
        console.log(inventoryW.push("stone sword"));
        maxWeight-=sSweight;
    } else if (whichweapon < 251) {
        alert("You found a stone shield!");
        console.log(inventoryA.push("stone shield"));
        maxWeight-=sSHIELDweight;
    } else {
        alert("You found a bow!");
        console.log(inventoryW.push("bow"));
        maxWeight-=bweight;
    }
} else if (monsterDrop < 165) {
    var whichweapon2 = Math.floor(Math.random() * 278);
    if(whichweapon2 < 5) {
        alert("You found a parlathan sword!");
        console.log(inventoryW.push("parlathan"));
        maxWeight-=pweight;
    } else if (whichweapon2 < 151) {
        alert("You found a dagger!");
        console.log(inventoryW.push("dagger"));
        maxWeight-=dweight;
    } else if (whichweapon2 < 201) {
        alert("You found a wooden crossbow!");
        console.log(inventoryW.push("wooden crossbow"));
        maxWeight-=wCweight;
    } else if (whichweapon2 < 276) {
        alert("You found chainmail armor!");
        console.log(inventoryA.push("chainmail"));
        maxWeight-=cMweight;
    } else {
        alert("You found an old magical staff!");
        console.log(inventoryM.push("old magic staff"));
        maxWeight-=oMSweight;
    }
} else {
    var whichweapon3 = Math.floor(Math.random() * 102);
    if(whichweapon3 < 15) {
        alert("You got the sword called joyeuse!");
        console.log(inventoryW.push("joyeuse"));
        maxWeight-=jweight;
    } else if (whichweapon3 < 20) {
        alert("You got plate armor!");
        console.log(inventoryA.push("plate armor"));
        maxWeight-=pAweight;
    } else if (whichweapon3 < 100) {
        alert("You got stealth boots!");
        console.log(inventoryM.push("stealth boots"));
        maxWeight-=sBweight;
    } else {
        alert("You got magical robes!");
        console.log(inventoryM.push("magical robes"));
        maxWeight-=mRweight;
    }
}

if (maxWeight <= 0) {
    alert("You have reached your maximum amount of weight!");
    removeItem();
}

if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if(playerH <= 0 && skeleton3 <= 0) {
alert("You both died, so none gained or lost expierence.");
cont4 = false;
cont5 = false;
} else {
cont4 = true;
}
}
}
}

//This happens if the monster is a zombie
function monster_zombie(location) {
    cont2 = false;
if(cont) {
cont4 = true;
while(cont4) {

cont5 = true;
while(cont5) {
var whichA = prompt("Do you want to use a potion or fight?").toLowerCase();

if(whichA === "fight") {
    if(mage2) {
attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is tidal wave.").toLowerCase();
} else if(warrior2) {
   attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is stun * " + stunE + " stuns left*.");
} else if(rogue2) {
    attack = prompt("What attack would you like? There is " + allAttacks + " and your special attack is steal.");
} else {
attack = prompt("MALFUNCTION");    
}

patt2 = /stone shield/g;
patt3 = /parlathan/g;
patt4 = /stone sword/g;
patt5 = /joyeuse/g;
patt6 = /plate armor/g;
patt7 = /chainmail/g;
patt8 = /old magic staff/g;
patt9 = /stealth boots/g;
patt10 = /magic robes/g;
patt11 = /bow/g;
patt12 = /dagger/g;
patt13 = /wooden crossbow/g;
patt14 = /worn stone shield/g;

if(patt3.test(equippedW) || patt4.test(equippedW) || patt5.test(equippedW)) {
  sR = true;
  strikeAttack = true;
}
if (patt11.test(equippedW) || patt13.test(equippedW)) {
  lR = true;
  strikeAttack = true;
}
if (patt12.test(equippedW)) {
  daggerAttack = true;
}
if (patt8.test(equippedM)) {
 magicStaff = true;
}
if (patt2.test(equippedA) || patt14.test(equippedA)) {
    shield = true;
}

windB = false;
fireB = false;
earthB = false;
tidalW = false;
stabA = false;
shootA = false;
strikeA = false;
spartaK = false;
regular = true;
strikeB = false;
bashA = false;
spartaA = false;

//All damages/attacks done!
if(attack === "wind blast" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=add1;
cont5 = false;
windB = true;
} else if(attack === "fire ball" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=add1;
fireB = true;
cont5 = false;
} else if(attack === "earth ball" && magicStaff === true) {
damage = Math.floor(Math.random() * 15);
damage+=2;
damage+=add1;
cont5 = false;
earthB = true;
} else if(attack === "stab" && daggerAttack === true) {
damage = Math.floor(Math.random() * 12);
stabA = true;
damage+=add1;
if(damage >= 3) {
    damage-=3;
}
cont5 = false;
stole = false;
} else if(attack === "shoot" && lR === true) {
    shootA = true;
damage = Math.floor(Math.random() * 12);
damage+=add1;
stole = false;
damage += 3;
cont5 = false;
} else if(attack === "strike" && lR === true && sR === false) {
    strikeA = true;
damage = Math.floor(Math.random() * 12);
damage+=3;
damage+=add1;
stole = false;
cont5 = false;
} else if(attack === "strike" && sR === true) {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 16);
strikeB = true;
} else {
    regular = false;
    strikeB = true;
    damage = Math.floor(Math.random() * 16);
}
damage+=add1;
cont5 = false;
damage+=1;
} else if(attack === "bash" && shield === true) {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 16);
bashA = true;
} else {
    regular = false;
    strikeA = true;
    damage = Math.floor(Math.random() * 16);
}
damage+=add1;
damage+=2;
cont5 = false;
} else if(attack === "sparta") {
if(stunE <= 0) {
damage = Math.floor(Math.random() * 10);
spartaA = true;
} else {
    regular = false;
    spartaA = true;
    damage = Math.floor(Math.random() * 10);
}
damage+=3;
damage+=add1;
cont5 = false;
var spartaC = Math.floor(Math.random() * 100);
if(spartaC >= 60) {
var spartaK = true;
}
} else if(attack === "stun" && warrior2 === true) {
if (supe >= 1) {
regular = false;
stunE+=2;
supe-=1;
alert(supe + " superpowers left");
} else if(stun > 0) {
alert("Can't use stun again! You have to attack once after the stun!");
} else {
var refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
} else {
cont5 = true;
}
}
} else if(attack === "steal" && rogue2 === true) {
if (supe >= 1) {
stole = true;
stoleA = Math.floor(Math.random() * 75);
gold+=stoleA;
supe-=1;
alert(supe + " superpowers left");
damage = 0;
cont5 = false;
} else {
refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
stole = true;
supe-=1;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
stole = false;
} else {
cont5 = true;
}
}
} else if(attack === "tidal wave" && mage2 === true) {
if (supe >= 1) {
tidalW = true;
damage = 30;
damage+=add1;
supe-=1;
alert(supe + " superpowers left");
cont5 = false;
} else {
refil = confirm("You don't have any more superpowers, refill for 150 gold? You have " + gold);
if(refil && gold >= 150) {
gold-=150;
supe+=3;
} else if(refil && gold < 150) {
alert("Insufficient funds!");
} else {
cont5 = true;
}
}
} else if (attack === "stab" && daggerAttack === false) {
    alert("You don't have a dagger!");
} else if (attack === "strike" && strikeAttack === false) {
    alert("You don't have any weapons you can hit the enemy with!");
} else if (attack === "shoot" && lR === false) {
    alert("You don't have any long range weapons!");
} else if (attack === "bash" && shield === false) {
    alert("You don't have a shield!");
} else if (attack === "fire ball" || attack === "wind blast" || attack === "earth ball" && magicStaff === false) {
    alert("You don't have a staff!");
} else {
alert("Not a choice!");
}

damage+=add5;

} else if(whichA === "potion") {
cont7 = true;
while(cont7) {
var whichPotion = prompt("Do you want a health potion, *You have " + playerH + " health, costs 75, you have " + gold + " gold* or a strength potion *Cost 110, adds 5 damage for whole fight* ? Put none if you don't want anything.").toLowerCase(); 

if(whichPotion === "health potion") {
if(gold >= 75) {
alert("Health restored to " + totalHealth);
gold-=75;
playerH = totalHealth;
cont7 = false;
damage = 0;
} else if (gold < 75 && whichPotion === "health potion") { 
alert("Insufficient funds!");
} else {
cont7 = true;
}
} else if (whichPotion === "none") {
cont7 = false;
} else if(whichPotion === "strength potion") {
    if(gold >= 80) {
        gold-=110;
        add5+=5;
        alert("5 damage added!");
        cont7 = false;
    } else {
        alert("Insufficient funds!");
    }
} else {
alert("Not an option!");
}
}
} else {
alert("Wasn't an option!");
}

}
var enemyD = Math.floor(Math.random() * 10);
enemyD+=add4;
if(playerH > 0 && zombie3 > 0) {
        if(magicStaff && mage2){ 
        damage += 5;
    } else if (dagger || lR && rogue2) {
        damage += 3;
    } else if (sR || shield && warrior2) {
        damage += 3;
    }
    
var yH = playerH-=enemyD;
var eH = zombie3-=damage;

var enemytypeD = Math.floor(Math.random() * 3);
if(enemytypeD === 1) {
    if(enemyD < 2) {
    whatED = " Enemy went to bite you, bit you in the foot, and did";
    } else if(enemyD < 6) {
        whatED = " Enemy went to bite you, bit you in the chest, and did";
    } else {
        whatED = " Enemy went to bite you, bit you in the head, and did";
    }
} else if(enemytypeD === 2) {
    if(enemyD < 2) {
    whatED = " Enemy used his foot to hit you in the foot, and did";
    } else if(enemyD < 6) {
        whatED = " Enemy used his foot to hit you in the chest, and did";
    } else {
        whatED = " Enemy used his foot to hit you in the head, and did";
    }
} else if(enemytypeD === 0) {
     if(enemyD < 2) {
     whatED = " Enemy used his head to bash you in the foot, and did";
    } else if(enemyD < 6) {
     whatED = " Enemy used his head to bash you in the chest, and did";
    } else {
         whatED = " Enemy used his head to bash you in the head, and did";
    }
} else {
    whatED = "Enemy did a malfunction in telling what it did!";
}

    if(damage < 8 && magicStaff) {
        if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's foot, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's foot, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 15 && magicStaff) {
        if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's chest, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's chest, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's chest, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 21 && magicStaff){
         if(fireB) {
    whatPA = "You sparked fire in your hands, made it burn brighter, hit the enemy's head, and did";
        } else if(windB) {
            whatPA = "You conquered the wind, made it stronger, hit the enemy's head, and did";
        } else if(earthB) {
            whatPA = "You rose the earth, swirled it and made it bigger, hit the enemy's head, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 5 && strikeA || shootA || stabA) {
        if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's foot, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's foot, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 9 && strikeA || shootA || stabA) {
        if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's chest, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's chest, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's chest, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 20 && strikeA || shootA || stabA){
         if(strikeA) {
    whatPA = "You grabbed your crossbow and swung, hit the enemy's head, and did";
        } else if(shootA) {
            whatPA = "You grabbed an arrow, shot it, hit the enemy's head, and did";
        } else if(stabA) {
            whatPA = "You reached for your knife, stabbed the enemy's head, and did";
        } else {
            whatPA = "Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 6 && strikeB || bashA || spartaA) {
       if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's foot, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, slipped, hit the enemy's foot, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's foot, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    } else if(damage < 12 && strikeB || bashA || spartaA) {
        if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's chest, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, hit the enemy's chest, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's chest, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
        
    } else if (damage < 20 && strikeB || bashA || spartaA){
         if(strikeB) {
    whatPA = "You grabbed your sword and swung, hit the enemy's head, and did";
        } else if(bashA) {
            whatPA = "You put up your shield, ran towards the enemy, jumped, hit the enemy's head, and did";
        } else if(spartaA) {
            whatPA = "You lifted your foot and hit the enemy's head, and did";
        } else {
            whatPA = " Malfunction! Tell programmer error: Player attack incorrect.";
        }
    }

if(regular) {
if(damage > 0 && tidalW === false) {
alert(whatPA + " " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
} else if(tidalW) {
    if(waterbedE1 === 1) {
    alert("You acquired the power from within, and used water pipes and created a small tsunami and did " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
    } else {
        damage+=10;
        alert("You acquired the power from within, and used water pipes and the water bed, and created a small tsunami and did " + damage + " damage!" + whatED + " " + enemyD + " damage! You have " + yH + " health! Enemy has " + eH + " health!");
        waterbedE1 = 1;
    }
} else if(stunE >= 1 && regular === false) {
alert(whatPA + " " + damage + " damage! Enemy has " + eH + " health! Enemy was stuned and couldn't do any damage.");
playerH+=enemyD;
stunE-=1;
} else if (spartaK && stairs) {
    alert("The skeleton fell down the stairs!");
    alert("You win and earn 12exp, and 12 gold!");
exp+=12;
gold+=12;
if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
var addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if (bedroom && spartaK && waterbedE1 === 0) {
    alert("The skeleton fell on the bed, and it exploded!The skeleton died, but you also lost 10 health!");
    playerH-=10;
    waterbedE1 = 1;
    alert("You win and earn 12exp, and 12 gold!");
exp+=12;
gold+=12;
if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if(stole) {
alert("You stole " + stoleA + " gold! You now have " + gold + " gold!" + whatED + " " + enemyD + " damage! You have " + playerH + " health!");
} else {
    alert("Your attack missed the enemy by inches!" + whatED + " " + enemyD + " damage! You have " + yH + " health!");
}
}

}
if(playerH <= 0) {
alert("You lose! You lost 7exp!");
exp-=7;
life-=1;
if(life > 1) {
alert(life + " lives remaining.");
} else if(life === 1) {
alert("Last life!");
} else {
alert("You ran out of lives!");
cont = false;
cont2 = false;
cont3 = false;
cont4 = false;
cont5 = false;
cont6 = false;
}
cont4 = false;
cont5 = false;
} else if(zombie3 <= 0) {
alert("You win and earn 12exp, and 12 gold!");
exp+=12;
gold+=12;

var monsterDrop = Math.floor(Math.random() * 167);
if(monsterDrop < 60) {
    alert("You didn't find anything from the body!");
} else if (monsterDrop < 140) {
    var whichweapon = Math.floor(Math.random() * 300);
    if(whichweapon < 126) {
        alert("You found a stone sword!");
        console.log(inventoryW.push("stone sword"));
        maxWeight-=sSweight;
    } else if (whichweapon < 251) {
        alert("You found a stone shield!");
        console.log(inventoryA.push("stone shield"));
        maxWeight-=sSHIELDweight;
    } else {
        alert("You found a bow!");
        console.log(inventoryW.push("bow"));
        maxWeight-=bweight;
    }
} else if (monsterDrop < 165) {
    var whichweapon2 = Math.floor(Math.random() * 278);
    if(whichweapon2 < 5) {
        alert("You found a parlathan sword!");
        console.log(inventoryW.push("parlathan"));
        maxWeight-=pweight;
    } else if (whichweapon2 < 151) {
        alert("You found a dagger!");
        console.log(inventoryW.push("dagger"));
        maxWeight-=dweight;
    } else if (whichweapon2 < 201) {
        alert("You found a wooden crossbow!");
        console.log(inventoryW.push("wooden crossbow"));
        maxWeight-=wCweight;
    } else if (whichweapon2 < 276) {
        alert("You found chainmail armor!");
        console.log(inventoryA.push("chainmail"));
        maxWeight-=cMweight;
    } else {
        alert("You found an old magical staff!");
        console.log(inventoryM.push("old magic staff"));
        maxWeight-=oMSweight;
    }
} else {
    var whichweapon3 = Math.floor(Math.random() * 102);
    if(whichweapon3 < 15) {
        alert("You got the sword called joyeuse!");
        console.log(inventoryW.push("joyeuse"));
        maxWeight-=jweight;
    } else if (whichweapon3 < 20) {
        alert("You got plate armor!");
        console.log(inventoryA.push("plate armor"));
        maxWeight-=pAweight;
    } else if (whichweapon3 < 100) {
        alert("You got stealth boots!");
        console.log(inventoryM.push("stealth boots"));
        maxWeight-=sBweight;
    } else {
        alert("You got magical robes!");
        console.log(inventoryM.push("magical robes"));
        maxWeight-=mRweight;
    }
}

if (maxWeight <= 0) {
    alert("You have reached your maximum amount of weight!");
    removeItem();
}

if (exp >= nextLvl) {
cont5 = false;
cont4 = false;
add4+=2;
enemyHI+=3;
nextLvl+=addin;
addin*=1.5;
lvl+=1;
alert("You are now level " + lvl + "!");
cont6 = true;
while(cont6) {
addPerk = prompt("Do you want to add to health, strength, or chance?").toLowerCase();

if(addPerk === "health") {
alert("Health added by 5");
totalHealth+=5;
playerH = totalHealth;
cont6 = false;
} else if (addPerk === "strength") {
add1+=3;
cont6 = false;
} else if(addPerk === "chance" && chance < 0.99) {
add2+=0.05;
cont6 = false;
} else if(addPerk === "chance" && chance >= 1) {
alert("Chance maxed out!");
} else {
alert("Not a choice!");
}
}
}
cont4 = false;
cont5 = false;
} else if(playerH <= 0 && zombie3 <= 0) {
alert("You both died, so none gained or lost expierence.");
cont4 = false;
cont5 = false;
} else {
cont4 = true;
}
}
}
}



if(start) {

cont3 = true;
while(cont3) {
var clas = prompt("Do you want to be a mage, rogue, or warrior?").toLowerCase();
if(clas === "mage") {
alert("You are a mage and your strongest strengths are anything magical! Your special ability is tidal wave!");
mage2 = true;
playerH = 50;
totalHealth = 50;
totalHealth+=add3;
cont3 = false;
console.log(inventoryM.push("old magic staff"));
maxWeight-=oMSweight;
console.log(equippedM.push("old magic staff"));
console.log(inventoryM.push("worn magical robes"));
maxWeight-=mRweight;
console.log(equippedM.push("worn magical robes"));
} else if(clas === "rogue") {
alert("You are a rogue and your strongest strengths are: shooting, stabing, and sneaking! Your special ability is steal!");
rogue2 = true;
playerH = 80;
totalHealth = 80;
totalHealth+=add3;
cont3 = false;
console.log(inventoryW.push("wooden crossbow"));
console.log(equippedW.push("wooden crossbow"));
maxWeight-=wCweight;
console.log(inventoryM.push("stealth boots"));
console.log(equippedM.push("stealth boots"));
maxWeight-=sBweight;
console.log(inventoryW.push("dagger"));
console.log(equippedW.push("dagger"));
maxWeight-=dweight;
} else if(clas === "warrior"){
alert("You are a warrior and your strongest strengths are: striking, bashing, and sparta! Your special ability is stun!");
warrior2 = true;
playerH = 65;
totalHealth = 65;
totalHealth+=add3;
cont3 = false;
console.log(inventoryW.push("stone sword"));
console.log(equippedW.push("stone sword"));
maxWeight-=sSweight;
console.log(inventoryA.push("stone shield"));
console.log(equippedA.push("stone shield"));
maxWeight-=sSHIELDweight;
} else {
alert("Not a choice!");
}
}

alert("Your equipped items are: " + equippedW + " " + equippedA + " " + equippedM);

cont = true;
while(cont) {
add5 = 0;

var villianT = Math.floor(Math.random() * 100);
giant = false;
orc = false;
dragon = false;
skeleton = false;
zombie = false;
vampire = false;
demon = false;
knightF = false;
cyclops = false;
ghost = false;

giant3 = 75;
giant3+=enemyHI;

orc3 = 60;
orc3+=enemyHI;

dragon3 = 90;
dragon3+=enemyHI;

skeleton3 = 40;
skeleton3+=enemyHI;

zombie3 = 50;
zombie3+=enemyHI;

vampire3 = 80;
vampire3+=enemyHI;

demon3 = 85;
demon3+=enemyHI;

knightF3 = 70;
knightF3+=enemyHI;

cyclops3 = 95;
cyclops3+=enemyHI;

ghost3 = 30;
ghost3+=enemyHI;

if(villianT <= 10) {
orc = true;
} else if(villianT <= 20) {
giant = true;
} else if(villianT <= 30) {
dragon = true;
} else if(villianT <= 40) {
skeleton = true;
} else if(villianT <= 50) {
zombie = true;
} else if(villianT <= 60) {
vampire = true;
} else if(villianT <= 70) {
demon = true;
} else if(villianT <= 80) {
knightF = true;
} else if(villianT <= 90) {
cyclops = true;
} else if(villianT <= 100) {
ghost = true;
} else {
alert("Malfunction!");
}

if(kitchen === true || hallway === true || shed === true || diningroom === true || garage === true || attic === true || livingroom === true) {
    cont = false;
    alert("Ending due to not a room yet.");
}

if(dontC >= 1){
if(kitchen === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(hallway === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(bathroom === true) {
cont6 = true;
while(cont6) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
var whichD = prompt("Do you want to go backward(s) to the bedroom, or forward to the hallway? *Say direction in which way you want to go* Say leave if you want to leave.").toLowerCase();
if(whichD === "backward") {
    livingroom = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "forward") {
    bedroom = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "leave") {
    alert("Goodbye!");
    cont = false;
    cont6 = false;
} else {
    alert("That's not a choice!");
}
}
} else if(stairs === true) {
    cont6 = true;
    while(cont6) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
var whichD = prompt("Do you want to go down to the living room, or up to the bedroom? *Say direction in which way you want to go* Say leave if you want to leave.").toLowerCase();
if(whichD === "down") {
    livingroom = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "up") {
    bedroom = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "leave") {
    alert("Goodbye!");
    cont = false;
    cont6 = false;
} else {
    alert("That's not a choice!");
}
}
} else if(shed === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(diningroom === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(garage === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(bedroom === true) {
cont6 = true;
while(cont6) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
var whichD = prompt("Do you want to go down the stairs or to the right to the bathroom? *Say direction in which way you want to go* Say leave if you want to leave.").toLowerCase();
if(whichD === "down") {
    stairs = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "right") {
    bathroom = true;
    cont6 = false;
    dontC = 0;
} else if(whichD === "leave") {
    alert("Goodbye!");
    cont = false;
    cont6 = false;
} else {
    alert("Not an option!");
}
}
} else if(attic === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else if(livingroom === true) {
kitchen = false;
hallway = false;
bathroom = false;
bedroom = false;
shed = false;
diningroom = false;
garage = false;
stairs = false;
attic = false;
livingroom = false;
} else {
alert("Malfunction!");
}
}

if(cont) {

if(stairs && skeleton) {
    dontC=1;
alert("You see a skeleton while on the stairs!");
equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling when trying to flee, and you lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_skeleton();
break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the skeleton catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

if(bathroom && skeleton) {
    dontC=1;
alert("You see a skeleton while in the bathroom!");
equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling and slipping in a toilet when trying to flee, and the monster kills you while your distracted! You lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_skeleton();
break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the skeleton catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

if(bedroom && skeleton) {
    dontC=1;
alert("You see a skeleton while in a bedroom!");
equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling, hitting the water bed and bouncing off and getting a concussion when trying to flee, and the skeleton kills you! You lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_skeleton();
break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the skeleton catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

if(stairs && zombie) {
    dontC=1;
alert("You see a zombie while on the stairs!");

//Asks for opening inventory before fight, soon to be changed so not always asking...
equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling when trying to flee, and you lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_zombie();
break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the zombie catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

if(bathroom && zombie) {
    dontC=1;
alert("You see a zombie while in the bathroom!");

equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling when trying to flee and the zombie kills you, and you lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_zombie();

break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the zombie catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

if(bedroom && zombie) {
    dontC=1;
alert("You see a zombie while in the bedroom!");
equipItem();

cont2 = true;
while(cont2) {
var options = prompt("Your options include: fight, flee, or take a chance to steal! (Just put chance)").toLowerCase();

switch(options) {
case'flee':
cont2 = false;
var slip = Math.random();
if (slip <= 0.3) {
alert("You end up falling, hitting the water bed and bouncing off and getting a concussion when trying to flee, and the zombie kills you! You lose a life!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
} else {
alert("You successfully succeed, this time.");
cont2 = false;
}
break;
case'fight':
    checkEquipped();
monster_skeleton();
break;
case'chance':
cont2 = false;
var chance = Math.random();
var amount = Math.floor(Math.random() * 100);
chance+=add2;

//Adds more of a chance if certain items equipped, or if a rogue
var pattS = /stealth boots/g;
if(rogue2) {
chance+=0.05;
amount+=5;
} 
if (patt5.test(equippedM)) {
    chance+=0.1;
}

if (chance <= 0.3) {
gold+=amount;
alert("You find " + amount + " gold! You now have " + gold + "! After stealing you flee the spot!");
} else {
alert("You were unlucky, and the skeleton catches you and kills you!");
life-=1;
if (life > 1) {
alert(life + " lives remaining");
cont2 = false;
} else if(life === 1) {
alert("Last life!");
cont2 = false;
} else {
alert("You have 0 lives and die!");
cont2 = false;
cont = false;
}
}
break;
default:
alert("Not a choice!");
}
}
}

}
}
}
