'use client';
import Image from 'next/image';
import './Style/style.css'
import { news_card } from './interface';
import Icons from '@/components/header/customIcons';
import { useRouter } from 'next/navigation';


function News_Card(props:news_card) {
    const router=useRouter();
    return (  

        <div className="NewsCard" onClick={()=>{
            router.push('./view_news')
        }}>

<div className="NewsCard-img">
  <Image
    //  layout="fill"
    objectFit="contain"
    objectPosition="center"
    src={props.img} alt="" />
</div>
<p>{props.heading}</p>

<div className="NewsCardL">
<p>{props.time}</p>

<div className='NewsCard_Desc'>

<p><span></span> {props.desc}</p>
<button>Read More...<Icons icon="chev-right"/></button>
</div>

</div>
</div>
    );
}

export default News_Card;