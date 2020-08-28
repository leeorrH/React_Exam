import Qoute from '../Qoute/Qoute.type';

export default interface Song {
    id : number;
    title : string; 
    youtubeId : string;
    quotes : [Qoute];
}