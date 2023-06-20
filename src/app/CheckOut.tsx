"use client";
import getStripePromise from "@/lib/stripe";

const products=[{
    product:1,
    name:"Flex Push Button",
    price:500,
    quantity:3,
    image:"/kidsmalepic.jpeg"

},
{
    product:2,
    name:"Cameryn Sash Tie Dress",
    price:200,
    quantity:2,
    image:"/kidsmalepic.jpeg"
},
];

const StripeCheckOutButton=()=>{
    const handleCheckout=async()=>{
        const stripe=await getStripePromise();
        const response=await fetch("/api/stripe-session/",{
            method:"POST",
            cache:'no-store',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(products)
        });
        const data=await response.json();
        console.log("response"+response);
        console.log("data"+data);
        if(data.session){
            console.log("sess "+data.session.id);

            stripe?.redirectToCheckout({sessionId:data.session.id});
        }
    }
    return (
        <div className="py-5">
            <button className="bg-green-500 py-5 px-3 rounded-md" onClick={handleCheckout}>Check Out</button>
        </div>
    )
}
export default StripeCheckOutButton;