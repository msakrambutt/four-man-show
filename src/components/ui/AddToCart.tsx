"use client";
import {useDispatch} from 'react-redux'
import {Button} from './button';
import { cartActions } from '@/store/slice/cartSlice';
import toast from 'react-hot-toast';


const AddToCart=()=>{
    const dispatch =useDispatch();
    const addItem=()=>{
        dispatch(cartActions.addToCart({quantity:1}));
        toast.success("product added");
    }
    return (
        <Button onClick={addItem}>Add to Cart</Button>
    )
}
export default AddToCart;