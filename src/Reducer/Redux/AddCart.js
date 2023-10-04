import { createSlice } from "@reduxjs/toolkit";

export const AddCart = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addtocart(state, action) {
            state.items.push(action.payload)
        },
        removeItems(state, action) {
            console.log(action.payload);
            // state.items.splice(state.items.findIndex((arrow) => arrow.id === action.payload), 1)
            state.items.splice((action.payload), 1)
        }
    }
})

export const { addtocart, removeItems } = AddCart.actions;