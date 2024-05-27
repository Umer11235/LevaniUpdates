'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import './Style/style.css'
import { blogs_card } from './interface';
import Icons from '@/components/header/customIcons';
import user from "../../../images/Frame 1.png";



function Blogs_Card(props:blogs_card) {
    const routr=useRouter();
    return (  

        <div className="blogsCard" onClick={()=>{
            routr.push('/view-blog')
        }}>

<div className="blogsCard-img">
  <Image
    //  layout="fill"
    objectFit="contain"
    objectPosition="center"
    src={props.img} alt="" />
</div>
<p>{props.heading}</p>



<div className='blogsCard_Desc'>

<p> {props.desc}</p>


<div className="blogs_writer">

<div>
<p>Writer Name</p>
<p>Writer title</p>
</div>


<div>
<Image src={user} alt="abc"/>
</div>

</div>

</div>

</div>
    );
}

export default Blogs_Card;