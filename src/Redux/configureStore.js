import { configureStore } from '@reduxjs/toolkit'
import { CharacterClasses } from './characterClasses';
import { CharacterLevel } from './characterLevel';
import { CharacterStats } from './characterStats';
export const store = configureStore({
       reducer:{
        characterClasses: CharacterClasses,
        characterLevel: CharacterLevel,
        characterStats: CharacterStats,
       }});
