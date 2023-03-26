import React from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../store';

const Card = () => {
    const data = useSelector((state: RootState) => state.weather.weather);

    return (
        <div className='weather'>
            <div className='card'>
                <div className='top'>
                    <div>
                        <p>{data.name}, {data.sys.country}</p>
                        {
                            data.weather.map((item: any, index: number) => (
                                <span key={index} >{item.description}</span>
                            ))
                        }
                    </div>
                    {
                        data.weather.map((item: any, index: number) => (
                            <img key={index} src={`./ıcons/${item.icon}.png`} alt="weather" />
                        ))
                    }

                </div>
                <div className='bottom'>
                    <p>{Math.round(data.main.temp)}°C</p>
                    <div className='details'>
                        <div className='c-item'>
                            <span>Details</span>
                        </div>
                        <div className='c-item'>
                            <span className='label'>Feels Like</span>
                            <span className='value'>{Math.round(data.main.feels_like)}</span>
                        </div>
                        <div className='c-item'>
                            <span className='label'>Wind</span>
                            <span className='value'>{data.wind.speed} m/s</span>
                        </div>
                        <div className='c-item'>
                            <span className='label'>Humidity</span>
                            <span className='value'>{data.main.humidity}%</span>
                        </div>
                        <div className='c-item'>
                            <span className='label'>Pressure</span>
                            <span className='value'>{data.main.pressure}hPa</span>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
}
export default Card
