import SPELLS from 'common/SPELLS';

import HIT_TYPES from 'Parser/Core/HIT_TYPES';

import CoreDrapeOfShame, { DRAPE_OF_SHAME_CRIT_EFFECT } from 'Parser/Core/Modules/Items/DrapeOfShame';

class DrapeOfShame extends CoreDrapeOfShame {
  on_byPlayer_heal(event) {
    const spellId = event.ability.guid;
    if (this.owner.constructor.abilitiesAffectedByHealingIncreases.indexOf(spellId) === -1 || spellId === SPELLS.BEACON_OF_LIGHT.id) {
      return;
    }
    super.on_byPlayer_heal(event);
  }
  on_beacon_heal({ beaconTransferEvent, matchedHeal: healEvent }) {
    const spellId = healEvent.ability.guid;
    if (this.owner.constructor.abilitiesAffectedByHealingIncreases.indexOf(spellId) === -1 || spellId === SPELLS.BEACON_OF_LIGHT.id) {
      return;
    }
    if (healEvent.hitType !== HIT_TYPES.CRIT) {
      return;
    }

    const amount = beaconTransferEvent.amount;
    const absorbed = beaconTransferEvent.absorbed || 0;
    const overheal = beaconTransferEvent.overheal || 0;
    const raw = amount + absorbed + overheal;
    const rawNormalPart = raw / this.getCritHealingBonus(healEvent);
    const rawDrapeHealing = rawNormalPart * DRAPE_OF_SHAME_CRIT_EFFECT;

    const effectiveHealing = Math.max(0, rawDrapeHealing - overheal);

    this.healing += effectiveHealing;
  }
  getCritHealingBonus(event) {
    let critModifier = super.getCritHealingBonus(event);
    if (event.ability.guid === SPELLS.HOLY_SHOCK_HEAL.id) {
      const shockTreatmentTraits = this.owner.selectedCombatant.traitsBySpellId[SPELLS.SHOCK_TREATMENT.id];
      // Shock Treatment increases critical healing of Holy Shock by 8%: http://www.wowhead.com/spell=200315/shock-treatment
      // This critical healing works on both the regular part and the critical part (unlike Drape of Shame), so we double it.
      critModifier += shockTreatmentTraits * 0.08 * 2;
    }
    return critModifier;
  }
}

export default DrapeOfShame;
