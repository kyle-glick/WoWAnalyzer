import AbilityTracker from 'Main/Parser/Modules/Core/AbilityTracker';
import { FLASH_OF_LIGHT_SPELL_ID, HOLY_LIGHT_SPELL_ID } from 'Main/Parser/Constants';

const INFUSION_OF_LIGHT_SPELL_ID = 54149;
const INFUSION_OF_LIGHT_BUFF_EXPIRATION_BUFFER = 50; // the buff expiration can occur several MS before the heal event is logged, this is the buffer time that an IoL charge may have dropped during which it will still be considered active.

class PaladinAbilityTracker extends AbilityTracker {
  on_byPlayer_heal(event) {
    if (super.on_byPlayer_heal) {
      super.on_byPlayer_heal(event);
    }
    const spellId = event.ability.guid;
    const cast = this.getAbility(spellId, event.ability);

    if (spellId === FLASH_OF_LIGHT_SPELL_ID || spellId === HOLY_LIGHT_SPELL_ID) {
      const hasIol = this.owner.selectedCombatant.hasBuff(INFUSION_OF_LIGHT_SPELL_ID, event.timestamp, INFUSION_OF_LIGHT_BUFF_EXPIRATION_BUFFER);

      if (hasIol) {
        cast.healingIolHits = (cast.healingIolHits || 0) + 1;
        cast.healingIolHealing = (cast.healingIolHealing || 0) + (event.amount || 0);
        cast.healingIolAbsorbed = (cast.healingIolAbsorbed || 0) + (event.absorbed || 0);
        cast.healingIolOverheal = (cast.healingIolOverheal || 0) + (event.overheal || 0);
      }
    }

    const hasBeacon = this.owner.modules.beaconTargets.hasBeacon(event.targetID);
    if (hasBeacon) {
      cast.healingBeaconHits = (cast.healingBeaconHits || 0) + 1;
      cast.healingBeaconHealing = (cast.healingBeaconHealing || 0) + (event.amount || 0);
      cast.healingBeaconAbsorbed = (cast.healingBeaconAbsorbed || 0) + (event.absorbed || 0);
      cast.healingBeaconOverheal = (cast.healingBeaconOverheal || 0) + (event.overheal || 0);
    }
  }
}

export default PaladinAbilityTracker;