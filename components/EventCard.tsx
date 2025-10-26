import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface Props {
  title: string;
  image: string;
}

const EventCard = ({ title, image}: Props) => {
  return (
    <Link href={'/events'} id='event-card' >
      <Image src={image} alt='event' className='poster' width={410} height={300}/>
      <p className='title'>{title}</p>
    </Link>
  );
}

export default EventCard;
