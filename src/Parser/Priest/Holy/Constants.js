import SPELLS from 'common/SPELLS';

export const ABILITIES_AFFECTED_BY_HEALING_INCREASES = [
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.PRAYER_OF_HEALING.id,
  SPELLS.RENEW.id,
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.LIGHT_OF_TUURE_TRAIT.id,
  SPELLS.COSMIC_RIPPLE_TRAIT.id,
  SPELLS.HOLY_MENDING_TRAIT.id,
  SPELLS.BINDING_HEAL_TALENT.id,
  SPELLS.CIRCLE_OF_HEALING_TALENT.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_STAR_TALENT.id, // might have diff id for heal?
  SPELLS.OCEANS_EMBRACE,
  SPELLS.GUILTY_CONSCIENCE.id,
];

// better off making things that -dont- proc it perhaps?
export const ABILITIES_THAT_TRIGGER_MASTERY = [
  SPELLS.DIVINE_HYMN_HEAL.id,
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.PRAYER_OF_MENDING_HEAL.id,
  SPELLS.PRAYER_OF_HEALING.id,
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
  SPELLS.DESPERATE_PRAYER.id,
  SPELLS.LIGHT_OF_TUURE_TRAIT.id,
  SPELLS.COSMIC_RIPPLE_TRAIT.id,
  SPELLS.HOLY_MENDING_TRAIT.id,
  SPELLS.BINDING_HEAL_TALENT.id,
  SPELLS.CIRCLE_OF_HEALING_TALENT.id,
  SPELLS.HALO_HEAL.id,
  SPELLS.DIVINE_STAR_TALENT.id, // might have diff id for heal?
  SPELLS.OCEANS_EMBRACE.id,
  SPELLS.GUILTY_CONSCIENCE.id,
  SPELLS.RENEW.id, // this is reduced in calculations, due to the initial tick proccing EoL but not the periodic ticks
];

export const ABILITIES_THAT_TRIGGER_ENDURING_RENEWAL = [
  SPELLS.GREATER_HEAL.id,
  SPELLS.FLASH_HEAL.id,
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.LIGHT_OF_TUURE_TRAIT.id,
  SPELLS.BINDING_HEAL_TALENT.id,
  SPELLS.CIRCLE_OF_HEALING_TALENT.id,
];

export const ABILITIES_AFFECTED_BY_APOTHEOSIS_TALENT = [
  SPELLS.HOLY_WORD_SERENITY.id,
  SPELLS.HOLY_WORD_SANCTIFY.id,
];
