'use client'
import React, { useEffect } from 'react';

export default function useNavBar(animateNavBar){
    useEffect(() => {
        animateNavBar();
    }, []); 
} 