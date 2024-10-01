const { createSlice } = require("@reduxjs/toolkit");


const cartSlice=createSlice({

    name:"cart",
    initialState:{
        items:["burgger","pizza"]
    },

    reducers:{
        
        addItem:(state,action)=>{
            //we ate mutatting the state here 
state.items.push(action.payload)
        },

        removeItem:(state,action)=>{
            state.items.pop()
        },

        clearCart:(state,action)=>{
            state.items.length=0
        }
    }
})


export const {addItem,removeItem,clearCart}=cartSlice.actions

export default cartSlice.reducer