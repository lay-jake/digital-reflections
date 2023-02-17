import { configureStore } from '@reduxjs/toolkit'
import { CharacterAncestries } from './characterAncestry';
import { CharacterClasses } from './characterClasses';
import { CharacterDieties } from './characterDieties';
import { CharacterLevel } from './characterLevel';
import { CharacterStats } from './characterStats';
export const store = configureStore({
       reducer:{
        characterClasses: CharacterClasses,
        characterLevel: CharacterLevel,
        characterStats: CharacterStats,
        characterAncestries: CharacterAncestries,
        characterDieties: CharacterDieties,
       }});
