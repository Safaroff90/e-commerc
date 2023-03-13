import React from 'react'
import './List.scss'
import Card from '../Card'
const List = () => {

    const data =[
        {
            id:1,
            img:"https://images.pexels.com/photos/6311251/pexels-photo-6311251.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/6311250/pexels-photo-6311250.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"white oversize T-shirt",
            isNew:true,
            oldPrice:19,
            price: 12
        },
        {
            id:2,
            img:"https://images.pexels.com/photos/1206873/pexels-photo-1206873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/1643025/pexels-photo-1643025.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Coat",
            isNew:true,
            oldPrice:19,
            price: 12
        },
        {
            id:3,
            img:"https://images.pexels.com/photos/12454043/pexels-photo-12454043.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/12454040/pexels-photo-12454040.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Skirt",
            isNew:true,
            oldPrice:19,
            price: 12
        },
        {
            id:4,
            img:"https://images.pexels.com/photos/15759373/pexels-photo-15759373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            img2:"https://images.pexels.com/photos/15759264/pexels-photo-15759264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            title:"Hat",
            isNew:true,
            oldPrice:19,
            price: 12
        },
        

    ]

  return (
    <div className='list'>
        {data?.map(item=>(
            <Card item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default List