'use client'
import { useEffect, useState } from 'react';
import { StudentTable } from '@/components/StudentTable';
import { StudentsList } from '@/data/Students';
import { AnimeSearch } from '@/components/apidata';

import Card3D from '@/components/Card3d';


const Page = () => {
    
  return ( 
    <div className='w-vh h- flex justify-center items-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>
    
    
      <AnimeSearch/>
    
    
    
    </div>
    
      
   
)

}
export default Page;
