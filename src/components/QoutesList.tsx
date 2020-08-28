import React from 'react';
import Qoute from '../types/Qoute/Qoute.type';


const QoutesList = (props: any) => {
    const qoutesForSong : Qoute[] = props.qoutes;


    return (
        <>
            <span>Qutes</span>
            <span> {qoutesForSong.length} qoutes </span>
            <div>
                {qoutesForSong.map((qoute:Qoute, index: number) => (
                    <p key={index}>
                        {qoute.text}
                    </p>
                ))}
            </div>
        </>
    )
}  


export default QoutesList;