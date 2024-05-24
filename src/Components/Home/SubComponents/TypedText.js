import React, { useRef, useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = ({ strings }) => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings,
            typeSpeed: 60,
            backSpeed: 30,
            loop: true,
        });

        return () => {
            typed.destroy();
        };
    }, [strings]);

    return <span ref={el} />;
};

export default TypedText;
