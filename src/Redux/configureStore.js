import { configureStore } from '@reduxjs/toolkit'
import { CharacterClasses } from './characterClasses';

export const store = configureStore({
       reducer:{
        characterClasses: CharacterClasses,
       }});
