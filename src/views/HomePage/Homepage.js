import React, { useEffect, useState } from 'react'
import ColorTile from '../../components/ColorTile'
import './index.css'
import { setColor } from '../../redux/color/ColorAction';
import {useSelector, useDispatch} from 'react-redux'

function Homepage(props) {
	const colors = ['#609966', '#F03861', '#111D5E', '#FFE087']
	const [currentColor, setCurrentColor] = useState('a');

	const setTheme=(color)=>{
		document.documentElement.style.setProperty('--bg-color', color)
	}
	
	const setBgColor = (e)=>{
		const color = e.target.style.getPropertyValue('--tile-color');
		setCurrentColor(color);
		localStorage.setItem('color', color);
	}

	useEffect(()=>{
		setCurrentColor(localStorage.getItem('color'))
	},[])

	useEffect(()=>{
		setTheme(currentColor);
	}, [currentColor])

	return (
		<div className="container" >
			<h1>Color Changer</h1>
			<h3>Choose a color from below to change the color of the background</h3>
			<div className='tileContainer'>
			{
				colors.map((color, id)=><ColorTile key={id} setColor={setBgColor} color={color}/>)
			}
			</div>	
		</div>		
	)
}



export default (Homepage)