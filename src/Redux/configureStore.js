import { configureStore } from '@reduxjs/toolkit'
import { CharacterAncestries } from './characterAncestry';
import { CharacterClasses } from './characterClasses';
import { CharacterDieties } from './characterDieties';
import { CharacterLevel } from './characterLevel';
import { CharacterStats } from './characterStats';
import { FeatsLibrary } from './featsLibrary';
import { Notes } from './notes';
import { SpellsLibrary } from './spellLibrary';

export const store = configureStore({
       reducer:{
        characterClasses: CharacterClasses,
        characterLevel: CharacterLevel,
        characterStats: CharacterStats,
        characterAncestries: CharacterAncestries,
        characterDieties: CharacterDieties,
        featsLibrary:FeatsLibrary,
        notes:Notes,
        spellsLibrary:SpellsLibrary
       }});
