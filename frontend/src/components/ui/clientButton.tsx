'use client';

import { redirect } from 'next/navigation';
import { Button } from '@/components/ui/button';
//@ts-ignore
 const ClientButton = ({a}) => {


  const handleClick = () => {
    if (a == 1) {
      redirect('/sign-out'); 
    } else {
     redirect('/sign-in'); 
    }
  };

  return (
    <Button onClick={handleClick}>
      {a >= 1 ? "Sign Out" : "Sign In"}
    </Button>
  );
};


export default ClientButton;