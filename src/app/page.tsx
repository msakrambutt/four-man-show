import Hero from './views/Hero';
import StripeCheckOutButton from './CheckOut';
import { client } from '@/lib/sanityClient';

async function GetData() {
  const res = await client.fetch(`*[_type=="product"]`)
  return res;
}
export default async function Home() {
  
 const data=await GetData();
  console.log(data);



  return (
    <div>
      {/* <div className='text-bold text-lg'>
        Counter App
      </div>
      <CounterView/>
    <Hero/>
    <ProductList/>
    <h3 className='font-bold text-lg  mt-3'>Flex sweater</h3>
    <p className='text-bold'>$102</p> */}
    <div>Sanity Project </div>
    {/* <StripeCheckOutButton/> */}
    </div>
  )
}
